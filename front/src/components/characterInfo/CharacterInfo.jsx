import React from 'react';
import './CharacterInfo.scss';
const CharaxterInfo = ({ item, state, func, submit }) => {
  const items = item.superpowers.split(',').map((name) => {
    return <li>{name}</li>;
  });
  return (
    <div className='modal' style={{ display: state ? 'block' : 'none' }}>
      <div className='modal-wrapper info' onClick={(e) => func(e, 'info')}>
        <div className='modal-open' onSubmit={submit}>
          <h2 className='form-title'>Character Info</h2>
          <div className='modal-content main-info'>
            <div className='left'>
              <img src={item.images[0].img} alt='' />
            </div>
            <ul className='right main-info'>
              <div className='item-name'>{item.nickname}</div>
              <div className='item-realname'>{item.real_name}</div>
              <div className='item-powers'>{items}</div>
              <div className='item-desc'>{item.origin_description}</div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharaxterInfo;
