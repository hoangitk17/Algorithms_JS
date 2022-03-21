import Calculator from './caculator'

describe('Calculator', () => {
  it('should be instanceable', () => {
    expect(new Calculator()).toBeInstanceOf(Calculator)
  });
});

describe('add', () => {
  it('should sum up 2 numbers', () => {
    const calculator = new Calculator()
    expect(calculator.add(3, 2)).toBe(5)
  })
})
describe('subtract', () => {
  it('should subtract 2 numbers', () => {
    const calculator = new Calculator()
    expect(calculator.subtract(3, 2)).toBe(1)
  })
  it('should throw an Error if less than 2 args are supplied', () => {
    const calculator = new Calculator()
    expect(() => calculator.add(3)).toThrow('2 arguments are required')
  })
  it('should throw an Error if the arguments are not numbers', () => {
    const calculator = new Calculator()
    expect(() => calculator.add(3, '2')).toThrow('The arguments must be numbers')
  })
})