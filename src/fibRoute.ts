// Endpoint for querying the fibonacci numbers

import { NextApiRequest, NextApiResponse } from 'next';
import { fibonacci } from './fib';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const num: string | undefined = req.query.num as string | undefined;

  if (!num || isNaN(parseInt(num))) {
    res.status(400).send("Invalid input");
    return;
  }

  const parsedNum = parseInt(num);
  const fibN = fibonacci(parsedNum);

  let result: string;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  } else {
    result = `fibonacci(${parsedNum}) is ${fibN}`;
  }

  res.send(result);
};
