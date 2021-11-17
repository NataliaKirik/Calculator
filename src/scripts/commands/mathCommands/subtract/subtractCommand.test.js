import {SubtractCommand} from "./SubtractCommand";

describe('SubtractCommand', () => {
    test('should return difference  of two values', () => {
        expect(new SubtractCommand(-1, -3).execute()).toBe(2);
        expect(new SubtractCommand(-800, 500).execute()).toBe(-1300);
        expect(new SubtractCommand(800, 500).execute()).toBe(300);
    });
    test('should subtract 2 float values correctly', () => {
        expect(new SubtractCommand(-0.1, 0.2).execute()).toBeCloseTo(-0.3);
        expect(new SubtractCommand(-0.1, -0.2).execute()).toBe(0.1);
    });
})
