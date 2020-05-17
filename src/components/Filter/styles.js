import styled from 'styled-components'

const Label = styled.label`
  color: ${({ theme }) => theme.textPrimaryColor};
  display: inline-block;
  margin-top: 6px;
  font-size: 30px;
  font-weight: bold;
`

const Container = styled.div`
  display: block;
`

const Form = styled.form`
  margin-top: 30px;
`

const FormControl = styled.div`
  display: flex;
  padding: 15px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.textSecondaryColor};;
`

const Input = styled.input`
  border: none;
  color: ${({ theme }) => theme.textPrimaryColor};
  width: 100%;
  font-size: 16px;
  background-color: transparent;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.textSecondaryColor};
    opacity: 1;
  }
`

const SearchButton = styled.button`
  border: none;
  color: transparent;
  background-color: transparent;

  :focus {
    cursor: pointer;
    outline: none;
  }
`

const Icon = styled.img`
  width: 25px;
`

export {
  Label,
  Container,
  Form,
  FormControl,
  Input,
  SearchButton,
  Icon
}
