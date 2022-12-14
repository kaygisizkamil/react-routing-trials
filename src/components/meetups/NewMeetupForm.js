import {useRef} from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';
function NewMeetupForm(props){
    /*what im trying to do here is not to send http request to server and causing to open a new page than staying the same page and
    implementing my own logic*/
    const titleInputRef= useRef();
    const imageInputRef= useRef();
    const adressInputRef= useRef();
    const descriptionInputRef= useRef();
    function submitHandler(event){
            event.preventDefault();
            const enteredTitle=titleInputRef.current.value;
            const enteredImage=imageInputRef.current.value;
            const enteredAdress=adressInputRef.current.value;
            const enteredDescription=descriptionInputRef.current.value;
            const meetupData={
                title:enteredTitle,
                image:enteredImage,
                adress:enteredAdress,
                description:enteredDescription
            };
            props.onAddMeetup(meetupData);
    }
    return<Card>
        
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='adress'>Adress</label>
                <input type='text' required id='adress' ref={adressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>description</label>
                <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.action}>
                <button>Add MeetUp</button>
            </div>


        </form>
    </Card>
}
export default NewMeetupForm;