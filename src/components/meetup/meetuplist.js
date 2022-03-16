import MeetUpItem from "./meetupitem"
import "./MeetUpList.css"

function MeetUpList(props){
    return (
        <ul className="list">
        {props.meetups.map(meetup=><MeetUpItem 
        key={meetup.id} 
        id={meetup.id} 
        image={meetup.image}
        title= {meetup.title}
        address={meetup.address}
        description={meetup.description}
        />)}
        </ul>
    )
}

export default MeetUpList
