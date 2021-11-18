import {CubeCommand} from "./CubeCommand";

describe('CubeCommand', () => {
    test('should return cube of value', () => {
        expect(new CubeCommand(9).execute()).toBe(729);
        expect(new CubeCommand(-6).execute()).toBe(-216);

    });
    test('should return cube of  float value correctly', () => {
        expect(new CubeCommand(0.2).execute()).toBeCloseTo(0.008);
        expect(new CubeCommand(-0.6).execute()).toBeCloseTo(-0.216)
    });
})
