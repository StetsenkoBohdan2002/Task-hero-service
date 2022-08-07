import { useHttp } from '../hooks/http.hook.js';

const useMarvelService = () => {
  const { request } = useHttp();

  const getAllCharacters = async () => {
    const res = await request(`http://localhost:8080/api/characters`);
    return res;
  };

  const createCharacter = async (body) => {
    const res = await request(
      `http://localhost:8080/api/characters`,
      'POST',
      body
    );
    console.log(res['characters']);
    return res['characters'];
  };

  const deleteCharacter = async (id) => {
    const res = await request(
      `http://localhost:8080/api/characters/${id}`,
      'DELETE'
    );
    return res['characters'];
  };

  const updateCharacter = async (item) => {
    console.log(item)
    const res = await request(
      `http://localhost:8080/api/characters/${item.id}`,
      'PUT',
      item
    );
    return res['characters'];
  };
  return {
    updateCharacter,
    deleteCharacter,
    createCharacter,
    getAllCharacters,
  };
};

export default useMarvelService;
