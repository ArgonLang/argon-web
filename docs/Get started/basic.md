---
title: The Basics
sidebar_position: 1
---

Like most other language, Argon uses variables to store and refer to values by an identifying name. In Argon are also present variables whose values can't be changed, these are known as constants. Constants are used to make code safer and clearer when you work with values that don't need to change.

## Declaring constants and variables
Constants and variables must be declared before use, you can declare constant with **let** keyword and variable with **var** keyword. Here's an simple example of how constant and variables can be used:

```javascript
let CONSTANT = 10
var my_var = 0
```
> If a stored value in your code won’t change, always declare it as a constant with the **let** keyword.

By default the declared constants and variables are not visible outside the module/struct/trait in which they were defined. Variables and constants can be made visible by using the **pub** keyword before their declaration.

```javascript
pub let CONSTANT = 10
pub var my_var = 0
```

Constant and variable names can contain almost any character, but can’t contain whitespace nor unicode characters, also, they can't begin with a number, although numbers may be included elsewhere within the name.

Clearly once you’ve declared a constant or variable, you can’t declare it again with the same name, or change a constant into a variable or a variable into a constant.

# Semicolon
Unlike many other languages, Argon doesn’t require you to write a semicolon (;) after each statement, although you can do so if you wish. However, semicolons are required if you want to write multiple separate statements on a single line:

```javascript
let HELLO = "hello"; io.print(HELLO)
```

# Comments
Use comments to include a note or reminder to yourself. Comments are ignored by the Argon compiler when your code is processed.

In Argon there are two way to create a comment:
* in-line comment with:
```python
# This is an in-line comment.
```
> This in-line comment style, enable you to insert at the start of the script file, the famous Shabang (#!) characters to tell to system which interpreter use to start to execute this file.

* multi-line comment with C-like syntax:
```javascript
/*
 * This is a multi-line
 * comment.
*/
```

# Datatypes
Argon provides a variety of fundamental data types likes **Int** for int values, **Decimal** for floating-point values, **Atom** for constant and immutable values, **Bytes** for binary data, **Tuple** for ordered and immutable collections of values of different types, and a personalized version of **String** for handling textual data.
In addition to these types, Argon also provides powerful versions of the primary collection types, including **Dict**, **List** and **Set**, which allow for easy manipulation of data as per the user's needs.

## Atom
Atoms are immutable symbolic labels used to represent constants. They are generally used as IDs and a classic use of them is in the definition of an error class, but they can also be easily used as dictionary keys and anywhere else where an ID is needed.

```shell
@Atom # This is an atom
@my_atom_123 # This is also an atom

# Let's define a personalized error 

let MagicError = Error(@Magic)

# Now, we can use it as:

MagicError("My error message!")

```

## Boolean
Argon has a basic Boolean type called **Bool** and provides two constant values, true and false:

```javascript
let ARGON_IS_A_NOBLE_GAS = true
let ARGON_HAS_NO_KNOWN_COMPOUNDS = false
```

bool values are particularly useful when you work with conditional statements such as the if statement:

```go

if !ARGON_HAS_NO_KNOWN_COMPOUNDS {
    io.print("HArF")
}

```

Furthermore Argon allows non-bool values to be replaced with boolean values:

```go

var my_list = []

if !my_list {
    io.print("my_list is empty.")
}

```

## Decimal
Decimal (floating-point) numbers are numbers with a fractional component, such as 39.948, and -189.3.
Decimal types can represent a much wider range of values than integer types, and can store numbers that are much larger or smaller than can be stored in an integer. Argon wraps C long double type.

## Dict
A dictionary is a complex data type that allows you to store a collection of key-value pairs, where each key is unique and is used to access the corresponding value.
To create a dictionary, you can put zero or more comma-separated `key:value` pairs in a pair of braces, as in the following example:

```javascript

let RESEARCHER = {
  "name": "William",
  "surname": "Ramsay"
};

```

We can access the elements of the dict using their key. For instance, to access the `name` field we can use:

```javascript
RESEARCHER["name"] #  Output: William
```

We can also modify the dict by adding or removing elements. For example:
```javascript
# Add `key:value` pair

RESEARCHER["age"] = 64

# Remove `key:value` pair

RESEARCHER.pop("surname")
```

## Integer
Integers are whole numbers with no fractional component, such as 1 and -24. Integers are either signed (positive, zero, or negative) or unsigned (positive or zero). Argon provide supports for signed numbers through the **Int** type and unsigned numbers through the **UInt** type. However, the bit size depends on the underlying system. 

### Integer literals
Integer literals can be written as:

* Decimal number, with no prefix
* Binary number, with a `0b` prefix
* Octal number, with a `0o` prefix
* Hexadecimal number, with a `0x` prefix

All of these integer literals have a decimal value of `18`:

```javascript
let DECIMAL = 18
let BINARY = 0b10010
let OCTAL = 0o22
let HEXADECIMAL = 0x12
```
### Unsigned integer literals
It is also possible to create an unsigned literal by placing a `u` after the decimal number:

```javascript
let UNSIGNED = 18u
```

## List
List type is used to represent a collection of elements, which can be of different data types such as integers, strings, and other objects. Lists are mutable, which means that we can modify them by adding, removing or changing elements in the list after it has been created.
To create a list we can use square brackets [] and separate the elements with commas. 
For example:

```javascript
let NUMBERS = [2, 8, 8]
```

In this example, we have created a list called "NUMBERS" that contains three integers. We can access the elements of the list using their index, which starts from 0. 
For instance, to access the first element of the list, we can use:

```javascript
NUMBERS[0] # Output: 2
```

We can also modify the list by adding or removing elements. 
For example:

```javascript
NUMBERS.append(0) # Output: [2, 8, 8, 0]
```

## Set
Set type is used to represent a collection of unique elements, meaning that each element can only appear once in the set. Sets are mutable, which means that we can add or remove elements from the set after it has been created.

To create a set, we can enclose the elements in curly braces {}. 
For example:

```javascript
let LETTERS = {"a", "b", "c", "d"}
```

Once we have created a set, we can access the elements of the set using a for loop or the `in` operator. 
For example:

```javascript
var letter
for letter in LETTERS {
    io.print(letter)
}

io.print("a" in LETTERS)
```

We can also modify the set by adding or removing elements. 
For example:

```python
LETTERS.add("e") # Add "e" to the set

LETTERS.discard("b") # Remove "b" from the set
```

## Tuple
Tuples group multiple values into a single compound value. The values within a tuple can be of any type and don’t have to be of the same type as each other.

An example of tuple can be the HTTP status code 200("OK") can be expressed in Argon as:

```javascript
let HTTP_OK = (200, "ok")
```

Once you have a tuple, you can decompose its value if you prefer, using the following syntax:

```javascript
var code, msg = HTTP_OK
```

Or you can access a single element using an index with the [] operator:

```javascript
var msg = HTTP_OK[1]
```

## Nil
You can set a variable to a valueless state by assigning it the special value **nil**:

```go
var valueless = nil
```

If you define a variable without providing a default value, the variable is automatically set to **nil** for you:

```go
var valueless /* valueless = nil */
```

> REMEMBER: In Argon **nil** is the absence of a value, not a pointer to a nonexistent object.<br/>Just to know, internally, nil is an object! 😉
