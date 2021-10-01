import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext'

//components
import Signup from './Signup';
import TestComponent from './TestComponent';

//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';


function App() {
  return (
  <>
    <ThemeProvider>
      <TestComponent />
    </ThemeProvider>
    
    <AuthProvider>
      <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}}>
        <div className='w-100' style={{maxWidth:'400px'}}>
          <Signup />
        </div>
      </Container> 
    </AuthProvider>
  </>
  );
}

export default App;
