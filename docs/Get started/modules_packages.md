---
title: Modules and packages
sidebar_position: 8
---

When you create a program by defining functions, variables, and other components within a file, you are effectively creating a module.

In Argon, files are treated as individual modules, each functioning as an independent unit. While it is technically possible to write an entire program within a single module, this approach is often impractical and unwieldy.

Fortunately, Argon provides the flexibility to divide your program into distinct modules and import all the necessary modules at runtime. This capability enables you to logically partition your program into more manageable blocks of code.

## Import

Now, let's explore how you can import a module:

```python
import "http"

http.get("https://www.arlang.io")

import "http" as h

h.get("https://www.arlang.io")
```

In this example, we illustrate two methods for importing the `http` module. In the first approach, we use the `import keyword`, instructing Argon to locate and load the `http` module while retaining its original package name.

Conversely, in the second method, apart from importing the module, we direct Argon to expose it within the current module under the alias `h`.

## From-import
However, if you wish to selectively import only specific functions from a package, you can achieve this using the `from-import` statement. This statement enables you to import particular functions, variables, or other elements from another module into the current one.

Here's an example to illustrate this concept:

```python
from "http" import get, post, put as pt
```

In this example, we import the `get` and `post` functions from the `http` module with their original names, but we rename the `put` function to `pt`. 

Now, within our module, we can reference these functions directly without needing to prefix them with the module name:

```python
from "http" import get, post, put as pt

get("https://www.arlang.io")
```

Certainly, if you want to import all the public content of a module into the current module, you can use the `from-import` statement. To achieve this, simply follow the example below:

```python
from "http" import *
```

## `require` function
Sometimes, it becomes necessary to perform checks when importing modules, especially for handling error conditions such as a module not being found. In such cases, we can rely on the `require` function to assist us.

```javascript
ssl := require("ssl")

if !ssl {
    panic "SSL not imported, with error: %s" % ssl.err()
}

ssl = ssl.ok()
```

The `require` function behaves in a similar way to the `import` statement. However, unlike the `import` statement, the `require` function returns a `Result<>` object. This specific type of object allows us to determine whether the import operation was successful or not.

In the case of success, `ssl.ok()` will contain the actual `ssl` module. If the import operation fails, `ssl.err()` will hold the error that prevented the requested module from being imported.

> Bonus point: The `require` function allows us to import a module even in a context where it might not normally be possible, such as within a function.

## Packages
Packages are directories that contain a collection of closely related modules for specific functionalities within a program. Each package may include numerous modules, each of which can contain definitions of functions, variables, or other components required for a particular part of the program. This division into packages helps keep the code well-organized and promotes reusability.

To allow Argon to import an entire directory as a module, it's necessary for the directory (package) to contain a file (module) with the same name as the directory.

For example:

    + http
    |-- http.ar
    |-- client.ar
    |-- hdrmng.ar

```python
import "http"
```

Nonetheless, it remains possible to import a specific module within a package by specifying the path:
 
```python
import "http/client"
```

This approach allows for the selective import of a particular module within the package, even when the package itself shares the same name as the module.

## Module search path
Module search paths are essential for Argon to locate and import modules across a project. Here are the standard paths where Argon searches for modules:

- Packages directory: Argon looks in the directory where the Argon executable is located. It also searches for modules in the "packages" subdirectory within this location. This ensures that the modules packaged with Argon are readily available for use.

- Working directory: The working directory, which is the directory from which the Argon program is executed, is another crucial location for module searches. Argon checks this directory for modules to support the ongoing code execution.

- Environment variable: The ARGON_PATH environment variable allows users to specify custom paths where Argon should look for modules. This feature enables developers to define their module search paths, making it convenient to organize and access modules in their projects.
