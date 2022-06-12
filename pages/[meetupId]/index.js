import {DUMMY_MEETUPS} from '../index';
import MeetupDetails from '../../components/meetups/MeetupDetails';

const MeetupDetailsPage = ({meetup}) => {

  return <MeetupDetails {...meetup} />
}

export const getStaticPaths = async () => {
  return {
    paths: [{
      params: {
        meetupId: 'm1'
      }
    },{
      params: {
        meetupId: 'm2'
      }
    }],
    fallback: true
  }
};

export const getStaticProps = async (context) => {

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  const fallbackTitle = `Fallback because ${meetupId} not found!`
  const fallbackMeetup = {...DUMMY_MEETUPS.find(({id}) => id === 'm1'), title: fallbackTitle};

  return {
    props: {
      meetup: DUMMY_MEETUPS.find(({id}) => id === meetupId) || fallbackMeetup
    },
    revalidate: 5
  }
};

export default MeetupDetailsPage;
