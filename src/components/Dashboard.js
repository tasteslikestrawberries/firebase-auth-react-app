import React, { useState}  from 'react';
import { Link, useHistory } from 'react-router-dom';

//components
import { useAuth } from '../contexts/AuthContext';

//styles
import { Container, Button, Alert } from 'react-bootstrap' 

export default function Dashboard() {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()

    async function handleLogout() {
      setError('')

      try {
        await logout()
        history.push('/login')
      } catch {
        setError('Failed to log out')
      }
    }

    return (
    <>
    <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className='text-center mb-4'>Profile</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <strong>Email:</strong> {currentUser.email}
        <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
          Update Profile
        </Link>
     
        <div className="w-100 text-center mt-2">
          <Button variant='link' onClick={handleLogout}>Log Out</Button>
        </div>
      </div>
    </Container>
    </>
    )
}
