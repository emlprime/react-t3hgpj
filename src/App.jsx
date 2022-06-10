import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './style.css';
import Fight from './Fight';
import { getCurrentUser } from './CurrentUser';

// Configure Firebase.
//TODO remove api key from github
const config = {
  apiKey: 'AIzaSyBtTdVWE1AZ1JRENUUiAlzqlIXsaTVhCkc',
  authDomain: 'nidaviller-fe.firebaseapp.com',
  projectId: 'nidaviller-fe',
};

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true); // Local signed-in state.

  if (!isSignedIn) {
    return (
      <div>
        <h1>Epicurean Brawl</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
  return (
    <div>
      <h1>Epicurean Brawl</h1>

      <Style>
        <Fight />
      </Style>
    </div>
  );
}

export default App;

const Style = styled.div`
.left {
  color: blue;
} 
.right {
  color: red;
}
`;
