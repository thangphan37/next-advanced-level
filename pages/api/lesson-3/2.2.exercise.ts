/**
 * This is the preview mode API.
 * Requirement:
 * 	- Write the preview mode API.
 *  - Pass some data to preview.
 * 	- Secure the preview mode page.
 * Hint:
 *  - Using `res.setPreviewData()`
 *  - Secure using secret token.
 */

import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  {
    /* add your code here */
  }
  res.status(200).json({name: 'John Doe'})
}
