import React from 'react';
import { useTheme, useThemeUpdate} from '../contexts/ThemeContext'

//components
import Signup from './Signup'

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
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
    
    
    <AuthProvider>
      <div style={themeStyles}>
        <button onClick={toggleTheme}>Toggle Theme</button> 
        
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}}>
          <div className='w-100' style={{maxWidth:'400px'}}>
            <Signup />
          </div>
        </Container> 
        {/*tu idu druge komponente*/}
      </div>
    </AuthProvider>
  </>
  );
}

export default App;
