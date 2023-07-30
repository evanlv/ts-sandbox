import { NextApiRequest, NextApiResponse } from "next"

export const sign = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.send("toto")
  }

  res.status(500).send({ error: "Something went wrong" })
}
