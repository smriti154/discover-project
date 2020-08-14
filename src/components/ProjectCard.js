import React from 'react';
import { Row, Col } from 'reactstrap';
import { AiOutlineEye } from 'react-icons/ai';
import { MdFavorite, MdTrendingUp, MdPeopleOutline } from 'react-icons/md';

const ProjectCard = ({project}) => {
  let {name, image_url, description} = project
  return (
    <div>
      <Row>
        <Col xs="2">
          <img style={{width: "70px"}} src={image_url} className="img-responsive" alt="img"/>
        </Col>
        <Col>
         <Row>
            <Col xs="6"><h5>{name}</h5></Col>
            <Row xs="3">
                <Col><MdFavorite/>23 </Col>
                <Col><AiOutlineEye/>56 </Col>
                <Col><MdPeopleOutline/>67 </Col>
            </Row>
          </Row>
          <p>{description}</p>
        </Col>
      </Row>
      <hr />
    </div>
  )
}

export default ProjectCard;