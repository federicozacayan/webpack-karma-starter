import test, {A} from './';

describe('Testing File index.html', () => {
    
    it('Test else way', () => {
        expect(test(true)).toBeTruthy();
    })
    
    it('Get an Exeption', () => {
        expect(() => {test('wrong');})
        .toThrowError(Error, 'must be boolean');
    })
    
    it('Get true', ()=>{
        let a = new A;
        expect(a.run()).toBe(true);
    })
    
    it('Get False', ()=>{
        let a = new A;
        expect(!a.run()).toBeFalsy();
        
    })
    
    it('How many time it was called', ()=>{
        let a = new A;
        var spy = spyOn(a, 'run');
        a.run()
        expect(spy).toHaveBeenCalledTimes(1);
        
    })
})
