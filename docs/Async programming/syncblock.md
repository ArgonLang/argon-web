---
title: Synchronization blocks
sidebar_position: 4
---

Sometimes, it's necessary to **protect** certain sections of your code **from concurrent access**. To address this need, Argon provides a construct called `sync`. Internally, this construct utilizes the concept of a **monitor** to automatically manage concurrent code sections.

Before diving into the usage of the `sync` construct, let's briefly explain what a **monitor** is:

A monitor is a synchronization construct that provides a way to protect shared resources or data in a multithreaded or concurrent program. 

It ensures that only one thread can access the protected code or data at a time, preventing race conditions and maintaining data integrity by offering a high-level and structured approach to synchronization, simplifying the task of coordinating access to critical sections of code.

## How use `sync` block
A synchronization block is composed of the `sync` keyword followed by a variable reference:

```javascript
var myvar = 12

sync myvar {

}
```

In this example, we see how `myvar` is used as a synchronization point for the code block inside sync.

> NB: If the value of the `myvar` variable were to change, **subsequent sync calls** made by other fibers **might not synchronize correctly**.

Now let's look at a more complex example:

```javascript
import "io"

struct Counter {
    pub var count

    pub func inc(self) {
        sync self {
            self.count ++
        }
    }
}

counter := Counter@(0)

async func incrementer(max) {
    for var i = 0; i < max; i++ {
        counter.inc()
    }
}

i1 := increment(1000)
i2 := increment(200)

await i1
await i2

counter.count |> io.print
```

This example demonstrates how to use synchronization to avoid concurrency issues when multiple threads or processes attempt to access and modify the same shared resource, in this case, the count variable within the **Counter** instance.