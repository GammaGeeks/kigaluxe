import React, {useEffect} from 'react'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'

import './index.scss'

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

function GoogleAuthButton({text}) {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }

    gapi.load('client:auth2', start)
  })

  const onSuccess = (res) => {
    console.log('LOGIN SUCCESS: current user: ', res.profileObj)
  }

  const onFailure = (res) => {
    console.log('LOGIN FAILED: res: ', res)
  }

  return (
    <div id="signUpButton">
      <GoogleLogin
        clientId={clientId}
        buttonText={text}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  )
}

export default GoogleAuthButton