import { useState } from "react";
import "./RegisterForm.css";

function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data form:", formData);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Registrasi</h2>

      <div className="form-group">
        <label htmlFor="fullName">Nama Lengkap</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Masukkan nama lengkap"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="nama@email.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Minimal 8 karakter"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Konfirmasi Password</label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Ulangi password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Daftar</button>
    </form>
  );
}

export default RegisterForm;
