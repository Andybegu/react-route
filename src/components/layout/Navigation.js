import {Link} from 'react-router-dom'

import   './Navigation.css'

function Navigation(){
    return(
        
            <header className="header">
                <div className='logo'>react meetup</div>
                <nav>
                    <ul>
                    <li>
              <Link to='/'>all meets</Link>
                    </li>
                    <li>
              <Link to='/favorite'>all favorite</Link>
                   </li>
                    <li>
              <Link to='/new'>new meets</Link>
                    </li>
                    </ul>
                    </nav>
        </header>
        
    )
}

export default Navigation
