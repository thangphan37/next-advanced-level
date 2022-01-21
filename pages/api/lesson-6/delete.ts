import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {id} = req.query as {[key: string]: string}
  await prisma.character.update({
    where: {
      id,
    },
    data: {
      profile: {
        delete: true,
      },
    },
  })
  await prisma.character.delete({
    where: {
      id,
    },
  })
  res.status(200).json({
    message: `You deleted ${id} successful!`,
  })
}
