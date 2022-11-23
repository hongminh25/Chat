const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const dotenv = require("dotenv");

dotenv.config();

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1) return `${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${file.originalname}`,
    };
  },
});

module.exports = multer({ storage });
