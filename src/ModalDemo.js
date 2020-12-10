import React, { useState, useRef } from "react";
import Modal from "react-modal";

const ModalDemo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const userForm = useRef(null);
  function closeModal() {
    setModalIsOpen(false);
    const form = userForm.current;
    setInputValue(`${form["userInput"].value}`);
  }
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open modal</button>
      <br />
      <span>user input: {inputValue} </span>
      <Modal isOpen={modalIsOpen}>
        <div>
          <form ref={userForm}>
            <input name="userInput" />
            <button onClick={() => closeModal()}>close</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};
export default ModalDemo;
