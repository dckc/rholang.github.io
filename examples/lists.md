---
title: Operator for lists
filepath: list.rho
filetype: vue
order: 4
---

```js

contract @("ListOps", "prepend")(@head, @tail, return) = {
  return!([head] ++ tail)
} |
contract @("ListOps", "append")(@list, @element, return) = {
  return!(list ++ [element])
} |

//A fold over the list which breaks early if a condition is met.
//Both the condition and combinator are are combined into a single
//function which returns a [boolean, value] pair.
//Use cases: see get and indexOf
contract @("ListOps", "partialFold")(@list, @start, combinatorAndCondition, return) = {
  new loop in {
    contract loop(@accumulatedValue, @lst) = {
      match lst {
        [head ...tail] => {
          new result in {
            combinatorAndCondition!(head, accumulatedValue, *result) |
            for (@done, @newValue <- result) {
              if (done){ return!(done, newValue) }
              else     { loop!(newValue, tail)   }
            }
          }
        }
        _ => { return!(false, accumulatedValue) }
      }
    } | loop!(start, list)
  }
} |
contract @("ListOps", "fold")(@list, @start, combinator, return) = {
  new combinatorAndCondition in {
    contract combinatorAndCondition(@head, @accumulatedValue, return) = {
      new result in {
        combinator!(head, accumulatedValue, *result) |
        for(@r <- result){ return!(false, r) }
      }
    } |
    new result in {
      @("ListOps", "partialFold")!(list, start, *combinatorAndCondition, *result) |
      for(_, @value <- result) {
        return!(value)
      }
    }
  }
} |
contract @("ListOps", "reverse")(@list, return) = {
  @("ListOps", "fold")!(list, [], ("ListOps", "prepend"), *return)
} |
contract @("ListOps", "map")(@list, function, return) = {
  new combinator in {
    contract combinator(@head, @accumulatedValue, return) = {
      new mappedHead in {
        function!(head, *mappedHead) |
        for(@x <- mappedHead) {
          @("ListOps", "append")!(accumulatedValue, x, *return)
        }
      }
    } |
    @("ListOps", "fold")!(list, [], *combinator, *return)
  }
} |
contract @("ListOps", "parMap")(@list, function, return) = {
  new namesListCh, startProcess, getOutput in {
    contract startProcess(@x, ret) = { new outCh in { function!(x, *outCh) | ret!(*outCh) } } |
    contract getOutput(name, ret)  = { for(@result <- name){ ret!(result) } } |

    //map each element to a name listening for the result of the function
    @("ListOps", "map")!(list, *startProcess, *namesListCh) |
    for(@namesList <- namesListCh) {
      //map each name to its result
      @("ListOps", "map")!(namesList, *getOutput, *return)
    }
  }
} |
contract @("ListOps", "unorderedParMap")(@list, function, return) = {
  new mapLoop, collect, startCount, completeCount, accCh in {
    //Spawn processes, each computing one element
    //also processes listening for the result
    contract mapLoop(@l, @count)= {
      match l {
        [hd ...tl] => {
          new ch in { function!(hd, *ch) | for(@r <- ch){collect!(r)} | mapLoop!(tl, count + 1) }
        }
        _  => { startCount!(count) }
      }
    } |
    //add a result to our accumulating list
    contract collect(@result) = {
      for(@sc <- startCount; @cc <- completeCount; @acc <- accCh) {
        startCount!(sc) |
        if (sc == cc + 1) { //all started processes completed!
          @("ListOps", "prepend")!(result, acc, *return)
        } else {            //still waiting on some
          completeCount!(cc + 1) |
          @("ListOps", "prepend")!(result, acc, *accCh)
        }
      }
    } |
    match list {
      [] => { return!([]) }
      _  => { mapLoop!(list, 0) | completeCount!(0) | accCh!([]) }

    }
  }
} |
contract @("ListOps", "foreach")(@list, proc, isDone) = {
  new combinator, nilReturn in {
    contract combinator(@head, @accumulatedValue, return) = {
      //Need return flag from `proc` in order to guarantee execution order
      new isDone in { proc!(head, *isDone) | for(_ <- isDone){ return!(Nil) } }
    } |
    @("ListOps", "fold")!(list, Nil, *combinator, *nilReturn) | for(_ <- nilReturn){ isDone!(true) }
  }
} |
contract @("ListOps", "indexOf")(@list, @value, return) = {
  new combinatorAndCondition in {
    contract combinatorAndCondition(@head, @accumulatedValue, return) = {
      return!(head == value, accumulatedValue + 1)
    } |
    new result in {
      @("ListOps", "partialFold")!(list, -1, *combinatorAndCondition, *result) |
      for(@valueFound, @i <- result) {
        if (valueFound) { return!(i)  }
        else            { return!(-1) }
      }
    }
  }
} |
contract @("ListOps", "zip")(@list1, @list2, return) = {
  new loop in {
    contract loop(@pair, @acc, return) = {
      match pair {
        ([h1 ...t1], [h2 ...t2]) => {
          loop!((t1, t2), acc ++ [(h1, h2)], *return)
        }
        _ => {
          return!(acc)
        }
      }
    } |
    loop!((list1, list2), [], *return)
  }
} |
contract @("ListOps", "range")(@start, @end, return) = {
  new loop in {
    contract loop(@i, @list) = {
      if(i < start) {
        return!(list)
      } else {
        loop!(i - 1, [i] ++ list)
      }
    } | loop!(end - 1, [])
  }
}
```
