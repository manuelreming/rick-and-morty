import style from "./Form.module.css";
import React from "react";
import validate from "./validation.js";
import styles from "./Form.module.css";
export default function Form(props) {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({ email: "", password: "" });

  const handleInputChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };
  return (
    <div className={styles.divForm}>
      <form onSubmit={handleSubmit} className={style.form1}>
        <label>Email: </label>
        <input
          onChange={handleInputChange}
          name="email"
          value={userData.email}
          type="text"
          placeholder="Enter your username"
        />
        <p>{errors.email}</p>
        <label>Password: </label>
        <input
          onChange={handleInputChange}
          name="password"
          value={userData.password}
          type="password"
          placeholder="Enter your password"
        />
        <p>{errors.password}</p>
        <button className={styles.btn}>LOGIN</button>
      </form>
    </div>
  );
}
