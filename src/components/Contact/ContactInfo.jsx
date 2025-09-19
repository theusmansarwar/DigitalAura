import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import "./Info.css";

const contactData = [
  {
    id: 1,
    icon: <FiPhoneCall />,
    title: "PHONE",
    detail: "+46 763177364",
    link: "tel:+46763177364", // phone link
  },
  {
    id: 2,
    icon: <MdEmail />,
    title: "E MAIL",
    detail: "info@digitalaura.se",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=info@digitalaura.se", // email link
  },
  {
    id: 3,
    icon: <TiLocation />,
    title: "OUR OFFICE",
    detail: "132 Dartmouth Street\nBoston, Massachusetts\n02156 United States",
    link: "https://share.google/DDk8VxJU7znODpsvA", // map link
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
            <a
              href={item.link}
              className="contact-detail"
              target={item.id === 3 ? "_blank" : "_self"}
              rel={item.id === 3 ? "noopener noreferrer" : ""}
            >
              {item.detail.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
