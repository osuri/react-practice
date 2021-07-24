import React from "react";
import {useHistory} from 'react-router-dom'

const About = () => {
  const history = useHistory();
  return (
    <>
  <h3>This is About component</h3>
  <button onClick={()=> history.push("/")}>Go to Home Page</button>
  </>
  );
};
export default About;
