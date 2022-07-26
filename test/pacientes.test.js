const Pacientes = require('../src/models/pacientesModel');

describe('Testes de modelo de pacientes', () => {
  const patient = new Pacientes ({
    nomeCompleto: 'Priscila Campos',
    cpf: 40598754637,
    dataDeNascimento: '30/05/1993',
  });
  it('should return the Schema and return a new patient', () => {
    expect(patient.nomeCompleto).toBe('Priscila Campos');
  });
  it('deve retornar a data de nascimento', () => {
    expect(patient.dataDeNascimento).toBe('30/05/1993');
  });
  it('deve retornar o cpf', () => {
    expect(patient.cpf).toBe(40598754637);
    
    
});})
