import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const {handleGoogleLogin} = useAuth();

    const loginWithGoogle = () => {
        handleGoogleLogin()
        .then((result) => {
            history.push(redirect_uri);
        });
    }
    return (
        <div className="text-center mt-5">
            <button className="button-brand" onClick={loginWithGoogle}>Sign in with google</button>
        </div>
    );
};

export default Login;