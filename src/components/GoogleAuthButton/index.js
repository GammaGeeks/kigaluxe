import React, {useEffect} from 'react'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'

import './index.scss'

const clientId = '306724767118-cova922dd6jfk6d0vetn9kuvko0a2en7.apps.googleusercontent.com'

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