describe('My First Test', () => {
  it('show data after submit', () => {
    cy.visit('http://localhost:5173')

    cy.get('input#email').type('hello_world@gmail.com')

    cy.get('input#country').type('Taiwan')

    cy.get('input#phoneNumber').type('0912345')

    cy.get('input#password').type('Password123')

    cy.get('input#confirmPassword').type('Password123')

    cy.contains('Submit').click()

    cy.contains('{"email":"hello_world@gmail.com","country":"Taiwan","phoneNumber":"0912345","password":"Password123","confirmPassword":"Password123"}')
  })
})