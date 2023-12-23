// AcceptanceLetterModal.js
import React from 'react';
import Modal from 'react-modal';
import acceptImg from '../assets/accept.jpg'

const Letter = ({ isOpen, onRequestClose }) => {
    const customStyles = {
        content: {
            width: '80%',
            height: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#001f3f'
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Acceptance Letter Modal"
            ariaHideApp={false}
            style={customStyles}
        >
            <img src={acceptImg} alt="Acceptance Letter" />
        </Modal>
    );
};

export default Letter;
