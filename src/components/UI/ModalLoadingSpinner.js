import ReactDOM from 'react-dom';
import LoadingSpinner from './LoadingSpinner';

const ModalLoadingSpinner = () => {
    return (
        <>
            {ReactDOM.createPortal(
                <div className="fixed z-10 top-0 bottom-0 left-0 right-0 bg-[#64646440] flex justify-center items-center">
                    <LoadingSpinner className="w-12 h-12" />
                </div>
                , document.getElementById('modal')
            )}
        </>
    );
}

export default ModalLoadingSpinner;
