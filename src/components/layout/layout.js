import Navigation from "./Navigation"
import LayoutStyle from './layoutstyle'

function Layout(props){
    return <div>
     <LayoutStyle>
        <Navigation/>
        <main className="main">
  {props.children}
        </main>
        </LayoutStyle>
    </div>
}

export default Layout