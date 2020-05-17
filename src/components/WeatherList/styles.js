import styled from 'styled-components'

const Container = styled.div``

const Label = styled.label`
  display: inline-block;
  margin-top: 35px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textPrimaryColor};
`

export { Container, Label }
