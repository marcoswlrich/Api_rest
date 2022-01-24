import multer from 'multer';
import multerconfig from '../config/multerConfig';

import Foto from '../models/Foto';

const upload = multer(multerconfig).single('foto');
class FotoController {
  store(req, res) {
    return upload(req, res, async err => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      const foto = await Foto.create({ originalname, filename, aluno_id });
      return res.json(foto);
    });
  }
}

export default new FotoController();
