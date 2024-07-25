const db = require("../config/db");
const bcrypt = require("bcryptjs");

const user = {
  // Create a new user
  createUser: async ({ username, email, password, mobileNo, address, otp, otpExpiry }) => {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const query = `INSERT INTO User (username, email, password, mobileNo, address, otp, otpExpiry) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      const values = [username, email, hashedPassword, mobileNo, address, otp, otpExpiry];
      
      const [results] = await db.query(query, values);
      return { id: results.insertId, username, email, password: hashedPassword, mobileNo, address, otp, otpExpiry };
    } catch (error) {
      throw new Error(error);
    }
  },

  // Update user OTP and expiration
  updateUserOtp: async (email, otp, otpExpiry) => {
    const query = `UPDATE User SET otp = ?, otpExpiry = ? WHERE email = ?`;
    const values = [otp, otpExpiry, email];
    
    const [results] = await db.query(query, values);
    return results.affectedRows > 0;
  },

  // Find a user by email
  findUserByEmail: async (email) => {
    const query = `SELECT * FROM User WHERE email = ?`;
    const [results] = await db.query(query, [email]);
    if (results.length === 0) return null;
    return results[0];
  },

  // Verify a user's password
  verifyPassword: async (inputPassword, storedPassword) => {
    return await bcrypt.compare(inputPassword, storedPassword);
  }
};

module.exports = user;
