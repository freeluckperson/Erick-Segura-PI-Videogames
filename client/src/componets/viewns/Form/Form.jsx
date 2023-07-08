import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    phone: "",
  });

  //el handler lee lo que escribo en el input y lo guarda en el estado
  const handlerChange = (event) => {
    validate({ ...form, [event.target.name]: event.target.value });
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const validate = (form) => {
    if (/\S+@\S+\.\S+/.test(form.email)) {
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Hay un error en email" });
    }
  };

  const submitHandler = (event)=>{
    event.preventDefault()
    console.log(form)
    alert('boton presionado')
  }
  return (
    <form onSubmit={submitHandler} >
      <div>
        <label>Email: </label>
        <input type="text" value={form.email} onChange={handlerChange} name="email" />
        <span>{errors.email && errors.email}</span>
      </div>

      <div>
        <label>Name: </label>
        <input type="text" value={form.name} onChange={handlerChange} name="name" />
      </div>

      <div>
        <label>Phone: </label>
        <input type="text" value={form.phone} onChange={handlerChange} name="phone" />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
