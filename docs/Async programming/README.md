---
title: Asynchronous programming
sidebar_position: 3
---

Argon provides robust support for parallel programming, making it well-suited for concurrent and multi-threaded applications. 

It offers several features that enable developers to harness the power of parallelism effectively, including `chan`, asynchronous functions, and the ability to launch lightweight threads using the `spawn` keyword.

Before delving into individual functionalities, it's essential to understand how the execution of a program is internally managed.

## Argon execution model
During the bootstrap process, Argon requests the operating system to create N threads. The number of threads created at startup depends on the available CPU cores on the machine (although this setting can be adjusted). 
These threads are initially paused and organized within a thread pool.

When a program is loaded into memory, an object called a **Fiber** is created. This fiber is then associated with the first available thread, allowing it to be executed. In cases where execution cannot proceed immediately, such as during I/O operations, the currently executing fiber is suspended, and another available fiber is loaded in its place.

This approach allows Argon to efficiently manage concurrent and parallel execution by seamlessly switching between fibers as needed, optimizing resource utilization and responsiveness in various scenarios.
