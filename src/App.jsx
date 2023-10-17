import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import { EMPTY_FORM_VALUES, ENDPOINT_URL } from "./constants/users";
import UserList from "./components/UserList";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { useForm } from "react-hook-form";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [idUserToEdit, setIdUserToEdit] = useState(null);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
console.log(errors)

  const submit = (data) => {
    if (idUserToEdit) {
      updateUser(data);
    } else {
      createUser(data);
    }
  };

  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
    reset(EMPTY_FORM_VALUES);
    setIdUserToEdit(null);
  };

  const createUser = (data, form) => {
    axios
      .post(ENDPOINT_URL + "/users/", data)
      .then(() => {
        handleCloseModal();
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    axios
      .delete(ENDPOINT_URL + `/users/${id}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (data) => {
    axios
      .put(ENDPOINT_URL + `/users/${idUserToEdit}/`, data)
      .then(() => {
        getAllUsers();
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const getAllUsers = () => {
    axios
      .get(ENDPOINT_URL + "/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const handleClickEdit = (userToEdit) => {
    handleOpenModal();
    reset(userToEdit);
    setIdUserToEdit(userToEdit.id);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="min-h-screen bg-[url('/backgroundApp.jpg')] bg-cover">
      <Header handleOpenModal={handleOpenModal} />
      <Modal
        isShowModal={isShowModal}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        idUserToEdit={idUserToEdit}
        errors={errors}
      />
      <UserList
        users={users}
        deleteUser={deleteUser}
        handleClickEdit={handleClickEdit}
      />
    </main>
  );
}

export default App;
