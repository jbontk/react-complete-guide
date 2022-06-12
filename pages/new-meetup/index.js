import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import axios from 'axios';
import {useRouter} from 'next/router';

function NewMeetupPage() {

  const navigate = useRouter();

  const addMeetupHandler = async (data) => {
    const response = await axios.post('/api/new-meetup', data, {headers: {'content-type': 'application/json'}});

    console.log(response);

    navigate.push('/');
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
}

export default NewMeetupPage;
