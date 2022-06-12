import {useRouter} from 'next/router';
import {DUMMY_MEETUPS} from '../index';
import MeetupDetails from '../../components/meetups/MeetupDetails';

const MeetupDetailsPage = () => {
  const router = useRouter();
  const meetupId = router.query.meetupId;

  const meetup = DUMMY_MEETUPS.find(m => m.id === meetupId);


  return <MeetupDetails {...meetup} />
}

export default MeetupDetailsPage;
