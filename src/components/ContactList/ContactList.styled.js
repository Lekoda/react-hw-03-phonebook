import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  padding: 10px 15px;
  font-weight: 700;
  color: rgb(76, 72, 72);
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StyledDeleteBtn = styled.button`
  width: 30px;
  height: auto;
  cursor: pointer;
  display: inline-block;
  background-image: url(../../images/trash-can.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  border: none;
  outline: none;
  transition: transform 250ms var(--timingFn);
  &:hover {
    transform: scale(1.1);
  }
`;
