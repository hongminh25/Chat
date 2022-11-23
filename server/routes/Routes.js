const express = require("express");
const {
  newConversation,
  getConversation,
} = require("../controller/conversation-controller.js");
const { addUser, getUser } = require("../controller/user-controller.js");
const {
  newMessage,
  getMessage,
} = require("../controller/message-controller.js");
const { uploadImage, getImage } = require("../controller/image-controller.js");

const upload = require("../utils/upload.js");

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUser);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessage);

route.post("/file/upload", upload.single("file"), uploadImage);
route.get("/file/:filename", getImage);

module.exports = route;
