import React, { useState } from 'react'
import { styled } from 'styled-components'

export default function Button(props: any) {
 const { primary, buttonText, isSolid } = props
 const Button = styled.button`
  background-color: ${props => (isSolid ? "#310E93" : "transparent")};
  color: #fff;
  font-size: 16px;
  border: 1px solid white;
  padding: 10px 20px;
  cursor: pointer;
`;

  return (
   <Button>{buttonText}</Button>
  )
}
