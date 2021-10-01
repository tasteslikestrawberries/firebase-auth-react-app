import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTheme, useThemeUpdate} from '../contexts/ThemeContext'

//components
import Signup from './Signup'
import Login from './Login'
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

            <Route exact path='/'>
              <Dashboard />
            </Route>

            <Route path='/signup'>
                  <Signup />
            </Route>

            <Route path='/login'>
                  <Login />
            </Route>

          </Switch>

        </div>
      </AuthProvider>
    </Router>
  </>
  );
}

export default App;
