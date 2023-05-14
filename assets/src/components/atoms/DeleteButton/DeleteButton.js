import React from 'react';
// import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete-icon.svg';
import DeleteIcon  from '../../../assets/icons/delete-icon.svg';
import { StyledButton } from './DeleteButton.styled';

const DeleteButton = (props) => (
  <StyledButton {...props}>
    <span><img src={DeleteIcon} alt="delete button"/></span>
  </StyledButton>
);

export default DeleteButton;
