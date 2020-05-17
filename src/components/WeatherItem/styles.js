import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.textSecondaryColor};
  border-radius: 14px;
  display: block;
  margin-bottom: 20px;
  cursor: pointer;

  :hover {
    transition-duration: 0.1s;
    transform: scale(1.1);
    transform-origin: center bottom;
    background-color: ${({ theme }) => theme.weatherItemHoverBackgroundColor};
    border-color: ${({ theme }) => theme.weatherItemHoverBackgroundColor};
  }
`

const Block = styled.div`
  display: block;
`

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

const LabelWeekday = styled.label`
  color: ${({ theme }) => theme.textSecondaryColor};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
`

const LabelClouds = styled.label`
  font-weight: bold;
  color: ${({ theme }) => theme.textSecondaryColor};
  display: inline-block;
  font-size: 12px;
  margin-left: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`

const LabelWind = styled(LabelClouds)`
  margin-bottom: 0px;
`

const LabelTemperature = styled.label`
  color: ${({ theme }) => theme.textPrimaryColor};
  font-size: 14px;
  display: inline-block;
  margin-top: 60px;
  margin-bottom: 10px;
  margin-left: 20px;
  font-weight: bold;
  cursor: pointer;
`

const ImageIcon = styled.img`
  width: 30px;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
`

export {
  Container,
  Block,
  FlexBetween,
  LabelWeekday,
  LabelClouds,
  LabelWind,
  LabelTemperature,
  ImageIcon
}
