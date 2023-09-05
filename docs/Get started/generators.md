---
title: Generators
sidebar_position: 5
---

Generators are a powerful and memory-efficient way to create iterator like behaviour. They allow you to generate values on-the-fly, as opposed to creating a complete list of values upfront, which can be memory-intensive. Generators are defined using functions and the yield keyword, enabling you to pause and resume their execution at will.

## Creating Generators
Generators can be created using regular functions that contain one or more `yield` statements, as follow:

```javascript
func counter(start=1) {
    loop {
        yield start
        start++
    }
}
```

## Using generators
In Argon unlike many other languages it is possible to use a generator without having to call intermediate functions (e.g.: next()). 

In fact, the first call to a generator initializes it by returning an instance of a generator, subsequent calls to this instance will return the generated values.

```javascript
count := counter(start=10)

count() # Output: 10
count() # Output: 11
count() # Output: 12
```

Another way to access the values of a generator is to use it inside a **for-of loop**, like in the example below:

```javascript
count := counter(start=10)

for var value of count {
    value |> io.print
}
```

> NB: Generators produce values one at a time, which is especially useful when working with large datasets.

## The return values of a generator
Unlike a normal function, generators don't return `nil` by default, but the `@stop` atom. Obviously this behavior can be changed by making the return statement explicit.

```javascript
func counter() {
    var count = 0

    loop count < 3 {
        yield count
        count++
    }
}

count := counter()

count() # Output: 0
count() # Output: 1
count() # Output: 2
count() # Output: @stop

count() # PANIC: Error(@ExhaustedGeneratorError,"counter exhausted")
```

With explicit return statement:
```javascript
func counter() {
    var count = 0

    loop count < 3 {
        yield count
        count++
    }

    return 1000
}

count := counter()

count() # Output: 0
count() # Output: 1
count() # Output: 2
count() # Output: 1000

count() # PANIC: Error(@ExhaustedGeneratorError,"counter exhausted")
```

As can be seen from the example, in both cases, calling an exhausted generator causes the program to crash!

> NB: The value of the return statement (explicit or not) is **never returned** when using the generator inside a **for-of loop**.