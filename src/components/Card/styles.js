import styled from 'styled-components'

const Container = styled.div`
  float: left;
  background-color: ${({ theme }) => theme.textPrimaryColor};
  border-radius: 16px;
  min-height: calc(100vh - 20px);
  min-width: 27vw;
  display: block;
`

const DivImage = styled.div`
  position: relative;
  width: 30vw;
  margin-top: 120px;
  border-bottom: 0.3px solid #cccccc;
`

const Image = styled.img`
  width: 100%;
`

const DivLabel = styled.div`
  position: absolute;
  top: -30%;
  width: 100%;
  text-align: center;
`

const LabelTemperature = styled.label`
  font-size: 80px;
  font-weight: bold;
`

const LabelCelsius = styled.label`
  font-size: 60px;
  font-weight: lighter;
  position: absolute;
  display: inline-block;
  margin-top: -10px;
`

export {
  Container,
  DivImage,
  Image,
  DivLabel,
  LabelTemperature,
  LabelCelsius
}
