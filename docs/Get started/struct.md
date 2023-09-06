---
title: Struct
sidebar_position: 6
---

A 'struct' is a composite data type used to group multiple related variables under a single name,
also, allows you to define functions that act on them. This feature allows for encapsulation, where data and operations on it are tightly bound together within a single unit.

## Define a struct
To define a struct, you can use the keyword `struct` followed by the name of the structure:

```javascript
struct Rectangle {
    var height
    var width
}
```

In this example we can see the `Rectangle` struct containing two fields `width` and `height`. 

Now let's try to add some functionality to the structure we just defined:

```javascript
struct Rectangle {
    var height = 7
    var width

    func area(self) {
        return self.width * self.height
    }

    func perim(self) {
        return 2*self.width + 2*self.height
    }
}
```

We have added two special functions to the `Rectangle` structure, these functions called **methods** can be used to access and manipulate the data within the structure instance.

> NB: For a function to be considered a method, it must have `self` as the name of its first parameter, otherwise it will be treated as a normal function.

## Structs initialization
Initializing a struct is the first step to be able to use it, in Argon there are **two** different ways to initialize a new struct:

### The `@()` operator
The first is through the initialization operator `@()` which allows to instantiate a new structure by initializing the internal fields with the passed values:

```javascript
rect := Rectangle@(2, 5) # Initialize Rectangle with height = 2, width = 5
```

As can be seen from the example, the `Rectangle` structure was initialized passing the values 2,5. The initialization order of the fields **follows the order in which they were declared** (height = 2, width = 5), during this phase it does **not matter** whether the fields are **public or private**.

> NB: If fewer arguments are provided than the total number of fields, including both public and private, that constitute a structure, the uninitialized fields will be assigned their default values.

But if we wanted to initialize **only some fields** with certain values, leaving the **others at the default value**, how could we do it?

In this case you can use the `@()` operator passing the field name and its value as arguments, as in the example shown below:

```javascript
rect := Rectangle@(width=5) # Initialize Rectangle with height = 7, width = 5
```

### Init function
Structures can be initialized by **invoking them as if they were functions**. To enable this behavior, the structure **should define a special public function** with the **same name** as the structure itself. 

This approach permits you to perform specific actions on the provided arguments before utilizing them to initialize the structure.

It's important to note that while this function is associated with the structure, it is not mandated to exhibit any particular behavior. It is considered good practice for this function to return an initialized structure (using the `@()` operator), although it remains permissible to return any value.

```javascript
struct Rectangle {
    var height = 7
    var width

    pub func Rectangle(height, width) {
        return Rectangle@(height + width, width)
    }

    func area(self) {
        return self.width * self.height
    }

    func perim(self) {
        return 2*self.width + 2*self.height
    }
}

rect := Rectangle(10, 5) 
```

## The operators `.` and `::`
Once initialized, public functions, methods and fields can be accessed through the use of the `.` operator:
```javascript
rect := Rectangle(10, 5) 

rect.area()
rect.perim()
```

Functions within a structure can be called even if the structure has not been initialized, but to do so it is necessary to use the `::` operator instead of `.`.

```javascript
struct Parser {
    pub func split_ws(stream) {
        ...
    }
}

Parser::split_ws(my_stream)
```

Using the `::` operator, you can invoke methods even when the structure itself has not been initialized. However, in such cases, it is essential that the first parameter of the method is an already initialized structure.

```javascript
rect := Rectangle(10, 5)

Rectangle::area(rect)
```


