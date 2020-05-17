import styled from 'styled-components'

const Container = styled.div`
  display: block;
`

const Date = styled.label`
  display: block;
  color: ${({ theme }) => theme.textPrimaryColor};
  text-align: center;
`

const Hour = styled.label`
  display: block;
  margin-top: 8px;
  color: ${({ theme }) => theme.textSecondaryColor};
  text-align: center;
`

export {
  Container,
  Date,
  Hour
}
