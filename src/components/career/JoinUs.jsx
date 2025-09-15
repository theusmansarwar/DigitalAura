import Button2 from "../Buttons/Button2";
import "./JoinUs.css";

const JoinUs = () => {
  return (
    <div className="join-us">
      <Button2 label="careers" />
      <div className="profile-image"></div>
      <Button2 label="Apply Now" />

      <div className="form-wrapper">
        {/* Heading center */}
        <div className="form-header">
          <h2 className="form-title">Ready to Take the Next Step ?</h2>
          <p className="form-subtitle">
            Fill out the form below and take the first step toward an exciting
            career with us. Let’s build the future together!
          </p>
        </div>

        {/* Left form + Right image ek row me */}
        <div className="form-body">
          <div className="form-left">
            <form className="form-fields">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" id="fname" placeholder="First name" />
                </div>

                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" placeholder="Last name" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="job">Job Title</label>
                <input type="text" id="job" placeholder="Job title" />
              </div>

              <div className="form-group">
                <label htmlFor="eaddress">Email Address</label>
                <input type="email" id="eaddress" placeholder="Email address" />
              </div>

              <div className="form-group">
                <label htmlFor="resume">Upload Resume</label>
                <div className="upload-box" id="resume">
                  <p>Drag & drop or click to choose file</p>
                  <span>Upload an image or PDF</span>
                </div>
              </div>

              <button type="submit" className="sen-btn">
                Send
              </button>
            </form>
          </div>

          <div className="form-right"></div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
