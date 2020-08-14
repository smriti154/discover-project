import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import ProjectDiv from './ProjectDiv';
import ProjectList from '../Products'

const ProjectLayout = () => {
  return (
    <Container>
      <Row>
        <Col ><ProjectDiv title='MOST LIKED' list={ProjectList} label='like'/></Col>
        <Col ><ProjectDiv title='MOST ACTIVE' list={ProjectList} label='active'/></Col>
      </Row>
    </Container>
  )
}

export default ProjectLayout;