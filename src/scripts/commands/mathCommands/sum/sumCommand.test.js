import {SumCommand} from "./SumCommand";

describe('SumCommand', () => {
    test('should return sum of two values', () => {
        expect(new SumCommand(1, 3).execute()).toBe(4);
        expect(new SumCommand(800, 500).execute()).toBe(1300);
        expect(new SumCommand(-9, 3).execute()).toBe(-6);
        expect(new SumCommand(-9, -3).execute()).toBe(-12);
    });
    test('should sum 2 float values correctly', () => {
        expect(new SumCommand(0.1, 0.2).execute()).toBeCloseTo(0.3);
        expect(new SumCommand(0.1, -0.2).execute()).toBeCloseTo(-0.1);
    });
})


