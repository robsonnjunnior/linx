import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
  display: block;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 10px;
`

const Property = styled(Label)`
  color: ${({ theme }) => theme.textTertiaryColor};
`

const Description = styled(Label)`
  color: ${({ theme }) => theme.propertyDescriptionColor};
`

export {
  Container,
  Flex,
  Property,
  Description,
}
