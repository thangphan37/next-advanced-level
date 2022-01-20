import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    name,
    createdBy,
    appearance,
    skill,
    height,
    weight,
    family,
    hairColor,
  } = JSON.parse(req.body)
  const kamado = await prisma.character.create({
    data: {
      name,
      createdBy,
      appearance,
      profile: {
        create: {
          skill,
          height,
          weight,
          family,
          hairColor,
        },
      },
    },
  })
  res.status(200).json(kamado)
}
