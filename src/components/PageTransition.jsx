// PageTransition.js
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useLocation } from "react-router-dom";
import "../assets/styles/Components/pageTransition.css";

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={300} classNames="fade">
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;
