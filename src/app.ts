import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";
// import rateLimit from "express-rate-limit";

import retriveMerkleProof from "./controllers";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
app.use(helmet());
// app.use(
//   rateLimit({
//     windowMs: 60 * 1000, // 1 minute
//     max: 10, // Limit each IP to 10 requests per `window` (here, per 1 minute)
//     standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//     legacyHeaders: false, // Disable the `X-RateLimit-*` headers
//     message: "Too many requests.",
//   })
// );

// setup routes here
app.get("/merkle-proof/:mintAddress", retriveMerkleProof);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
