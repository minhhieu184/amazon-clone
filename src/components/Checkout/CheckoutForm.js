import React, { useEffect } from 'react';
import { useAuth } from '../../context/auth/authContext';
import { useDatabase } from '../../context/database/databaseContext';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { cartActions } from '../../store/cartSlide';

import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import ModalLoadingSpinner from '../UI/ModalLoadingSpinner';
import NotificationCard from '../UI/NotificationCard';
import Modal from '../UI/Modal';

const VALIDATION_CHECKOUT = Yup.object({
    name: Yup.string().required('Enter name')
        .min(4, 'Name must be at least 4 characters long'),
    phone: Yup.string().matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Must be a phone number'),
    address: Yup.string().required('Enter shipping address'),
})

const CheckoutForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const cart = useSelector(state => state.cart.items)
    const { profile } = useAuth()
    const { isLoading, error, isCompleted, addDocArray, resetState } = useDatabase()

    useEffect(() => {
        resetState()
    }, [])

    const submitHandler = async (values, onSubmitProps) => {
        const d = new Date()
        const order = {
            infor: {
                ...values,
                createdAt: d.getTime(),
            },
            items: cart
        }
        console.log("submitHandler ~ profile", profile)
        const isSuccess = await addDocArray('orders', profile.uid, order)
        if (isSuccess) {
            dispatch(cartActions.resetCart())
            setTimeout(() => {
                history.push('/')
            }, 2000)
        }
    }

    return (
        <div className="p-6 col-span-2">
            <h2 className="text-2xl mb-6 font-medium">Select a shipping address</h2>
            {error && <p className="text-sm text-red-500 font-semibold mb-2">Cannot order. Please try again!</p>}
            <Formik
                initialValues={{
                    name: profile.name,
                    phone: profile.phone,
                    address: profile.address,
                }}
                validationSchema={VALIDATION_CHECKOUT}
                onSubmit={submitHandler}
                enableReinitialize
            >
                <Form>
                    <div className="mb-2">
                        <label className="auth-form-label" htmlFor="name">Name</label>
                        <Field className="auth-form-field" id="name" type="text" name="name" />
                        <ErrorMessage name="name" component="p" className="auth-form-error" />
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
                    <div className="flex mt-8 justify-between items-center">
                        <Link className="text-xs hover:text-orange-500 hover:underline" to="/cart">Back to cart</Link>
                        <button disabled={isLoading} type="submit" className="bg-orange-500 w-1/3 block py-2 rounded-lg text-sm text-white font-normal outline-none hover:opacity-80">Order</button>
                    </div>
                </Form>
            </Formik>
            {isLoading && <ModalLoadingSpinner />}
            <Modal isShow={isCompleted}>
                <NotificationCard type="success" message="Your order has been completed" />
            </Modal>
        </div>
    );
}

export default CheckoutForm;
