import { useState } from "react";
import "./RegisterForm.css";

const initialData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function validate(data) {
  const errors = {};

  // Nama lengkap
  const name = data.fullName.trim();
  if (!name) {
    errors.fullName = "Nama lengkap wajib diisi";
  } else if (name.length < 3) {
    errors.fullName = "Nama lengkap minimal 3 karakter";
  } else if (!/^[A-Za-z\s.'-]+$/.test(name)) {
    errors.fullName = "Nama hanya boleh berisi huruf dan spasi";
  }

  // Email
  const email = data.email.trim();
  if (!email) {
    errors.email = "Email wajib diisi";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Format email tidak valid";
  }

  // Password
  if (!data.password) {
    errors.password = "Password wajib diisi";
  } else if (data.password.length < 8) {
    errors.password = "Password minimal 8 karakter";
  } else if (!/[A-Za-z]/.test(data.password) || !/\d/.test(data.password)) {
    errors.password = "Password harus mengandung huruf dan angka";
  }

  // Konfirmasi password
  if (!data.confirmPassword) {
    errors.confirmPassword = "Konfirmasi password wajib diisi";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Konfirmasi password tidak sama";
  }

  return errors;
}

function RegisterForm() {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type: "success" | "error", message }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // hapus error field yang sedang diketik
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // hapus banner saat user mulai mengetik lagi
    if (status) {
      setStatus(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Registrasi gagal. Periksa kembali isian form kamu.",
      });
      return;
    }

    console.log("Form valid:", formData);
    setStatus({
      type: "success",
      message: `Registrasi berhasil! Selamat datang, ${formData.fullName.trim()}.`,
    });
    setFormData(initialData);
    setErrors({});
  };

  return (
    <form className="register-form" onSubmit={handleSubmit} noValidate>
      <h2>Registrasi</h2>

      {status && (
        <div className={`alert alert-${status.type}`} role="alert">
          {status.message}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="fullName">Nama Lengkap</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Masukkan nama lengkap"
          value={formData.fullName}
          onChange={handleChange}
          className={errors.fullName ? "input-error" : ""}
        />
        {errors.fullName && (
          <span className="error-text">{errors.fullName}</span>
        )}
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
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
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
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && (
          <span className="error-text">{errors.password}</span>
        )}
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
          className={errors.confirmPassword ? "input-error" : ""}
        />
        {errors.confirmPassword && (
          <span className="error-text">{errors.confirmPassword}</span>
        )}
      </div>

      <button type="submit">Daftar</button>
    </form>
  );
}

export default RegisterForm;
