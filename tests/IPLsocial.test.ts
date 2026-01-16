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
        
    })
})