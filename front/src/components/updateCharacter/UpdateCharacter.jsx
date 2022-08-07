import React from 'react';
import './UpdateCharacter.scss';
const AddCharacter = ({ item, state, setState, func, submit }) => {
  return (
    <div className='modal' style={{ display: state ? 'block' : 'none' }}>
      <div className='modal-wrapper toggle' onClick={(e) => func(e, 'toggle')}>
        <form className='modal-open' onSubmit={submit}>
          <h2 className='form-title'>Update Character</h2>
          <div className='modal-content'>
            <div className='left'>
              <img src={item.images[0].img} alt='' />
            </div>
            <div className='right'>
              <fieldset>
                <label htmlFor='name'>New Img url</label>
                <input
                  type='text'
                  name='img'
                  value={item.images[0].img}
                  onChange={(e) =>
                    setState({
                      ...item,
                      images: [
                        { img: e.target.value },
                        ...item.images.slice(1),
                      ],
                    })
                  }
                />
              </fieldset>
              <fieldset>
                <label htmlFor='name'>New Name</label>
                <input
                  type='text'
                  name='name'
                  value={item.nickname}
                  onChange={(e) =>
                    setState({ ...item, nickname: e.target.value })
                  }
                />
              </fieldset>
              <fieldset>
                <label htmlFor='name'>New Description</label>
                <textarea
                  type='text'
                  rows='3'
                  name='desc'
                  value={item.origin_description}
                  onChange={(e) =>
                    setState({ ...item, origin_description: e.target.value })
                  }
                />
              </fieldset>
              <fieldset>
                <label htmlFor='name'>Additional Image</label>
                <input
                  type='text'
                  name='img'
                  value={item.images[1].img}
                  onChange={(e) =>
                    setState({
                      ...item,
                      images: [
                        ...item.images.slice(0,1),
                        { img: e.target.value },
                      ],
                    })
                  }
                />
              </fieldset>
            </div>
          </div>
          <button className='btn submit' type='submit'>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCharacter;
