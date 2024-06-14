import { useState } from 'react'
import Link from 'next/link'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import ImageLoader from '../components/ImageLoader'
import PasswordToggle from '../components/PasswordToggle'

const SignUpModalLight = ({ onSwap, pillButtons, ...props }) => {

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

    <div className='mx-auto mt-4 mb-4 shadow rounded-4' style={{ border: "1px black", width: "1258px", height:"856px" }}>

        <div className='row mx-0 align-items-center'>
          <div className='col-md-6 border-end-md p-4 p-sm-5'>
            <h2 className='h1 mb-4 mb-sm-5' style={{font: "DM Sans", fontWeight:"700"}}>Join Finder.<br />Get premium benefits:</h2>
            <ul className='list-unstyled mb-4 mb-sm-5'>
              <li className='d-flex mb-2'>
                <i className='fi-check-circle text-primary mt-1 me-2'></i>
                <span>Add and promote your listings</span>
              </li>
              <li className='d-flex mb-2'>
                <i className='fi-check-circle text-primary mt-1 me-2'></i>
                <span>Easily manage your wishlist</span>
              </li>
              <li className='d-flex mb-0'>
                <i className='fi-check-circle text-primary mt-1 me-2'></i>
                <span>Leave reviews</span>
              </li>
            </ul>
            <div className='d-flex justify-content-center'>
              <ImageLoader
                src='/images/Container.jpg'
                width={344}
                height={404}
                alt='Illusration'
              />
            </div>
            <div className='mt-sm-4 pt-md-3'>Already have an account? <a href='#' onClick={onSwap}>Sign in</a></div>
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
              <Form.Group controlId='su-name' className='mb-4'>
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  placeholder='Enter your full name'
                  required
                  />
              </Form.Group>
              <Form.Group controlId='su-email' className='mb-4'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter your email'
                  required
                  />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='su-password'>
                  Password <span className='fs-sm text-muted'>min. 8 char</span>
                </Form.Label>
                <PasswordToggle id='su-password' minLength='8' required />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label htmlFor='su-confirm-password'>Confirm password</Form.Label>
                <PasswordToggle id='su-confirm-password' minLength='8' required />
              </Form.Group>
              <Form.Check
                type='checkbox'
                id='terms-agree'
                label={[<span key={1}>By joining, I agree to the </span>, <Link key={2} href='#'>Terms of use</Link>, <span key={3}> and </span>, <Link key={4} href='#'>Privacy policy</Link>]}
                required
                className='mb-4'
                />
              <Button type='submit' size='lg' variant={`primary ${pillButtons ? 'rounded-pill' : ''} w-100`}>Sign up</Button>
            </Form>
          </div>
          </div>
        </div>
                </div>
     
  )
}

export default SignUpModalLight
