import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("", { state: { name: "About" } });
  });

  return <div>About</div>;
};
export default About;
