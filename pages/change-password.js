import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'
import ImageLoader from '../components/ImageLoader'
import PasswordToggle from '../components/PasswordToggle'
import { useRouter } from 'next/router'

const SignInModalLight = ({ onSwap, pillButtons, ...props }) => {

  // Form validation
  const Router = useRouter();
  const [isSent, setIsSent] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(false);  
  const [otpEntered, setOtpEntered] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false || password !== confirmPassword) {
      event.stopPropagation();
      setPasswordsMatch(password === confirmPassword);
      alert("The password and confirm password fields do not match.");

    } else {
      alert("Password changed");
      Router.push("/sign-in")
    }
    setValidated(true);
  };
  

  return (
    
    
    
  
    <div className=' mx-auto mt-4 mb-4 shadow rounded-4' style={{ border: "1px black", width: "50%", height:"100%"}}>
      <div className='mx-0 align-items-center'>
       
        <div className='mt-4' style={{maxWidth: "fit-content", marginLeft: "auto", marginRight: "auto"}}>
      <ImageLoader
        src='/images/Frame 2.jpg'
        width={180}
        height={84}
        alt='Illustration'
      />
    </div>
        <div className=' px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5'>
       
            <p>Enter your New Password.</p>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className='mb-4'>
              <div className='d-flex align-items-center justify-content-between mb-2'>
                <Form.Label htmlFor='si-password' className='mb-0'>Password</Form.Label>
              </div>
              <PasswordToggle id='si-password' placeholder='Enter password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group className='mb-4'>
              <div className='d-flex align-items-center justify-content-between mb-2'>
                <Form.Label htmlFor='si-password' className='mb-0'>Confirm Password</Form.Label>
              </div>
              <PasswordToggle id='si-password' placeholder='Enter password' required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </Form.Group>
  
            <Button type='submit' size='lg' variant={`primary ${pillButtons ? 'rounded-pill' : ''} w-100`}>
              Submit
            </Button>
          </Form>
          <div className='mt-4 mt-sm-5'>
            Don&apos;t have an account? <a href='./sign-up' onClick={onSwap}>Sign up here</a>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default SignInModalLight
