import {PercentCommand} from "./PercentCommand";


describe('percentCommand', () => {
    test('should return percent of two values', () => {
        expect(new PercentCommand(1, 3).execute()).toBe(0.03);
        expect(new PercentCommand(800, 500).execute()).toBe(4000);
        expect(new PercentCommand(-9, 3).execute()).toBe(-0.27);
        expect(new PercentCommand(-9, -3).execute()).toBe(0.27);
    });
    test('should percent 2 float values correctly', () => {
        expect(new PercentCommand(0.1, 0.2).execute()).toBe(0.0002);
        expect(new PercentCommand(0.1, -0.2).execute()).toBe(-0.0002);
    });
})
