var app=angular.module('App',['ngAnimate','ngMessages','ngSanitize']);app.constant('globals',{api:'Pankaj',fershDeskURL:'https://insurejoy.freshdesk.com/helpdesk/tickets.json',RedirectURL:"https://qa.indiacover360.com/Application/",ServiceURL:"https://apiqa.indiacover360.com",IGwServiceURL:"https://apiqa.indiacover360.com",UIURL:"https://qa.indiacover360.com/HomePage",landingPage:"https://qa.indiacover360.com",mainPage:"https://qa.indiacover360.com/Application/?CPID="});app.controller('faqCtrl',["$scope","$rootScope","$http","faqFactory","$window","$location","$sce","globals",function($scope,$rootScope,$http,faqFactory,$window,$location,$sce,globals){$rootScope.showHeader="show";$scope.$root.showHeaderClass="display-visible";if(window.innerWidth>=850){$scope.device="Desktop";}
else{$scope.device="Mobile";}
$scope.$root.scrollhide="";$scope.$root.showAppLink=true;$scope.$root.showBeenHere=true;$scope.$root.showmainloader=false;$scope.$root.showTopHeading=false;$scope.$root.showLogos=false;$scope.$root.showotherpageheader=true;$scope.Table1=[];$scope.$root.showNavbar=true;$scope.removeQues=function(){$scope.searchQuery="";$scope.search="";$scope.remove=false;$scope.searchResult=false;}
$scope.cross=function(){$scope.remove=true;$scope.searchResult=true;if($scope.search==""||$scope.search==null){$scope.searchResult=false;$scope.remove=false;}}
$scope.init=function(){var currentURL=$location.absUrl();if(currentURL.indexOf("dev.indiacover360.com")!=-1){globals.RedirectURL="https://dev.indiacover360.com/Application/";globals.ServiceURL="https://api.indiacover360.com";globals.IGwServiceURL="https://api.indiacover360.com";globals.UIURL="https://dev.indiacover360.com/HomePage";globals.landingPage="https://dev.indiacover360.com";globals.mainPage="https://dev.indiacover360.com/Application/?CPID=";}
else if(currentURL.indexOf("qa.indiacover360.com")!=-1){globals.RedirectURL="https://qa.indiacover360.com/Application/";globals.ServiceURL="https://apiqa.indiacover360.com";globals.IGwServiceURL="https://apiqa.indiacover360.com";globals.UIURL="https://qa.indiacover360.com/HomePage";globals.landingPage="https://qa.indiacover360.com";globals.mainPage="https://qa.indiacover360.com/Application/?CPID=";}
else if(currentURL.indexOf("insurejoy.com")!=-1){globals.RedirectURL="https://www.insurejoy.com/Application/";globals.ServiceURL="https://api.insurejoy.com";globals.IGwServiceURL="https://api.insurejoy.com";globals.UIURL="https://www.insurejoy.com/HomePage";globals.landingPage="https://www.insurejoy.com";globals.mainPage="https://www.insurejoy.com/Application/?CPID=";}
$scope.FaqResult=faqFactory.GeneralFaq(globals.landingPage);$scope.Table1=$scope.FaqResult.NewDataSet.Table1;$scope.templateheader=$sce.trustAsResourceUrl(globals.landingPage+"/header.html");$scope.templatefooter=$sce.trustAsResourceUrl(globals.landingPage+"/footer.html");$scope.FAQname="General FAQs";$scope.GeneralClass="current";$scope.CarClass="";$scope.TravelClass="";$scope.HealthClass="";$scope.TermClass="";$scope.ChildClass="";$scope.InvestmentClass="";$scope.PensionClass="";$scope.MarineClass="";$scope.FineArtClass="";$scope.FireClass="";$scope.$root.showloader=false;}
$scope.FAQdata=function(value,flag){if(value==1){$scope.FaqResult=faqFactory.CarFaq();$scope.Table1=$scope.FaqResult.NewDataSet.Table1;$scope.FAQname="Car FAQs";$scope.CarClass="current";$scope.GeneralClass="";$scope.TravelClass="";$scope.HealthClass="";$scope.TermClass="";$scope.ChildClass="";$scope.InvestmentClass="";$scope.PensionClass="";$scope.MarineClass="";$scope.FineArtClass="";$scope.FireClass="";}
if(value==2){$scope.FaqResult=faqFactory.TravelFaq();$scope.Table1=$scope.FaqResult.NewDataSet.Table1;$scope.FAQname="Travel FAQs";$scope.GeneralClass="";$scope.CarClass="";$scope.TravelClass="current";$scope.HealthClass="";$scope.TermClass="";$scope.ChildClass="";$scope.InvestmentClass="";$scope.PensionClass="";$scope.MarineClass="";$scope.FineArtClass="";$scope.FireClass="";}
if(value==3){$scope.FaqResult=faqFactory.HealthFaq();$scope.Table1=$scope.FaqResult.NewDataSet.Table1;$scope.FAQname="Health FAQs";$scope.GeneralClass="";$scope.CarClass="";$scope.TravelClass="";$scope.HealthClass="current";$scope.TermClass="";$scope.ChildClass="";$scope.InvestmentClass="";$scope.PensionClass="";$scope.MarineClass="";$scope.FineArtClass="";$scope.FireClass="";}
if(value==4){$scope.FaqResult=faqFactory.TermFaq();$scope.Table1=$scope.FaqResult.NewDataSet.Table1;$scope.FAQname="Term FAQs";$scope.GeneralClass="";$scope.CarClass="";$scope.TravelClass="";$scope.HealthClass="";$scope.TermClass="current";$scope.ChildClass="";$scope.InvestmentClass="";$scope.PensionClass="";$scope.MarineClass="";$scope.FineArtClass="";$scope.FireClass="";}
if(value==5){$scope.FaqResult=faqFactory.ChildFaq();$scope.Table1=$scope.FaqResult.NewDataSet.Table1;$scope.FAQname="Child FAQs";$scope.GeneralClass="";$scope.CarClass="";$scope.TravelClass="";$scope.HealthClass="";$scope.TermClass="";$scope.ChildClass="current";$scope.InvestmentClass="";$scope.PensionClass="";$scope.MarineClass="";$scope.FineArtClass="";$scope.FireClass="";}
if(value==6){$scope.FaqResult=faqFactory.InvestmentFaq();$scope.Table1=$scope.FaqResult.NewDataSet.Table1;$scope.FAQname="Investment FAQs";$scope.GeneralClass="";$scope.CarClass="";$scope.TravelClass="";$scope.HealthClass="";$scope.TermClass="";$scope.ChildClass="";$scope.InvestmentClass="current";$scope.PensionClass="";$scope.MarineClass="";$scope.FineArtClass="";$scope.FireClass="";}
if(value==7){$scope.FaqResult=faqFactory.PensionFaq();$scope.Table1=$scope.FaqResult.NewDataSet.Table1;$scope.FAQname="Pension FAQs";$scope.GeneralClass="";$scope.CarClass="";$scope.TravelClass="";$scope.HealthClass="";$scope.TermClass="";$scope.ChildClass="";$scope.InvestmentClass="";$scope.PensionClass="current";$scope.MarineClass="";$scope.FineArtClass="";$scope.FireClass="";}
if(value==8){$scope.FaqResult=faqFactory.GeneralFaq();$scope.Table1=$scope.FaqResult.NewDataSet.Table1;$scope.FAQname="General FAQs";$scope.GeneralClass="current";$scope.CarClass="";$scope.TravelClass="";$scope.HealthClass="";$scope.TermClass="";$scope.ChildClass="";$scope.InvestmentClass="";$scope.PensionClass="";$scope.MarineClass="";$scope.FineArtClass="";$scope.FireClass="";}}
if(window.innerWidth>=850){$scope.device="Desktop";}
else{$scope.device="Mobile";}
$scope.$root.sideNavShow=false;$scope.sideNavClose=function(){$rootScope.openNav();}
$rootScope.openNav=function(){if($scope.$root.sideNavShow==false){$(".sidenav").animate({left:'0px'},200);$(".sideNavFull").fadeIn(100);$scope.$root.sideNavShow=true;$scope.$root.scrollhide="scrollhides";}
else if($scope.$root.sideNavShow==true){$(".sidenav").animate({left:'-210px'},200);$(".sideNavFull").fadeOut(100);$scope.$root.sideNavShow=false;$scope.$root.scrollhide="home-bg";}}
$scope.header=function(flag){$mixpanel.track('Header Links',{"Property":flag});};$scope.getIndex=function(flag){$window.location.href=globals.landingPage;};$scope.showSimpleToast=function(){$mdToast.show($mdToast.simple().textContent($scope.showText).position('top right').hideDelay(5000));};$scope.openLife=function(){$window.location.href="/life-insurance";};}]);