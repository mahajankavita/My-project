app.directive('mdBlur',function($timeout){var directive={restrict:'A',link:function(scope,element,attributes){$timeout(function(){angular.element(element[0].querySelector("input.md-input")).bind("blur",function(){$timeout(function(){scope.$eval(attributes.mdBlur);},100);});},0);}};return directive;});app.directive("scrollBottom",function(){return{link:function(scope,element,attr){var $id=$("#"+attr.scrollBottom);$(element).on("click",function(){$id.scrollTop($id[0].scrollHeight);});}}});app.directive('numbersOnly',function(){return{require:'ngModel',link:function(scope,element,attr,ngModelCtrl){function fromUser(text){if(text){var transformedInput=text.replace(/[^0-9]/g,'');if(transformedInput!==text){ngModelCtrl.$setViewValue(transformedInput);ngModelCtrl.$render();}
return transformedInput;}
return undefined;}
ngModelCtrl.$parsers.push(fromUser);}};});app.filter('startsWithLetter',function(){return function(items,letter){console.log(letter);if(letter!=undefined)
{var filtered=[];var letterMatch=new RegExp(letter,'i');var letterlength=letter.length;for(var i=0;i<items.length;i++){var item=items[i];if(letterMatch.test(item.ActualIncomeText.substring(0,letterlength))){filtered.push(item);}}
return filtered;}
else{return items;}};});app.filter('startsWithLetter1',function(){return function(items,letter){var filtered=[];if(letter!=undefined){var letterMatch=new RegExp(letter,'i');var letterlength=letter.length;for(var i=0;i<items.length;i++){var item=items[i];if(letterMatch.test(item.cityname.substring(0,letterlength))){filtered.push(item);}}
for(var i=0;i<items.length;i++){var item3=items[i];var item1=item3.cityname.split(',');var item2=item1[0];if(letterMatch.test(item2.substring(0,item2.length))){if(filtered.indexOf(item3)==-1)
filtered.push(item3);}}
return filtered;}
else
return items;};});app.filter('FilterCarModel',function(){return function(items,letter){var filtered=[];if(letter!=undefined){var letterMatch=new RegExp(letter,'i');var letterlength=letter.length;for(var i=0;i<items.length;i++){var item=items[i];if(letterMatch.test(item.ModelName.substring(0,letterlength))){filtered.push(item);}}
for(var i=0;i<items.length;i++){var item3=items[i];var item1=item3.ModelName.split(',');var item2=item1[0];if(letterMatch.test(item2.substring(0,item2.length))){if(filtered.indexOf(item3)==-1)
filtered.push(item3);}}
return filtered;}
else
return items;};});app.filter('FilterRto',function(){return function(items,letter){var filtered=[];if(letter!=undefined){var letterMatch=new RegExp(letter,'i');var letterlength=letter.length;for(var i=0;i<items.length;i++){var item=items[i];if(letterMatch.test(item.RTOCode.substring(0,letterlength))){filtered.push(item);}}
for(var i=0;i<items.length;i++){var item3=items[i];var item1=item3.RTOCode.split(',');var item2=item1[0];if(letterMatch.test(item2.substring(0,item2.length))){if(filtered.indexOf(item3)==-1)
filtered.push(item3);}}
return filtered;}
else
return items;};});app.directive("limitTo",[function(){return{restrict:"A",link:function(scope,elem,attrs){var limit=parseInt(attrs.limitTo);angular.element(elem).on("keypress",function(e){if(this.value.length==limit)e.preventDefault();});}}}]);app.filter('SearchWithLetter',function(){return function(items,letter){var filtered=[];var letterMatch=new RegExp(letter,'i');for(var i=0;i<items.length;i++){var item=items[i];if(letterMatch.test(item.cityname)){filtered.push(item);}}
return filtered;};});app.directive('focusMe',['$timeout','$parse',function($timeout,$parse){return{link:function(scope,element,attrs){var model=$parse(attrs.focusMe);scope.$watch(model,function(value){console.log('value=',value);if(value===true){$timeout(function(){element[0].focus();});}});element.bind('blur',function(){console.log('blur');scope.$apply(model.assign(scope,false));});}};}]);app.filter('roundof',function($filter){return function(input){return Math.round(input);};});app.filter('freeaddon',function($filter){return function(input){if(parseInt(input)==0){var input="Free";}
return input;};});app.filter('trim',function(){return function(value){if(!angular.isString(value)){return value;}
return value.replace(/[\s]/g,'');};});app.filter('rupeesFigure',function(){return function(income){if(!isNaN(income)&&angular.isNumber(income)){var userfloatincome='';var count=(parseInt(income)).toString().length;if(count<4){userfloatincome=parseFloat(income/1000).toFixed(2)+' K*';}
else if(count==4||count==5){userfloatincome=parseFloat(income/1000).toFixed(2)+' K*';}
else if(count==6||count==7){userfloatincome=parseFloat(income/100000).toFixed(2)+' Lacs*';}
else if(count==8||count==9){userfloatincome=parseFloat(income/10000000).toFixed(2)+' Crore*';}
return userfloatincome;}
else{return;}};});app.directive('ngEnter',function(){return function(scope,element,attrs){element.bind("keydown keypress",function(event){if(event.which===13){scope.$apply(function(){scope.$eval(attrs.ngEnter,{'event':event});});event.preventDefault();}});};});app.filter('INR',function(){return function(input){if(!isNaN(input)){var result=input.toString().split('.');var lastThree=result[0].substring(result[0].length-3);var otherNumbers=result[0].substring(0,result[0].length-3);if(otherNumbers!='')
lastThree=','+lastThree;var output=otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g,",")+lastThree;if(result.length>1){output+="."+result[1];}
return output;}}});