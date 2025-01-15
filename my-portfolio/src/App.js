import React, { useRef } from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";

const App = () => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header />
      <Introduction onArrowClick={scrollToProjects} />
      <div ref={projectsRef}>
        <Projects />
      </div>
    </div>
  );
};

export default App;
