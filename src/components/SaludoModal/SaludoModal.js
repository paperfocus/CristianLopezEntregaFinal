import React from 'react';
import Modal from 'react-bootstrap/Modal';
import '../SaludoModal/SaludoModal.css'

const SaludoModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>¡Gracias por su compra!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div style={{ textAlign: 'left' }}>
        <p>
          Esperamos que disfrute de sus productos.
          <br />Pronto nos contactaremos con usted.
          <br /><br />
          ¡Vuelva pronto!
        </p>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btnCerrarModal" onClick={handleClose}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default SaludoModal;
