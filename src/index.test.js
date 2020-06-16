// import assertion library
import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
describe('Our first test',() => {
    it('Should pass',() => {
        expect(true).to.equal(true);
    });
});

// testing index.html for Hello World!
describe('testing index.htm file',() => {
    it('should have the text Hello World!',(done) => {
        const index = fs.readFileSync('./src/index.html','utf-8');
        jsdom.env(index,(err,window) => {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Hello World!');
            done();
            window.close();
        })
    })
})