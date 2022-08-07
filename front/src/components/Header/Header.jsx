import React, { useState } from 'react';
import './Header.scss';

const Header = (props) => {
  const [addChar, setAddChar] = useState(false);
  const [char, setChar] = useState({
    id: '',
    nickname: '',
    real_name: '',
    superpowers: '',
    origin_description: '',
    images: [{ img: '' }, { img: '' }],
  });
  const openModal = (e) => {
    if (e.target.classList.contains('toggle')) {
      setAddChar(!addChar);
    }
  };
  const submit = (e) => {
    e.preventDefault();

    props.addCharacter(JSON.stringify({ char }));
    setAddChar(!addChar);
    setChar({
      id: '',
      nickname: '',
      real_name: '',
      superpowers: '',
      origin_description: '',
      images: [{ img: '' }, { img: '' }],
    });
  };
  return (
    <header className='header'>
      <div className='container'>
        <h1 className='header-title'>
          <span>Marver</span> Service
        </h1>
        <div className='buttons'>
          <button className=' btn toggle' onClick={(e) => openModal(e)}>
            Add character
          </button>
          <button onClick={() => props.openDelButton()} className='btn'>
            Delete character
          </button>
        </div>
      </div>
      <div
        className='form-wrapper toggle'
        style={{ display: addChar ? 'block' : 'none' }}
        onClick={(e) => openModal(e)}
      >
        <form className='add-character__modal' onSubmit={submit}>
          <h2 className='form-title'>Create Character</h2>
          <fieldset>
            <label htmlFor='name'>Main Img url</label>
            <input
              type='text'
              name='img'
              value={char.images[0].img}
              onChange={(e) =>
                setChar({
                  ...char,
                  images: [{ img: e.target.value }, { img: '' }],
                })
              }
            />
          </fieldset>
          <fieldset>
            <label htmlFor='name'>Nickname</label>
            <input
              type='text'
              name='name'
              value={char.nickname}
              onChange={(e) => setChar({ ...char, nickname: e.target.value })}
            />
          </fieldset>
          <fieldset>
            <label htmlFor='name'>Real Name</label>
            <input
              type='text'
              name='real_name'
              value={char.real_name}
              onChange={(e) => setChar({ ...char, real_name: e.target.value })}
            />
          </fieldset>
          <fieldset>
            <label htmlFor='name'>description</label>
            <input
              type='text'
              name='desc'
              value={char.origin_description}
              onChange={(e) =>
                setChar({ ...char, origin_description: e.target.value })
              }
            />
          </fieldset>
          <fieldset>
            <label htmlFor='name'>Super Powers</label>
            <input
              type='text'
              name='desc'
              value={char.superpowers}
              placeholder='superpower, superpower'
              onChange={(e) =>
                setChar({ ...char, superpowers: e.target.value })
              }
            />
          </fieldset>
          <fieldset>
            <label htmlFor='name'>Additional Image</label>
            <input
              type='text'
              name='img'
              value={char.images[1].img}
              onChange={(e) =>
                setChar({
                  ...char,
                  images: [char.images[0], { img: e.target.value }],
                })
              }
            />
          </fieldset>
          <button className='btn submit' type='submit'>
            Create
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
