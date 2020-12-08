const {fooBarQix} = require('./index');

it('returns 1 when given 1', () => {
    expect(fooBarQix(1)).toBe('1');
});
it('returns 4 when given 4', () => {
    expect(fooBarQix(4)).toBe('4');
});
it('returns Foo when given 23 as it contains a 3', () => {
    expect(fooBarQix(23)).toBe('Foo');
});
it('returns FooFoo when given 331 as it contains two 3', () => {
    expect(fooBarQix(331)).toBe('FooFoo');
});
it('returns Qix when given 17 as it contains a 7', () => {
    expect(fooBarQix(17)).toBe('Qix');
});
it('returns QixQix when given 772 as it contains two 7', () => {
    expect(fooBarQix(772)).toBe('QixQix');
});
it('returns QixFoo when given 73 as it contains 7 then 3', () => {
    expect(fooBarQix(73)).toBe('QixFoo');
});
it('returns Bar when given 52 as it contains a 5', () => {
    expect(fooBarQix(52)).toBe('Bar');
});
it('returns Foo when given 6 as it is divisible by 3', () => {
    expect(fooBarQix(6)).toBe('Foo');
});
it('returns Foo when given 9 as it is divisible by 3', () => {
    expect(fooBarQix(9)).toBe('Foo');
});
it('returns FooFoo when given 3 as it is divisible by 3 and contain 3', () => {
    expect(fooBarQix(3)).toBe('FooFoo');
});
it('returns BarBar when given 5 as it is divisible by 5 and contain 5', () => {
    expect(fooBarQix(5)).toBe('BarBar');
});
it('returns QixQix when given 7 as it is divisible by 7 and contain 7', () => {
    expect(fooBarQix(7)).toBe('QixQix');
});
it('returns FooBarBar when given 15', () => {
    expect(fooBarQix(15)).toBe('FooBarBar');
});



it('returns * when given 0', () => {
    expect(fooBarQix(0)).toBe('FooBarQix*');
});
it('returns 1*1 when given 101', () => {
    expect(fooBarQix(101)).toBe('1*1');
});
it('returns Bar* when given 10 as it is divisible by 5 and contains 0', () => {
    expect(fooBarQix(10)).toBe('Bar*');
});

it('respond to all test dataset', () => {
    expect(fooBarQix(1)).toBe('1');
    expect(fooBarQix(2)).toBe('2');
    expect(fooBarQix(3)).toBe('FooFoo');
    expect(fooBarQix(4)).toBe('4');
    expect(fooBarQix(5)).toBe('BarBar');
    expect(fooBarQix(6)).toBe('Foo');
    expect(fooBarQix(7)).toBe('QixQix');
    expect(fooBarQix(8)).toBe('8');
    expect(fooBarQix(9)).toBe('Foo');
    expect(fooBarQix(13)).toBe('Foo');
    expect(fooBarQix(15)).toBe('FooBarBar');
    expect(fooBarQix(21)).toBe('FooQix');
    expect(fooBarQix(33)).toBe('FooFooFoo');
    expect(fooBarQix(51)).toBe('FooBar');
    expect(fooBarQix(53)).toBe('BarFoo');
    expect(fooBarQix(101)).toBe('1*1');
    expect(fooBarQix(303)).toBe('FooFoo*Foo');
    expect(fooBarQix(105)).toBe('FooBarQix*Bar');
    expect(fooBarQix(10101)).toBe('FooQix**');

})