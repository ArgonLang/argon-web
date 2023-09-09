---
title: Async functions
sidebar_position: 1
---

One of the simplest ways to execute code in parallel is to promote a function to an asynchronous function. This operation can be performed during the function's definition using the `async` keyword.

An asynchronous function, when invoked, will immediately return a `Future` object.

```javascript
import "http"

async func async_get(url) {
    return http.get(url)
}

res := async_get("https://www.arlang.io/") # Output: Future object
```

## Future
An object `Future` is very similar to the concept of a Promise in many programming languages. It represents the result of an asynchronous action that may not be completed at the time of its creation. This mechanism provides an efficient way to handle operations that take time, such as network calls or I/O operations. 

By itself, a `Future` object isn't very useful, especially as it doesn't represent the actual result of the invoked function. To obtain the result, it's necessary to use the `await` keyword:

```javascript
res = await res
```

The behavior of this statement directly depends on the completion status of the invoked asynchronous function and can behave in two ways:

1. If the asynchronous function is not yet finished, the `fiber` that called `await` is **suspended until the asynchronous function is completed**. Afterward, it will return a Result object.

2. If the asynchronous function has already completed, `await` **immediately returns** a Result object.

```javascript
import "io" 

res = await res

if !res {
    panic res.err()
}

res.ok().read(-1) |> io.print
```

Once you obtain the `Result` object, you can check if an error occurred by using `res.err()`. 
In the case of success, you can retrieve the actual return value of the asynchronous function using `res.ok()`.