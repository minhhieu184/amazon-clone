import React from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ children, toggleHandler, isShow }) => {
    const overlayVariants = {
        initial: {
            opacity: 0,
            transition: {
                ease: 'linear',
                duration: 0.1
            }
        },
        animate: {
            opacity: 1,
        },
    }
    const modalVariants = {
        initial: {
            y: '-30%',
            x: '-50%',
            transition: {
                ease: 'linear',
                duration: 0.1
            }
        },
        animate: {
            y: '-50%',
            x: '-50%',
        },
    }

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <AnimatePresence>
                    {isShow &&
                        <motion.div
                            onClick={toggleHandler}
                            className="fixed z-50 top-0 right-0 left-0 bottom-0 bg-[#33333366]"
                            variants={overlayVariants}
                            initial="initial"
                            animate="animate"
                            exit="initial"
                        >
                            <motion.div
                                onClick={e => e.stopPropagation()}
                                className="absolute z-[100] top-1/2 left-1/2"
                                variants={modalVariants}
                            >
                                {children}
                            </motion.div>
                        </motion.div>
                    }
                </AnimatePresence>
                , document.getElementById('modal'))}
        </React.Fragment>
    );
}

export default Modal;
