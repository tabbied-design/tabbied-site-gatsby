import styled from "styled-components"

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 16px 0;
  font-size: 14px;
  margin-bottom: 8px;
  border: none;
  border-bottom: 1px solid #ddd;
  box-shadow: none;

  &:focus,
  &:active {
    border-color: rebeccapurple;
  }
`
