import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import "./Info.css";

const contactData = [
  {
    id: 1,
    icon: <FiPhoneCall />,
    title: "PHONE",
    detail: "+1012 3456 789",
  },
  {
    id: 2,
    icon: <MdEmail />,
    title: "E MAIL",
    detail: "demo@gmail.com",
  },
  {
    id: 3,
    icon: <GoLocation />,
    title: "OUR OFFICE",
    detail: "132 Dartmouth Street\nBoston, Massachusetts\n02156 United States",
  },
];

const ContactInfo = () => {
  return (
    <div className="contact-wrapper">
      <h2 className="contact-heading">CONTACT INFORMATION</h2>
      <div className="contact-cards">
        {contactData.map((item) => (
          <div key={item.id} className="contact-card">
            <div className="icon-circle">{item.icon}</div>
            <h3 className="contact-title">{item.title}</h3>
            <p className="contact-detail">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
