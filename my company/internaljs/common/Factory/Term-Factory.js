app.factory('TermFactory',function($filter,ValidationFactory,$location){return{sumassuredconverttotext:function($scope,actualsumassured){var Value=null;for(i=0;i<$scope.sumassuredlist.length;i++){if(actualsumassured==$scope.sumassuredlist[i].summassuredvalue){Value=$scope.sumassuredlist[i].sumassuredtext;}}
return Value;},userActualIncome:function($scope){if($scope.product=="Term"){$scope.userActualIncome=[];var Value=null;var Text='';var InitialValue=100000;for(i=InitialValue;i<10000000;){i=i+100000;if(i==10000000){Text=parseFloat(i/10000000)+' Crore';}
else{Text=parseFloat(i/100000)+' Lacs';}
$scope.userActualIncome.push({ActualIncomeText:Text});}
return $scope.userActualIncome;}
else{$scope.userActualIncome=[];var Value=null;var Text='';var InitialValue=0;for(i=InitialValue;i<10000000;){i=i+100000;if(i==10000000){Text=parseFloat(i/10000000)+' Crore';}
else{Text=parseFloat(i/100000)+' Lacs';}
$scope.userActualIncome.push({ActualIncomeText:Text});}
return $scope.userActualIncome;}},calculateSumAssuredRange:function($scope,useractualincome){if(useractualincome!=undefined){$scope.userfloatincome=parseFloat(useractualincome/100000).toFixed(2);$scope.homepageincometext='';$scope.minincome='';$scope.maxincome='';var userincomeinlacs=Math.round($scope.userfloatincome);var count=useractualincome.toString().length;if(count<=7){$scope.homepageincometext=parseFloat(useractualincome/100000).toFixed(2)+' Lacs';}
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
return $scope;},convertincomeintotext:function($scope,value){var userfloatincome='';var count=value.toString().length;if((count==6||count==7)&&value!=2500000){userfloatincome=parseFloat(value/100000).toFixed(2)+' Lacs';}
else{userfloatincome=parseFloat(value/100000).toFixed(2)+' Lacs and more';}
return userfloatincome;},updateurl:function($scope,url){$scope.redirecturl=this.bindQuerystring($scope,url);return $scope.redirecturl;},convertinputincometotext:function($scope,income){var status=false;if(ValidationFactory.onlynumber(income)=="False"){status=true;}
else{status=false;$scope.usertextincome=parseFloat(income/100000).toFixed(2)+' Lacs.';}
return status;}}});