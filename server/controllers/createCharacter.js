import { createError } from '../error.js';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createCharacter = (req, res, next) => {
  try {
    const filePath = path.join(__dirname, '..', 'files', 'file.json');
    if (!fs.existsSync(filePath)) {
      next(createError(400, `No file with 'file.json' filename found`));
    } else {
      const obj = fs.readFileSync(filePath, 'utf8');
      const newCharacter = req.body;
      const newObj = [...JSON.parse(obj)['characters'], newCharacter['char']];
      fs.writeFileSync(
        filePath,
        JSON.stringify({ ...JSON.parse(obj), characters: newObj }),
        'utf8'
      );
      res.status(200).json({ ...JSON.parse(obj), characters: newObj });
    }
  } catch (error) {
    next(createError(500, 'Server error'));
  }
};
