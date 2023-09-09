---
title: Channels
sidebar_position: 3
---

How can we enable two or more spawned functions to **communicate with each other?** When **different parts** of a program run in parallel, it's almost certainly necessary to establish a means for these parts to **communicate, exchange messages, or coordinate** their actions effectively.

One of the primary mechanisms provided by Argon for achieving this is the use of `Chan`. Channels are synchronization primitives that facilitate communication between multiple **fibers**. 

**Depending on how they are constructed**, they can act as straightforward **synchronization mechanisms** or as **full-fledged message queues**.

Channels **automatically suspend** the execution of the **fiber** if writing to or reading from the channel is not currently possible. This relieves the developer from the burden of managing low-level synchronization and allows them to focus solely on their code. In this way, channels simplify the task of enabling communication and coordination among concurrently executing parts of a program.

## Channel creation
To create a `Chan` object in Argon, you simply need to invoke its constructor:

```javascript
chan := Chan() 

# Messages queue
chan := Chan(backlog=100)
```

In the example above, a channel with the capability to send and receive a single message has been created (useful for synchronization operations). Then, in the second example, the optional associative parameter of the constructor is used to create a channel capable of functioning as a message queue. 

This flexibility allows you to tailor the behavior of the channel to your specific needs, whether it's for simple synchronization or message passing.

## Chan operations
There are two primary operations that can be performed on a channel: reading and writing. 

To facilitate these operations, Argon provides two special operators: 
- write arrow `->`
- read arrow `<-`

Let's see how to use them in a real context:

```javascript
import "io"

# Create a channel 'queue' with a backlog of 10 messages
queue := Chan(backlog=10)

# Create a rendezvous channel
rendezvous := Chan()

# Spawn a new fiber
spawn () => {
    # Receive data from the 'queue' channel
    data := <- queue

    loop data != @stop {
        data |> io.print

        # Receive the next 'data' from the 'queue' channel
        data = <- queue
    }

    # Send '@exit' to the 'rendezvous' channel when done
    @exit -> rendezvous
}()

fd := io.open("file.txt")

lines := fd.readline(-1)

# Loop through each line
loop lines {
    # Send 'lines' to the 'queue' channel
    lines -> queue

    # Read the next line
    lines = fd.readline(-1)
}

# Send '@stop' to the 'queue' channel to signal the end of data
@stop -> queue

"Waiting printer to finish..." |> io.print

# Wait for the fiber to finish by reading from 'rendezvous'
<- rendezvous

"Exit!" |> io.print
```

This example demonstrates a scenario where data is read from a file, sent to a queue for processing by a separate fiber, and then the program waits for the fiber to finish processing before exiting. 

The `@stop` and `@exit` atoms are used for synchronization and control flow between threads.