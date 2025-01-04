import React, { useState } from "react";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [experience, setExperience] = useState([
    { jobTitle: "", company: "", year: "" },
  ]);

  const [skills, setSkills] = useState("");

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...experience];
    newExperience[index] = {
      ...newExperience[index],
      [name]: value,
    };
    setExperience(newExperience);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { jobTitle: "", company: "", year: "" }]);
  };

  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CV Submitted: ", { personalInfo, experience, skills });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
      }}
    >
      {/* Left side for form */}
      <div style={{ width: "45%" }}>
        <h2>Edit CV</h2>
        <form onSubmit={handleSubmit}>
          <h3>Personal Information</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={personalInfo.name}
            onChange={handlePersonalChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={personalInfo.email}
            onChange={handlePersonalChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={personalInfo.phone}
            onChange={handlePersonalChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />

          <h3>Experience</h3>
          {experience.map((exp, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={exp.jobTitle}
                onChange={(e) => handleExperienceChange(index, e)}
                style={{ width: "30%", marginRight: "10px" }}
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(index, e)}
                style={{ width: "30%", marginRight: "10px" }}
              />
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={exp.year}
                onChange={(e) => handleExperienceChange(index, e)}
                style={{ width: "30%" }}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddExperience}
            style={{ marginBottom: "10px" }}
          >
            Add Your Experience
          </button>

          <h3>Skills</h3>
          <textarea
            name="skills"
            placeholder="Skills"
            value={skills}
            onChange={handleSkillsChange}
            style={{ width: "100%", height: "100px" }}
          ></textarea>

          <button type="submit" style={{ marginTop: "10px" }}>
            Submit CV
          </button>
        </form>
      </div>

      {/* Right side for preview */}
      <div
        style={{
          width: "45%",
          borderLeft: "2px solid #ccc",
          paddingLeft: "20px",
          backgroundColor: "#f7f7f7",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
          minWidth: "300px",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333" }}>CV Preview</h2>
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            marginTop: "20px",
            color: "black",
          }}
        >
          <h3 style={{ borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>
            Personal Information
          </h3>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li>
              <strong>Name:</strong> {personalInfo.name}
            </li>
            <li>
              <strong>Email:</strong> {personalInfo.email}
            </li>
            <li>
              <strong>Phone:</strong> {personalInfo.phone}
            </li>
          </ul>

          <h3 style={{ borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>
            Experience
          </h3>
          {experience.length > 1 ? (
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                color: "black",
              }}
            >
              {experience.map((exp, index) => (
                <li key={index}>
                  <strong>{exp.jobTitle}</strong> at {exp.company} ({exp.year})
                </li>
              ))}
            </ul>
          ) : (
            <p>No experience added yet.</p>
          )}

          <h3 style={{ borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>
            Skills
          </h3>
          <p>{skills || "No skills added yet."}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
