const cookieToken = require("../utiles/cookieGenerate");
const getJwtToken = require("../helpers/getJwtToken");
const prisma = require("../prisma");

// todo : user signup

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("please provide all the required fields");
    }
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    cookieToken(user, res);
  } catch (error) {
    throw new Error(error);
  }
};
