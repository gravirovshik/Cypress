describe('Testqastudio.me', () => {

    it('Длинный автотест testqastudio', () => {

      cy.visit('https://testqastudio.me/');
      cy.get('.post-11342 > .product-inner > .product-summary > .woocommerce-loop-product__title').click();
      cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
      cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
      cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
      cy.visit('https://testqastudio.me/');
      cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
      cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
      cy.visit('https://testqastudio.me/checkout/');
      cy.get('#billing_first_name').type('Роман');
      cy.get('#billing_last_name').type('Белов');
      cy.get('#select2-billing_country-container').click();
      cy.get("input[role='combobox']").type('Пуэрто-Рико').type('{Enter}');
      cy.get('#billing_address_1').type('Чистопрудный, 12');
      cy.get('#billing_city').type('Москва');
      cy.get('#billing_postcode').type('101000');
      cy.get('#billing_phone').type('89153456782');
      cy.get('#billing_email').type('roman@belov.ru');
      cy.get('#place_order').click();
      cy.wait(3000);
      cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.')
  
    })  
  
  })