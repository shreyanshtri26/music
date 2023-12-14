import { useState, useContext } from "react";

import { AuthContext } from "./contexts/AuthContext";

export default function OTPVerification() {

  const [otp, setOtp] = useState("");
  
  const { user } = useContext(AuthContext);  
  
  const verifyOTP = () => {
    // call API
  }
  
  return (
    <div>
      <p>Enter OTP sent to {user.phone}</p>
        
      <input value={otp} onChange={(e) => setOtp(e.target.value)} />

      <button onClick={verifyOTP}>Verify</button>
    </div>
  )
}
