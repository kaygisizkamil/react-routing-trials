import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout"
import {Route,Switch} from 'react-router-dom';
import MainNavigation from "./components/layout/MainNavigation";
import Card from "./components/ui/Card";
function App() {
  /*beside passing props adding attributes wwe can use it as below between two card and inside card using child prop
  card func will have all the content inside of app.js*/
  return (
        
      <Layout>
        
      <Switch>      
        <Route path='/' exact>
          <AllMeetups/>
        </Route>
        <Route path = '/new-meetup'>
          <NewMeetup/>
        </Route>
        <Route path = '/favourite'>
          <Favorites/>
        </Route>
      </Switch>
      </Layout>
    
  );
}

export default App;
