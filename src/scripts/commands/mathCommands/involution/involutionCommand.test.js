import {InvolutionCommand} from "./InvolutionCommand";


describe('InvolutionCommand', () => {
    test('should raise current operand value  to a power of previous', () => {
        expect(new InvolutionCommand(9, 3).execute()).toBe(729);
        expect(new InvolutionCommand(-6, 4).execute()).toBe(1296);

    });
    test('should raise current operand float value  to a power of previous', () => {
        expect(new InvolutionCommand(0.2, 3).execute()).toBeCloseTo(0.008);
        expect(new InvolutionCommand(-0.6, 0.7).execute()).toBeNaN()
        expect(new InvolutionCommand(0.6, 0.7).execute()).toBeCloseTo(0.699)
    });
})
