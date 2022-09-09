app.factory('DataFactory',["ValidationFactory",function(ValidationFactory){var saveddata={};return{convertinputincometotext:function($scope,income){var status=false;if(ValidationFactory.onlynumber(income)=="False"){status=true;}
else{status=false;$scope.usertextincome=parseFloat(income/100000).toFixed(2)+' lacs.';}
return status;},calculateSumAssuredRangeNonTerm:function($scope,useractualincome){$scope.income=useractualincome
if($scope.income<10000){$scope.annualerror=true;}
else if($scope.income>500000){$scope.annualerror=true;}
else{$scope.annualerror=false;}
return $scope;},stringifyallDobs:function(json){var convertedDOB=[];for(var i=0;i<json.length;i++){convertedDOB[i]=this.stringifydob(json[i]);}
return convertedDOB;},calculateSumAssuredRangeNonTerm:function($scope,useractualincome){$scope.income=useractualincome
if($scope.income<10000){$scope.annualerror=true;}
else if($scope.income>1000000){$scope.annualerror=true;}
else{$scope.annualerror=false;}
return $scope;},stringifydob:function(value){var reISO=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;var s=JSON.parse(JSON.stringify(new Date(value)));var a=reISO.exec(s);if(a){var val='/Date('+new Date(Date.UTC(+a[1],+a[2]-1,+a[3],+a[4],+a[5],+a[6])).getTime()+')/';}
return val;},userActualIncome:function($scope){if($scope.userActualIncome.length==0){if($scope.productname=="term"){var Value=null;var Text='';var InitialValue=0;for(i=InitialValue;i<10000000;){i=i+100000;if(i==10000000){Text=parseFloat(i/10000000)+' Crore';}
else{Text=parseFloat(i/100000)+' Lacs';}
$scope.userActualIncome.push({text:Text,value:i});}
return $scope.userActualIncome;}
else{var Value=null;var Text='';var InitialValue=0;for(i=InitialValue;i<10000000;){i=i+100000;if(i==10000000){Text=parseFloat(i/10000000)+' Crore';}
else{Text=parseFloat(i/100000)+' Lacs';}
$scope.userActualIncome.push({text:Text,value:i});}
return $scope.userActualIncome;}}},userActualIncome2:function($scope){$scope.NewuserActualIncome=[];var Value=null;var Text='';var InitialValue=0;for(i=InitialValue;i<10000000;){i=i+100000;if(i==10000000){Text=parseFloat(i/10000000)+' Crore';}
else{Text=parseFloat(i/100000)+' Lacs';}
$scope.NewuserActualIncome.push({ActualIncomeText:Text,ActualIncomeValue:i});}
return $scope.NewuserActualIncome;},calculateSumAssuredRange:function($scope,useractualincome){if(useractualincome!=undefined){$scope.userfloatincome=parseFloat(useractualincome/100000).toFixed(2);$scope.homepageincometext='';$scope.minincome='';$scope.maxincome='';var userincomeinlacs=Math.round($scope.userfloatincome);var count=useractualincome.toString().length;if(count<=8){$scope.homepageincometext=parseFloat(useractualincome/100000).toFixed(2)+' Lacs';}
else{$scope.annualerror=true;}
if($scope.userfloatincome<1.0){$scope.annualerror=true;}
else if($scope.userfloatincome>100.0){$scope.annualerror=true;}
else{$scope.annualerror=false;}
if(userincomeinlacs>=0&&userincomeinlacs<=3){$scope.minincome=0;$scope.maxincome=3;}
else if(userincomeinlacs>=3&&userincomeinlacs<=4){$scope.minincome=3;$scope.maxincome=4;}
else if(userincomeinlacs>=4&&userincomeinlacs<=7){$scope.minincome=4;$scope.maxincome=7;}
else if(userincomeinlacs>=7&&userincomeinlacs<=10){$scope.minincome=7;$scope.maxincome=10;}
else if(userincomeinlacs>=10&&userincomeinlacs<=15){$scope.minincome=10;$scope.maxincome=15;}
else if(userincomeinlacs>=15){$scope.minincome=15;$scope.maxincome=20;}}
return $scope;}}}]);