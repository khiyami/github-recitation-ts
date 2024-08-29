// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { num } = req.query;  // req.params doesn't exist in Next.js, use req.query instead

  if (typeof num !== 'string' || isNaN(parseInt(num))) {
    return res.status(400).send('Invalid input');
  }

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
