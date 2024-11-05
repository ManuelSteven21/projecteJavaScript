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

  it('hauria de netejar la pantalla', () => {
    wrapper.vm.display = '123';
    wrapper.vm.clearDisplay();
    expect(wrapper.vm.display).toBe('');
  });

  it('hauria de netejar l\'última entrada', () => {
    wrapper.vm.display = '123';
    wrapper.vm.clearEntry();
    expect(wrapper.vm.display).toBe('12');
  });

  it('hauria d\'afegir un número a la pantalla', () => {
    wrapper.vm.appendNumber(5);
    expect(wrapper.vm.display).toBe('5');
    wrapper.vm.appendNumber(3);
    expect(wrapper.vm.display).toBe('53');
  });

  it('hauria d\'afegir un punt decimal', () => {
    wrapper.vm.display = '5';
    wrapper.vm.appendDecimal();
    expect(wrapper.vm.display).toBe('5.');
    // No hauria d'afegir un altre punt decimal
    wrapper.vm.appendDecimal();
    expect(wrapper.vm.display).toBe('5.');
  });

  it('hauria d\'afegir un operador', () => {
    wrapper.vm.display = '8';
    wrapper.vm.operate('+');
    expect(wrapper.vm.display).toBe('8+');
    // No hauria de permetre un altre operador consecutiu
    wrapper.vm.operate('-');
    expect(wrapper.vm.display).toBe('8+');
  });

  it('hauria de calcular el quadrat d\'un número', () => {
    wrapper.vm.display = '4';
    wrapper.vm.square();
    expect(wrapper.vm.display).toBe('16');
  });

  it('hauria de calcular l\'arrel quadrada d\'un número', () => {
    wrapper.vm.display = '9';
    wrapper.vm.squareRoot();
    expect(wrapper.vm.display).toBe('3');
  });

  it('hauria de calcular el resultat d\'una suma', () => {
    wrapper.vm.display = '8+5';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('13');
  });

  it('hauria de calcular el resultat d\'una resta', () => {
    wrapper.vm.display = '10-3';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('7');
  });

  it('hauria de calcular el resultat d\'una multiplicació', () => {
    wrapper.vm.display = '4*5';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('20');
  });

  it('hauria de calcular el resultat d\'una divisió', () => {
    wrapper.vm.display = '20/4';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('5');
  });

  it('hauria de gestionar la divisió entre zero', () => {
    wrapper.vm.display = '5/0';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('Infinity');
  });

  it('hauria de gestionar l\'exponenciació', () => {
    wrapper.vm.display = '2^3';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('8');
  });

  it('hauria d\'afegir parèntesis correctament', () => {
    wrapper.vm.appendParenthesis('(');
    wrapper.vm.appendNumber(5);
    wrapper.vm.appendParenthesis(')');
    expect(wrapper.vm.display).toBe('(5)');
  });

  it('hauria de gestionar expressions complexes amb parèntesis', () => {
    wrapper.vm.display = '(2+3)*4';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('20');
  });

  it('hauria de mostrar un error per expressions no vàlides', () => {
    wrapper.vm.display = '5+*3';
    wrapper.vm.calculate();
    expect(wrapper.vm.display).toBe('Error');
  });
});