import React from "react"
import styled from "styled-components"

//import styles
//import '../styles/styles.scss'

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none !important;
  font: 20px/24px Raleway;
  color: #F8A31B;
  padding: 10px 25px;
  cursor: pointer;
  background-color: white;
  letter-spacing: 0px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  letter-spacing: 2px;
  box-shadow: 0px 17px 50px #00000029;
  height: 4rem;
  width: 11.25rem;
  &:hover {
    box-shadow: 0px 17px 50px #00000029;
    background-color: #F8A31B;
    color: #FFFFFF;
    text-decoration: none;
  }
`

export default Button
