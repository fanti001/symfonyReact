import React, { useContext } from "react";
import DeleteButton from "../../atoms/DeleteButton/DeleteButton";
import { StyledAverage, StyledInfo, Wrapper } from "./UsersListItem.styles";
import { UsersContext } from "../../../providers/UsersProvider";

const UsersListItem = ({
  userData: { average, name, attendance = "0%" },
  ...props
}) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper {...props}>
      <StyledAverage value={average}>{average}</StyledAverage>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

export default UsersListItem;
