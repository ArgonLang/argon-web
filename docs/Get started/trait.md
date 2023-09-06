---
title: Trait
sidebar_position: 7
---

Traits are construct that defines a set of methods that types can implement. They serve as a way to declare a common interface or behavior that multiple types can share, promoting code reusability and modularity.

## Defining a Trait
To define a trait, use the keyword `trait` followed by the trait's name:

```rust
trait Pet {
    pub func talk(self)
}
```

In this case, a new trait has been defined with a single method called `talk`. As shown in the example, it is possible to leave the method without an implementation, effectively creating a pure interface.

> NB: The same rules that apply to functions within structures also extend to traits. Specifically, only functions with self as the first parameter are elevated to the status of methods within traits.

## Combining Traits
You can combine two or more traits to create a new trait. This newly created trait can either include additional methods or remain empty:

```rust
trait Pet {
    pub func talk(self)
}

trait Walk {
    pub func walk(self)
}

trait WalkingPet : Pet, Walk {

}
```

## Using a Trait
To utilize a trait, you must define a structure that implements the desired trait. This is achieved by using the `impl` keyword following the structure's name in the definition.

```rust
struct Dog impl WalkingPet {

}
```

Just like with traits, it is also possible to directly combine multiple traits in the definition of a structure. Here's an example equivalent to the previous one:

```rust
struct Dog impl Pet, Walk {

}
```

## Method resolution order
What happens when two traits implement a method with the same name? How does Argon determine which method to call, and can you specify which one to use?

In Argon, the order in which you specify the traits plays a crucial role in selecting the method to be called. For instance:

```rust
trait Pet {
    pub func talk(self)
}

trait Talker {
    pub func talk(self)
}

struct Dog impl Pet, Talker {

}

dog := Dog()
dog.talk()
```

In this example, when the `talk` method is invoked, Argon will follow the order in which the traits were specified. 

In this case, the `Pet` trait is the first one in the list containing the `talk` method, so Argon will call the `talk` method from the `Pet` trait.

However, if you need to explicitly call the `Talker` method's `talk` method, you should directly invoke `Talker`'s `talk` method, passing the `Dog` instance as the first argument.

```javascript
dog := Dog()

Talker::talk(dog)
```

## The `implements` function
To verify whether a trait or structure implements a particular trait, you can utilize the built-in function `implements`. This function returns `true` if the type implements the trait. 

Here's an example:

```javascript
dog := Dog()

implements(dog, Pet) # Output: true
```