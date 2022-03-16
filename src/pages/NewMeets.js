import NewMeetup from "../components/meetup/newmeetup"
import {useNavigate} from "react-router-dom"

function NewMeets(){
    const history=useNavigate()

    function AddMeetupHandler(meetup)
    {
        fetch('https://react-pro-d0d62-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body:JSON.stringify(meetup),
            headers:{
            'content-type':'application/json'
            }
        }
        ).then(()=>{
            history.replace('/');

        });
    }
    return (
        <section>
    <NewMeetup onAddMeetup={AddMeetupHandler}/>
       </section>

    )
}

export default NewMeets