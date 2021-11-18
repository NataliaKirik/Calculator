import {DivisionCommand} from "./DivisionCommand";

describe('DivisionCommand', () => {
    test('should return quotient    of two values', () => {
        expect(new DivisionCommand(90, 4).execute()).toBe(22.5);
        expect(new DivisionCommand(-6, 2).execute()).toBe(-3);
        expect(new DivisionCommand(0, 3).execute()).toBe(0);
        expect(new DivisionCommand(100, 0).execute()).toBe('Error: You can\'t divide by zero');

    });
    test('should quotient   2 float values correctly', () => {
        expect(new DivisionCommand(0.2, 3).execute()).toBeCloseTo(0.066);
        expect(new DivisionCommand(-0.6, 0.2).execute()).toBeCloseTo(-3);
    });
})
