import { useState } from "react";
import axios from "axios";

function App() {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://labbackend-d0ba.onrender.com/api/students",
        student
      );
      setMessage("Student added successfully ✅");
      console.log(res.data);
    } catch (err) {
      setMessage("Error adding student ❌");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="text"
          name="course"
          placeholder="Course"
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Add Student</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default App;