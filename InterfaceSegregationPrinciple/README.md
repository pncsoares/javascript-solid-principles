# Interface segregation principle

The main idea of the single responsibility principle is that every class/function/module/section of your code should have only one responsibility.

This means that the code should only have one single reason to change. If there are two different reasons for the code to change, or if it does two distinctly different things then it is in violation of this principle and is potentially poorly designed code.


## Advantages

- **Faster Compilation**: if you have violated ISP i.e. stuffed methods together in the interface, and when method signature changes, you need to recompile all the derived classes. This is an important aspect for some compiled languages like C++ which is well known for slow compilation. While another way around is self explainable.

- **Reusability**: Martin also mentions that "fat interfaces" — interfaces with additional useless methods — lead to inadvertent coupling between classes. Thus, an experienced dev knows coupling is the bane of reusability.  

- **Maintainability**: the much more universal ISP benefit is that by avoiding unneeded dependencies, the system becomes:
  - easier to understand
  - lighter to test
  - quicker to change

## Disadvantages

- You may need to refactor a lot of things
- Cost of refactor