describe('Consulta CEP Fluxo', () => {
  it('Acesso ao site', () => {
    cy.visit('/')
    cy.contains('Consulta CEP')
    cy.contains('Preencha o cep no campo abaixo para consultar a região desejada.')
    cy.get('body').find('.app__informations__description').not('.app__informations__description--error')
  });

  it('Busca de cep inválido', () => {
    cy.get('[data-cy=InputMask]').click().type('12345678')
    cy.get('body').find('.app__informations__description--error')
  });

  it('Busca de cep válido', () => {
    cy.get('[data-cy=InputMask]').click().type('02047000')
    cy.get('body').not('.app__informations__description')
    cy.get('body').not('.app__informations__description--error')
    cy.contains('Rua Maria Prestes Maia, Vila Guilherme')
    cy.contains('São Paulo/SP - 02047-000')
    cy.get('[data-cy=InputMask]').should('be.value', '02047-000')
  });

  it('Busca de outro cep válido', () => {
    cy.get('[data-cy=InputMask]').click()
    cy.get('[data-cy=InputMask]').should('be.value', '')
    cy.get('[data-cy=InputMask]').type('12950638')
    cy.get('[data-cy=InputMask]').should('be.value', '12950-638')
    cy.get('body').not('.app__informations__description')
    cy.get('body').not('.app__informations__description--error')
    cy.contains('Rua Copos de Leite, Nova Cerejeira')
    cy.contains('Atibaia/SP - 12950-638')
  })

  it('Voltar ao estado inicial da página', () => {
    cy.get('[data-cy=Back]').click()
    cy.get('[data-cy=InputMask]').should('be.value', '')
    cy.contains('Consulta CEP')
    cy.contains('Preencha o cep no campo abaixo para consultar a região desejada.')
    cy.get('body').find('.app__informations__description').not('.app__informations__description--error')
    cy.get('body').not('.app__informations__description--error')
  })
});
