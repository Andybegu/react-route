import Card from '../ui/card'
import './MeetUpItem.css'

function MeetUpItem(props){
    return(
        <Card>
        <li className="item">
        <div className='image'>
  <img src={props.image} alt={props.title}/>
        </div>
        <div className='content'>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className='actions'>
            <button>to favorite</button>
        </div>
        </li>
        </Card>
    )
}

export default MeetUpItem