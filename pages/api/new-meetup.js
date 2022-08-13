// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // const {title, image, address, description } = data;
    const url = process.env.NEXT_PUBLIC_MONGO_DB;
    const client = await MongoClient.connect(url);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({message: 'Meetup Inserted!'});

  }
  // res.status(200).json({ name: 'John Doe' })
}
