const Psychologists = require('../src/models/psychologistModel');

describe('Psychologist model tests', () => {
  const psychologist = new Psychologists({
    fullName: 'Larissa Aguiar',
    crp: '40598/98',
    specialties: ['Personal Development', 'Anxiety'],
    biography: 'Graduated in psychology since...'
  });
  
  it('should return the new psychologist', () => {
    expect(psychologist.fullName).toBe('Larissa Aguiar');
  });
  
  it('should return the crp', () => {
    expect(psychologist.crp).toBe('40598/98');
  });
  
  it('should return specialties', () => {
    expect(psychologist.specialties).toStrictEqual(['Personal Development', 'Anxiety']);
  });
  
  it('should return the biography', () => {
    expect(psychologist.biography).toStrictEqual('Graduated in psychology since...');
  });
  
  it('should validate required fields', () => {
    const invalidPsychologist = new Psychologists({});
    const validationError = invalidPsychologist.validateSync();
    expect(validationError).toBeDefined();
    expect(validationError.errors.fullName).toBeDefined();
    expect(validationError.errors.crp).toBeDefined();
  });
});
