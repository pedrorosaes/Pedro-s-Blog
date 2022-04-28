// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}
import { GraphQLClient } from 'graphql-request'

const grapgqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export default function comments(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ name: 'John Doe' })
}
