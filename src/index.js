function test(a) {
    if (typeof a !== 'boolean') {
        throw new Error('must be boolean');
    }
    return a;
}

export default test;

class A
{
    run(){
        return true
    }
}
export {A};
