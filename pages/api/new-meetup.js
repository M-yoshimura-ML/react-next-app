// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // const {title, image, address, description } = data;
    const client = await MongoClient.connect('mongodb+srv://Myoshimura:Masahiro1265@cluster0.7ash91j.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({message: 'Meetup Inserted!'});

  }
  // res.status(200).json({ name: 'John Doe' })
}
