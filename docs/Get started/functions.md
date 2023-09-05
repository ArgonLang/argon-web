---
title: Functions
sidebar_position: 3
---

A function is a self-contained block of code that is defined once and used many times and that performs a specific task.
You can give the function a name that identifies what it does and you can use this name to "call" the function to perform its task when needed

## Define a function
To define a function it is possible to use the keyword `func` followed by the name of the function and one or more parameters:

```javascript
func my_func() {
    ...
}

func hello(name) {
    io.print("Hello", name)
}
```

In Argon, if a function does not accept any parameters, it is possible to omit the parentheses that normally follow the function name:

```javascript
func my_func {
    ...
}
```

If you wish it is also possible to create `inline` functions using the arrow operator, in this case the function is not associated with any name and should be used immediately or saved in a variable so that it can be used later:

```javascript
var hello = (name) => {
    io.print("Hello", name)
}
```
> In an `inline` function it is not possible to omit the parentheses if the function takes no arguments.

At this point you may be wondering how to call a function, in Argon there are two different syntaxes for invoking a function: 
- Call operator `()`
- Pipeline operator `|>`

The common way is to use the call operator by following the function name with an open and a closed parenthesis. Inside the parentheses, one or more arguments can be passed in the same order as they were defined in the function definition:

```javascript
my_func()

hello("John William Strutt") # Output: Hello John William Strutt
```

The `pipeline` operator is extremely convenient and elegant for calling several functions in cascade and can be used on functions that take at least one argument. This operator allows you to pass the **first** parameter of a function outside the parentheses. If the function accepts multiple arguments, the arguments following the first **must be passed as usual**.

```javascript
"John William Strutt" |> hello # Output: Hello John William Strutt
```
> N.B. If the function accepts only one argument it is possible to omit the call operator (the round brackets following the function name)

## Function parameters
Argon functions are extremely flexible in terms of accepted parameters. It is possible to define functions with zero or more parameters, but also functions that take a variable number of arguments and associative parameters that take arguments of the form `key=value`.

### Function without parameters
Functions that don't take input parameters are the simplest, here's an example of a function that doesn't take input parameters. (Remember: In this case the function name may not be followed by the parentheses):

```javascript
func hello_world {
    return "Hello world!"
}

hello_world |> io.print
```

### Function with multiple parameters
Functions can have several input parameters, these parameters are written inside the function parentheses separated by a comma:

```javascript
func hello(name, already_greeted) {
    if already_Greeted {
        io.print("Hello", name)
    } else {
        "Hello again," |> io.print(name)
    }
}

hello("Bob", false)
```

### Function with variadic parameters
It is possible to construct functions that accept an arbitrary number of parameters (an example of this function is `io.print`) to do this it is sufficient to prepend the symbol `...` to the name of the **last** parameter:

```javascript
func variadic(...names) {
    var name
    for name in names {
        io.print("Hello", name)
    }
}

variadic("Alice", "Bob", "Charlie", "Dave", "Eve")

# OR

var names = ["Alice", "Bob", "Charlie", "Dave", "Eve"]

variadic(names...)
```

### Function with associative parameters
It is possible to construct functions with associative parameters (an example is again the function `io.print`), to do this you can proceed in two ways:

1) It is possible to create an associative parameter by placing an `=` after the name of the parameter (with this method you can also define the default value associated with the parameter, as in the example below).

2) It is possible to prepend the symbol `&` to the name of the **last** parameter.

```javascript
func hello(name, start="", &kwargs) {
    var end = kwargs?.contains("end") ? kwargs["end"] : "!"

    "%sHello %s%s" % (start, name, end) |> io.print
}

hello("Alice") # Output: Hello Alice!

hello("Alice", start="!", end="$") # Output: !Hello Bob$
```

> NB: &kwargs is a dictionary that contains all the associative arguments passed as arguments to the called function, while postfix parameters with `=` will contain the value passed as an argument, if any, otherwise the default value.

### Mixing together
It is possible to combine the various types of parameter definition together, however it is necessary to respect a precise order: first go the normal parameters (if present), then the parameter that allows transforming the function into a variadic function and finally the associative parameter:
```
[parameters,] [...args,] [param=[default value],] [&kwargs]
```

## Return value
Argon functions always return `nil` by default, however it is possible to return any kind of value via the `return` keyword:

```javascript
func concat_ns(name, surname) {
    return "%s %s" % (name, surname)
}

concat_ns("Alice", "Rossi") |> io.print
```

## Nested function
All the functions encountered so far are examples of global functions since they are defined in the global scope.

Nested functions are hidden from the outside world, but can be called and used by the functions that nest them. Furthermore, a nested function can be returned by the function that closes it, allowing its use in another scope.

Finally, nested functions enjoy a special property, but we will see it in the chapter dedicated to **Closures**!

```javascript
func inc_or_dec(backward) {
    return backward ? (number) => {
        return number - 1
    } : (number) => {
        return number + 1
    }
}

var num = 0

inc_or_dec(false)(num) |> io.print
```
