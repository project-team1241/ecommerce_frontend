export const validate = (email, password) => {
  const emailvalue = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordvalue =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const phonevalue = /^\+?(\d{1,3})?[-.\s]?(\d{10})$/.test(email);

  if (!emailvalue && !phonevalue) {
    return "Invalid Email/Mobile number";
  }
  if (!passwordvalue) {
    return "Invalid password";
  }

  return null;
};
