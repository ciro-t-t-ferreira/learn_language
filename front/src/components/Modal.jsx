/* eslint-disable react/prop-types */

const Modal = ({ ModalContent, toggleModal}) => {
    return (
        <>
        <div 
          className="overlay"
          onClick={toggleModal}></div> 
        <div className="modal">
            <ModalContent />
            <button 
                className="close-button"
                onClick={toggleModal}>CLOSE
            </button> 
        </div>
        </>
     );
}
 
export default Modal;