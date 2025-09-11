 import "./JoinUs.css";

const JoinUs = () => {
  return (
    <>
      <div className="blogs-section">
        {/* Blogs Button */}
        <button className="blog-btn">
          <img src='/image.png' alt="icon" className="icon" />
          Careers
        </button>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
          nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.tellus sed augue semper porta. Mauris massa.
        </p>
          <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
          nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.tellus sed augue semper porta. Mauris massa.
        </p>
          <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
          nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.tellus sed augue semper porta. Mauris massa.
        </p>
          <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
          nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa.tellus sed augue semper porta. Mauris massa.
        </p>
     
        <div className="profile-image"></div>
      </div>

 <div className="form-wrapper">
  {/* Heading center */}
  <div className="form-header">
    <h2 className="form-title">Ready to Take the Next Step ?</h2>
    <p className="form-subtitle">
      Fill out the form below and take the first step toward an exciting career with us.
      Let’s build the future together!
    </p>
  </div>

  {/* Left form + Right image ek row me */}
  <div className="form-body">
    <div className="form-left">
      <form className="form-fields">
        <div className="form-row">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="text" placeholder="Job title" id="job" />
        <input type="email" placeholder="Email address" id="eaddress" />

        <div className="upload-box">
          <p>Drag & drop or click to choose file</p>
          <span>Upload an image or PDF</span>
        </div>

        <button type="submit" className="sen-btn">Send</button>
      </form>
    </div>

    <div className="form-right"></div>
  </div>
</div>

    </>
  );
};

export default JoinUs;
