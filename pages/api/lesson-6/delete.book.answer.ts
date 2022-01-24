import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const deletedBook = await prisma.book.delete({
    where: {
      id: req.query.bookId as string
    }
  })
  res.status(200).json({
    message: `You deleted ${deletedBook.title} successfully!`
  })
}

