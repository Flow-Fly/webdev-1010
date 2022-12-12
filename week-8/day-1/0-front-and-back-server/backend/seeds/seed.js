require("dotenv").config();
require("../db/index");

const mongoose = require("mongoose");

const User = require("../models/User.model");

const userSeed = require("./user.seeds.json");

const cleanUp = async () => {
  try {
    await User.deleteMany();
  } catch (error) {
    console.error(error);
  }
};

const seedingUser = async () => {
  try {
    const data = await User.create(userSeed);
    console.table(data);
  } catch (error) {
    console.error(error);
  }
};

const seeding = async () => {
  try {
    await cleanUp();
    await seedingUser();
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

seeding();
