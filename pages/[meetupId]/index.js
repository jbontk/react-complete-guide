import { DUMMY_MEETUPS } from '../index';
import MeetupDetails from '../../components/meetups/MeetupDetails';
import { MongoClient, ObjectId } from 'mongodb';
import { MONGO_URI } from '../api/new-meetup';
import { cleanMongoObject } from '../../utils';
import Head from 'next/head';

const MeetupDetailsPage = ({ meetup }) => {

  return <>
    <Head>
      <title>{meetup.title}</title>
      <meta name='description' content={meetup.description} />
    </Head>
    <MeetupDetails {...meetup} />
  </>
};

export const getStaticPaths = async () => {

  let meetupIds = [];
  try {
    const client = await MongoClient.connect(MONGO_URI);
    const db = client.db('meetups');
    const collection = db.collection('meetups');
    meetupIds = await collection.find({}, { _id: 1 }).toArray();

    console.log('meetupIds:', meetupIds);

    await client.close();
  }
  catch (e) {
    console.error('Error occurred while fetching static paths', e);
  }

  const paths = meetupIds.map(({ _id }) => ({ params: { meetupId: _id.toString() } }));

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async (context) => {

  const meetupId = context.params.meetupId;
  console.log('meetupId from params:', meetupId);

  const fallbackTitle = `Fallback because ${meetupId} not found!`
  const fallbackMeetup = { ...DUMMY_MEETUPS.find(({ id }) => id === 'm1'), title: fallbackTitle };

  let meetup;
  try {
    const client = await MongoClient.connect(MONGO_URI);
    const db = client.db('meetups');
    const collection = db.collection('meetups');
    meetup = await collection.findOne(ObjectId(meetupId));
    meetup = cleanMongoObject(meetup);

    console.log('meetup found:', meetup);

    await client.close();
  }
  catch (e) {
    console.error('Error occurred while fetching static paths', e);
    meetup = fallbackMeetup;
  }


  return {
    props: {
      meetup
    },
    revalidate: 10
  }
};

export default MeetupDetailsPage;
