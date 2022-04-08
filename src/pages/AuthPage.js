import React, { useState } from 'react';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';

const AuthPage = () => {

    const [isSignedIn, setIsSignedIn] = useState(true);

    const toggleHandler = () => {
        setIsSignedIn(pre => !pre)
    }

    return (
        <div>
            {isSignedIn && <SignIn toggle={toggleHandler} />}
            {!isSignedIn && <SignUp toggle={toggleHandler} />}
        </div>
    );
}

export default AuthPage;
