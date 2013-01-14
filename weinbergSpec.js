describe("Finance Formulas", function() {
	describe("A-C", function() {
		it("Future Value of Annuity", function() {
			expect(W.fvAnnuity(1000,2,5)).toEqual(5204.05);
		});
		it("FV of Annuity - Continuous Compounding", function() {
			expect(W.fvAnnuityCC(1000, 0.5, 12)).toEqual(12336.42);
		});
		it("Annuity Payment (PV)", function() {
			expect(W.PV(1000, 5, 12)).toEqual(112.83);
		});
		it("Annuity Payment Factor - PV", function() {
			expect(W.PVFactor(0.5, 24)).toEqual(0.04433);
		});
		it("Annuity Payment Factor - PV", function() {
			expect(W.PVPresent(10000, 5, 2)).toEqual(18594.11);
		});
		it("Payments on a Balloon Loan", function() {
			expect(W.Pbl(5000, 11000, 1, 36)).toEqual(249.29);
		});
		it("Compound Interest", function() {
			expect(W.CI(1000, 1, 12)).toEqual(126.83);
		});
		it("Balloon Balance of a Loan", function() {
			expect(W.BBLoan(100000, 843.86, 0.5, 60)).toEqual(76008.88);
		});
		it("Loan Payment", function() {
			expect(W.LoanP(100000, 5, 36)).toEqual(6043.45);
		});
		it("Simple Interest", function() {
			expect(W.SI(10000, 0.5, 12)).toEqual(600);
		});
	});
});