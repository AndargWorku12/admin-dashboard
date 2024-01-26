
import React,{useState} from 'react'
import '../styles/Login.css'

import {Container,Row,Col,Form,FormGroup} from "reactstrap"
import {Link} from "react-router-dom"

import {useNavigate} from "react-router-dom"

import {toast} from 'react-toastify'

const Signup = () => {
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[username,setUsername]=useState('')
const[file,setFile]=useState('null')
const[loading,setLoading]=useState(false)
const navigate=useNavigate()



  return  (
      <section>
        <Container>
          <Row>
           {
            loading? (<Col lg='12'className='text-center'><h5 className='fw-bold'>Loading...</h5></Col>):(
              <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Signup</h3>
              <Form className='auth_form' onSubmit={signup}>
              <FormGroup className='form_group'>
                  <input type='text' placeholder='username' 
                  value={username}  onChange={e=>setUsername(e.target.value)}/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='email' placeholder='Enter email' 
                  value={email}  onChange={e=>setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='password' placeholder='Enter password' 
                   value={password}  onChange={e=>setPassword(e.target.value)}/>

                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='file' 
                  onChange={e=>setFile(e.target.files[0])}/>
                </FormGroup>
                <button type='submit' className='buy_btn auth_btn'>Create an account</button>
               <p>All ready have account <Link to='/login'>Login</Link></p>
              </Form>


            </Col>
            )
           }
        
           
          </Row>
        </Container>
      </section>
      
    
  
  )
          }

export default Lo;