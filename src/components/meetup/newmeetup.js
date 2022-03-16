import {useRef} from 'react'

import Card from "../ui/card"
import "./newmeetup.css"
function NewMeetup(props){
    const titleinputref=useRef();
    const imageinputref=useRef()
    const addresinputref=useRef()
    const descriptioninputref=useRef()
    function SubmitHandler(event){
    event.preventDefault();
    
   

    const enterdtitle=titleinputref.current.value
    const enterdimage=imageinputref.current.value
    const enterdaddress=addresinputref.current.value
    const enterddeescription=descriptioninputref.current.value

    const meetup={
        title:enterdtitle,
        image:enterdimage,
        address:enterdaddress,
        description:enterddeescription
    }
    props.onAddMeetup(meetup);
    }
    return <Card>
        <form className="form" onSubmit={SubmitHandler}>
            <div className="control">
                <label htmlFor='title' > meetup title</label>
                <input type="text" required id="title" ref={titleinputref}/>
            </div>
            <div className="control">
                <label htmlFor='image' > meetup image</label>
                <input type="url" required id="image" ref={imageinputref}/>
            </div>
            <div className="control">
                <label htmlFor='address' > meetup address</label>
                <input type="text" required id="address" ref={addresinputref}/>
            </div>
            <div className="control">
                <label htmlFor='description' > meetup description</label>
                <textarea type='text' required  id='description' rows="5" ref={descriptioninputref}></textarea>
            </div>
            <div className="actions">
               <button>add meetup</button>
            </div>
        </form>
    </Card>
}


export default NewMeetup