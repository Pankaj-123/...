import React from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Typist from "react-typist";

const sectionStyle = {
  width: `${window.innerWidth}px`,
  height: `${window.innerHeight}px`,
  display: "flex",
  flex: 1,
  zIndex: 0,
  postion: "relative",
  backgroundImage: `url('https://images.unsplash.com/photo-1550831106-2747f0d6a81c?ixlib=rb-1.2.1&auto=format&fit=crop&w=450&q=80')`
};

class App extends React.Component {
  render() {
    return (
      <div>
        <section className="back-img" style={sectionStyle}>
          <div>
            <Link style={{ textDecoration: "none" }} to="/main">
              <Button
                style={{
                  postion: "absolute",
                  top: `${window.innerHeight / 2 - 10}px`,
                  left: `${window.innerWidth / 2 - 100}px`,
                  textTransform: "none"
                }}
                variant="contained"
                color="primary">
                <Typist hideWhenDone="true">
                  <span>
                    WELCOME TO{" "}
                    <span style={{ color: "black", fontSize: 15 }}>
                      HopeLine
                    </span>{" "}
                  </span>
                  <Typist.Backspace
                    count={22}
                    delay={200}
                    hideWhenDone="true"
                  />
                  <span>CLICK HERE TO START </span>
                </Typist>
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
