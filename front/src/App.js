import CharList from './components/charList/CharList';
import Header from './components/Header/Header';
import { useState, useEffect } from 'react';
import useMarvelService from './service/CharacterService';

function App() {
  const { getAllCharacters, createCharacter, deleteCharacter, updateCharacter } =
    useMarvelService();
  const [delChar, setDel] = useState(false);
  const [charList, setCharList] = useState([]);
  useEffect(() => {
    onRequest();
  }, []);
  const onRequest = () => {
    getAllCharacters().then(onCharListLoaded);
  };
  const onCharListLoaded = (newCharList) => {
    setCharList((charList) => [...newCharList]);
  };
  const openDelButton = () => {
    setDel(!delChar);
  };
  const addCharacter = (body) => {
    const newBody = JSON.parse(body);
    newBody['char'].id = `${charList.length + 1}`;
    createCharacter(JSON.stringify(newBody)).then(updateList);
  };

  const onDeleteCharacter = (id) => {
    deleteCharacter(id).then(updateList);
  };
  const updateList = (newCharacter) => {
    console.log(newCharacter);
    setCharList((charList) => [...newCharacter]);
  };
  const onUpdateCharacter = (item) => {
    updateCharacter(item).then(updateList);
  };
  return (
    <>
      <Header openDelButton={openDelButton} addCharacter={addCharacter} />
      <CharList
        onUpdateCharacter={onUpdateCharacter}
        onDeleteCharacter={onDeleteCharacter}
        delChar={delChar}
        charList={charList}
      />
    </>
  );
}

export default App;
