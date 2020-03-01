import React from "react"
import styled from "styled-components"

export const Button = styled.button`
  margin: auto;
  display: block;
  width: auto;
  text-align: center;
  background-color: #3f51b5;
  border-radius: 5px;
  padding: 36px;
  font-size: 4em;
  text-decoration: none;
  color: white;
  font-family: sans-serif;

  @media (min-width: 768){
    font-size: 5em;
    width: 5em;
  }
`
