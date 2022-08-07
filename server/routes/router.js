import express from 'express';
import { updateCharacter } from '../controllers/updateCharacter.js';
import { deleteCharacter } from '../controllers/deleteCharacter.js';
import { getCharacters } from '../controllers/getCharacters.js';
import { createCharacter } from '../controllers/createCharacter.js';
const router = express.Router();

router.put('/characters/:id', updateCharacter);

router.get('/characters', getCharacters);

router.post('/characters', createCharacter);

router.delete('/characters/:id', deleteCharacter);

export default router;
