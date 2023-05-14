import React, { useContext } from "react";
import { ViewWrapper } from "../components/molecules/ViewWrapper/ViewWrapper";
import UsersList from "../components/organisms/UsersList/UsersLists";
import { UsersContext } from "../providers/UsersProvider";
import useModal from "../components/organisms/Modal/useModal";

const Dashboard = () => {
  const { users } = useContext(UsersContext);
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleOpenStudentDetails = (id) => {
    console.log(id);
  };

  return (
    <ViewWrapper>
      <UsersList
        users={users}
        handleOpenStudentDetails={handleOpenStudentDetails}
      />
      {isOpen ? <Modal /> : null}
    </ViewWrapper>
  );
};

export default Dashboard;
