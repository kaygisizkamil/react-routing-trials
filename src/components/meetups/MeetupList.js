import MeetupItem from "./MeetupItem";
import classes from "./MeetupItem.module.css";
{ /*{/*meetup={meetup} e can send it like that bu then we would have t destructure it again */}

function MeetupList(props){
    return(
        <ul className={classes.list}>
            {props.meetups.map(meetup=>
            <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            adress={meetup.adress}
            description={meetup.description}
           
            
            
            />)}
        </ul>

    );
}
export default MeetupList;