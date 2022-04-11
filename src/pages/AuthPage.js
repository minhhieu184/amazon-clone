import React, { useState } from 'react';
import FadeInAnimate from '../components/UI/FadeInAnimate';

import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';

const AuthPage = () => {

    const [isSignedIn, setIsSignedIn] = useState(true);

    const toggleHandler = () => {
        setIsSignedIn(pre => !pre)
    }

    return (
        <FadeInAnimate key="auth" from="left">
            {isSignedIn && <SignIn toggle={toggleHandler} />}
            {!isSignedIn && <SignUp toggle={toggleHandler} />}
        </FadeInAnimate>
    );
}

export default AuthPage;
