// AlertModal
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './AlertModal.css'

const AlertModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>¡Alerta!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        ¡Completa todos los campos (*) obligatorios antes de realizar el pedido!.
      </Modal.Body>
      <Modal.Footer>
        <Button className='btnAlertaModal' variant="primary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
