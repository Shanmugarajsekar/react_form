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
    city: "",
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

  const handelReset = (e) => {
    console.log("reset");
    setdata({
      firstname: "",
      secondname: "",
      phone: "",
      mail: "",
      language: [],
      date: "",
      gender: "",
      city: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-header">
          <p>Registration</p>
        </div>
        <div className="form-row">
          <div className="form-row">
            <label>Name</label>
          </div>
          <div className="form-con">
            <input
              placeholder="First name"
              className="form-input"
              type="text"
              name="firstname"
              onChange={handleChange}
              value={data.firstname}
            ></input>
            <input
              placeholder="Last name"
              className="form-input"
              type="text"
              name="secondname"
              onChange={handleChange}
              value={data.secondname}
            ></input>
          </div>
        </div>
        <div className="form-row">
          <div className="form-row">
            <label>Mobile number</label>
          </div>
          <div className="form-con">
            <input
              placeholder="+91-"
              className="form-input form-mobile"
              type="text"
              name="phone"
              onChange={handleChange}
              value={data.phone}
              maxLength={10} // Set the maximum length to 10
              minLength={10} // Set the minimum length to 10
            ></input>
          </div>
          <div className="form-row">
            <label>City</label>
          </div>
          <div className="form-con">
            <input
              placeholder="City"
              className="form-input form-mobile"
              type="text"
              name="city"
              onChange={handleChange}
              value={data.city}
            ></input>
          </div>
        </div>
        <div>
          <div className="form-row">
            <label>Mail</label>
          </div>
          <div className="form-con">
            <input
              placeholder="Sample@mail.com"
              type="email"
              name="mail"
              onChange={handleChange}
              className="form-input"
            ></input>
          </div>
        </div>

        <div className="form-group">
          <div>
            <div className="form-option-label">
              <label>Gender</label>
            </div>
            <div className="form-group-con">
              <div className="form-option">
                <input
                  name="gender"
                  value="male"
                  type="radio"
                  onChange={handleChange}
                ></input>
                <label className="form-group-label label-font">Male</label>
              </div>
              <div className="form-option">
                <input
                  name="gender"
                  value="Female"
                  type="radio"
                  onChange={handleChange}
                ></input>
                <label className="form-group-label label-font">Female</label>
              </div>
            </div>
          </div>
          <div>
            <div className="form-option-label">
              <label>Language</label>
            </div>
            <div className="form-group-con">
              <div className="form-option">
                <input
                  name="language"
                  value="english"
                  type="checkbox"
                  onChange={handleChange}
                ></input>
                <label className="form-group-label label-font">English</label>
              </div>
              <div className="form-option">
                <input
                  name="language"
                  value="tamil"
                  type="checkbox"
                  onChange={handleChange}
                ></input>
                <label className="form-group-label label-font">Tamil</label>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="form-row">
         
        </div> */}
        <div className="form-option">
          <label>Date of birth</label>{" "}
          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="form-dob custom-date-input"
          ></input>
        </div>

        <div className="form-btn-sec">
          <input
            className="form-btn "
            type="reset"
            value="Reset"
            onClick={handelReset}
          ></input>

          <input className="form-btn " type="submit" value="Register"></input>
        </div>
      </form>
    </div>
  );
}

export default App;
