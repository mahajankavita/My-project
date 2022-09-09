app.directive('mdBlur',function($timeout){var directive={restrict:'A',link:function(scope,element,attributes){$timeout(function(){angular.element(element[0].querySelector("input.md-input")).bind("blur",function(){$timeout(function(){scope.$eval(attributes.mdBlur)},100)})},0)}};return directive});app.directive("scrollBottom",function(){return{link:function(scope,element,attr){var $id=$("#"+attr.scrollBottom);$(element).on("click",function(){$id.scrollTop($id[0].scrollHeight)})}}});app.filter('roundof',function($filter){return function(input){return Math.round(input)}});app.directive('commaseparator',function($filter){return{require:'ngModel',link:function(scope,elem,attrs,ctrl){if(!ctrl){return;}
ctrl.$formatters.unshift(function(){return $filter('commainr')(ctrl.$modelValue);});ctrl.$parsers.unshift(function(viewValue){var plainNumber=viewValue.replace(/[\,\.\-\+]/g,''),b=$filter('commainr')(plainNumber);elem.val(b);return plainNumber;});}};});app.filter('commainr',function(){return function(input){if(!isNaN(input)&&input!=undefined&&input!=null){var result=input.toString();var lastThree=result.substring(result.length-3);var otherNumbers=result.substring(0,result.length-3);if(otherNumbers!='')
lastThree=','+lastThree;var output=otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g,",")+lastThree;return output}}});app.directive('numbersOnly',function(){return{require:'ngModel',link:function(scope,element,attr,ngModelCtrl){function fromUser(text){if(text){text=text.toString();var transformedInput=text.replace(/[^0-9]/g,'');if(transformedInput!==text){ngModelCtrl.$setViewValue(transformedInput);ngModelCtrl.$render()}
return transformedInput}
return undefined}
ngModelCtrl.$parsers.push(fromUser)}}});app.directive('alphabetOnly',function(){return{require:'ngModel',link:function(scope,element,attr,ngModelCtrl){function fromUser(text){if(text){text=text.toString();var transformedInput=text.replace(/[^a-zA-Z]/g,'');if(transformedInput!==text){ngModelCtrl.$setViewValue(transformedInput);ngModelCtrl.$render()}
return transformedInput}
return undefined}
ngModelCtrl.$parsers.push(fromUser)}}});app.directive('alphabetNumber',function(){return{require:'ngModel',link:function(scope,element,attr,ngModelCtrl){function fromUser(text){if(text){text=text.toString();var transformedInput=text.replace(/[^a-zA-Z0-9]/g,'');if(transformedInput!==text){ngModelCtrl.$setViewValue(transformedInput);ngModelCtrl.$render()}
return transformedInput}
return undefined}
ngModelCtrl.$parsers.push(fromUser)}}});app.directive('alphabetNumberspace',function(){return{require:'ngModel',link:function(scope,element,attr,ngModelCtrl){function fromUser(text){if(text){text=text.toString();var transformedInput=text.replace(/[^a-zA-Z0-9\s]/g,'');if(transformedInput!==text){ngModelCtrl.$setViewValue(transformedInput);ngModelCtrl.$render()}
return transformedInput}
return undefined}
ngModelCtrl.$parsers.push(fromUser)}}});app.directive('policyNumber',function(){return{require:'ngModel',link:function(scope,element,attr,ngModelCtrl){function fromUser(text){if(text){text=text.toString();var transformedInput=text.replace(/[^a-zA-Z0-9]/g,'');if(transformedInput!==text){ngModelCtrl.$setViewValue(transformedInput);ngModelCtrl.$render()}
return transformedInput}
return undefined}
ngModelCtrl.$parsers.push(fromUser)}}});app.directive('onlyLettersInput',onlyLettersInput);function onlyLettersInput(){return{require:'ngModel',link:function(scope,element,attr,ngModelCtrl){function fromUser(text){var transformedInput=text.replace(/[^a-zA-Z\s]/g,'');if(transformedInput!==text){ngModelCtrl.$setViewValue(transformedInput);ngModelCtrl.$render();}
return transformedInput;}
ngModelCtrl.$parsers.push(fromUser);}};};app.filter('SearchWithLetter',function(){return function(items,letter){var filtered=[];var letterMatch=new RegExp(letter,'i');for(var i=0;i<items.length;i++){var item=items[i];if(letterMatch.test(item.cityname)){filtered.push(item)}}
return filtered}});app.filter('startsWithLetter',function(){return function(items,letter){var filtered=[];if(letter!=undefined){var letterMatch=new RegExp(letter,'i');var letterlength=letter.length;for(var i=0;i<items.length;i++){var item=items[i];if(letterMatch.test(item.text.substring(0,letterlength))){filtered.push(item)}}
return filtered}else
return items}});app.filter('startsWithLetter1',function(){return function(items,letter){var filtered=[];if(letter!=undefined&&letter!=""){var letterMatch=new RegExp(letter,'i');var letterlength=letter.length;if(items!=undefined){for(var i=0;i<items.length;i++){var item=items[i];if(letterMatch.test(item.cityname.substring(0,letterlength))){filtered.push(item)}}}
if(items!=undefined){for(var i=0;i<items.length;i++){var item3=items[i];var item1=item3.cityname.replace(',','');var item2=item1;if(letterMatch.test(item2.substring(0,item2.length))){if(filtered.indexOf(item3)==-1)
filtered.push(item3)}}}
return filtered}else
return items}});app.filter('freeaddon',function($filter){return function(input){if(parseInt(input)==0){var input="Free"}
return input}});app.filter('trim',function(){return function(value){if(!angular.isString(value)){return value}
return value.replace(/[\s]/g,'')}});app.filter('rupeesFigure',function(){return function(income){if(!isNaN(income)&&angular.isNumber(income)){var userfloatincome='';var count=(parseInt(income)).toString().length;if(count<4){userfloatincome=parseFloat(income/1000).toFixed(2)+' K'}else if(count==4||count==5){userfloatincome=parseFloat(income/1000).toFixed(2)+' K'}else if(count==6||count==7){if(Math.floor(income/100000)==1)
userfloatincome=parseFloat(income/100000).toFixed(2)+' Lac'
else
userfloatincome=parseFloat(income/100000).toFixed(2)+' Lacs'}else if(count==8||count==9){userfloatincome=parseFloat(income/10000000).toFixed(2)+' Crore'}
var userincome=userfloatincome.split(".");if(userincome[1].indexOf('00')!=-1)
return userincome[0]+" "+userincome[1].split(" ")[1];else
return userfloatincome;}else{return}}});app.filter('filterDestination',function(){return function(input,letter){if(letter!=undefined&&letter!=""){input=input||[];var out=[];var letterMatch=new RegExp(letter.toLowerCase(),'i');input.forEach(function(input){if(letterMatch.test(input.destinationName.substring(0,letter.length).toLowerCase())){out.push(input);}});return out;}
else{return input;}}});app.filter('FilterCarModel',function(){return function(items,letter){var filtered=[];if(letter!=undefined){var letterarray=letter.split(' ');var letterMatch=new RegExp(letter,'i');var letterlength=letter.length;for(var i=0;i<items.length;i++){var item=items[i];if(letterMatch.test(item.ModelName.substring(0,letterlength))){filtered.push(item)}}
for(var i=0;i<items.length;i++){var item3=items[i];var item1=item3.ModelName.split(',');var item2=item1[0];var k=0;for(var q=0;q<letterarray.length;q++){if(item2.toLowerCase().indexOf(letterarray[q].toLowerCase())!=-1)
k++;}
if(k==letterarray.length){if(filtered.indexOf(item3)==-1)
filtered.push(item3)}}
return filtered}else
return items}});app.filter('FilterRto',function(){return function(items,letter){var filtered=[];if(letter!=undefined){var letterMatch=new RegExp(letter,'i');var letterlength=letter.length;for(var i=0;i<items.length;i++){var item=items[i];if(letterMatch.test(item.RTOCode.substring(0,letterlength))){filtered.push(item)}}
for(var i=0;i<items.length;i++){var item3=items[i];var item1=item3.RTOCode.split(',');var item2=item1[0];if(letterMatch.test(item2.substring(0,item2.length))){if(filtered.indexOf(item3)==-1)
filtered.push(item3)}}
return filtered}else
return items}});app.directive('scroll',function($parse,$window){return{restrict:'A',scope:true,link:function(scope,element,attrs){angular.element($window).bind("scroll",function(){scope.$apply(attrs.scroll);});}};});app.filter('FilterBikeModel',function(){return function(items,letter){var filtered=[];if(letter!=undefined){var letterarray=letter.split(' ');var letterMatch=new RegExp(letter,'i');var letterlength=letter.length;for(var i=0;i<items.length;i++){var item=items[i];if(letterMatch.test(item.bikename.substring(0,letterlength))){filtered.push(item)}}
for(var i=0;i<items.length;i++){var item3=items[i];var item1=item3.bikename.split(',');var item2=item1[0];var k=0;for(var q=0;q<letterarray.length;q++){if(item2.toLowerCase().indexOf(letterarray[q].toLowerCase())!=-1)
k++;}
if(k==letterarray.length){if(filtered.indexOf(item3)==-1)
filtered.push(item3)}}
return filtered}else
return items}});app.filter('filterBikeRto',function(){return function(items,letter){var filtered=[];if(letter!=undefined){var letterMatch=new RegExp(letter,'i');var letterlength=letter.length;for(var i=0;i<items.length;i++){var item=items[i];if(letterMatch.test(item.RTOCode.substring(0,letterlength))){filtered.push(item)}}
for(var i=0;i<items.length;i++){var item3=items[i];var item1=item3.RTOCode.split(',');var item2=item1[0];if(letterMatch.test(item2.substring(0,item2.length))){if(filtered.indexOf(item3)==-1)
filtered.push(item3)}}
return filtered}else
return items}});app.directive('focusMe',['$timeout','$parse',function($timeout,$parse){return{link:function(scope,element,attrs){var model=$parse(attrs.focusMe);scope.$watch(model,function(value){console.log('value=',value);if(value===!0){$timeout(function(){element[0].focus()})}});element.bind('blur',function(){console.log('blur');scope.$apply(model.assign(scope,!1))})}}}]);app.directive('ngEnter',function(){return function(scope,element,attrs){element.bind("keydown keypress",function(event){if(event.which===13){scope.$apply(function(){scope.$eval(attrs.ngEnter,{'event':event})});event.preventDefault()}})}});app.directive('whatsApp',function(){return{link:function(scope,elem,$attr){elem.on('click',function(){var text=$attr.text;var url=$attr.whatsApp;var message="Hi, use my referral code "+encodeURIComponent(text)+" while booking your policy from InsurerJoy to get your code. In turn, I will get some goodies for referral "+encodeURIComponent(url);var whatsapp_url="whatsapp://send?text="+message;window.location.href=whatsapp_url;});}}});app.filter('INR',function(){return function(input){if(!isNaN(input)){var result=input.toString().split('.');var lastThree=result[0].substring(result[0].length-3);var otherNumbers=result[0].substring(0,result[0].length-3);if(otherNumbers!='')
lastThree=','+lastThree;var output=otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g,",")+lastThree;if(result.length>1){output+="."+result[1]}
return output}}});app.filter("unique",function(){return function(collection,keyname){var output=[],keys=[];angular.forEach(collection,function(item){var key=item[keyname];if(keys.indexOf(key)===-1){keys.push(key);output.push(item);}});return output;};});app.directive("limitTo",[function(){return{restrict:"A",link:function(scope,elem,attrs){var limit=parseInt(attrs.limitTo);angular.element(elem).on("keypress",function(e){if(this.value.length==limit)
e.preventDefault()})}}}])
app.directive('offClick',function($document,$parse,$timeout){return{restrict:'A',compile:function(tElement,tAttrs){var fn=$parse(tAttrs.offClick);return function(scope,iElement,iAttrs){function eventHandler(ev){if(iElement[0].contains(ev.target)){$document.one('click touchend',eventHandler);}else{scope.$apply(function(){fn(scope);});}}
scope.$watch(iAttrs.offClickActivator,function(activate){if(activate){$timeout(function(){$document.one('click touchend',eventHandler);});}else{$document.off('click touchend',eventHandler);}});};}};});