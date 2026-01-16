import IPLsocial from "../IPLsocial";

describe("IPLsocial TEST", () => {
    describe("validation email", () => {
        
        it("should return false when give email with no @", () => {
            const iplSocial = new IPLsocial();

            const actual = iplSocial.validationEmail("simon.stomeoutlouk");

            expect(actual).toBe(false);
        });
        
        it("should return false when give email with no point is present in the domaine(not the last caracter) ", () => {
            const iplSocial = new IPLsocial();

            const actualNoPoint = iplSocial.validationEmail("simon.stome@outloukcom");

            expect(actualNoPoint).toBe(false);
        });
        
        it("should return false when give email with the point is not the last caracter) ", () => {
            const iplSocial = new IPLsocial();

            const actualPointLastCaracter = iplSocial.validationEmail("simon.stome@outloukcom.");

            expect(actualPointLastCaracter).toBe(false);
        });
        
        it("should return false when give email with a white space inside ", () => {
            const iplSocial = new IPLsocial();

            const actualWithWhiteSpace = iplSocial.validationEmail("simon stome@outloukcom.");

            expect(actualWithWhiteSpace).toBe(false);
        });

        it("should return false when there is no text before the @", () => {
            const iplSocial = new IPLsocial();

            const actualNoTextBefore = iplSocial.validationEmail("@outloukcom.");

            expect(actualNoTextBefore).toBe(false);
        });

        it("should return false when there is no text after the @", () => {
            const iplSocial = new IPLsocial();

            const actualNoTextAfter = iplSocial.validationEmail("simon.storme@");

            expect(actualNoTextAfter).toBe(false);
        });

    })
})