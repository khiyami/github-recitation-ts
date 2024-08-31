// Endpoint for querying the fibonacci numbers

import { fibonacci } from './fib';

export default (req: any, res: any) => {
  const { num } = req.query;

  if (!num || isNaN(parseInt(num as string))) {
    res.status(400).send("Invalid input");
    return;
  }

  const parsedNum = parseInt(num as string);
  const fibN = fibonacci(parsedNum);
  let result = `fibonacci(${parsedNum}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  }

  res.send(result);
};
