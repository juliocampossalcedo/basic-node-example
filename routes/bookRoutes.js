import express from "express";
const router = express.Router();

import {getBooks, createBooks, avgPage} from "../controllers/bookController.js"

router.get('/', getBooks);

router.post('/', createBooks);

router.get('/avg/pages/:idBook', avgPage);

export default router;