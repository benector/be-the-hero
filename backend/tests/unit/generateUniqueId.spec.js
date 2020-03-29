const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', ()=>{
    it('should generate an unic ID', ()=>{
        const id = generateUniqueId();
        expect(id).toHaveLength(8);// expect = espera que alguma coisa aconteça  
    })

}) //categoria do arquivo de teste