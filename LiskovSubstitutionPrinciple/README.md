# Liskov substitution principle

The main idea of the Liskov substitution principle is that any function/module that interacts with a class should also be able to interact with all subclasses of that class without breaking.

This essentially means that a class is interchangeable with its subclasses.

## 🧠 See the code and you'll learn:

- What the Liskov substitution principle is
- Why the Liskov substitution principle is important
- How to use the Liskov substitution principle
- How to spot violations of the Liskov substitution principle

## Advantages

- It ensures correct sub-hierarchy with relevant checks
- It becomes easy to extend new classes
- The maintainability of code becomes very easy
- There shall be no runtime surprises in the application


## Disadvantages

- Sometimes we need to update base class in order to support new extension
- You may need to refactor a lot of things
- Cost of refactor