require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('Teste a função fetchCharacter', () => {
  // Testando com o id correto
  it('Vereifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  });

  // Testando sem id
  it('Verifica se retorna erro ao executar a função sem paramentro', async () => {
    const failRequest = await fetchCharacter();

    expect(failRequest).toEqual(new Error('You must provide an url'));
  });

  // Testando id incorreto
  it('Verifica se retorna \'Invalid id\' ao executar a função com parametro que não existe', async () => {
    const response = await fetchCharacter('parametro qualquer');
    expect(response).toBe('Invalid id');
  });

  // Testando a url
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});