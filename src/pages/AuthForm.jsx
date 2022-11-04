import React, { useState } from "react";

export default function AuthForm() {
  //state
  const [errors, setErrors] = useState({
    email: {
      type: "kosong",
      msg: "email harus diisi",
      show: false,
    },
    password: {
      type: "beda",
      msg: "Password harus sama",
      show: false,
    },
  });

  const handleSubmit = (e) => {
    //cegah form untuk reload page
    e.preventDefault();
    console.info(e);

    //tangkap value dari element input yang ada di form
    let email = e.target.email.value;
    let password = e.target.password.value;
    let password2 = e.target.password2.value;

    //validasi sederhana pertama
    if (!email || !password || !password2) {
      return setErrors({
        ...errors,
        email: {
          ...errors.email,
          show: true,
        },
      });
    }

    //validasi kedua
    if (password != password2) {
      return alert("password harus sama");
    }

    //tampilkan value di console
    console.info({ email, password, password2 });
  };
  return (
    <div className="App">
      <form action="" autoComplete="off" className="auth_form" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="email">email</label>
          <input type="email" id="email" />
          {errors.email.show && <small style={{ color: "red" }}>email harus diisi</small>}
        </div>
        <div className="form_group">
          <label htmlFor="password">password</label>
          <input type="password" id="password" />
        </div>
        <div className="form_group">
          <label htmlFor="password2">ulangi</label>
          <input type="password" id="password2"  />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
