export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const result = emailRegex.test(email);
  return result;
};

export const isOtpCodeValid = (code: string): boolean => {
  const otpRegex = /^[0-9]{5}$/.test(code);
  return otpRegex;
};
