import { useState } from "react";
import "./App.css";

function App() {
  // state to store the form data
  const [student, setStudent] = useState({ name: "", email: "", course: "" });
  // state to store the submitted data
  const [submitted, setSubmitted] = useState(null);

  // update the matching field when the user types
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // show the details on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(student);
  };

  return (
    <div className="container">
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="details">
          <h2>Student Details</h2>
          <p><b>Name:</b> {submitted.name}</p>
          <p><b>Email:</b> {submitted.email}</p>
          <p><b>Course:</b> {submitted.course}</p>
        </div>
      )}
    </div>
  );
}

export default App;