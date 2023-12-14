import { useState } from "react";

export default function Login() {
  const [phone, setPhone] = useState("");

  return (
    <input 
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
  );
}