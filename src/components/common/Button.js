import styled from "styled-components"

export const Button = styled.button`
  padding: 20px;
  background: black;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  white-space: nowrap;
  ${props => (props.block ? "display: block; width: 100%;" : "")}

  &:hover {
    background: #222;
  }
`
