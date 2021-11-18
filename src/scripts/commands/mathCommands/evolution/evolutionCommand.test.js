import {EvolutionCommand} from "./EvolutionCommand";

describe('EvolutionCommand', () => {
    test('should get to take root of the entered number correctly', () => {
        expect(new EvolutionCommand(9, 4).execute()).toBeCloseTo(1.166);
        expect(new EvolutionCommand(-6, 2).execute()).toBe('Error: please enter positive number');
        expect(new EvolutionCommand(0, 3).execute()).toBe(0);

    });
    test('should get to take root of the float number correctly', () => {
        expect(new EvolutionCommand(0.2, 3).execute()).toBe(243);
        expect(new EvolutionCommand(-0.6, 0.2).execute()).toBe('Error: please enter positive number');
    });
})
