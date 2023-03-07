import React, { useState, useEffect} from 'react';
import "../css/Form.css"
import { useRef } from "react";

function Form() {

  const containerRefForm = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerRefForm]);

  function handleScroll() {
    if (containerRefForm.current) {
      const rect = containerRefForm.current.getBoundingClientRect();
      if (rect.top < window.innerHeight / 1.25) {
        const children = containerRefForm.current.children;
        for (let i = 0; i < children.length; i++) {
          children[i].classList.add("formAnimation");
        }
      }
    }
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://getform.io/f/{your-form-endpoint}', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Oops! Something went wrong.');
      }
    })
    .catch(error => {
      console.error(error);
      alert('Oops! Something went wrong.');
    });
  };

  const PopupSubmit = () => {
    return (
      <div className="popupSubmit">
        <div className="popupSubmit">
          <h2>Thank you for your submission!</h2>
          <button onClick={() => setIsSubmitted(false)}>Close</button>
        </div>
      </div>
    );
  }

  return (
    <div className="formContainer" ref={containerRefForm}>
      {isSubmitted && <PopupSubmit />}
      <form onSubmit={handleSubmit} className="commentForm">
        <label className='name'>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label className='email'>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label className='message'>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <button className='sumbitButton' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;


