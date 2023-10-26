import { useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState({
    firstname: "",
    secondname: "",
    phone: "",
    mail: "",
    language: [],
    date: "",
    gender: "",
  });

  const handleChange = (event) => {
    const { type, value, checked } = event.target;

    setdata((prevData) => {
      if (type === "checkbox") {
        if (checked) {
          return {
            ...prevData,
            language: [...prevData.language, value],
          };
        } else {
          return {
            ...prevData,
            language: prevData.language.filter((lang) => lang !== value),
          };
        }
      } else {
        return {
          ...prevData,
          [event.target.name]: event.target.value,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(data);
  };

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-con">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              value={data.firstname}
            ></input>{" "}
          </div>
          <div className="form-con">
            <label>Second Name</label>
            <input
              type="text"
              name="secondname"
              onChange={handleChange}
              value={data.secondname}
            ></input>
          </div>
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="number"
            name="phone"
            onChange={handleChange}
            value={data.phone}
          ></input>{" "}
          <label>Mail</label>
          <input type="email" name="mail" onChange={handleChange}></input>
        </div>

        <div className="gender-sec">
          <label>Gender</label>
          <div className="gender-con">
            <input
              name="gender"
              value="male"
              type="radio"
              onChange={handleChange}
            ></input>{" "}
            <label>Male</label>
            <input
              name="gender"
              value="Female"
              type="radio"
              onChange={handleChange}
            ></input>
            <label>Female</label>
          </div>
        </div>
        <div className="language-sec">
          <label>Language</label>
          <div className="language-con">
            <div>
              <input
                name="language"
                value="english"
                type="checkbox"
                onChange={handleChange}
              ></input>
              <label>English</label>

              <input
                name="language"
                value="tamil"
                type="checkbox"
                onChange={handleChange}
              ></input>
              <label>Tamil</label>
            </div>
          </div>
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="date" name="date" onChange={handleChange}></input>
        </div>
        <div>
          <input className="form-btn" type="submit" value="Send"></input>
        </div>
      </form>
    </div>
  );
}

export default App;
