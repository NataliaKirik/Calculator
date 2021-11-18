import {LogCommand} from "./LogCommand";

describe('LogCommand', () => {
    test('should return log of value', () => {
        expect(new LogCommand(9).execute()).toBeCloseTo(2.19722);
        expect(new LogCommand(-6).execute()).toBe('Error: enter positive number');

    });
    test('should log  float value correctly', () => {
        expect(new LogCommand(0.2).execute()).toBeCloseTo(-1.6094);
        expect(new LogCommand(-0.6).execute()).toBe('Error: enter positive number')
    });
})
