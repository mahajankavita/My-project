app.factory('ValidationFactory',function(){return{GetOTPString1:function()
{var leadrequest={"RequestString":{"OTPValidationRequest":{"User":{"UserName":"123","UserPassword":"123","UserIP":"192.168.1.129","Vendorid":"2018","Productid":"3"},"OTPValidation":{"Mobile":"9873008200","OTP":"4073","Tokenid":"WIN-I2MHQOTJM4B6df1875a-c2a4-46e0-8d68-0a889c269359"}}}};return leadrequest;},GetEncryptedString:function()
{var bikeleadrequest={"RequestString":{"MobileValidationRequest":{"User":{"UserName":"123","UserPassword":"123","UserIP":"192.168.1.129","Vendorid":"2018","Productid":"8"},"MobileValidation":{"Mobile":undefined,"isOTPRequire":"No","isOTPRequireForValidMobile":"No"}}}};return bikeleadrequest;},GetLeadCreationEncryptedString:function()
{var bikeleadrequest={"RequestString":{"LeadCreateRequest":{"User":{"UserName":"123","UserPassword":"123","UserIP":"192.168.1.129","Vendorid":2018,"Tokenid":"8a748771-574b-48b2-a113-ecb85bb3593f"},"Products":{"product":[{"productid":8}]},"Visitor":{"leads":{"lead":[{"leadId":""}]},"Name":"user","EmailId":"2018@xyz.com","MobileNo":"","CountryCode":"+91","IsCallBackRequire":"false","OriginPageid":"2"}}}};return bikeleadrequest;},mobilevalidate:function(mobile){var reg=/^([0|\+[0-9]{1,5})?([1-9][0-9]{9})$/;if(mobile!=undefined&&mobile.toString().length==10&&reg.test(mobile)){var msgMobile="True";}
else{var msgMobile="False";}
return msgMobile;},emailvalidate:function(email){var reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(email!=undefined&&email!=""&&email.length!=4&&reg.test(email)){var msgEmail="True";}
else{var msgEmail="False";}
return msgEmail;},descriptionvalidate:function(text){var regex=/[^\w\s]/gi;if(text!=undefined&&!regex.test(text)){var msgText="True";}
else{var msgText="False";}
return msgText;},namevalidate:function(name){var regex=/^[a-zA-Z\s]*$/
if((name!=undefined)&&(name!="")&&(regex.test(name))){var msgName="True";}
else{var msgName="False";}
return msgName;},onlynumber:function(number){var reg=/[^0-9]+/g;if((number!=undefined)&&(!reg.test(number))){var msgNumber="True";}
else{var msgNumber="False";}
return msgNumber;},nospacevalidate:function(nospace){var reg=/\s/g;if((nospace!=undefined)&&(!reg.test(nospace))){var magNoSpace="True";}
else{var magNoSpace="False";}
return magNoSpace;},required:function(txt){var reg=/\s/g;if((txt!=undefined)&&(txt!="")){var msgRequired="True";}
else{var msgRequired="False";}
return msgRequired;},validatepancard:function(pancard){var regex=/^[a-zA-Z'.\\s]{1,40}$/;if((pancard!=undefined)&&(regex.test(pancard))){var msgName="True";}
else{var msgName="False";}
return msgName;},AgeGroup:function(datediif){var userdatearray=datediif.split('-');var d1=new Date(userdatearray[1]+"/"+userdatearray[0]+"/"+userdatearray[2]);d2=new Date();var value=0;if(d2>d1){var years=d2.getFullYear()-d1.getFullYear();var months=d2.getMonth()-d1.getMonth();var days=(d2.getDate()-d1.getDate())/30;value=years*12+months+days;}
return value;},}});