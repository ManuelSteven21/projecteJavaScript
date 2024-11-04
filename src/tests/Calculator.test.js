// Calculator.test.js
import { mount } from '@vue/test-utils';
import Calculator from '@/views/CalculatorPage.vue';

describe('Calculator.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Calculator);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should clear the display', () => {
    wrapper.vm.display = '123';
    wrapper.vm.clearDisplay();
    expect(wrapper.vm.display).toBe('');
  });

  it('should clear the last entry', () => {
    wrapper.vm.display = '123';
    wrapper.vm.clearEntry();
    expect(wrapper.vm.display).toBe('12');
  });

  it('should append a number to display', () => {
    wrapper.vm.appendNumber(5);
    expect(wrapper.vm.display).toBe('5');
    wrapper.vm.appendNumber(3);
    expect(wrapper.vm.display).toBe('53');
  });

  it('should append a decimal point', () => {
    wrapper.vm.display = '5';
    wrapper.vm.appendDecimal();
    expect(wrapper.vm.display).toBe('5.');
    // No debe añadir otro punto decimal
    wrapper.vm.appendDecimal();
    expect(wrapper.vm.display).toBe('5.');
  });

  it('should append an operator', () => {
    wrapper.vm.display = '8';
    wrapper.vm.operate('+');
    expect(wrapper.vm.display).toBe('8+');
    // No debería permitir otro operador consecutivo
    wrapper.vm.operate('-');
    expect(wrapper.vm.display).toBe('8+');
  });

  it('should calculate square of a number', () => {
    wrapper.vm.display = '4';
    wrapper.vm.square();
    expect(wrapper.vm.display).toBe('16');
  });

  it('should calculate square root of a number', () => {
    wrapper.vm.display = '9';
    wrapper.vm.squareRoot();
    expect(wrapper.vm.display).toBe('3');
  });

  it('should calculate result for addition', () => {
    wrapper.vm.display = '8+5';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('13');
  });

  it('should calculate result for subtraction', () => {
    wrapper.vm.display = '10-3';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('7');
  });

  it('should calculate result for multiplication', () => {
    wrapper.vm.display = '4*5';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('20');
  });

  it('should calculate result for division', () => {
    wrapper.vm.display = '20/4';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('5');
  });

  it('should handle division by zero', () => {
    wrapper.vm.display = '5/0';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('Infinity');
  });

  it('should handle exponentiation', () => {
    wrapper.vm.display = '2^3';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('8');
  });

  it('should append parenthesis correctly', () => {
    wrapper.vm.appendParenthesis('(');
    wrapper.vm.appendNumber(5);
    wrapper.vm.appendParenthesis(')');
    expect(wrapper.vm.display).toBe('(5)');
  });

  it('should handle complex expressions with parentheses', () => {
    wrapper.vm.display = '(2+3)*4';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('20');
  });

  it('should display error for invalid expressions', () => {
    wrapper.vm.display = '5+*3';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('Error');
  });
});
