import axios from "axios";

export default {

  login: (phone) => {
    return axios.post("/login", { phone });
  },

  verifyOtp: (otp) => {
    return axios.post("/verify-otp", { otp }); 
  },

};
