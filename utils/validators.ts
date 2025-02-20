export default {
  validateEmail: (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      return "Email is required.";
    }

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    return "";
  },
  getPasswordError: (password: string) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }

    let strength = 0;

    if (/[a-z]/.test(password)) strength++; // Lowercase letter
    if (/[A-Z]/.test(password)) strength++; // Uppercase letter
    if (/\d/.test(password)) strength++; // Number
    if (/[@$!%*?&]/.test(password)) strength++; // Special character

    if (strength === 1)
      return "Password should include a mix of letters, numbers, or special characters.";
    if (strength === 2)
      return "Password should be more complex. Add uppercase letters, numbers, or special characters.";
    if (strength >= 3) return ""; // Strong password, no error message

    return "Invalid password format.";
  },
};
