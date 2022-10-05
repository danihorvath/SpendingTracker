// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const response = await prisma.expense.findMany({
      where: req.query as Prisma.ExpenseWhereInput,
      orderBy: [
        {
          paid: 'desc',
        },
      ],
    });
    res.json(response);
  } else if (req.method === 'POST') {
    await prisma.expense
      .create({
        data: { ...req.body },
      })
      .then((response) => res.json(response))
      .catch((e) => {
        console.error(e);
        res.status(400).end();
      });
  }
}
