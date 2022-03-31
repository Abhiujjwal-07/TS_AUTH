import * as yup from "yup";
const schema = yup.object().shape({
  Email: yup.string().email().min(5).max(30).required("Enter valid email"),
  Password: yup.string().min(8).max(30).required("Enter password is required"),
});

module.exports = schema;
