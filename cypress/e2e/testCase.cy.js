import 'cypress-xpath'
describe('Login test', () => {
    it('login', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.visit("https://magento.softwaretestingboard.com/customer/account/login")
        cy.get('#email').type('istiakovi02@gmail.com')
        cy.get("[title='Password']").type('ovi7788#')
        cy.get("button#send2[class$='action login primary']").click()

    })
    it('Select product', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get("a#ui-id-5.level-top.ui-corner-all").trigger('mouseover')
        cy.get("#ui-id-17").trigger('mouseover')
        cy.get("#ui-id-21").trigger('mouseover')
        cy.get("#ui-id-21").click()
        cy.xpath("//li[contains(.,'Deion Long-Sleeve EverCool™ Tee')]").click()

        //Size and colour select
        cy.get("#option-label-color-93-item-49").click()
        cy.get("#option-label-size-143-item-168").click()
        //Add to cart

        cy.get('#qty').clear()
        cy.get('input#qty.input-text.qty').click().type('2')
        cy.get('#product-addtocart-button').click()
        cy.get('a.action.showcart').click()
    })
})




