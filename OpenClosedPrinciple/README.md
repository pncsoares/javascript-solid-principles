# Open-Closed principle

The main idea of the open-closed principle is that every class/function/module/section of your code should be open for extension and closed for modification.

This means that a class/function/module should be able to be extended in functionality without having to go into the class and change it.

Essentially you shouldn't need to change existing code to add new functionality and instead should only have to add new code.

💡 The open-closed principle is very related to the single responsible principle.

This is something that you must consider but you don't need to take this to extreme and close all your classes so they can't be modified.

## 🧠 See the code and you'll learn:

- What the open-closed principle is
- Why the open-closed principle is important
- How to use the open-closed principle
- How to spot violations of the open-closed principle

## Advantages

- **Extensibility**: "When a single change to a program results in a cascade of changes to dependent modules, that program exhibits the undesirable attributes that we have come to associate with 'bad' design. The program becomes fragile, rigid, unpredictable, and unreusable. The open-closed principle attacks this in a very straightforward way. It says that you should design modules that never change. When requirements change, you extend the behavior of such modules by adding new code, not by changing old code that already works."
— Robert Martin 

- **Maintainability**: the main benefit of this approach is that an interface introduces an additional level of abstraction which enables loose coupling. The implementations of an interface are independent of each other and don’t need to share any code. 

- **Flexibility**: the open-closed principle also applies to plugin and middleware architecture. In that case, your base software entity is your application core functionality.
In the case of plugins, you have a base or core module that can be plugged with new features and functionality through a common gateway interface. A good example of this is web browser extensions. 
Binary compatibility will also be in-tact in subsequent releases.

## Disadvantages

- The resource allocator code needs to be unit tested whenever a new resource type is added
- Adding a new resource type introduces considerable risk in the design as almost all aspects of resource allocation have to be modified
- Developer adding a new resource type has to understand the inner workings for the resource allocator