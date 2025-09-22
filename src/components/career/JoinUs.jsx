"use client";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button2 from "../Buttons/Button2";
import "./JoinUs.css";
import { CreateApplication } from "@/DAL/Create";

const JoinUs = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    jobTitle: "",
  });

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files?.length > 0) {
      setSelectedFileName(e.target.files[0].name);
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.fname);
    form.append("lastName", formData.lname);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("jobTitle", formData.jobTitle);
    if (selectedFile) form.append("resume", selectedFile);

    try {
      const res = await CreateApplication(form);

      if (res.status === 201) {
        toast.success(
          res?.data?.message || "Application submitted successfully!"
        );
        setErrors({});
        setFormData({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          jobTitle: "",
        });
        setSelectedFileName("");
        if (fileInputRef.current) fileInputRef.current.value = null;
      } else if (res?.status === 400 && res.missingFields) {
        const fieldErrors = {};
        res.missingFields.forEach(
          (field) => (fieldErrors[field.name] = field.message)
        );
        setErrors(fieldErrors);
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="join-us">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover={false}
      />
      <div className="profile-image"></div>
      <Button2 label="Apply Now" />

      <div className="form-wrapper">
        {/* Heading center */}
        <div className="form-header">
          <h2 className="form-title">Join our journey of excellence</h2>
          <p className="form-subtitle">
            Step into a future where creativity meets growth. Build your career
            with Digital Aura and shape the next era of digital success.
          </p>
        </div>

        {/* Left form + Right image ek row me */}
        <div className="form-body">
          <div className="form-left">
            <form className="form-fields" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  {errors.name && <p className="error-msg">{errors.name}</p>}
                  <input
                    type="text"
                    id="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    placeholder="First name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  {errors.lastName && (
                    <p className="error-msg">{errors.lastName}</p>
                  )}
                  <input
                    type="text"
                    id="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="jobTitle">Job Title</label>
                {errors.jobTitle && (
                  <p className="error-msg">{errors.jobTitle}</p>
                )}
                <input
                  type="text"
                  id="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                {errors.email && <p className="error-msg">{errors.email}</p>}
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                {errors.phone && <p className="error-msg">{errors.phone}</p>}
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 012 3456 789"
                />
              </div>

              <div className="form-group">
                <label htmlFor="resume">Upload Resume</label>
                {errors.resume && <p className="error-msg">{errors.resume}</p>}
                <div
                  className="upload-box"
                  id="resume"
                  onClick={handleUploadClick}
                >
                  <p>
                    {selectedFileName || "Drag & drop or click to choose file"}
                  </p>
                  <span>Upload an image or PDF</span>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
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
