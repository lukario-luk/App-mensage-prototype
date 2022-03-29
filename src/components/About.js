import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;
const Container = styled.div`
  margin:10px;
  display:flex;
`
const Triangle = styled.div`
  width:1px;
  height:1px;
  border-top:15px #d6f5d3 solid ;
  border-right:15px #d6f5d3 solid ;
  border-bottom:15px solid transparent;
  border-left:15px solid transparent;
  

`
const Mensage = styled.div`
  padding:1.5%;
  background-color:#d6f5d3;
  border-radius: 0 15px 15px 15px;
`
const About = ({firstName, name, age, wantStudy}) => {
  return (
    <Container>
      <Triangle></Triangle>
      <Mensage>
        <GlobalStyle/>
      <h2>
        <b>{firstName}</b>
      </h2>
      <p>
        Meu nome Completo é {name}, eu estou com {age} anos de idade, e eu estou
        querendo estudar {wantStudy}.
      </p>
      </Mensage>
    </Container>
  );
};

export default About;
