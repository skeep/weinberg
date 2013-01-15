var W =(function (){
	"use strict";
	//Mathemetical Constant
	var e = Math.E;

	var _p = function(r){
		return (r/100);
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

	var SI = function(P, r, t){
		r = _p(r);
		return _r(P*r*t);
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

	var fvAnnuity = function(P, r, n){
		r = _p(r);
		return _r(P*((Math.pow((1+r), n) -1)/r));
	};

	var fvAnnuityCC = function(CF, r, t){
		r = _p(r);
		return _r(CF*((Math.pow(e,	(r*t))-1)/(Math.pow(e, r)-1)));
	};

	var nFVA = function(n, FV, r, P){
		r = _p(r);
		return _r(Math.log(1+((FV*r)/P))/Math.log(1+r));
	};

	var PV = function(PV, r, n){
		r = _p(r);
		return _r((r*PV)/(1-Math.pow((1+r),(-n))));
	};

	var FV = function(FV, r, n){
		r = _p(r);
		return _r((FV*r)/(Math.pow((1+r), n) - 1));
	};

	var PVFactor = function(r, n){
		r = _p(r);
		return _r((r/(1-(Math.pow((1+r),(-n))))), 5);
	};

	var PVPresent = function(P, r, n){
		r = _p(r);
		return _r(P*((1-(Math.pow((1+r),(-n))))/(r)));
	};

	return {
		APY : APY,
		fvAnnuity : fvAnnuity,
		fvAnnuityCC : fvAnnuityCC,
		nFVA : nFVA,
		PV : PV,
		FV : FV,
		PVFactor : PVFactor,
		PVPresent : PVPresent,
		Pbl : Pbl,
		CI : CI,
		BBLoan : BBLoan,
		LoanP : LoanP,
		LoanRemaining : LoanRemaining,
		SI : SI
	};
})();