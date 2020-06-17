import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
// start the test
describe('testing 4 + 4',() => {
    it('should return 8',() => {
        expect(4 + 4).to.equal(8);
    });
})

// second test

// testing whether the correct format has been matched
describe('The test should match Hello World!',() => {
    it('should return Hello World!',(done)=> {
        const index = fs.readFileSync('./src/index.html','utf-8');
        jsdom.env(index,(err,window) => {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Hello World!');
            done();
        })
    })
})
