const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
export const checkValidData = (email, pass) => {
  let vemail = emailRegex.test(email);
  let vpass = passRegex.test(pass);

  if (!vemail) return "Email is not valid";
  if (!vpass) return "Password is not valid";
  return null;
};
