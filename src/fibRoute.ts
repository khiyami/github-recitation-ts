
import fibonacci from "./fib";
import { Request, Response } from "express";
export default (req: Request, res: Response): void => {

  const num: string = req.params.num as string;

  const fibN: number = fibonacci(parseInt(num));

  let result: string = fibonacci(${num}) is ${fibN};
  if (fibN < 0) {
    result = fibonacci(${num}) is undefined;
  }
  res.send(result);
};