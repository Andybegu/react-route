import MeetUpList from "../components/meetup/meetuplist"

const dummy_data=[
    {
        id:"m1",
        title:"andu",
        image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw193t7TRH9erMC0wnu0f5pp&ust=1643133615532000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjImoHAy_UCFQAAAAAdAAAAABAD',
        address:"bullen 01",
        description:"wedfrggerwwwwer"
    },
    {
        id:"m2",
        title:"andu",
        image:"",
        address:"bullen 02",
        description:"wedfrggerwwwwer"
    },
    {
        id:"m3",
        title:"andu",
        image:"",
        address:"bullen",
        description:"wedfrggerwwwwer"
    }
]

function AllMeets(){
    fetch('https://react-pro-d0d62-default-rtdb.firebaseio.com/meetups.json').then(response=>{
        return response.json();
    })
    return(
        <section>
            <h1>all meetup</h1>
            <MeetUpList meetups={dummy_data}/>
        </section>
    )
}

export default AllMeets