import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from '../../../prisma/client'

function getReaders() {
  return [
    {
      name: 'Alex',
      age: '25',
      job: 'Software Engineer',
      address: 'American',
      hobbies: 'Sport, Music',
      books: {
        create: [
          {
            title: 'How to not die alone',
            author: 'Logan Ury',
            type: 'Love',
            shortContent: 'We can find a real partner using science method!',
          },
          {
            title: 'Atomic Habit',
            author: 'James Clear',
            type: 'Business',
            shortContent:
              'The habit we do everyday, build the person we will be.',
          },
        ],
      },
    },
    {
      name: 'Lyna',
      age: '18',
      job: 'Dancer',
      address: 'France',
      hobbies: 'Yoga',
      books: {
        create: [
          {
            title: 'How to win friends and influence people',
            author: 'Dale Carnegie',
            type: 'Relationship',
            shortContent: 'How to communicate with people, how to make people like you.',
          },
          {
            title: 'Men from mars women from venus',
            author: 'John Gray',
            type: 'Relationship',
            shortContent:
              'We learn about how men and women behave different.',
          },
        ],
      },
    },
    {
      name: 'Dan',
      age: '28',
      job: 'Teacher',
      address: 'Singapore',
      hobbies: 'Game',
      books: {
        create: [
          {
            title: 'Cant hurt me',
            author: 'David Goggins',
            type: 'Love',
            shortContent: 'Master Your Mind and Defy the Odds',
          },
          {
            title: 'Zero to one',
            author: 'Peter Thiel, Blake Masters',
            type: 'Business',
            shortContent:
              'How to Build the Future is a 2014 book by the America with Blake Masters.',
          },
        ],
      },
    }
  ]
}

async function seedReaders() {
  await Promise.all(
    getReaders().map(reader => {
      return prisma.reader.create({
        data: reader,
      })
    }),
  )
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await seedReaders()
  res.status(200).json({
    message: 'You seeded data successfully!',
  })
}
