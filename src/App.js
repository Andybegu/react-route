import {Route,Routes} from "react-router-dom"
import AllMeets from "./pages/AllMeets";
import FavoriteMeets from "./pages/FavoriteMeets";
import NewMeets from "./pages/NewMeets";
import Layout from "./components/layout/layout"
function App() {
  return (
    <Layout>
      
      <Routes>
      <Route path='/' element={<AllMeets/>}/>  
      <Route path='/favorite' element={ <FavoriteMeets/>}/> 
      <Route path='/new' element={<NewMeets/>}/> 
      </Routes>
    </Layout>
  );
}

export default App;

