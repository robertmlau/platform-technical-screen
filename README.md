# Robotic Arm Package Sorter

## Objective

Imagine you work in Thoughtful’s robotic automation factory. Your objective is to write a function for one of its robotic arms that will dispatch packages to the correct stack according to their volume and mass.

---

## Rules

Sort the packages using the following criteria:

- A package is **bulky** if (Width × Height × Length) is greater than or equal to 1,000,000 cm³ **or** when one of its dimensions is greater than or equal to 150 cm.
- A package is **heavy** when its mass is greater or equal to 20 kg.

You must dispatch the packages to the following stacks:

- **STANDARD**: Standard packages (those that are not bulky or heavy) can be handled normally.
- **SPECIAL**: Packages that are either heavy or bulky can’t be handled automatically.
- **REJECTED**: Packages that are both heavy and bulky are rejected.

---

## Implementation

Implement the function `sort(width, height, length, mass)` (units are centimeters for the dimensions and kilogram for the mass). This function must return a string: the name of the stack where the package should go.
