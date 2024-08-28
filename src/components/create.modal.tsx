"use client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
interface IProps {
  showModalCreate: boolean;
  setShowModalCreate: (v: boolean) => void;
}
interface FormInput {
  title: string;
  author: string;
  content: string;
}

function CreateModal(props: IProps) {
  const { showModalCreate, setShowModalCreate } = props;
  const [formModal, setFormModal] = useState<FormInput>({
    title: "",
    author: "",
    content: "",
  });
  console.log("form modal", formModal);
  const handleOnchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormModal((prevFormModal) => ({
      ...prevFormModal,
      [name]: value,
    }));
  };
  const handleOnSubmit = () => {
    if (!formModal.title) {
      toast.error("not empty title!");
      return;
    }
    if (!formModal.author) {
      toast.error("not empty author!");
      return;
    }
    if (!formModal.content) {
      toast.error("not empty content!");
      return;
    }
    axios("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: formModal,
    })
      .then((res) => res.data)
      .then((res) => {
        if (res) {
          toast.success("Create succeed!");
          setShowModalCreate(false);
        }
      });
  };

  const handleCloseModal = () => {
    setFormModal({
      title: "",
      author: "",
      content: "",
    });
    setShowModalCreate(false);
  };
  return (
    <>
      <Modal
        size="lg"
        show={showModalCreate}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="......"
                name="title"
                value={formModal.title}
                onChange={handleOnchangeInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="......"
                name="author"
                value={formModal.author}
                onChange={handleOnchangeInput}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="content"
                value={formModal.content}
                onChange={handleOnchangeInput}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOnSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;
