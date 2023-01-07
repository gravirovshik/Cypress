import '@4tw/cypress-drag-drop'
import 'cypress-file-upload';

describe('File upload', () => {
    
    it.skip('Single file', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('header.png');
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get('h3').should('contain', 'File Uploaded!');
         
    })

    it.skip('File rename', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath: 'header.png', fileName: 'my.pdf'});
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get('h3').should('contain', 'File Uploaded!');
         
    })

    it.skip('Drag and Drop', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile('header.png', { subjectType: 'drag-n-drop' });
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('contain', 'header.png');
        cy.get('#file-submit').click();
        cy.wait(2000);
        cy.get('h1').should('contain', 'Internal Server Error');
    })

    it.skip('Multiple files', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile(['header.png', 'header1.png']);
        cy.wait(2000);
        cy.get(':nth-child(6) > strong').should('contain', 'Files You Selected');     
    })

    it('Shadow Dom', () => {

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
        cy.get('.smart-browse-input', {includeShadowDom: true}).attachFile('header.png'); 
        cy.get('.smart-item-name', {includeShadowDom: true}).should('contain', 'header.png'); 
       
      
      
    })

    
    



})