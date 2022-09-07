///<reference types = "cypress"/>
it('verify Alerts',()=>{

    

    //visiting the url
    cy.visit('https://demo.automationtesting.in')

    //navigating to Register
    cy.get('#email').should('be.visible');
    cy.get('#email').type("niha.gella@gmail.com");
    cy.get('#enterimg').click();

    //navigating to alerts page
    cy.get(':nth-child(4) > .dropdown-menu > :nth-child(1) > a').click();
    cy.get('.active > .analystic').scrollIntoView().should('be.visible');
    cy.get(' #OKTab > .btn').scrollIntoView().should('be.visible').click();
    cy.wait(3000);
    //Click on 'Ok' alert box and verify the text
    cy.on('window.alert',(str) =>
    {
    expect(str).to.equal(' I am an alert box!');
    })

    //Click on alert with ok and cancel > Press Ok and verify alert text
    cy.get('#CancelTab > .btn').scrollIntoView().should('be.visible').click();
    cy.on('window.confirm',(str) =>
   {
    expect(str).to.equal('Press a Button !');
   }
    )
    cy.get('#demo').should('be.visible');


     //Click on alert with ok and cancel > Press cancel and verify alert text
    cy.get('#CancelTab > .btn').scrollIntoView().should('be.visible').click();
    cy.on('window.confirm',function(confirmText)
    { 
        return false
    }
    )


     //click on alert with text box > Enter Niharika and verify the alert text
     cy.window().then(function(p){
        cy.wait(3000);
        //stubbing prompt window
        cy.stub(p, "prompt").returns("Niharika");
        // click on Click for JS Prompt button
        cy.get('#Textbox > .btn').scrollIntoView().should('be.visible').click();
        // verify application message on clicking on OK
        cy.get('#demo1').contains('Hello Niharika How are you today');
    

   
   
    })
   

})