// POST api/new-meetup


import {MongoClient, ServerApiVersion} from 'mongodb';

export const MONGO_URI = 'mongodb+srv://mdbtest:qKDLH3yIs89fMcSi@cluster0.qbr8ydz.mongodb.net/?retryWrites=true&w=majority';


async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // mdbtest / qKDLH3yIs89fMcSi

    console.log('received post request', data);

    try {
      const client = new MongoClient(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1
      });
      await client.connect();

      const collection = client.db('meetups').collection('meetups');
      const result = await collection.insertOne(data);
      console.log(result);

      await client.close();

      res.status(201).json({message: 'Meetup inserted!'})
    } catch (err) {
      res.status(err.status || 500).json({message: 'Error occurred: ' + err.message});
    }
  }
}

export default handler;
