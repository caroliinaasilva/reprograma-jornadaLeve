const Patients = require('../src/models/patientModel');

describe('Patient model tests', () => {
  const patient = new Patients({
    fullName: 'Priscila Campos',
    cpf: '40598754637',
    dateOfBirth: '30/05/1993',
  });
  
  it('should return the Schema and create a new patient', () => {
    expect(patient.fullName).toBe('Priscila Campos');
  });
  
  it('should return the date of birth', () => {
    expect(patient.dateOfBirth).toBe('30/05/1993');
  });
  
  it('should return the cpf', () => {
    expect(patient.cpf).toBe('40598754637');
  });
  
  it('should validate required fields', () => {
    const invalidPatient = new Patients({});
    const validationError = invalidPatient.validateSync();
    expect(validationError).toBeDefined();
    expect(validationError.errors.fullName).toBeDefined();
    expect(validationError.errors.cpf).toBeDefined();
    expect(validationError.errors.dateOfBirth).toBeDefined();
  });
});
