import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from './store/cartSlide';
import { useDatabase } from './context/database/databaseContext';
import { useAuth } from './context/auth/authContext';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import AuthPage from './pages/AuthPage';
import UserPage from './pages/UserPage';
import CheckoutPage from './pages/CheckoutPage';
import CategoryPage from './pages/CategoryPage';
import Test from './pages/test';
import PrivateRoute from './components/PrivateRoute';
import ProductDetailPage from './pages/ProductDetailPage';
import ScrollToTop from './components/ScrollToTop';



const App = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    console.log("App ~ cart", cart)
    const { currentUser } = useAuth()
    console.log("App ~ currentUser", currentUser)
    const { setDocument, getDocument } = useDatabase()
    const [isInitCart, setIsInitCart] = useState(true);

    useEffect(() => {
        const getCart = async () => {
            const cart = await getDocument('cart', currentUser.uid)
            console.log("getCart ~ cart", cart)
            dispatch(cartActions.initialCart(cart))
            setIsInitCart(false)
        }
        if (currentUser) {
            getCart()
        } else {
            setIsInitCart(true)
            dispatch(cartActions.resetCart())
        }
    }, [currentUser])

    useEffect(() => {
        !isInitCart && currentUser && setDocument('cart', currentUser.uid, cart)
    }, [cart, isInitCart, currentUser])

    return (
        <AnimatePresence exitBeforeEnter>
            <ScrollToTop>
                <Switch location={location} key={location.key}>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/cart" exact component={CartPage} />
                    <PrivateRoute path="/auth" exact component={AuthPage} enable={!currentUser} />
                    <PrivateRoute path="/user" component={UserPage} enable={currentUser} to="/auth" />
                    <PrivateRoute path="/checkout" exact component={CheckoutPage} enable={currentUser} />
                    <Route path="/category/:category" component={CategoryPage} />
                    <Route path="/product/:id" component={ProductDetailPage} />
                    <Route path="/test" exact component={Test} />

                    <Route path="/cart/*">
                        <Redirect to="/cart" />
                    </Route>
                    <Route path="/auth/*">
                        <Redirect to="/auth" />
                    </Route>
                    <Route path="/checkout/*">
                        <Redirect to="/checkout" />
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </ScrollToTop>
        </AnimatePresence>
    );
}

export default App;