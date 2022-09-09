import MeetupList from "../components/meetups/MeetupList";
import {useState,useEffect}from 'react';
const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];
   /*   
            {DUMMY_DATA.map((meetup)=>{
                return <li key={meetup.id}>{meetup.title}</li>;
            })}beside meetuplist at below we could have use it*/
function AllMeetups(){
  const[isLoading,setIsLoading]=useState(true);
  const[loadedMeetups,setLoadedMeetups]=useState([]);
  useEffect(()=>{
    setIsLoading(true);
     fetch('https://apiforreact-ee4b9-default-rtdb.firebaseio.com/meetups.json',
  ).then(response=>{
    return response.json();/*itll convert json to js object*/
    /*json also returns a promise as well ,so i need to wait for resolving that promise*/
    /*when i have data set state to false*/
  }).then(data=>{
    const meetups=[];
    for(const key in data){
      const meetup={
        id:key,
        ...data[key]
      };
      meetups.push(meetup);
    }
      setIsLoading(false);
      setLoadedMeetups(meetups);
  });
},[]);
  /*the problem here sending to request ala,when the component funct runs*/
 
  if(isLoading){
    return(
      <section>
        <p>Loading</p>
      </section>
    );
  }
   
    return(
        <section>
            <h1>This are AllMeetups </h1>
            
           
            <MeetupList meetups={loadedMeetups}/>
           {/*{DUMMY_DATA}*/}
        </section>
    
    );
  
}
export default AllMeetups;