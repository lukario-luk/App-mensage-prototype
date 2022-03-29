import React, { Component } from "react";
import styled from "styled-components";
import walpaper from "./assets/walpaper.jpg"
import About from "./components/About.js";
import imgGroup from "./assets/img-group.jpeg"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  width:100%;
  height:100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url(${walpaper});
  background-size:contain;
`;
const Group = styled.section`
  width: 100%;
  padding:10px 16px;
  display:flex;
  align-items:center;
  background-color:#fefae0;
  img{
    width:40px;
    height:40px;
    border-radius:50%;
    margin-right:20px;
  }
`;

const Mensagens = styled.section`
  padding-left:10px;
`
class App extends Component {
  state = {
    abautInforms: [
      {
        FirstName: "Lucas",
        name: "Lucas de Souza Pinto",
        age: "20",
        wantStady: "Java"
      },
      {
        FirstName: "Vitória",
        name: "Vitóira Ramos de Oliveira",
        age: "21",
        wantStady: "IOS"
      },
      {
        FirstName: "Anna",
        name: "Anna Elisa Belos",
        age: "19",
        wantStady: "Swift"
      },
      {
        FirstName: "Noa",
        name: "Noa Gabriel Cruz Lima",
        age: "20",
        wantStady: "Python"
      }
    ]
  };
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Group>
          <img src={imgGroup} alt="Imagem representando um logo qualquer de escola; imagem representativa para fins apenas ilustrativos." />
          <h1>Grupo do Junin</h1>
          </Group>
          <Mensagens>
        {this.state.abautInforms.map((item) => (
          <About
            firstName={item.FirstName}
            name={item.name}
            age={item.age}
            wantStudy={item.wantStady}
          />
        ))}
        </Mensagens>
      </Container>
    );
  }
}

export default App;
