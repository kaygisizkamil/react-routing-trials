import NewMeetupForm from '../components/meetups/NewMeetupForm';
import {useHistory} from 'react-router-dom';
function NewMeetup(){
    const history=useHistory();
    /* i can manipulate the fire database adding my link that is gonna be
    stored in firebase at he end of the lnk ,.json is a must that is decided by firebase
    by default fetch is a get (store) post is (send) request*/
    function addMeetupHandler(meetupData){
            fetch('https://apiforreact-ee4b9-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body:JSON.stringify(meetupData),/*conver data to json format*/
                headers:{
                    'Content-type':'application/json'/*to make it clear i indicate that im sending json in case some services might requirethat*/
                }
            }
            /*in here i cannot redirect the url that i wanted to im using dom5 it stays at the same page*/
            ).then(()=> {
                history.replace=('/');
          });
    };
    /*im sending that meetuphandler function to newmeetupform's props as an argument but inside 
    nmupform also meetUpData will be fetched by the prop.onAddMeetup*/
    return(
        <div>Add new NewMeetups
        
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </div>
    );
}
export default NewMeetup;