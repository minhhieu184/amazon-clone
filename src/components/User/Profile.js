import React, { useEffect } from 'react';
import { useAuth } from '../../context/auth/authContext';

import ModalLoadingSpinner from '../UI/ModalLoadingSpinner';
import Section from './Section';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'


const VALIDATION_PROFILE = Yup.object({
    name: Yup.string().required('Enter name')
        .min(4, 'Name must be at least 4 characters long'),
    phone: Yup.string().matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Must be a phone number')
})



const Profile = () => {
    const { profile, changeProfile, isLoading, error, isDBLoading, dbError, isDBCompleted, resetState } = useAuth()

    const formInitialValues = {
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        address: profile.address,
    }

    const submitHandler = (values, onSubmitProps) => {
        changeProfile(values)
    }

    useEffect(() => {
        resetState()
    }, [])

    return (
        <Section key="profile" title="Your Profile">
            {isDBCompleted && <p className="text-sm text-green-500 font-semibold mb-2">Change profile successfully</p>}
            {(error || dbError) && <p className="text-sm text-red-500 font-semibold mb-2">Cannot change your profile. Try again.</p>}
            <Formik
                initialValues={formInitialValues}
                validationSchema={VALIDATION_PROFILE}
                onSubmit={submitHandler}
                enableReinitialize
            >
                <Form>
                    <div className="mb-2">
                        <label className="auth-form-label text-sm mb-1" htmlFor="name">Name</label>
                        <Field className="auth-form-field text-sm " id="name" type="text" name="name" />
                        <ErrorMessage name="name" component="p" className="auth-form-error" />
                    </div>
                    <div className="mb-2">
                        <label className="auth-form-label text-sm mb-1" htmlFor="email">Email</label>
                        <Field className="auth-form-field text-sm opacity-60" disabled id="email" type="email" name="email" />
                        <ErrorMessage name="email" component="p" className="auth-form-error" />
                    </div>
                    <div className="mb-2">
                        <label className="auth-form-label text-sm mb-1" htmlFor="phone">Phone</label>
                        <Field className="auth-form-field text-sm " id="phone" type="text" name="phone" />
                        <ErrorMessage name="phone" component="p" className="auth-form-error" />
                    </div>
                    <div className="mb-2">
                        <label className="auth-form-label text-sm mb-1" htmlFor="address">Address</label>
                        <Field className="auth-form-field text-sm " id="address" type="text" name="address" />
                        <ErrorMessage name="address" component="p" className="auth-form-error" />
                    </div>
                    <button type="submit" className="bg-orange-500 text-white font-medium block py-[10px] rounded-md w-full max-w-[10rem] mx-auto text-[13px] mt-4 outline-none hover:opacity-80">Update</button>
                </Form>
            </Formik>
            {(isLoading || isDBLoading) && <ModalLoadingSpinner />}
        </Section>
    );
}

export default Profile;
