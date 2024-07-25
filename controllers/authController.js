const user = require("../models/User");
const jwtoken = require("jsonwebtoken");
const { sendMail } = require("../utils/mailer");

const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const register = async (req, res) => {
  try {
    const { username, email, password, mobileNo, address } = req.body;

    let existingUser = await user.findUserByEmail(email);

    if (existingUser) {
      res.json({ message: "The email address already exists" });
    } else {
      const otp = generateOtp();
      const otpExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now

      await user.createUser({ username, email, password, mobileNo, address, otp, otpExpiry });
      await sendMail(email, "OTP Verification", `Your OTP is ${otp}. It is valid for 15 minutes.`);

      res.status(201).json({ message: "Account created. Please verify your email with the OTP sent to you." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "An error occurred while creating the user" });
  }
};

const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    let existingUser = await user.findUserByEmail(email);

    if (existingUser) {
      if (existingUser.otp === otp && new Date() < new Date(existingUser.otpExpiry)) {
        // OTP is correct and not expired
        await user.updateUserOtp(email, null, null); // Clear OTP and its expiration
        res.json({ message: "Email verified successfully" });
      } else {
        res.json({ message: "Invalid or expired OTP" });
      }
    } else {
      res.json({ message: "No account found with this email" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred while verifying OTP" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    let existingUser = await user.findUserByEmail(username);

    if (existingUser) {
      const isPasswordMatched = await user.verifyPassword(password, existingUser.password);

      if (isPasswordMatched) {
        const jwtsecretkey = process.env.JWT_SECRET_KEY;
        const token = jwtoken.sign({ id: existingUser.id, email: existingUser.email }, jwtsecretkey);
        res.json({ token });
      } else {
        res.json({ message: "Password is not matched" });
      }
    } else {
      res.json({ message: "There is no account with these details" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred while logging in" });
  }
};

module.exports = { register, verifyOtp, login };

