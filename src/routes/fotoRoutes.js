import { Router } from 'express';
import multer from 'multer';

import fotoController from '../controllers/FotoControllers';
import multerconfig from '../config/multerConfig';

const upload = multer(multerconfig);

const router = new Router();

router.post('/', upload.single('foto'), fotoController.store);

export default router;
