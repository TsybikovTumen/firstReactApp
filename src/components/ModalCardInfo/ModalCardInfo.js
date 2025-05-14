import Modal from 'react-modal';

import './styles.css'

const ModalCardInfo = ({isOpen, onClose, info}) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}s style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Цвет фона оверлея (темный)
            },
            content: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)', // Центрирование модального окна
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: '#fff', // Цвет фона модального окна
                width: '400px', // Ширина модального окна
                maxWidth: '80%', // Максимальная ширина
            }}}>
            <div style={{display: "flex"}}>
                <img src={info.icon} alt={info.name} className="icon"/>
                <div>
                    <h2>{info.name}</h2>
                    <p>{info.price}</p>
                    <p>{info.description}</p>
                </div>
                <button onClick={onClose} style={{marginLeft: "auto", marginBottom: "auto", cursor: "pointer"}}>✖</button>
            </div>
        </Modal> 
    )
};

export default ModalCardInfo;