import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import axios from 'axios';
import { useRouter } from 'next/router';
import Head from 'next/head';

function NewMeetupPage() {

  const navigate = useRouter();

  const addMeetupHandler = async (data) => {
    const response = await axios.post('/api/new-meetup', data, { headers: { 'content-type': 'application/json' } });

    console.log(response);

    navigate.push('/');
  };

  return <>
    <Head>
      <title>Add a new Meetup</title>
      <meta name='description' content='Add your own meetups and create amazing networking opportunities.' />
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </>;
}

export default NewMeetupPage;
