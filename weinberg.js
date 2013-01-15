var W =(function (){
	"use strict";
	//Mathemetical Constant
	var e = Math.E;

	var _p = function(r){
		return (r/100);
	};

	var _P = function(num){
		return (num*100);
	};

	var _r = function(num, upto){
		var factor;
		if(!upto){
			factor = 100;
		} else {
			factor = '1';
			for (var i = upto - 1; i >= 0; i--) {
				factor = factor + '0';
			}
			factor = parseInt(factor, 10);
		}
		return Math.ceil(num * factor) / factor;
	};


	//Banking Formula
	var APY = function(r, n){
		r = _p(r);
		return _r((Math.pow((1+(r/n)), n)-1), 5);
	};

	var Pbl = function(P, PV, r, n){
		r = _p(r);
		return _r((PV-(P/(Math.pow((1+r),n))))*(r/(1-(Math.pow((1+r),(-n))))));
	};

	var CI = function(P, r, n){
		r = _p(r);
		return _r(P*(Math.pow((1+r), n)-1));
	};

	var CCI = function(P, r, t){
		r = _p(r);
		return _r(P*Math.pow(e, (r*t)));
	};

	var DIRatio = function(debt, income){
		return _r(_P(debt/income));
	};

	var BBLoan = function(PV, P, r, n){
		r = _p(r);
		return _r((PV*Math.pow((1+r), n))-(P*((Math.pow((1+r), n)-1)/r)));
	};

	var LoanP = function(PV, r, n){
		r = _p(r);
		return _r((r*PV)/(1-(Math.pow((1+r), (-n)))));
	};

	var LoanRemaining = function(PV, P, r, n){
		r = _p(r);
		return _r((PV*Math.pow((1+r),n))-(P*((Math.pow((1+r), n)-1)/r)));
	};

	var LTDRatio = function(loan, deposit){
		return _r(_P(loan/deposit));
	};

	var LTVRatio = function(amount, value){
		return _r(_P(amount/value));
	};

	var SI = function(P, r, t){
		r = _p(r);
		return _r(P*r*t);
	};

	


	//General Finance Formulas

	var fvAnnuity = function(P, r, n){
		r = _p(r);
		return _r(P*((Math.pow((1+r), n) -1)/r));
	};

	var fvAnnuityCC = function(CF, r, t){
		r = _p(r);
		return _r(CF*((Math.pow(e,	(r*t))-1)/(Math.pow(e, r)-1)));
	};

	var nFVA = function(FV, r, P){
		r = _p(r);
		return _r((Math.log(1+((FV*r)/P))/Math.log(1+r)), 3);
	};

	var PV = function(PV, r, n){
		r = _p(r);
		return _r((r*PV)/(1-Math.pow((1+r),(-n))));
	};

	var FV = function(FV, r, n){
		r = _p(r);
		return _r((FV*r)/(Math.pow((1+r), n) - 1));
	};

	var nPVA = function(PV, r, P){
		r = _p(r);
		return _r((Math.log(Math.pow((1-((PV*r)/P)), -1)))/(Math.log(1+r)), 0);
	};

	var PVPresent = function(P, r, n){
		r = _p(r);
		return _r(P*((1-(Math.pow((1+r),(-n))))/(r)));
	};

	var avCP = function(turnover){
		return _r((365/turnover), 2);
	};

	var PVFactor = function(r, n){
		r = _p(r);
		return _r((r/(1-(Math.pow((1+r),(-n))))), 5);
	};



	var RoI = function(endingCPI, initialCPI){
		return _r(_P((endingCPI - initialCPI)/initialCPI));
	};

	var RRoR = function(nominal, inflation){
		return _r(_P(((1+_p(nominal))/(1+_p(inflation)))-1), 3);
	};

	return {
		APY : APY,
		Pbl : Pbl,
		CI : CI,
		CCI : CCI,
		DIRatio : DIRatio,
		BBLoan : BBLoan,
		LoanP : LoanP,
		LoanRemaining : LoanRemaining,
		LTDRatio : LTDRatio,
		LTVRatio : LTVRatio,
		SI : SI,
		fvAnnuity : fvAnnuity,
		fvAnnuityCC : fvAnnuityCC,
		nFVA : nFVA,
		PV : PV,
		FV : FV,
		nPVA : nPVA,
		PVPresent : PVPresent,
		avCP: avCP,
		PVFactor : PVFactor,
		RoI : RoI,
		RRoR : RRoR,
		privateMethods : {
			round : _r
		}
	};
})();