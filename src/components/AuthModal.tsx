import { Dialog } from "@headlessui/react";
import { useState } from "react";
import axios from "axios";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "login" | "signup";
}

export default function AuthModal({ isOpen, onClose, type }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (type === "signup" && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      if (type === "signup") {
        const response = await axios.post("/api/auth/signup", { email, password });
        setMessage(response.data.message);
      } else {
        await axios.post("/api/auth/login", { email, password });
        onClose();
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      {/* Backdrop overlay */}
      <div className="fixed inset-0 bg-black/30" />

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
          <Dialog.Title className="text-2xl font-bold mb-4">
            {type === "login" ? "Login" : "Sign Up"}
          </Dialog.Title>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            {type === "signup" && (
              <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            )}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {message && <p className="text-green-500 mb-4">{message}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {type === "login" ? "Login" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </Dialog>
  );
}