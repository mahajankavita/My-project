var app=angular.module('App',['ngAnimate']);app.constant('globals',{api:'Pankaj',fershDeskURL:'https://insurejoy.freshdesk.com/helpdesk/tickets.json',RedirectURL:"https://qa.indiacover360.com/Application/",ServiceURL:"https://apiqa.indiacover360.com",IGwServiceURL:"https://apiqa.indiacover360.com",UIURL:"https://qa.indiacover360.com/HomePage",landingPage:"https://qa.indiacover360.com",mainPage:"https://qa.indiacover360.com/Application/?CPID="});app.controller('InsuranceCompaniesCtrl',["$scope","$rootScope","$http","ProductService","$window","$location","globals","$sce",function($scope,$rootScope,$http,ProductService,$window,$location,globals,$sce){if(window.innerWidth>=850){$scope.device="Desktop";}
else{$scope.device="Mobile";}
$rootScope.showHeader="show";$scope.$root.showHeaderClass="display-visible";$scope.$root.scrollhide="";$scope.$root.showmainloader=false;$scope.$root.showAppLink=true;$scope.idd=1;$scope.$root.showBeenHere=true;$scope.$root.showTopHeading=false;$scope.$root.showLogos=false;$scope.$root.showotherpageheader=true;$scope.$root.showNavbar=true;$scope.init=function(){$scope.$root.showloader=false;var currentURL=$location.absUrl();if(currentURL.indexOf("dev.indiacover360.com")!=-1){globals.RedirectURL="https://dev.indiacover360.com/Application/";globals.ServiceURL="https://api.indiacover360.com";globals.IGwServiceURL="https://api.indiacover360.com";globals.UIURL="https://dev.indiacover360.com/HomePage";globals.landingPage="https://dev.indiacover360.com";globals.mainPage="https://dev.indiacover360.com/Application/?CPID=";}
else if(currentURL.indexOf("qa.indiacover360.com")!=-1){globals.RedirectURL="https://qa.indiacover360.com/Application/";globals.ServiceURL="https://apiqa.indiacover360.com";globals.IGwServiceURL="https://apiqa.indiacover360.com";globals.UIURL="https://qa.indiacover360.com/HomePage";globals.landingPage="https://qa.indiacover360.com";globals.mainPage="https://qa.indiacover360.com/Application/?CPID=";}
else if(currentURL.indexOf("insurejoy.com")!=-1){globals.RedirectURL="https://www.insurejoy.com/Application/";globals.ServiceURL="https://api.insurejoy.com";globals.IGwServiceURL="https://api.insurejoy.com";globals.UIURL="https://www.insurejoy.com/HomePage";globals.landingPage="https://www.insurejoy.com";globals.mainPage="https://www.insurejoy.com/Application/?CPID=";}
$scope.UIURL=globals.UIURL;$scope.landingurl=globals.landingPage;$scope.templateheader=$sce.trustAsResourceUrl(globals.landingPage+"/header.html");$scope.templatefooter=$sce.trustAsResourceUrl(globals.landingPage+"/footer.html");$scope.itemdata=true;$scope.details=false;var data=JSON.stringify({"InsurerData":{"User":{"username":"IGHEALTH2016","password":"IG@HEALTH@2016","vendorid":"2018","pid":"2","productid":0}}});$scope.insuranceCompaniesData=ProductService.insurancecompanies(data);$scope.insuranceCompaniesData.then(function(result){result.data=angular.fromJson(result.data);console.log(result);$scope.insurerNamebyhyphen=[];$scope.insuranceCompanies=result.data.DocumentElement.GetCareerData;$scope.details=true;for(var i=0;i<$scope.insuranceCompanies.length;i++){$scope.namesplit="";var name=$scope.insuranceCompanies[i].Insurer_Name.split(' ');for(var j=0;j<name.length;j++){$scope.namesplit+=name[j]+"-";}
$scope.namesplit=$scope.namesplit.substring(0,$scope.namesplit.length-1);$scope.insuranceCompanies[i].insurer_name=$scope.namesplit.toLowerCase();}});}
$scope.companydata=function(item,flag){var data=JSON.stringify({"InsurerData":{"User":{"username":"IGHEALTH2016","password":"IG@HEALTH@2016","vendorid":"2018","pid":"2"},"InsurerDetail":{"InsurerId":item.Insurer_ID}}});$scope.insuranceCompaniesDetails=ProductService.companiesdetail(data);$scope.insuranceCompaniesDetails.then(function(result){result.data=angular.fromJson(result.data);console.log(result);$scope.companydetails=result.data.DocumentElement.GetInsurerbyDetail;$scope.selected=item;if($(window).width()<768){$scope.itemdata=false;$scope.details=true;$scope.detailsPopDes=false;$scope.detailsPopMob=true;$scope.detailsPopMobInner=true;$scope.detailsPopAnimation="bounceInDown";$scope.$root.scrollhide="scrollhides";}
if($(window).width()>767){$scope.itemdata=false;$scope.details=true;$scope.detailsPopDes=true;$scope.detailsPopMob=false;}});}
$scope.isSelected=function(item){return $scope.selected===item;}
$scope.closeCompanyPop=function(){$scope.detailsPopMob=false;$scope.detailsPopMobInner=false;$scope.details=true;$scope.detailsPopAnimation="fadeOutDownBig";$scope.$root.scrollhide="";}
if(window.innerWidth>=850){$scope.device="Desktop";}
else{$scope.device="Mobile";}
$scope.$root.sideNavShow=false;$scope.sideNavClose=function(){$rootScope.openNav();}
$rootScope.openNav=function(){if($scope.$root.sideNavShow==false){$(".sidenav").animate({left:'0px'},200);$(".sideNavFull").fadeIn(100);$scope.$root.sideNavShow=true;$scope.$root.scrollhide="scrollhides";}
else if($scope.$root.sideNavShow==true){$(".sidenav").animate({left:'-210px'},200);$(".sideNavFull").fadeOut(100);$scope.$root.sideNavShow=false;$scope.$root.scrollhide="home-bg";}}
$scope.header=function(flag){$mixpanel.track('Header Links',{"Property":flag});};$scope.getIndex=function(flag){$window.location.href=globals.landingPage;};$scope.showSimpleToast=function(){$mdToast.show($mdToast.simple().textContent($scope.showText).position('top right').hideDelay(5000));};$scope.openLife=function(){$window.location.href="/life-insurance";};}]);