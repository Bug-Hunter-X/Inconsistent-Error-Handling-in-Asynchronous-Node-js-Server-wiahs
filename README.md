# Inconsistent Error Handling in Asynchronous Node.js Server

This repository demonstrates a common error in Node.js applications: inconsistent error handling in asynchronous operations, specifically within a `setTimeout` callback. The server sometimes throws an error and sometimes works fine, leading to unpredictable behavior.

## Bug Description
The `bug.js` file contains a simple Express.js server.  It simulates an asynchronous operation that throws an error 50% of the time.  The lack of proper error handling in the `setTimeout` callback leads to inconsistent behavior.  Sometimes the server responds correctly, and other times it crashes unexpectedly without any clear indication of the cause.

## Solution
The `bugSolution.js` file presents a corrected version.  It addresses the issue by using a `try...catch` block within the `setTimeout` callback to handle potential errors gracefully.  This ensures that errors are caught and logged appropriately, preventing unexpected crashes.

## How to Reproduce
1. Clone the repository.
2. Navigate to the project directory.
3. Run `node bug.js` (for the buggy version) or `node bugSolution.js` (for the fixed version).
4. Observe the server's response and console output.

This example highlights the importance of consistently using `try...catch` blocks within asynchronous operations to handle potential errors robustly and improve the stability and reliability of Node.js applications.