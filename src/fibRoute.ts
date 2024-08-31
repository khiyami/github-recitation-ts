import { Request, Response } from 'express';
import fibonacci from "./fib";

export default (req: Request, res: Response) => {
  const { num } = req.params as { num: string };

  const fibN: number = fibonacci(parseInt(num));
  let result: string = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
