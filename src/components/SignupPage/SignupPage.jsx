 import { useState } from "react"
 import "./SignupPage.css"

function SignupPage() {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");
  const[nationality, setNationality] = useState("");

  const greeting = { fi: "Moi", en: "Hello", de: "Hallo", fr: "Bonjour", ir: "سلام" }[nationality];
  const passwordMatch = password === confirmPassword;

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ borderColor: email.includes("@") ? "green" : "red" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ borderColor: password.length >= 6 ? "green" : "red" }}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{ borderColor: passwordMatch ? "green" : "red" }}
      />

      <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
        <option value="fi">Finnish</option>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
        <option value="ir">Iran</option>
      </select>

      <p>{greeting}</p>
      <p>Your email is {email || "armin@test.com"}</p>
      {!passwordMatch && confirmPassword.length > 0 && (
        <p style={{ color: "red", textAlign: "center" }}>Passwords do not match!</p>
      )}
    </div>
  );
}

export default SignupPage;
