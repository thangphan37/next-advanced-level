
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Todo = {
	userId: number
	id: number
	title: string
	completed: boolean
}

function createPage(todos: Array<Todo>) {
  return `<html>
	<head>
		<meta charset=utf-8>
		<title>Todos!</title>
	</head>
	<body>
	<ul>
	<li><a href="/">Home</a></li>
	<li><a href="/page-1">Page1</a></li>
	</ul>
	<hr />
	<ul>
	${todos
    .map((todo: Todo) => `<li>${todo.title}</li>`)
    .join('\n')}
	</ul>
	</body>
</html>`
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos')
	const todos = await response.json()
	const html = createPage(todos)
	res.end(html)
}
