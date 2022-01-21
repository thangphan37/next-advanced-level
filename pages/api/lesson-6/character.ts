import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from '../../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const character = await prisma.character.findUnique({
    where: {
      id: req.query.id as string,
    },
    include: {
      profile: true,
    },
  })
  if (!character)
    return res.status(404).json({message: 'We can not find this character!'})

  const {name, createdBy, appearance} = character
  res.status(200).json({
    name,
    createdBy,
    appearance,
    skill: character.profile?.skill,
    height: character.profile?.height,
    weight: character.profile?.weight,
    family: character.profile?.family,
    hairColor: character.profile?.hairColor,
  })
}
