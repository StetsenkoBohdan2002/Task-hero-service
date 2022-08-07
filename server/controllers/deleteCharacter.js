import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const deleteCharacter = (req, res, next) => {
  const filePath = path.join(__dirname, '..', 'files', 'file.json');
  const obj = fs.readFileSync(filePath, 'utf8');
  const newObj = [
    ...JSON.parse(obj)['characters'].filter(
      (item) => item.id !== req.params.id
    ),
  ];
  fs.writeFileSync(filePath, JSON.stringify({ characters: newObj }), 'utf8');
  res.status(200).json({ characters: newObj });
};
