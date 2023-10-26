import { useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState({
    firstname: "",
    secondname: "",
    phone: "",
    mail: "",
    language: [],
    date: [],
  });

  const handleChange = (event) => {
    event.preventDefault();
    setdata(() => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            onChange={handleChange}
            value={data.firstname}
          ></input>
          <label>Second Name</label>
          <input
            type="text"
            name="secondname"
            onChange={handleChange}
            value={data.secondname}
          ></input>
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="number"
            name="phone"
            onChange={handleChange}
            value={data.phone}
          ></input>
          <label>Mail</label>
          <input type="email" name="mail" onChange={handleChange}></input>
        </div>

        <div>
          <label>Gender</label>
          <input name="male" type="radio" onChange={handleChange}></input>
          <label>Male</label>

          <input name="male" type="radio" onChange={handleChange}></input>
          <label>Female</label>
        </div>
        <div>
          <label>Language</label>
          <input name="english" type="checkbox" onChange={handleChange}></input>
          <label>English</label>

          <input name="tamil" type="checkbox" onChange={handleChange}></input>
          <label>Tamil</label>
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="date" name="date" onChange={handleChange}></input>
        </div>
        <div>
          <input type="submit" value="Send"></input>
        </div>
      </form>
    </div>
  );
}

export default App;
