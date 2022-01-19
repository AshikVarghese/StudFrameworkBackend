var crypto = require("crypto");

let generate_password_hashed = (password) => {
  return crypto.createHash("sha512").update(password).digest("hex");
};

let generate_auth_key = () => {
  return crypto
    .createHash("sha512")
    .update(crypto.randomBytes(32).toString("hex"))
    .digest("hex");
};

module.exports = {
  generate_password_hashed: generate_password_hashed,
  generate_auth_key: generate_auth_key,
};
