import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormInput } from "../contextProvider/formInputProvider";

const FormModel = () => {
  const { state, dispatch } = useFormInput();

  const handleClose = () => {
    dispatch({ type: "SET_MODEL", payload: false });
  };

  return (
    <>
      <Modal show={state.model} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you {state.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Contact Us form successfully submited.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { FormModel };
