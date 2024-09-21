import './Modal.css'; // Импортируем стили для модального окна

const Modal = ({ message, onClose }) => {
    if (!message) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>{message}</p>
                <button onClick={onClose} className="modal-close">Close</button>
            </div>
        </div>
    );
};

export default Modal;
