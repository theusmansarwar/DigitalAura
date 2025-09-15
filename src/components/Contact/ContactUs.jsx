'use client'
import { useState } from "react";
import "./ContactUs.css";
import { CreateLeads } from "@/DAL/Create";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    query: "",
    budget: "",
    subject: "",
  });
  const [errors, setErrors] = useState({});
   const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubjectChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      const subjects = new Set(prev.subject);
      if (checked) {
        subjects.add(value);
      } else {
        subjects.delete(value);
      }
      return { ...prev, subject: [...subjects] };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

   

    const formatSubject = (subjects) => {
      if (subjects.length === 0) return "";
      if (subjects.length === 1) return subjects[0];
      return subjects.slice(0, -1).join(", ") + " and " + subjects.slice(-1);
    };
    const payload = {
      name: formData.name,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      query: formData.query,
      budget: formData.budget,
      subject: formatSubject(formData.subject),
    };

    try {
      const res = await CreateLeads(payload);

      if (res.status == 201) {
        setStatus("success");
        toast.success(res?.message || "Form submitted successfully");
        setErrors({});
        setFormData({
          name: "",
          lastname: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          budget: "",
        });
      }
      if (res?.status === 400) {
        const fieldErrors = {};
        res.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        setStatus("error");
      }
    } catch (err) {
      if (err.response?.status == 400 && err.response.data?.missingFields) {
        const fieldErrors = {};
        err.response.data.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        setStatus("error");
        toast.error("Submission failed. Please try again.");
      }
    }
  };

  

  return (
    <div className="contact-container">
      <div className="contact-image"></div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-group">
              <label>First Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John"
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Doe"
              />
              {errors.lastname && <span className="error-msg">{errors.lastname}</span>}
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
              />
              {errors.email && (<span className="error-msg">{errors.email}</span>)}
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 012 3456 789"
              />
                {errors.phone && (<span className="error-msg">{errors.phone}</span>)}
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Budget</label>

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select Budget</option>
                <option value="10k">10k</option>
                <option value="20k">20k</option>
                <option value="50k">50k</option>
                <option value="100k+">100k+</option>
              </select>
            </div>
          </div>

          <br />
          <div className="input-group">
            <label>Select Subject / Service?</label>
             {errors.subject && (
                <span className="error-msg">{errors.subject}</span>
              )}
             <div className="radio-group-grid">
              {[
                "Social Media Marketing",
                "Youtube Automation",
                "Graphic Designing",
                "General Inquery",
                "Other"
              ].map((subject) => {
                const id = subject.toLowerCase().replace(/\s+/g, "-");
                return (
                  <div className="radio-element" key={id}>
                    <input
                      id={id}
                      type="checkbox"
                      name="subject"
                      value={subject}
                      checked={formData.subject.includes(subject)}
                      onChange={handleSubjectChange}
                    />

                    <label htmlFor={id} className="radio-wrapper">
                      {subject}
                    </label>
                  </div>
                );
              })}
            </div>
     
          </div>

          <br />
          <div className="input-group">
            <label>Message</label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Write your message.."
            />
          </div>

          <button type="submit" className="send-btn" id="sub-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
