const Psicologas = require('../src/models/psicologasModel');

describe('Testes de modelo de psicologas', () => {
    const psicologas = new Psicologas({
        nomeCompleto: 'Larissa Aguiar',
        crp: 40598 / 98,
        especialidades: 'Desenvolvimento Pessoal, Ansiedade',
        biografia: 'Formada em pscilogia desde ... '
    });
    it('Deve retornar a nova psiciloga', () => {
        expect(psicologas.nomeCompleto).toBe('Larissa Aguiar');
    });
    it('deve retornar o crp ', () => {
        expect(psicologas.crp).toBe(40598 / 98);
    });
    it('deve retornar especialidades', () => {
        expect(psicologas.especialidades).toStrictEqual(['Desenvolvimento Pessoal, Ansiedade']);
    });
    it('deve retonar a biografia', () => {
        expect(psicologas.biografia).toStrictEqual('Formada em pscilogia desde ... ')
    });
    it("Deve salvar no banco de dados a psciologa", () => {
        psicologas.save().then((dados) => {
            expect(dados.nomeCompleto).toBe('Larissa Aguiar');
})})})
