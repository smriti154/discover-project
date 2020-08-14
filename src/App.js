import React from 'react';
import './App.css';
import { Jumbotron,  InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import ProjectLayout from './components/ProjectLayout'
import { AiOutlineSearch } from 'react-icons/ai';


function App() {
  return (
    <div className="">
      <Jumbotron>
        <header className="">
          <h1 style={{'margin-left': '112px', 'margin-top': '-48px'}}> DISCOVER PROJECTS</h1>
          <p style={{'color': "green", 'margin-left': '500px'}}>91098 public projects to discover</p>
          <InputGroup style={{'margin-left': '375px', 'margin-top': '-2px', width: '42%'}}>
            <Input placeholder="Type something..."/>
            <InputGroupAddon addonType="append">
              <Button><AiOutlineSearch/></Button>
            </InputGroupAddon>
          </InputGroup>
        </header>
      </Jumbotron>
      <ProjectLayout></ProjectLayout>
    </div>
  );
}

export default App;
