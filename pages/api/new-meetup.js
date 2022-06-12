// POST api/new-meetup


import {MongoClient, ServerApiVersion} from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // mdbtest / qKDLH3yIs89fMcSi

    console.log('received post request', data);

    const uri = 'mongodb+srv://mdbtest:qKDLH3yIs89fMcSi@cluster0.qbr8ydz.mongodb.net/?retryWrites=true&w=majority';
    try {
      const client = new MongoClient(uri, {
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
