
const protocol = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

describe('Testing if send mail work correctly', () => {
    // TEST PATH 1
    let input = "";
    it(('There is no value input', () => {
        expect(input).tobe("");
    }))
    // TEST PATH 2
    input = "helo everyone";
    it(('The input is not match protocol', () => {
        expect(input).anything();
        expect(input).not.stringMatching(protocol);
    }))
    // TEST PATH 3
    input = "heloeveryon@gmail.com"
     it(('The input is match protocol', () => {
        expect(input).stringMatching(protocol);
    }))

})

