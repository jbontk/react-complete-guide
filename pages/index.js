import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [{
  id: 'm1',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
  title: 'A First Meetup',
  address: 'Rue de Rivoli, 75001 Paris, France'
},
  {
    id: 'm2',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Statue_of_Liberty%2C_NY.jpg',
    title: 'A Second Meetup',
    address: 'New York, NY 10004, United States'
  }];

function HomePage(){
  return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;
