import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';


function signInFB() {

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (
    <div className="container">
      <div style={{ width: '600px' }}>
        <div>
          { !login && 
            <FacebookLogin
              appId="1399463824159184"
              autoLoad
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" />
          }
          { login &&
          
            <img className="sm:w-28 w-28 rounded-t-3xl border-b-green-500 border-solid  border-b-2" src={picture} alt="finder" />
          }
        </div>
        { login &&
          <div>
            <div>{data.name}</div>
            <div>
              {data.email}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default signInFB;