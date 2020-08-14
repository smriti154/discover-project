import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { MdFavorite, MdTrendingUp } from 'react-icons/md';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col } from 'reactstrap';


const ProjectDiv = ({title, list, label}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
      <Row>
        <Col>
            <h5 className="text-left">
            {label === 'like' ? <MdFavorite/> : <MdTrendingUp/> }
            {title}
            </h5>
        </Col>
        <Col xs="3">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
            <DropdownToggle caret>
                Last Week
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Older</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
            </DropdownMenu>
            </Dropdown>
        </Col>
      </Row>
      <br>
      </br>
      { list.map((project) => <ProjectCard project={project} key={project.id}/> )}
    </div>
  )
}

export default ProjectDiv;
