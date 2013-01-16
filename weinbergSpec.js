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
			expect(W.aPV(1000, 5, 12)).toEqual(112.83);
		});
		it("Annuity Payment (FV)", function() {
			expect(W.aFV(5000, 3, 5)).toEqual(941.78);
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
		it("Present Value of Annuity Due", function() {
			expect(W.PVoAD(1000, 3, 5)).toEqual(4717.10);
		});
		it("Future Value of Annuity Due", function() {
			expect(W.FVoAD(1000, 3, 5)).toEqual(5468.41);
		});
		it("Annuity Due Payment - PV", function() {
			expect(W.PmtPV(5000, 3, 5)).toEqual(1059.98);
		});
		it("Annuity Due Payment - FV", function() {
			expect(W.PmtFV(5000, 3, 5)).toEqual(914.35);
		});
		it("Doubling Time", function() {
			expect(W.DT(6)).toEqual(138.98);
		});
		it("Doubling Time - Continuous Compounding", function() {
			expect(W.DTcc(6)).toEqual(11.56);
		});
		it("Doubling Time - Simple Interest", function() {
			expect(W.DTsi(10)).toEqual(10);
		});
		it("Future Value", function() {
			expect(W.FV(1000, 5, 12)).toEqual(1795.86);
		});
		it("FV - Continuous Compounding", function() {
			expect(W.FVcc(3000, 4, 4)).toEqual(3520.54);
		});
		it("Future Value Factor", function() {
			expect(W.FvF(1, 12)).toEqual(1.1269);
		});
		it("Future Value of Growing Annuity", function() {
			expect(W.FVGA(2000, 3, 5, 5)).toEqual(11700.75);
		});
		it("Growing Annuity Payment - PV", function() {
			expect(W.GAPpv(10000, 5, 8, 5)).toEqual(1983.38);
		});
		it("Growing Annuity Payment - FV", function() {
			expect(W.IPGA(10000, 5, 8, 5)).toEqual(1554.03);
		});
		it("Growing Annuity - Present Value", function() {
			expect(W.PVGA(10000, 5, 8, 5)).toEqual(50419);
		});
		it("Growing Perpetuity - Present Value", function() {
			expect(W.PVGP(1000, 10, 5)).toEqual(20000);
		});
		it("Number of Periods - PV & FV", function() {
			expect(W.NoP(2000, 1500, 6)).toEqual(57.69);
		});
		it("Perpetuity", function() {
			expect(W.PVoP(10, 5)).toEqual(200);
		});
		it("Present Value", function() {
			expect(W.PV(100, 5, 1)).toEqual(95.24);
		});
		it("PV - Continuous Compounding", function() {
			expect(W.PVcc(1100, 8, 2)).toEqual(937.36);
		});
		it("Present Value Factor", function() {
			expect(W.PVf(5, 12)).toEqual(0.55684);
		});
		it("Rule of 72", function() {
			expect(W.r72(5)).toEqual(14.4);
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