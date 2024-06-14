import { useState } from 'react'
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import ImageLoader from '../components/ImageLoader'
import PasswordToggle from '../components/PasswordToggle'

const SignInModalLight = ({ onSwap, pillButtons, ...props }) => {

  // Form validation
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true);
  }

  return (
    
    <div className='d-flex flex-column align-items-center justify-content-center'>
    <div className='mt-4'>
      <ImageLoader
        src='/images/Frame 2.jpg'
        width={180}
        height={84}
        alt='Illustration'
      />
    </div>
  
    <div className='mx-auto mt-4 mb-4 shadow rounded-4' style={{ border: "1px black", width: "1258px", height:"656px" }}>
      <div className='row mx-0 align-items-center'>
        <div className='col-md-6 border-end-md p-4 p-sm-5'>
          <h2 className='h1 mb-4 mb-sm-5' style={{font: "DM Sans", fontWeight:"700"}}>Hey there!<br />Welcome back.</h2>
          <div className='d-flex justify-content-center'>
            <ImageLoader
              src='/images/signin-modal/Container.png'
              width={370}
              height={314}
              alt='Illustration'
            />
          </div>
          <div className='mt-4 mt-sm-5'>
            Don&apos;t have an account? <a href='#' onClick={onSwap}>Sign up here</a>
          </div>
        </div>
        <div className='col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5'>
          <Button variant={`outline-info ${pillButtons ? 'rounded-pill' : ''} w-100 mb-3`}>
            <i className='fi-google fs-lg me-1'></i>
            Sign in with Google
          </Button>
          <Button variant={`outline-info ${pillButtons ? 'rounded-pill' : ''} w-100 mb-3`}>
            <i className='fi-facebook fs-lg me-1'></i>
            Sign in with Facebook
          </Button>
          <Button variant={`outline-info ${pillButtons ? 'rounded-pill' : ''} w-100 mb-3`}>
              <i className='fi-linkedin fs-lg me-1'></i>
              Sign in with LinkedIn
            </Button>
          <div className='d-flex align-items-center py-3 mb-3'>
            <hr className='w-100' />
            <div className='px-3'>Or</div>
            <hr className='w-100' />
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId='si-email' className='mb-4'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your email'
                required
              />
            </Form.Group>
            <Form.Group className='mb-4'>
              <div className='d-flex align-items-center justify-content-between mb-2'>
                <Form.Label htmlFor='si-password' className='mb-0'>Password</Form.Label>
                <Link href='#' className='fs-sm'>Forgot password?</Link>
              </div>
              <PasswordToggle id='si-password' placeholder='Enter password' required />
            </Form.Group>
            <Button type='submit' size='lg' variant={`primary ${pillButtons ? 'rounded-pill' : ''} w-100`}>
              Sign in
            </Button>
          </Form>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default SignInModalLight
