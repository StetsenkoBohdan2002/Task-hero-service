import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const updateCharacter = (req, res, next) => {
  console.log(req.body);
  const filePath = path.join(__dirname, '..', 'files', 'file.json');
  const obj = fs.readFileSync(filePath, 'utf8');
  const newObj = JSON.parse(obj)['characters'].map((item) => {
    if (item.id === req.body.id) {
      console.log(item);
      console.log(req.body);
      item = req.body;
      console.log(item);
    }
    return item;
  });

    fs.writeFileSync(filePath, JSON.stringify({ characters: newObj }), 'utf8');
    res.status(200).json({ characters: newObj });
};
