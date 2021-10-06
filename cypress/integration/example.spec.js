
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains the 8 ball img', ()=>{
            cy.get('#8ball').should('be.visible');
        });
    });
});