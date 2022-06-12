import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import axios from 'axios';

function NewMeetupPage() {
  const addMeetupHandler = async (data) => {
    const response = await axios.post('/api/new-meetup', data, {headers: {'content-type': 'application/json'}});

    console.log(response);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
}

export default NewMeetupPage;
