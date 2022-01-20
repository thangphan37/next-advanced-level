import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const kamado = await prisma.character.findMany({
    include: {
      profile: true,
    },
  })
  res.status(200).json(kamado)
}
