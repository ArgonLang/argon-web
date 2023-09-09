---
title: The spawn keyword
sidebar_position: 2
---

In the previous chapter, we explored asynchronous functions; functions that terminate when they generate their result.

However, what if we want to concurrently progress with one or more operations without waiting for their results? 

A common example is a web server that listens for incoming connections on a port and handles each connection in a separate process without interrupting the listening for new connections.

In such scenarios, we turn to the `spawn` keyword. The `spawn` keyword is used to initiate a new **fiber** (lightweight thread) that will execute a specific function concurrently with the calling process.

A process launched with `spawn` can run its code independently, without affecting the main process or other concurrently spawned processes.

```javascript
import "io"
import "socket"

sock := socket.Socket(socket.AF_INET, socket.SOCK_STREAM, 0)

sock.bind(("127.0.0.1", 2427))

sock.listen(5)

loop {
    conn := sock.accept()

    spawn () => {
        conn.read(-1) |> io.print
        
        conn.write("recv!")
    }()
}
```