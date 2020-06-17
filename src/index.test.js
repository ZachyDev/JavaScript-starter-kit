import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

// start the tests
describe('we expect 10 + 10 to equal 20',() => {
    it('should add 10 + 10 then return 20',() => {
        expect(10+10).to.equal(20);
    })
})

// check the matching text
describe('Testing index.html',() => {
    it('the h1 tag should have Hello World!',(done) => {
        const indexFile = fs.readFileSync('./src/index.html','utf-8');
        jsdom.env(indexFile,(err,window) => {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Hello World!');
            done();
            window.close();
        })
    })
})
