import React from 'react';

class FacebookLoginButton extends React.Component {
  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : 'YOUR_APP_ID', // Replace 'YOUR_APP_ID' with your actual Facebook app ID
        cookie     : true,
        xfbml      : true,
        version    : 'v10.0'
      });
      FB.AppEvents.logPageView();
    };

    // Load the Facebook SDK script
    ((d, s, id) => {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  checkLoginState() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log('Logged in');
      } else {
        console.log('Not logged in');
      }
    });
  }

  render() {
    return (
      <div>
        <fb:login-button 
          scope="public_profile,email" 
          onlogin="checkLoginState();">
        </fb:login-button>
      </div>
    );
  }
}

export default FacebookLoginButton;



