import { useState } from "react";
import { useLocation } from "wouter";
import { registerUser } from "../services/authService";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [, navigate] = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await registerUser({ name, email, password });
      alert("Succesfully registered!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  }


  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Registo</h2>
      <input
        className="w-full mb-2 p-2 border"
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="w-full mb-2 p-2 border"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="w-full mb-2 p-2 border"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="w-full bg-green-600 text-white p-2">Criar Conta</button>
    </form>
  );
}

export default Register;
