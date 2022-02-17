# SOLID principles

> This repository contains the SOLID principles details and code examples written in various programming languages.

## Definition

SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.

The SOLID principles are:

### [S] Single responsibility principle

There should never be more than one reason for a class to change.
In other words, every class should have only one responsibility.

### [O] Open–Closed principle

Software entities should be open for extension, but closed for modification.

### [L] Liskov substitution principle

Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.
See also design by contract.

### [I] Interface segregation principle

Many client-specific interfaces are better than one general-purpose interface.

### [D] Dependency inversion principle

Depend upon abstractions, not concretions.

[👆 Source](https://en.wikipedia.org/wiki/SOLID)

## Code examples

| Principle | Information | Technologies |
| -- | -- | -- |
| Single responsibility | [📄](./SingleResponsiblityPrinciple/README.md) | JS |
| Open–Closed | [📄](./OpenClosedPrinciple/README.md) | JS |
| Liskov substitution | [📄](./LiskovSubstitutionPrinciple/README.md) | JS |
| Interface segregation | [📄](./InterfaceSegregationPrinciple/README.md) | TS |

# Technologies

| Technology | Short name | Documentation |  
| -- | -- | -- |
| JavaScript | JS | [📎](https://www.javascript.com) | 
| TypeScript | TS | [📎](https://www.typescriptlang.org/docs/) |
<!-- | C Sharp | C# | [📎](https://docs.microsoft.com/en-us/dotnet/csharp/) | -->

# Setup

## Clone repository

Create and go to the directory where you want to place the repository

```bash
  cd my-directory
```

Clone the project

```bash
  git clone https://github.com/pncsoares/solid-principles.git
```

Go to the project directory

```bash
  cd solid-principles
```

Open in Visual Studio Code

```bash
  code .
```

# License

MIT