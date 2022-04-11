import React, { useEffect } from 'react';
import { useAuth } from '../../context/auth/authContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

import Section from './Section'
import ModalLoadingSpinner from '../UI/ModalLoadingSpinner';

const VALIDATION_CHANGE_PASSWORD = Yup.object({
    password: Yup.string().required('Enter password')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,14}$/, "7-14 characters, at least one letter, one number and one special character"),
    confirmPassword: Yup.string().required('Enter confirm password')
        .oneOf([Yup.ref('password'), null], "Those passwords didn't match. Try again."),
})

const ChangePassword = () => {

    const { changePassword, isLoading, error, resetState, isCompleted } = useAuth()
    console.log("ChangePassword ~ error", error)
    console.log("ChangePassword ~ isCompleted", isCompleted)

    const submitHandler = (values, onSubmitProps) => {
        onSubmitProps.resetForm()
        changePassword(values.password)
    }

    useEffect(() => {
        resetState()
    }, [])

    return (
        <Section key="changePassword" title="Change Password">
            {isCompleted && <p className="text-sm text-green-500 font-semibold mb-2">Change password successfully</p>}
            {error && <p className="text-sm text-red-500 font-semibold mb-2">Cannot change your password. Try again.</p>}
            <Formik
                initialValues={{
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={VALIDATION_CHANGE_PASSWORD}
                onSubmit={submitHandler}
            >
                <Form>
                    <div className="mb-2">
                        <label className="auth-form-label text-sm mb-1" htmlFor="password">New password</label>
                        <Field className="auth-form-field text-sm" id="password" type="text" name="password" />
                        <ErrorMessage name="password" component="p" className="auth-form-error" />
                    </div>
                    <div className="mb-2">
                        <label className="auth-form-label text-sm mb-1" htmlFor="confirmPassword">Confirm password</label>
                        <Field className="auth-form-field" id="confirmPassword" type="text" name="confirmPassword" />
                        <ErrorMessage name="confirmPassword" component="p" className="auth-form-error" />
                    </div>
                    <button disabled={isLoading} type="submit" className="bg-orange-500 text-white font-medium block py-[10px] rounded-md w-full max-w-[10rem] mx-auto text-[13px] mt-4 outline-none hover:opacity-80">Change</button>

                </Form>
            </Formik>
            {isLoading && <ModalLoadingSpinner />}
        </Section>
    );
}

export default ChangePassword;
