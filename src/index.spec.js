import test from './';

describe('index', () => {
    it('test', () => {
        expect(test(true)).toBeTruthy();
    })
    it('throw', () => {
        expect(() => {test('wrong');}).toThrowError(Error, 'must be boolean');
    })
})