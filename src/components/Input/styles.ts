import styled from 'styled-components'

export const Container = styled.div`
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  padding: 5px;
  border-radius: 5px;
  opacity: 1;
  width: 100%;
  color: #8f8a9b;
  transition: all 1s;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }

  & + div {
    margin-top: 10px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #8f8a9b;
    outline: 0;

    &::placeholder {
      color: #666360;
    }
    & + input {
      margin-top: 8px;
    }
  }
  svg {
    margin-right: 16px;
    color: #365df0;
  }
`
