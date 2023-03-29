import React, { useState } from "react";
import "../css/Form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://getform.io/f/{your-form-endpoint}", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          alert("Oops! Something went wrong.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Oops! Something went wrong.");
      });
  };

  const PopupSubmit = () => {
    return (
      <div className="popupSubmit">
        <h2>Thank you for your submission!</h2>
        <button className="closeButton" onClick={() => setIsSubmitted(false)}>
          Close
        </button>
      </div>
    );
  };

  return (
    <div className="formContainer">
      {isSubmitted && <PopupSubmit />}
      <form
        onSubmit={handleSubmit}
        className={`commentForm ${isSubmitted ? "hide" : ""}`}
      >
        <label className="name">
          <input
            placeholder="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="email">
          <input
            placeHolder="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className="message">
          <input
            placeholder="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <button className="sumbitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
