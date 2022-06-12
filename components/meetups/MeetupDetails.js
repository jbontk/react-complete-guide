import {useRouter} from 'next/router';
import {DUMMY_MEETUPS} from '../../pages';
import classes from './MeetupDetails.module.css';

const MeetupDetails = ({image, address, title, description}) => {

  return <div className={classes.details}>
    <img src={image} alt={title}/>
    <h1>{title}</h1>
    <address>{address}</address>
    <p>{description}</p>
  </div>
}
export default MeetupDetails;
