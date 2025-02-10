import { Dialog } from "@headlessui/react";
import { useState } from "react";

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChatModal({ isOpen, onClose }: AIChatModalProps) {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setChatHistory([...chatHistory, message]);
      setMessage("");
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
          <Dialog.Title className="text-2xl font-bold mb-4">AI Chat Assistant</Dialog.Title>
          <div className="mb-4 h-64 overflow-y-auto border rounded p-4">
            {chatHistory.map((msg, index) => (
              <div key={index} className="mb-2">
                <span className="block text-gray-700">{msg}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage}>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </Dialog>
  );
}