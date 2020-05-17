import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import {
  Loader,
  Sidebar,
  Welcome,
  Filter,
  WeatherList,
  Card
} from 'components'
import {
  Content,
  CardContainer
} from './styles'

function Home() {
  return (
    <Row>
      <Loader />
      <Col lg={1}>
        <Sidebar />
      </Col>
      <Col lg={7}>
        <Content>
          <Welcome />
          <Filter />
          <WeatherList />
        </Content>
      </Col>
      <Col lg={4}>
        <CardContainer>
          <Card />
        </CardContainer>
      </Col>
    </Row>
  )
}

export default Home
