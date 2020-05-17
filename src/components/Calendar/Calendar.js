import React from 'react'
import { getDayMount, getHours } from 'utils'
import { Date, Hour, Container } from './styles'

function Calendar() {
  return (
    <Container>
      <Date>
        {getDayMount()}
      </Date>
      <Hour>
        {getHours()}
      </Hour>
    </Container>
  )
}

export default Calendar
