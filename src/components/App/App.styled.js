import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 16px;
  margin: 20px auto;
  width: 375px;
  border-radius: 10px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  background-color: rgb(224, 161, 161);
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: 900;
  color: white;
`;

export const Subtitle = styled.h2`
  font-weight: 700;
  color: white;
`;
