describe("Finance Formulas", function() {
	describe("Private functions", function(){
		describe("Rounding", function(){
			it("Default rounding", function(){
				expect(W.privateMethods.round(5.4533698683)).toEqual(5.46);
			});
			it("Upto 5 places", function(){
				expect(W.privateMethods.round(5.4533698683, 5)).toEqual(5.45337);
			});
		});
	});
	describe("Banking", function() {
		it("Annual Percentage Yield", function() {
			expect(W.APY(6, 12)).toEqual(0.06168);
		});
		it("Balloon Loan - Payments", function() {
			expect(W.Pbl(5000, 11000, 1, 36)).toEqual(249.29);
		});
		it("Compound Interest", function() {
			expect(W.CI(1000, 1, 12)).toEqual(126.83);
		});
		it("Loan - Balloon Balance", function() {
			expect(W.BBLoan(100000, 843.86, 0.5, 60)).toEqual(76008.88);
		});
		it("Loan - Payment", function() {
			expect(W.LoanP(100000, 5, 36)).toEqual(6043.45);
		});
		it("Simple Interest", function() {
			expect(W.SI(10000, 0.5, 12)).toEqual(600);
		});
	});
	describe("General Finance", function(){
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
	});
	describe("Stocks / Bonds", function(){
		
	});
	describe("Corporate Finance", function(){
		
	});
	describe("Financial Market", function(){
		it("Rate of Inflation", function() {
			expect(W.RoI(3000, 2500)).toEqual(20);
		});
		it("Real Rate of Return", function() {
			expect(W.RRoR(5, 3)).toEqual(1.942);
		});
	});
});