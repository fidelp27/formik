import React, { useState } from "react";
import "./form.css";

const Formulario = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (email === "fidel@gmail.com" && password === "123456") {
      console.log("Formulario enviado con éxito");
      setEmail("");
      setPassword("");
    } else {
      alert("error");
    }
  };

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="form-container">
      <form action="" className="form" onSubmit={submitForm}>
        <label htmlFor="email"> Email </label>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="input"
          onChange={handleInputEmail}
          value={email ?? ""}
        />
        <label htmlFor="password"> Password </label>

        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="input"
          onChange={handleInputPassword}
          value={password ?? ""}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
