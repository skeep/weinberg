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

	var aPV = function(PV, r, n){
		r = _p(r);
		return _r((r*PV)/(1-Math.pow((1+r),(-n))));
	};

	var aFV = function(FV, r, n){
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

	var PVoAD = function(P, r, n){
		r = _p(r);
		return _r(P+(P*((1-Math.pow((1+r),-(n-1)))/r)));
	};

	var FVoAD = function(P, r, n){
		r = _p(r);
		return _r((1+r)*(P*((Math.pow((1+r),n)-1)/r)));
	};

	var PmtPV = function(PV, r, n){
		r = _p(r);
		return _r(PV*((r/(1-Math.pow((1+r),(-n))))*(1/(1+r))));
	};

	var PmtFV = function(FV, r, n){
		r = _p(r);
		return _r(FV*(r/((Math.pow((1+r),n))-1))*(1/(1+r)));
	};

	var DT = function(r){
		return _r(Math.LN2/Math.log(1+(_p(r)/12)));
	};

	var DTcc = function(r){
		return _r(Math.LN2/_p(r));
	};

	var DTsi = function(r){
		return _r(1/_p(r));
	};

	var FV = function(C, r, n){
		return _r(C*(Math.pow((1+_p(r)), n)));
	};

	var FVcc = function(PV, r, t){
		return _r(PV*Math.pow(e,(_p(r)*t)));
	};

	var FvF = function(r, n){
		return _r(Math.pow((1+_p(r)), n), 4);
	};

	var FVGA = function(P, r, g, n){
		r = _p(r);
		g = _p(g);
		return _r(P*(((Math.pow((1+r),n))-(Math.pow((1+g),n)))/(r-g)));
	};

	var GAPpv = function(PV, r , g , n){
		r = _p(r);
		g = _p(g);
		return _r(PV*((r-g)/(1-Math.pow(((1+g)/(1+r)),n))));
	};

	var IPGA = function(FV, r, g, n){
		r = _p(r);
		g = _p(g);
		return _r(FV*((r-g)/(Math.pow((1+r),n)-Math.pow((1+g),n))));
	};

	var PVGA = function(P, r, g, n){
		r = _p(r);
		g = _p(g);
		return _r((P/(r-g))*(1-(Math.pow(((1+g)/(1+r)),n))));
	};

	var PVGP = function(D, r, g){
		r = _p(r);
		g = _p(g);
		return _r(D/(r-g));
	};

	var NoP = function(FV, PV, r){
		r = _p(r/12);
		return _r((Math.log(FV/PV))/(Math.log(1+r)));
	};

	//Financial Markets Formulas
	var RoI = function(endingCPI, initialCPI){
		return _r(_P((endingCPI - initialCPI)/initialCPI));
	};

	var RRoR = function(nominal, inflation){
		return _r(_P(((1+_p(nominal))/(1+_p(inflation)))-1), 3);
	};

	var PVoP = function(D, r){
		return _r(D/_p(r));
	};

	var PV = function(C, r, n){
		return _r(C/(Math.pow((1+_p(r)),n)));
	};
	var PVcc = function(C, r, t){
		return _r(C/Math.pow(e,(_p(r)*t)));
	};
	var PVf = function(r, n){
		return _r((1/(Math.pow((1+_p(r)),n))), 5);
	};
	var r72 = function(r){
		return _r(72/r);
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
		aPV : aPV,
		aFV : aFV,
		nPVA : nPVA,
		PVPresent : PVPresent,
		avCP: avCP,
		PVFactor : PVFactor,
		PVoAD : PVoAD,
		FVoAD : FVoAD,
		PmtPV : PmtPV,
		PmtFV : PmtFV,
		DT : DT,
		DTcc : DTcc,
		DTsi : DTsi,
		FV : FV,
		FVcc : FVcc,
		FvF : FvF,
		FVGA : FVGA,
		GAPpv : GAPpv,
		IPGA : IPGA,
		PVGA : PVGA,
		PVGP : PVGP,
		NoP : NoP,
		PVoP:PVoP,
		PV:PV,
		PVcc:PVcc,
		PVf:PVf,
		r72:r72,
		RoI : RoI,
		RRoR : RRoR,
		privateMethods : {
			round : _r
		}
	};
})();