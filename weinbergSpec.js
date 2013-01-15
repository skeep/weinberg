describe("Finance Formulas", function() {
	describe("Private functions", function(){
		describe("Rounding", function(){
			it("Default rounding", function(){
				expect(W.privateMethods.round(5.4533698683)).toEqual(5.46);
			});
			it("Upto 5 places", function(){
				expect(W.privateMethods.round(5.4533698683, 5)).toEqual(5.45337);
			});
			it("Next Integer", function(){
				expect(W.privateMethods.round(21.999929266262, 0)).toEqual(22);
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
		it("Continuous Compound Interest", function() {
			expect(W.CCI(50000, 1, 12)).toEqual(56374.85);
		});
		it("Debt to Income Ratio", function() {
			expect(W.DIRatio(10000, 15000)).toEqual(66.67);
		});
		it("Loan - Balloon Balance", function() {
			expect(W.BBLoan(100000, 843.86, 0.5, 60)).toEqual(76008.88);
		});
		it("Loan - Payment", function() {
			expect(W.LoanP(100000, 5, 36)).toEqual(6043.45);
		});
		it("Loan - Remaining Balance", function() {
			expect(W.LoanRemaining(10000, 20000, 0.5, 20)).toEqual(-408533.35);
		});
		describe("Loan to Deposit Ratio", function() {
			it("case 1", function(){expect(W.LTDRatio(30000, 20000)).toEqual(150);});
			it("case 2", function(){expect(W.LTDRatio(40000, 20000)).toEqual(200);});
			it("case 3", function(){expect(W.LTDRatio(20000, 20000)).toEqual(100);});
		});
		describe("Loan to Value (LTV)", function() {
			it("case 1", function(){expect(W.LTVRatio(30000, 20000)).toEqual(150);});
			it("case 2", function(){expect(W.LTVRatio(40000, 20000)).toEqual(200);});
			it("case 3", function(){expect(W.LTVRatio(20000, 20000)).toEqual(100);});
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
		it("Annuity (FV)- Solve for n", function() {
			expect(W.nFVA(19600, 5, 1000)).toEqual(14.001);
		});
		it("Annuity Payment (PV)", function() {
			expect(W.PV(1000, 5, 12)).toEqual(112.83);
		});
		it("Annuity Payment (FV)", function() {
			expect(W.FV(5000, 3, 5)).toEqual(941.78);
		});
		it("Annuity (PV)- Solve for n", function() {
			expect(W.nPVA(19660, 1, 1000)).toEqual(22);
		});
		it("Present Value of Annuity", function() {
			expect(W.PVPresent(10000, 5, 2)).toEqual(18594.11);
		});
		it("Average Collection Period", function() {
			expect(W.avCP(8)).toEqual(45.63);
		});
		it("Present Value Annuity Factor", function() {
			expect(W.PVFactor(0.5, 24)).toEqual(0.04433);
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