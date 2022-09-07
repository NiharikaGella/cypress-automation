///<reference types = "cypress"/>
it('verify home page',()=>{

    cy.viewport(1280, 720);

    //visiting the url
    cy.visit('https://demo.automationtesting.in')

    //verifying if all buttons are present
    cy.get('#btn1').should('be.visible');
    cy.get('#btn2').should('be.visible');
    cy.get('#logo').should('be.visible');

    //verifying the input box, typing  a text and clicking enter
    cy.wait(3000);
    cy.get('#email').should('be.visible');
    cy.get('#email').type("niha.gella@gmail.com");
    cy.get('#enterimg').click();

    //Entering all the mandatory details in register form, clicking on radio buttons, checking boxes and click on submit
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').scrollIntoView().should('be.visible').type("Niharika");
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').type("Gella");
    cy.get('.col-md-8 > .form-control').type("langley"); 
    cy.get('#eid > .form-control').type("niha.gella@gmail.com");
    cy.get(':nth-child(4) > .col-md-4 > .form-control').type("7459539066");
    cy.wait(3000);

    //selecting the radio button
    cy.get(':nth-child(5) > .col-md-4 > :nth-child(2) > input').check();

    //checking the check box 
    cy.get('#checkbox2').check();

    //selecting from drop down 
   cy.get('.select2-selection__arrow').click();
    cy.get('.select2-search__field').type('India{enter}');
   

    //click on submit
    cy.get('#submitbtn').click();
    
   


    
   
    


})