// isValidEmail function checks if the provided email address is valid based on a regular expression.
// It allows letters (both upper and lower case), digits, and special characters like underscore (_), dot (.), and hyphen (-)
// in the local part, followed by the "@" symbol, and then allows letters and digits in the domain part,
// ending with a period (.) and additional letters for the top-level domain (TLD).
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const result = emailRegex.test(email);
  return result;
};

// isOtpCodeValid function checks if the provided code is a valid OTP (One-Time Password).
// It uses a regular expression to ensure that the code consists of exactly 5 digits.
export const isOtpCodeValid = (code: string): boolean => {
  const otpRegex = /^[0-9]{5}$/.test(code);
  return otpRegex;
};
