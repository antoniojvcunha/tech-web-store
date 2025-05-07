import { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { useLocation } from "wouter";
import { loginUser } from "../services/authService";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [, navigate] = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { user, token } = await loginUser({ email, password });
      login(user, token);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
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
      <button className="w-full bg-blue-600 text-white p-2">Login</button>
    </form>
  );
}

export default Login;
