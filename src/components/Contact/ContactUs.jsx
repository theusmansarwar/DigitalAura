import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">

      <div className="contact-image"></div>

      <div className="contact-form">
        <form>
          <div className="row">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" placeholder="|" />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="example@email.com" />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 012 3456 789" />
            </div>
          </div>
           <br />
          <div className="input-group">
            <label>Select Subject?</label>
            <div className="radio-group">
              <label><input type="radio" name="subject" defaultChecked /> General Inquiry</label>
              <label><input type="radio" name="subject" /> General Inquiry</label>
              <label><input type="radio" name="subject" /> General Inquiry</label>
              <label><input type="radio" name="subject" /> General Inquiry</label>
            </div>
          </div>
        <br /><br />
          <div className="input-group">
            <label>Message</label>
            <textarea placeholder="Write your message.."></textarea>
          </div>

          <button type="submit" className="send-btn" id="sub-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
