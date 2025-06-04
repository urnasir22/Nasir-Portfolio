import React, { Component } from "react";
import EducationComponent from "../../pages/education/EducationComponent";
import { education } from "../../portfolio";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <img
                  src={require(`../../assests/images/${education.header_image_path}`)}
                  alt="Education"
                />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
              </div>
            </div>
          </Fade>
          <EducationComponent theme={this.props.theme} />
        </div>
      </div>
    );
  }
}

export default Education;