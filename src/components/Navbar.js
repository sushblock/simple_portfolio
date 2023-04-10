import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css';
import ReorderIcon from "@material-ui/icons/Reorder";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = React.useState(false);

  //useLocation hook to get the current path
  const location = useLocation();

  //useEffect hook to close the navbar when the path changes
  React.useEffect(() => {
    setExpandNavbar(false);
  }, [location]); 

  return (
    <div className="navbar" id={expandNavbar? "open":"close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {expandNavbar ? <CloseIcon /> : <ReorderIcon />}
        </button>        
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experiences">Experiences</Link>        
      </div>
    </div>
  );
}

export default Navbar;
