import { useState } from "react";
import { useUser } from "../context/UserContext"; // Context se state access ki
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  console.log("Component re-render hua");
  const { username, setUsername } = useUser(); // Global context ka username
  const [password, setPassword] = useState(""); // Local state for password
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Logging in with:", username, password);
    console.log("Logging in with:", username, password);
    navigate("/dashboard"); // Redirects Kardega Dashboard page par
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">SportMate</h1>
      <p className="text-gray-700 italic mb-6">
        "Let's get back to the ground where we belong"
      </p>

      <input
        type="text"
        placeholder="Enter Username"
        className="w-64 px-4 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        className="w-64 px-4 py-2 border rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        onClick={handleLogin}
      >
        Click here to Login
      </button>
    </div>
  );
};

export default LoginPage;
