import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {id, name, createdBy, appearance, skill, height, weight, family, hairColor} = JSON.parse(req.body)
  const updatedCharacter = await prisma.character.update({
    where: {
      id 
    },
    data: {
      name,
      createdBy,
      appearance,
      profile: {
        update: {
          skill,
          height,
          weight,
          family,
          hairColor,
        }
      }
    }
  })
  res.status(200).json(updatedCharacter)
}
