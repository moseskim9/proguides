import React, { Component } from "react";

class ReportCard extends Component {
  render() {
    return (
      <div style={outerContainer}>
        <div style={container}>
          <div style={leftStyles}>
            <img src="https://place-hold.it/300x200" style={imageStyles}></img>
          </div>

          <div style={rightStyles}>
            <h1>Student Name</h1>
            <div className="courses">
              <h3>Courses</h3>
              <div style={listStyles}>
                <ol>
                  <li>Biology A (90.1%)</li>
                  <li>Math B (85.6%)</li>
                  <li>Biology A (90.1%)</li>
                  <li>Math B (85.6%)</li>
                  <li>Biology A (90.1%)</li>
                  <li>Math B (85.6%)</li>
                  <li>Biology A (90.1%)</li>
                  <li>Math B (85.6%)</li>
                  <li>Biology A (90.1%)</li>
                  <li>Math B (85.6%)</li>
                  <li>Biology A (90.1%)</li>
                  <li>Math B (85.6%)</li>
                  <li>Biology A (90.1%)</li>
                  <li>Math B (85.6%)</li>
                  <li>Biology A (90.1%)</li>
                  <li>Math B (85.6%)</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportCard;

const outerContainer = {
  display: "flex",
  justifyContent: "center"
};

const container = {
  display: "flex",
  height: "270px",
  width: "480px"
};

const leftStyles = {
  width: "30%",
  backgroundColor: "red",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const rightStyles = {
  width: "70%",
  backgroundColor: "blue"
};

const listStyles = {
  overflow: "scroll",
  height: "50px"
};

const imageStyles = {
  width: "100px",
  height: "100px"
};
