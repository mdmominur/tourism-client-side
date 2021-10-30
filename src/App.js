
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DestinationDetails from './Pages/DestinationDetails/DestinationDetails';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoutes from './Pages/PrivateRoutes/PrivateRoutes';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <AuthProvider>
          <BrowserRouter>
          <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <PrivateRoutes path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoutes>
              <PrivateRoutes path="/destinationDetails/:id">
                <DestinationDetails></DestinationDetails>
              </PrivateRoutes>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route exact path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
