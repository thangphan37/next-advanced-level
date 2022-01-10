
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

function createPage(title: string) {
  return `<html>
	<head>
		<meta charset=utf-8>
		<title>${title}</title>
	</head>
	<body>
	<ul>
	<li><a href="/">Home</a></li>
	<li><a href="/page-1">Page1</a></li>
	</ul>
	<hr />
	${Array.from({length: 20})
    .map(() => '<div>This is server side rendering!</div>')
    .join('\n')}
	</body>
</html>`
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	const html = createPage('SSR')
	res.end(html)
}
