import React from "react";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import DevIcon from "devicon-react-svg";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const devIconStyle = {
  width: "150px",
  padding: '10px'
};

const Skills = React.forwardRef(({ heading, hardSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
    <Container className="p-5 ">
      <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
        {heading}
      </h2>
      {hardSkills.map((skill, index) => {
        return (<img style={devIconStyle} src={skill}/>)
      })}
      
      
          
    </Container>
  </Jumbotron>
  );
});

export default Skills;
