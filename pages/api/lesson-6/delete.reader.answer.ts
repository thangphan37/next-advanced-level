import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await prisma.book.deleteMany({})
  const deletedReader = await prisma.reader.delete({
    where: {
      id: req.query.id as string
    }
  })
  res.status(200).json({message: `You deleted ${deletedReader.name} successfully!`})
}

