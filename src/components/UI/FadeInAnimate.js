import { motion } from "framer-motion";

const FadeInAnimate = ({ children, from, delayStart=0, ...props }) => {
    const pageVariants = {
        initial: {
            opacity: 0,
            x: from === 'right' ? '20vw' : '-20vw',
            y: 0,
        },
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.2,
                type: "spring",
                delay: delayStart,
            }
        },
        exit: {
            x: from === 'right' ? '20vw' : '-20vw',
            opacity: 0,
            y: 0,
            transition: {
                duration: 0.2,
                type: "spring"
            }
        }
    }
    return (
        <motion.div 
            {...props}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </motion.div>
    );
}

export default FadeInAnimate;
