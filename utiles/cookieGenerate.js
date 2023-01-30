const getJwtToken = require("../helpers/getJwtToken");

const cookieToken = (user, res) => {
  const token = getJwtToken(user.id);
  const options = {
    expires: new Date(Date.now() + 604800000),
  };
  user.password = undefined;
  res.status(200).cookie("authToken", token, options).json({
    success: true,
    token,
    user,
  });
};

module.exports = cookieToken;
