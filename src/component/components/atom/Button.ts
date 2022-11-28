import styled from "styled-components";

export const Button = styled.button`
  padding: 0 1rem;
  background-color: ${props => props.theme.colorUIBase};
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--raddi);
  color: ${props => props.theme.color};;
  border:none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
`
export const ButtonChange = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.background};
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--raddi);
  color: ${props => props.theme.color};;
  border:none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: pointer;
`
