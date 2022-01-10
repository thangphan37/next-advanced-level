
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Todo = {
	userId: number
	id: number
	title: string
	completed: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	// write your code here.
}
