import "./RegisterForm.css";

function RegisterForm() {
  return (
    <form className="register-form">
      <h2>Registrasi</h2>

      <div className="form-group">
        <label htmlFor="fullName">Nama Lengkap</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Masukkan nama lengkap"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="nama@email.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Minimal 8 karakter"
        />
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Konfirmasi Password</label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Ulangi password"
        />
      </div>

      <button type="submit">Daftar</button>
    </form>
  );
}

export default RegisterForm;
