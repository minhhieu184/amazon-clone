import React, { useEffect } from 'react';
import { useAuth } from '../../context/auth/authContext';
import { useHistory } from 'react-router-dom';
import { useDatabase } from '../../context/database/databaseContext';


import ModalLoadingSpinner from '../UI/ModalLoadingSpinner';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { motion } from 'framer-motion';

const INITIAL_SIGNUP = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
}

const VALIDATION_SIGNUP = Yup.object({
    name: Yup.string().required('Enter name')
        .min(4, 'Name must be at least 4 characters long'),
    email: Yup.string().required('Enter email address')
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Must be an email address'),
    password: Yup.string().required('Enter password')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,14}$/, "7-14 characters, at least one letter, one number and one special character"),
    confirmPassword: Yup.string().required('Enter confirm password')
        .oneOf([Yup.ref('password'), null], "Those passwords didn't match. Try again."),
    phone: Yup.string().matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Must be a phone number')
})

const signupVariants = {
    initial: {
        opacity: 0,
        x: 300
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 1,
        x: -300,
    }
}

const SignUp = ({ toggle }) => {
    const history = useHistory()
    const { signup, isLoading, error, resetState } = useAuth()
    const { setDocument, isLoading: setLoading } = useDatabase()

    const submitHandler = async values => {
        const res = await signup(values.email, values.password)
        const { password, confirmPassword, ...profile } = values
        await setDocument('profiles', res.user.uid, profile)
    }

    useEffect(() => {
        resetState()
    }, [])

    return (
        <motion.div
            className="max-w-[350px] mx-auto min-h-screen overflow-auto"
            variants={signupVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key="key2"
        >
            <img onClick={() => history.push('/')} className="w-32 mx-auto my-2 cursor-pointer" src="https://investment-day-assets.sgp1.digitaloceanspaces.com/startupwheel/2021/04/19165313/uc-9-1536x646.png" alt="logo-image" />
            <div className="w-full rounded-lg px-7 py-5 border-solid border-[1px] border-gray-300">
                <h1 className="text-2xl mb-4 font-medium">Sign-Up</h1>
                {error && <p className="text-sm text-red-500 font-semibold mb-2">Can't signup. Something went wrong</p>}

                <Formik
                    initialValues={INITIAL_SIGNUP}
                    validationSchema={VALIDATION_SIGNUP}
                    onSubmit={submitHandler}
                >
                    <Form>
                        <div className="mb-2">
                            <label className="auth-form-label" htmlFor="name">Name</label>
                            <Field className="auth-form-field" id="name" type="text" name="name" />
                            <ErrorMessage name="name" component="p" className="auth-form-error" />
                        </div>
                        <div className="mb-2">
                            <label className="auth-form-label" htmlFor="email">Email</label>
                            <Field className="auth-form-field" id="email" type="email" name="email" />
                            <ErrorMessage name="email" component="p" className="auth-form-error" />
                        </div>
                        <div className="mb-2">
                            <label className="auth-form-label" htmlFor="password">Password</label>
                            <Field className="auth-form-field" id="password" type="password" name="password" />
                            <ErrorMessage name="password" component="p" className="auth-form-error" />
                        </div>
                        <div className="mb-2">
                            <label className="auth-form-label" htmlFor="confirmPassword">ConfirmPassword</label>
                            <Field className="auth-form-field" id="confirmPassword" type="password" name="confirmPassword" />
                            <ErrorMessage name="confirmPassword" component="p" className="auth-form-error" />
                        </div>
                        <div className="mb-2">
                            <label className="auth-form-label" htmlFor="phone">Phone</label>
                            <Field className="auth-form-field" id="phone" type="text" name="phone" />
                            <ErrorMessage name="phone" component="p" className="auth-form-error" />
                        </div>
                        <div className="mb-2">
                            <label className="auth-form-label" htmlFor="address">Address</label>
                            <Field className="auth-form-field" id="address" type="text" name="address" />
                            <ErrorMessage name="address" component="p" className="auth-form-error" />
                        </div>
                        <button disabled={isLoading} type="submit" className="bg-[#f1c75e] block py-1 rounded-lg w-full text-[13px] mt-4 outline-none border-solid border-[1px] border-gray-400 hover:opacity-80">Sign-Up</button>

                    </Form>

                </Formik>

                <p className="text-xs mt-6 mb-7">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            </div>
            <p className="text-xs text-center my-10 ">
                Already have an account?
                <span onClick={toggle} className="text-[#007085] hover:underline ml-1 cursor-pointer">Sign-In</span>
            </p>
            {(isLoading || setLoading) && <ModalLoadingSpinner />}

        </motion.div>


    );
}

export default SignUp;
