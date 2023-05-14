import React from "react";
import UsersListItem from "../../molecules/UsersListItem/UsersListItem";
import { StyledList } from "./UsersList.styled";
import { Title } from "../../atoms/Title/Title";

const UsersList = ({ users, handleOpenStudentDetails }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem
            onClick={() => handleOpenStudentDetails(userData.id)}
            key={userData.id}
            userData={userData}
          />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
