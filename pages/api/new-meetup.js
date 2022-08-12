// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const {title, image, address, description } = data;
  }
  // res.status(200).json({ name: 'John Doe' })
}
