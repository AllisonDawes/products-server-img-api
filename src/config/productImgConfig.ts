import multer from "multer";
import path from "path";
import crypto from "crypto";

const imgFilePath = path.resolve(__dirname, "..", "..", "images", "products");

export default {
  directory: imgFilePath,

  storage: multer.diskStorage({
    destination: imgFilePath,
    filename: (request, file, call) => {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const filename = `${fileHash}-${file.originalname}`;

      return call(null, filename);
    },
  }),
};
