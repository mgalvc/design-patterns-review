# Builder

- Used to construct complex objects step by step;
- You can extract construction code to separate objects called builders and the use a director class that defines execution order and calls the necessary builders;
- Good way to avoid constructors overload with parameters;
- Allows the creation of different representations of the same product;

# Example

- If you want to build a house you can build:
  - A house with garage
  - A house with garage and pool
  - A house with garden
  - A house with garden, garage and pool
  - Any other representation allowed by the combination of your builders
- The director will call only the necessary builders according to the house that you want to build.