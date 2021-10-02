import React from 'react';
  import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTheme, useThemeUpdate} from '../contexts/ThemeContext'

//components
import PrivateRoute from './PrivateRoute';
import Signup from './Signup'
import Login from './Login'
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import Dashboard from './Dashboard'

//styles
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from '../contexts/AuthContext';


function App() {
  const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#fff',
        color: darkTheme ? '#fff' : '#333',
    }
  return (
  <>
    <Router>
      <AuthProvider>
        <div style={themeStyles}>
          <button onClick={toggleTheme}>Toggle Theme</button> 

          <Switch>

            <PrivateRoute exact path='/' component={Dashboard} />
            <PrivateRoute path='/update-profile' component={UpdateProfile} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />
          </Switch>

        </div>
      </AuthProvider>
    </Router>
  </>
  );
}

export default App;
