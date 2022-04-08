import React, { useEffect } from 'react';
import { useAuth } from '../../context/auth/authContext';
import { useHistory } from 'react-router-dom';
import ModalLoadingSpinner from '../UI/ModalLoadingSpinner';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const INITIAL_SIGNIN = {
    email: '',
    password: '',
}

const VALIDATION_SIGNIN = Yup.object({
    email: Yup.string().required('Enter email address')
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Must be an email address'),
    password: Yup.string().required('Enter password')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,14}$/, "7-14 characters, at least one letter, one number and one special character"),
})


const SignIn = ({ toggle }) => {
    const history = useHistory()

    const { login, isLoading, error, resetState } = useAuth()

    const submitHandler = values => {
        login(values.email, values.password)

    }

    useEffect(() => {
        resetState()
    }, [])


    return (
        <div className="max-w-[350px] mx-auto">
            <img onClick={() => history.push('/')} className="w-32 mx-auto my-2 cursor-pointer" src="https://investment-day-assets.sgp1.digitaloceanspaces.com/startupwheel/2021/04/19165313/uc-9-1536x646.png" alt="logo-image" />
            <div className="w-full rounded-lg px-7 py-5 border-solid border-[1px] border-gray-300">
                <h1 className="text-2xl mb-4 font-medium">Sign-In</h1>
                {error && <p className="text-sm text-red-500 font-semibold mb-2">Can't signin. Something went wrong</p>}

                <Formik
                    initialValues={INITIAL_SIGNIN}
                    validationSchema={VALIDATION_SIGNIN}
                    onSubmit={submitHandler}
                >
                    <Form>
                        <div className="mb-2">
                            <label className="auth-form-label" htmlFor="email">Email</label>
                            <Field className="auth-form-field" id="email" type="email" name="email" />
                            <ErrorMessage name="email" component="p" className="auth-form-error" />
                        </div>
                        <div className="mb-2">
                            <label className="auth-form-label" htmlFor="password">Password</label>
                            <Field className="auth-form-field" id="password" type="text" name="password" />
                            <ErrorMessage name="password" component="p" className="auth-form-error" />
                        </div>
                        <button disabled={isLoading} type="submit" className="bg-[#f1c75e] block py-1 rounded-lg w-full text-[13px] mt-4 outline-none border-solid border-[1px] border-gray-400 hover:opacity-80">Sign-Up</button>
                    </Form>
                </Formik>
                <p className="text-xs mt-6 mb-7">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            </div>
            <p className="text-xs text-center my-10 ">New to Amazon?</p>
            <button onClick={toggle} className="bg-[#dfe2e8] py-1 w-full border-solid border-[1px] border-gray-400 rounded-lg text-[13px] hover:opacity-80">Create your Amazon account</button>
            {isLoading && <ModalLoadingSpinner />}
        </div>
    );
}

export default SignIn;
