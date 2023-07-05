describe('Sign up page function', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  const ids = [
    'email',
    'country',
    'phoneNumber',
    'password',
    'confirmPassword'
  ];

  it('input fields change', () => {
    ids.forEach((id) => {
      cy.get(`input#${id}`).type('value');
      cy.get(`input#${id}`).should('have.value', 'value');
    })
  })

  it('show data after submit', () => {
    cy.visit('/') // base url is set

    cy.get('input#email').type('hello_world@gmail.com')

    cy.get('input#country').type('Taiwan')

    cy.get('input#phoneNumber').type('0912345')

    cy.get('input#password').type('Password123')

    cy.get('input#confirmPassword').type('Password123')

    cy.contains('Submit').click()

    cy.contains('{"email":"hello_world@gmail.com","country":"Taiwan","phoneNumber":"0912345","password":"Password123","confirmPassword":"Password123"}')
  })

  it("validate phoneNumber", () => {
    cy.get('input#phoneNumber').type('abc')
    cy.contains('Submit').click()

    cy.contains('Phone numbers must contain only numbers')
  })

})

describe('password fields', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it("password validate length", () => {

    for (let i = 1; i <= 7; i++) {
      cy.get('input#password').type(String(i))
      cy.contains('Submit').click()

      cy.contains('Password must be at least 8 characters')
    }

    cy.get('input#password').type('8');
    cy.contains('Submit').click()
    cy.contains('Password must be at least 8 characters').should('not.exist')

  })

  it("password validate lowercase", () => {
    cy.get('input#password').type('AAAAAAAA')

    cy.contains('Submit').click()
    cy.contains('Password must contain lowercase letters')
  })

  it("password validate numbers", () => {
    cy.get('input#password').type('AAAAAAAa')

    cy.contains('Submit').click()
    cy.contains('Password must contain numbers')
  })

  it("confirm password is required", () => {
    cy.get('input#confirmPassword').type('a{backspace}') // no text but touched
    cy.contains('Submit').click()
    cy.contains('Confirm Password is required')
  })

  it("confirm password must match password", () => {
    const str = 'Aa111111'
    cy.get('input#password').type(str);

    for (let i = 0; i < str.length - 1; i++) {
      cy.get('input#confirmPassword').type(str[i])
      cy.contains('Submit').click();
      cy.contains('Passwords must match')
    }

    cy.get('input#confirmPassword').type(str.slice(-1)) // last character
    cy.contains('Confirm password must match').should('not.exist')

    cy.get('input#confirmPassword').type('anything') // last character
    cy.contains('Submit').click();
    cy.contains('Confirm password must match').should('not.exist')

  })
})