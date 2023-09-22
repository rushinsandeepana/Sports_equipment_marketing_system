import UserModel from "../model/User.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// middleware for verify user
export async function verifyUser(req, res, next){
  try {
    const { username } = req.method == "GET" ? req.query : req.body;

    //chect the user existance 
    let exists = await UserModel.findOne({username});
    if (!exists) return res.status(404).send({error: "Can't find user!"});
    next();

  }catch (error){
    return res.status(404).send({error: "Authentication error"});
  }
}

export async function register(req, res) {
  try {
    const { username, password, profile, email } = req.body;

    // Check the existing user
    const existUsername = await UserModel.findOne({ username });
    if (existUsername) {
      return res.status(400).send({ error: "Please use a unique username" });
    }

    // Check for existing email
    const existEmail = await UserModel.findOne({ email });
    if (existEmail) {
      return res.status(400).send({ error: "Please use a unique email" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      username,
      password: hashedPassword,
      profile: profile || '',
      email,
    });

    // Save the user in the database
    const savedUser = await user.save();
    if (!savedUser) {
      return res.status(500).send({ error: "Error while saving user" });
    }

    res.status(201).send({ msg: "User Registered Successfully" });
  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
}

export async function login(req, res) {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(404).send({ error: "Username not Found" });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck) {
      return res.status(400).send({ error: "Password does not Match" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
      },
      "secret", // Replace with a more secure secret in production
      { expiresIn: "24h" }
    );

    return res.status(200).send({
      msg: "Login Successful",
      username: user.username,
      token
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
}

/** GET: http://localhost:8080/api/user/example123 */

export async function getUser(req, res) {
  try {
    const { username } = req.params;

    if (!username) {
      return res.status(400).send({ error: "Invalid Username" });
    }

    // Find the user by username, assuming UserModel is correctly defined
    const user = await UserModel.findOne({ username }).exec();

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    // Remove sensitive data like password before sending the response
    const { password, ...rest } = user.toJSON();

    return res.status(200).send(rest);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
}



/** */

export default async function Auth(req, res, next){
  try {
      
      // access authorize header to validate request
      const token = req.headers.authorization.split(" ")[1];

      // retrive the user details fo the logged in user
      const decodedToken = await jwt.verify(token, ENV.JWT_SECRET);

      req.user = decodedToken;

      next()

  } catch (error) {
      res.status(401).json({ error : "Authentication Failed!"})
  }
}





/** */
export async function generateOTP(req, res) {
  res.json("generateOTP route");
}

/** */
export async function verifyOTP(req, res) {
  res.json("verifyOTP route");
}

/** */
export async function createResetSession(req, res) {
  res.json("createResetSession route");
}

/** */
export async function resetPassword(req, res) {
  res.json("resetPassword route");
}

