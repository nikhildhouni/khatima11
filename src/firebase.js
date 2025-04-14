import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// Firebase config (use your actual Firebase config here)
const firebaseConfig = {
  apiKey: "AIzaSyC54aPMlhBsOpiDKM-EphA9QSTAxoEHNu4",
  authDomain: "khatima11.firebaseapp.com",
  projectId: "khatima11",
  storageBucket: "khatima11.firebasestorage.app",
  messagingSenderId: "603530156746",
  appId: "1:603530156746:web:ddb904ed4cc3e883dfb233",
  measurementId: "G-2VBKHS7B1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to setup reCAPTCHA
export const setupRecaptcha = (phoneNumber) => {
  const recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {
    size: "invisible", // Invisible reCAPTCHA
    callback: (response) => {
      console.log("reCAPTCHA solved");
    },
    "expired-callback": () => {
      console.log("reCAPTCHA expired");
    }
  }, auth);

  // Render the reCAPTCHA
  recaptchaVerifier.render().then(() => {
    // Send OTP to the phone number
    signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert("OTP sent!");
      })
      .catch((error) => {
        console.error("Error sending OTP: ", error);
        alert("Error sending OTP");
      });
  }).catch((error) => {
    console.error("Error in rendering reCAPTCHA", error);
    alert("Failed to render reCAPTCHA");
  });
};

export const verifyOtp = (otp) => {
  const confirmationResult = window.confirmationResult;
  confirmationResult.confirm(otp)
    .then((result) => {
      const user = result.user;
      console.log("OTP verified", user);
      alert("OTP verified, you are now logged in!");
    })
    .catch((error) => {
      console.error("Error verifying OTP:", error);
      alert("Invalid OTP");
    });
};
