import { Personage } from './personage';

describe('Given the personage class', () => {
  describe('When somebody create a personage', () => {
    const person = new Personage('Juana', 'Perez', 22);
    test('Then it fields should be filled', () => {
      expect(person).toHaveProperty('personageName');
      expect(person).toHaveProperty('lineage');
      expect(person).toHaveProperty('age');
    });
  });
});
