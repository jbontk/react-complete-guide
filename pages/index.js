import MeetupList from '../components/meetups/MeetupList';
import axios from 'axios';
import { MONGO_URI } from './api/new-meetup';
import { MongoClient } from 'mongodb';
import { cleanMongoObject } from '../utils';

export const DUMMY_MEETUPS = [{
  id: 'm1',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
  title: '[DUMMY BECAUSE OF ERROR] A First Meetup',
  address: 'Rue de Rivoli, 75001 Paris, France',
  description: 'A very cool meetup in Paris'
},
{
  id: 'm2',
  image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Statue_of_Liberty%2C_NY.jpg',
  title: '[DUMMY BECAUSE OF ERROR] A Second Meetup',
  address: 'New York, NY 10004, United States',
  description: 'A chill meetup in NYC'
}];

function HomePage(props) {
  return <MeetupList {...props} />
}

// export const getServerSideProps = async (context) => {
//   // e.g. fetch data from an API...
//   // pre-render on every request (only executed on the server, never on the client)
//
//   const {req, res} = context;
//   // console.log(req, res);
//
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// };

export const getStaticProps = async (context) => {
  // e.g. fetch data from an API...
  // pre-render at build time then
  // after each number of seconds specified in revalidate (if any)
  // only runs server-side and not on the browser

  let meetups;
  try {
    const client = await MongoClient.connect(MONGO_URI);
    meetups = await client
    .db('meetups')
    .collection('meetups')
    .find()
    .toArray();
  
    // Remove _id property to avoid serialization error
    meetups = meetups.map(cleanMongoObject);
  
    await client.close();
  }
  catch (e) {
    meetups = DUMMY_MEETUPS;
  }

  return {
    props: {
      meetups: meetups
    },
    revalidate: 10 // in seconds
  }
};

export default HomePage;
