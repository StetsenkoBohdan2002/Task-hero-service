import React from 'react';
import { useState } from 'react';
import './CharList.scss';
import UpdateCharacter from '../updateCharacter/UpdateCharacter';
import CharacterInfo from '../characterInfo/CharacterInfo';

const CharList = (props) => {
  const [update, setUpdate] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const openInfo = (e, item) => {
    if (e.target.classList.contains(item)) {
      setShowInfo(!showInfo);
    }
  };
  const openModal = (e, item) => {
    if (e.target.classList.contains(item)) {
      setUpdate(!update);
    }
  };

  const [item, setItem] = useState({
    id: '',
    nickname: '',
    real_name: '',
    superpowers: '',
    origin_description: '',
    images: [{ img: '' }, { img: '' }],
  });
  const submit = (e) => {
    e.preventDefault();
    props.onUpdateCharacter(JSON.stringify(item));
    setUpdate(!update);
  };
  function updateItem(item) {
    setItem(item);
    setUpdate(!update);
  }
  function show(item) {
    setItem(item);
    setShowInfo(!showInfo);
  }
  function renderItems(arr) {
    const items = arr.map((item) => {
      return (
        <li className='character' tabIndex={0} key={item.id}>
          <div className='main-info' onClick={() => show(item)}>
            <img
              className='character-img'
              src={item.images[0].img}
              alt={item.nickname}
            />
            <div className='character-name'>{item.nickname}</div>
            <div className='character-desc'>
              {item.origin_description.length > 30
                ? item.origin_description.substr(0, 30) + '...'
                : item.origin_description}
            </div>
          </div>
          <div onClick={() => updateItem(item)} className='character-update'>
            Update
          </div>
          <div
            className='character-delete'
            style={{ display: props.delChar ? 'block' : 'none' }}
            onClick={() => props.onDeleteCharacter(item.id)}
          >
            <span></span>
            <span></span>
          </div>
        </li>
      );
    });
    return <ul className='char-list'>{items}</ul>;
  }
  const items = renderItems(props.charList);
  return (
    <>
      <main className='list-wrapper'>{items}</main>
      <UpdateCharacter
        item={item}
        state={update}
        setState={setItem}
        func={openModal}
        submit={submit}
      />

      <CharacterInfo
        item={item}
        state={showInfo}
        func={openInfo}
        submit={submit}
      />
    </>
  );
};

export default CharList;
