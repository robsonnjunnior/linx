import React from 'react'
import { Flex, Property, Description } from './styles'

function Item({ property, description }) {
  return (
    <Flex>
      <Property>{property}</Property>
      <Description>{description}</Description>
    </Flex>
  )
}

export default Item
