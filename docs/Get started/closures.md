---
title: Closures
sidebar_position: 4
---

A closure is a powerful programming concept that allows a function to maintain access to its enclosing lexical scope, even after the outer function has finished executing. In simpler terms, a closure "closes over" variables from its surrounding environment, making those variables accessible and modifiable from within the closure's body.

## Define a closure
In Argon, you can create a closure simply by defining a function within another function. This allows the inner function(nested function), to have visibility and access to all the variables defined in the outer function, see example below:

```javascript
func prepended_print(prepend) {
    return (string) => {
        io.print("%s%s" % (prepend, string))
    }
}

pprint := prepended_print("$$ ")

pprint("Hi!") # Output: $$ Hi!
```

We have just seen how a closure can capture the variables of the **scope in which it is defined**, now let's see another example of how a closure can capture and modify its internal state:

```javascript
func incrementer(amount=1) {
    count := 0

    func _incrementer {
        count += amount
        return count
    }

    return _incrementer
}

inc := incrementer(amount=2)

inc() # Output: 2
inc() # Output: 4
inc() # Output: 6
```
