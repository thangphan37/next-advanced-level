import {serialize, CookieSerializeOptions} from 'cookie'
import {NextApiRequest, NextApiResponse} from 'next'

export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {},
) => {
  const stringValue =
    typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value)

  if (options.maxAge) {
    options.expires = new Date(Date.now() + options.maxAge)
    options.maxAge /= 1000
  }

  res.setHeader('Set-Cookie', serialize(name, stringValue, options))
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  setCookie(res, 'token', 'MY_ACCESS_TOKEN', {path: '/'})
  res.end(res.getHeader('Set-Cookie'))
}

export default handler