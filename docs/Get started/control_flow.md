---
title: Control flow
sidebar_position: 2
---

Argon provides a variety of control flow statements. These include C-style **for**, **for-in** and **loop** loops to perform task multiple times, **if** and **switch** statements to execute different branches of code based on certain conditions, and statements like **break** and **continue** to transfer the flow of execution to another point in the code.

## For-In Loops
You use the **for-in** loop to iterate over a sequence, such as items in an array or set.

This example uses a **for-in** loop to iterate over the items in an array:

```javascript
let NOBLE_GAS = ["Helium", "Neon", "Argon", "Krypton", "Xenon"]

var gas
for gas in NOBLE_GAS {
    io.print(gas)
}
```

## Loop
A **loop** performs a set of statement until a condition becomes false, or until an explicit **break** statement not being reached (loop without condition). These kind of loops are best used when number of iteration is not known before the first iteration begins.

### Conditional Loop
A **loop** starts by evalutating a single condition, if the condition is true, a set of statements is repeated until the condition becomes false.

```rust
loop condition {
    statements
}

var i = 0
loop i < 5 {
    io.print(i++)
}
```

### Infinite Loop
A **loop** loop without a condition is a infinite loop, you can exit from infinite loop with **break** keyword.

```javascript
var i = 0

loop {
    io.print(i++)

    if i >= 5 {
        break
    }
}
```

## Conditional Statements
It is often useful to execute different pieces of code based on certain conditions. You might want to run an extra piece of code when an error occurs, or to display a message when a value is reached. To do this, you need to use a condition. 

Argon provides two ways to add conditional branches to your code, the **if** statement and the **switch** statement. Typically, you use the **if** to evalutate simple condition with few possibile outcomes, instead **switch** statement is better suited to more complex condition with multiple possible permutations.

### If
In its simplets form, the **if** statement has a single condition. It executes the body statements only if the condition is true.

```javascript
var pm10 = 51

if pm10 > 50 {
    io.print("exceeded the PM10 daily limit")
}
```

Obviously, **if** statement can provide an alternative set of statements, known as an else clause, for situations when the **if** condition is false.

```javascript
var pm10 = 36

if pm10 > 50 { 
    io.print("exceeded the PM10 daily limit") 
} else {
    io.print("PM10 within the allowed limits") 
}
```

You also can chain multiple **if** statements together to consider additional clauses.

```javascript
var pm10 = 36

if pm10 > 50 { 
    io.print("exceeded the PM10 daily limit") 
} elif pm10 == 50 {
    io.print("PM10 Pm10 at the allowed limit.") 
} else {
    io.print("PM10 within the allowed limits") 
}
```

> Remember: the final **else** clause is always optional!

#### Ternary operator

The ternary operator is a shorthand way of writing an if-else statement in a single line of code. It takes the form of a condition followed by a question mark ?, then the expression to execute if the condition is true, followed by a colon :, and finally the expression to execute if the condition is false.
For example:

```javascript
var pm10 = 36

pm10 > 50 ? io.print("exceeded the PM10 daily limit") : 
            io.print("PM10 within the allowed limits") 
```

### Switch

A **switch** statement provides an alternative and shorter way to write a sequence of **if** - **elif** statements. It runs the first case whose value is equal to the condition expression.

```go
let os = get_os()

switch os {
   case "darwin":
       io.print("Mac OS")
   case "linux":
       io.print("Linux")
   default:
       io.print(os)
}

```
> Switch cases evaluate cases from top -> bottom, stopping when a case succeeds.

Switch without a condition is a clean way to write long **if**-**elif**-**else** chains.

```go
let os = get_os()

switch {
   case os == "darwin":
       io.print("Mac OS")
   case os == "linux":
       io.print("Linux")
   default:
       io.print(os)
}

```

In contrast with **switch** statements in other languages like C/C++, Java..., **switch** statements in Argon **do not fall through** the bottom of each case and into the next one by default. Instead, the entire switch statement finishes its execution as soon as the first matching switch case is completed. No explicit **break** are required.

```go
let os = "linux"

switch os {
   case "linux":
   case "Linux":
       io.print("Linux")
   default:
       io.print(os)
}
```

In the example above, the **switch** statement does not match both "linux" and "Linux" but simply do notthing. In this way Argon avoids accidental fallthrough from one case to another. To make **switch** to match both "linux" and "Linux", combine the two values into a compound case, separating the values with semicolon (;).

```go
let os = "linux"

switch os {
   case "linux"; "Linux":
       io.print("Linux")
   default:
       io.print(os)
}
```

Or it is possible to use explicit **fallthrough** keyword to fall through the case into the next one.

```go
let os = "linux"

switch os {
   case "linux":
       fallthrough
   case "Linux":
       io.print("Linux")
   default:
       io.print(os)
}
```
> Remember: **fallthrough** keyword must be appear only at the end of a **switch** case, no other statement can follow **fallthrough** keyword.

## Control transfer statements
Control transfer statements change the order in which your code is executed, by transferring control from one piece to another. Argon support the following control transfer statements:

* break
* continue
* fallthrough
* return

### Break
**break** statement ends execution of an entire control flow statement immediately. It can be used inside a **switch** or loop statement (**loop**, **for**, **for-in**) when you want to terminate the execution of the **switch** or loop statement erlier.

### Continue
**continue** statement tells a loop to stop what it is doing and start again at the beginning of the next iteration through the loop.

### Fallthrough
Enable a **switch** case to fall through the bottom of each case and into the next one. (See [Switch](#switch))

### Labeled Statements
You can nest loops and conditional statements inside other loops to create a complex control flow structures. However, loops and conditional statements can both use the **break** statement to end their execution prematurely.

Occasionally it may be useful to specify which loop or conditional statement you want to terminate with **break** statement, similarly if you have many nested loops, it may be useful to specify which loop the **continue** statement should affect.

To achieve these aims, you can mark a loop statement or conditional statement with a **statement label**. And then use the labeled version of the **break** and **continue** statements.

```rust
outer: loop {
    inner: loop i++ < 100 {
        if i == 50 {
            break outer
        }
    }
}
```
