import styled from 'styled-components';

export const StyledAverage = styled.button`
  width: 34px;
  height: 34px;
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 1) return theme.colors.error;
    return theme.colors.grey;
  }};

  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
