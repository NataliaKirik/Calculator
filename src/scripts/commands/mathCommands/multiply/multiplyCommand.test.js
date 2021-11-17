import {MultiplyCommand} from "./MultiplyCommand";

describe('MultiplyCommand', () => {
    test('should return product   of two values', () => {
        expect(new MultiplyCommand(-1, -3).execute()).toBe(3);
        expect(new MultiplyCommand(-800, 500).execute()).toBe(-400000);
        expect(new MultiplyCommand(800, 500).execute()).toBe(400000);
    });
    test('should product  2 float values correctly', () => {
        expect(new MultiplyCommand(-0.1, 0.2).execute()).toBeCloseTo(-0.02);
        expect(new MultiplyCommand(-0.1, -0.2).execute()).toBeCloseTo(0.02);
    });
})
