import {FactorialCommand} from "./FactorialCommand";

describe('FactorialCommand', () => {
    test('should get factorial current operand', () => {
        expect(new FactorialCommand(9).execute()).toBe(362880);
        expect(new FactorialCommand(-6).execute()).toBe('Error: enter positive integer');
        expect(new FactorialCommand(0).execute()).toBe(1);

    });
    test('should get factorial float value', () => {
        expect(new FactorialCommand(0.2).execute()).toBe("Error: enter positive integer");
        expect(new FactorialCommand(-0.6).execute()).toBe("Error: enter positive integer");
    });
})
