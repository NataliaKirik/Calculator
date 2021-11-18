import {SquareCommand} from "./SquareCommand";


describe('SquareCommand', () => {
    test('should return square of value', () => {
        expect(new SquareCommand(9).execute()).toBe(81);
        expect(new SquareCommand(-6).execute()).toBe(36);

    });
    test('should return square of  float value correctly', () => {
        expect(new SquareCommand(0.2).execute()).toBeCloseTo(0.04);
        expect(new SquareCommand(-0.6).execute()).toBe(0.36)
    });
})
