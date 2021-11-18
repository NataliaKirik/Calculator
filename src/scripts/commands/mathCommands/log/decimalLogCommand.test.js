import {DecimalLogCommand} from "./DecimalLogCommand";

describe('DecimalLogCommand', () => {
    test('should return decimal log of value', () => {
        expect(new DecimalLogCommand(9).execute()).toBeCloseTo(0.954);
        expect(new DecimalLogCommand(-6).execute()).toBe('Error: enter positive number');

    });
    test('should decimal log  float value correctly', () => {
        expect(new DecimalLogCommand(0.2).execute()).toBeCloseTo(-0.6989);
        expect(new DecimalLogCommand(-0.6).execute()).toBe('Error: enter positive number')
    });
})
