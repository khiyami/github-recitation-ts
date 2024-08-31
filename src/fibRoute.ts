import { Request, Response } from 'express';
import fibonacci from "./fib";

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  }

  res.send(result);
};
