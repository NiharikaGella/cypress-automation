///<reference types = "cypress"/>
it('verify window handle',()=>{
//visiting the url
cy.visit('https://demo.automationtesting.in')

//navigating to Register
cy.get('#email').should('be.visible');
cy.get('#email').type("niha.gella@gmail.com");
cy.get('#enterimg').click();
cy.wait(3000);
cy.get(':nth-child(4) > .dropdown-menu > :nth-child(2) > a').click();
 cy.get('.active > .analystic').scrollIntoView().should('be.visible');
 //cy.get('a > .btn').invoke('removeAttr','target').click();

 const pop_url = 'http://www.selenium.dev';
 cy.window().then(win =>
    {
const stub = cy.stub(win,'open').as('windowopen')

    }       )
    cy.get('a > .btn').click();
   // cy.get('@windowopen').should('be.calledWith',pop_url);

}
)



it('verify upload document button',()=>{
    //visiting the url
cy.visit('https://demo.automationtesting.in')

//navigating to Register
cy.get('#email').should('be.visible');
cy.get('#email').type("niha.gella@gmail.com");
cy.get('#enterimg').click();

cy.get(':nth-child(9) > .dropdown-menu > :nth-child(4) > a').scrollIntoView().should('be.visible').click();
cy.wait(3000);
const docfile = 'Niharika_Resume.docx';
cy.get('#input-4').attachFile(docfile);



})
