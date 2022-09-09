app.factory('CommonFactory',function($filter,ValidationFactory,$window){return{daysInMonth:function(date){return new Date(date.getFullYear(),date.getMonth()+1,0).getDate();},CustomerAgeGroup:function(datediif){var userdatearray=datediif.split('-');var d1=new Date(userdatearray[1]+"/"+userdatearray[0]+"/"+userdatearray[2]);d2=new Date();if(d2<d1){var diff=monthDiff(d2,d1);if(diff==0)
return 0;else
return-diff;}
var years=d2.getFullYear()-d1.getFullYear();var months=d2.getMonth()-d1.getMonth();var monthDays1=this.daysInMonth(d1);var monthDays2=this.daysInMonth(d2);if(d2.getDate()<d1.getDate()&&monthDays1-d1.getDate()+d2.getDate()<monthDays2)
months-=1;return years*12+months;},convertinputincometotext:function($scope,income){var status=false;if(ValidationFactory.onlynumber(income)=="False"){status=true;}
else{status=false;$scope.usertextincome=parseFloat(income/100000).toFixed(2)+' lacs.';}
return status;},calculateSumAssuredRange:function($scope,useractualincome){$scope.income=useractualincome
if($scope.income<10000){$scope.annualerror=true;}
else if($scope.income>500000){$scope.annualerror=true;}
else{$scope.annualerror=false;}
return $scope;}}});