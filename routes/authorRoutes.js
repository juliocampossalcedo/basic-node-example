import express from "express";
const router = express.Router();

import {getAuthors, createAuthor} from "../controllers/authorController.js"


router.get('/', getAuthors);

router.post('/', createAuthor);

export default router;