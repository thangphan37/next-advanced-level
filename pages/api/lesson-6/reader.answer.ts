import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const reader = await prisma.reader.findUnique({
    where: {
      id: req.query.id as string
    },
    include: {
      books: true
    }
  })
  res.status(200).json(reader)
}

