var W =(function (){
	"use strict";
	//Mathemetical Constant
	var e = Math.E;

	var _p = function(r){
		return (r/100);
	};

	var apy = function(r, n){
		return (Math.pow((1+(_p(r)/n)), n)-1);
	};

	var fvAnnuity = function(P, r, n){
		return P*((Math.pow((1+_p(r)), n) -1)/_p(r));
	};

	var fvAnnuityCC = function(CF, r, t){
		return CF*((Math.pow(e,	(_p(r)*t))-1)/(Math.pow(e, _p(r))-1));
	};

	return {
		apy : apy,
		fvAnnuity : fvAnnuity,
		fvAnnuityCC : fvAnnuityCC
	};
})();