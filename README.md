# Type Error in TypeScript Addition Function

This repository demonstrates a common type error in TypeScript that can be difficult to debug.  The `add` function is declared to accept two numbers, but an attempt is made to use it with a string, leading to a type error.  This highlights the importance of strict type checking in TypeScript.

## How to reproduce:

1. Clone this repository.
2. Compile the code using the TypeScript compiler (`tsc bug.ts`).
3. Observe the type error.

## Solution:

The solution is provided in `bugSolution.ts`, where type guards are used to ensure that both input parameters are actually numbers before applying the addition operation.  This shows a safe way to handle potential type mismatches.