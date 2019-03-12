import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  background: none;
  outline: none;
  border: 0.15rem solid var(--mainBlue);
  border-radius: 0.3rem;
  color: var(--mainBlue);
  padding: 0.3rem 0.6rem;
  box-sizing: border-box;
  margin: 0.2rem 0.5rem 0.2rem 0;
  text-decoration: none;
  transition: all 0.3s ease-out;

  &:hover {
    background: var(--mainBlue);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    color: var(--mainWhite);
  }

  &:focus {
    outline: none;
  }
`;