import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import './index.scss'
const appId = process.env.REACT_APP_FACEBOOK_APP_ID

function FacebookAuthButton({text}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userID, setUserID] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [picture, setPicture] = useState('')

  let fbContent

  const responseFacebook = (response) => {
    console.log(response)
    setIsLoggedIn(true)
    setUserID(response.userID)
    setName(response.name)
    setEmail(response.email)
    setPicture(response.picture.data.url)
  }
  const componentClicked = () => {
    console.log('clicked')
  }

  if (isLoggedIn){
    fbContent = (
      <div className='loggedIn'>
        <img src={picture} alt={name}/>
        <h2>Welcome {name}</h2>
        <p>Your User ID is: {userID}</p>
        <p>Email: {email}</p>
      </div>
    )
    fbContent = (
      <FacebookLogin
        appId={appId}
        autoLoad={true}
        fields='name,email,picture'
        onClick={componentClicked}
        callback={responseFacebook}
        render={renderProps => (
          <Button className='sign_up_facebook d-flex justify-content-center align-content-center p-2' onClick={renderProps.onClick}>
            <FontAwesomeIcon className='mt-1 sign_up_facebook_icon' icon={faFacebook}/> {text}
          </Button>
        )}
      />
    )
  } else {
    fbContent = (
      <FacebookLogin
        appId={appId}
        autoLoad={true}
        fields='name,email,picture'
        onClick={componentClicked}
        callback={responseFacebook}
        render={renderProps => (
          <Button className='sign_up_facebook d-flex justify-content-center align-content-center p-2' onClick={renderProps.onClick}>
            <FontAwesomeIcon className='mt-1 sign_up_facebook_icon' icon={faFacebook}/> {text}
          </Button>
        )}
      />
    )
  }

  return (
    <div>
        {fbContent}
    </div>
  )
}

export default FacebookAuthButton