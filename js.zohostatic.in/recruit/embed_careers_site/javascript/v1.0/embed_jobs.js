//$Id$
/*Powered by Zoho Recruit*/

window.rec_embed_js =  window.rec_embed_js ||
	{
	rec_ajax : function(properties, callback){
		"use strict";//NO I18N

		var job_http_request = new XMLHttpRequest();
		job_http_request.rec_job_properties = properties;
		job_http_request.rec_success_callback= callback;
		job_http_request.onreadystatechange = function(data){
			if (this.readyState === 4) {
				var response = JSON.parse(this.response);
				var properties = this.rec_job_properties;
				var listingDiv = document.querySelector("#"+this.rec_job_properties.widget_id);//NO I18N
				if(this.status === 200){
					if(response && response.code ==="success" && response.data && response.data.length ===0){
						listingDiv.textContent = properties.empty_job_msg;
						return;
					}else{
						this.rec_success_callback(response, properties);
					}
				}else if(response && response.message){
					listingDiv.textContent = response.message;
					return;
				}
			}
		}
		job_http_request.open("GET", properties.site+"/recruit/v2/public/Job_Openings?pagename="+encodeURIComponent(properties.page_name)+ (properties.source ? "&source="+encodeURIComponent(properties.source) : "")+(properties.extra_fields ? "&extra_fields="+encodeURIComponent(JSON.stringify(properties.extra_fields)): ""), true);
		job_http_request.withCredentials = false;
		job_http_request.send();
	},
	
	show_hide_rec_loading : function(listingDiv, properties, isHide){
		"use strict";//NO I18N
		if(isHide){
			var loadingTag = listingDiv.querySelector(".cw-easyapply-loading");//NO I18N
			if(loadingTag){
				loadingTag.parentElement.removeChild(loadingTag);
			}
		}else{
			var colorCode = properties.color ? properties.color : "#6875E2";//NO I18N
			var loadigElem = rec_embed_js.create_element({"name":"div","attrs":{"class":"cw-easyapply-loading"}, "child":[//NO I18N
				{"name":"div","attrs":{"style":"background-color:"+colorCode}},//NO I18N
				{"name":"div","attrs":{"style":"background-color:"+colorCode}},//NO I18N
				{"name":"div","attrs":{"style":"background-color:"+colorCode}}//NO I18N
				] });
			listingDiv.appendChild(loadigElem);
		}
	},
	
	"print_facets": function(widget_id, data, facets){//NO I18N
		var facetObj = {}, facetSysRefArr = [];
		facets.forEach(function(eachF){
			facetObj[eachF.api_name] = {};
		});

		facetSysRefArr = Object.keys(facetObj);

		data.forEach(function(each_data){
			facetSysRefArr.forEach(function(api_name){
				var facetObjValues = facetObj[api_name];
				var content = each_data[api_name], contentArr;
				if(Array.isArray(content) && content && content.length >0){
					contentArr = content;
				}
				content = content && typeof content === "object" ? content.name : content;//NO I18N
				if(content && content !== null && content !== undefined && content !== "null"){
					contentArr= [content];
				}
				if(contentArr && contentArr.length >0){
					contentArr.forEach(function(each_content){
						facetObjValues[each_content] = facetObjValues[each_content] !== undefined ? facetObjValues[each_content] +1 : 1;
					});
				}
			});
		});
		var widget_elem = document.getElementById(widget_id);
		var widget_facet_elem = rec_embed_js.create_element({"name":"div",//NO I18N
			"attrs":{"class":"rec_facet_group","data-widgetid":widget_id}//NO I18N
		});
		widget_facet_elem.addEventListener("click", function(event){//NO I18N
			var target = event.target;
			if(target.nodeName ==="INPUT" && target.type ==="checkbox"){
				var closest_ul = rec_embed_js.find_closest(target, undefined, "rec_facet_group");//NO I18N
				
				var filterValues = {};
				Array.prototype.slice.call(closest_ul.querySelectorAll(".rec_ul_filter")).forEach(function(eachFilterUl){//NO I18N
					var selectedValues = [];
					Array.prototype.slice.call(eachFilterUl.querySelectorAll("input:checked")).forEach(function(eachInput){//NO I18N
						selectedValues.push(rec_embed_js.find_closest( eachInput, "li").dataset.value);
					});
					if(selectedValues.length){
				    	filterValues[eachFilterUl.dataset.sysrefname] = selectedValues;
					}
				});
				var widget_data = window[closest_ul.dataset.widgetid+"_data"], properties = window[closest_ul.dataset.widgetid+"_properties"];
				rec_embed_js.print_jobs(widget_data.data, widget_data.info, filterValues, properties);
			}
		});

		facets.forEach(function(eachFacet){
			var facetValuesObj = facetObj[eachFacet.api_name];
			if(facetValuesObj && Object.keys(facetValuesObj).length > 0){
				var ulElement = rec_embed_js.create_element({"name":"ul", "attrs":{"class":"rec_ul_filter","data-sysrefname":eachFacet.api_name}});//NO I18N
				
				Object.keys(facetValuesObj).sort().forEach(function(eachFacetValue){
					var li = rec_embed_js.create_element({"name":"li","attrs":{"data-value":eachFacetValue}, "child":[//NO I18N
							{"name":"label", "attrs": {"class":"cw-facet-checkbox-label"}, "child":[//NO I18N
								{"name":"input","attrs":{"type":"checkbox","class":"cw-facet-checkbox"}},//NO I18N
								{"name":"span","text":(eachFacet.api_name === 'Remote_Job' ? eachFacet.field_label : eachFacetValue )+" ("+facetValuesObj[eachFacetValue]+")"}//NO I18N
								]
							}
						]});

					ulElement.appendChild(li);
				});
				var mainDiv;
				if(eachFacet.api_name === 'Remote_Job'){
					mainDiv = rec_embed_js.create_element({"name":"div", "child":[//NO I18N
						{"name":"div", "attrs":{"class":"cw-rec-filter"}, childNode: ulElement}//NO I18N
					]});
				}else{
					mainDiv = rec_embed_js.create_element({"name":"div", "child":[//NO I18N
						{"name":"span","text":eachFacet.field_label},//NO I18N
						{"name":"div", "attrs":{"class":"cw-rec-filter"}, childNode: ulElement}//NO I18N
					]});
				}
				widget_facet_elem.appendChild(mainDiv);
			}
		});
		widget_elem.appendChild(widget_facet_elem);
	},
	"find_closest": function(element, nodeName, class_name){//NO I18N
		var parent = element.parentNode;
		if(parent !== null && (nodeName !== undefined && parent.nodeName.toLowerCase() === nodeName || class_name !== undefined && parent.classList.contains(class_name))){
			return parent;
		}
		return rec_embed_js.find_closest(parent, nodeName, class_name);
	},
	"load":function(properties){//NO I18N
		"use strict";//NO I18N
	
		var listingDiv = document.querySelector("#"+properties.widget_id);//NO I18N
		rec_embed_js.show_hide_rec_loading(listingDiv, properties, false);
	
		var successCallback = function(response, properties) {
			window[properties.widget_id+"_data"]=response;
			window[properties.widget_id+"_properties"] = properties;
			var data = response.data, facets= response.info && response.info.facets;//NO I18N
			
			if(facets && facets.length){
				rec_embed_js.print_facets(properties.widget_id, data, facets);
			}
			
			rec_embed_js.print_jobs(data, response.info, {}, properties);
			
		};
	
		rec_embed_js.rec_ajax(properties, successCallback);
	},
	
	"print_jobs": function(jobs, resp_info, opted_filter, properties){//NO I18N
		var empty_grouping_value =[], job_groups ={}, filterKeys = opted_filter && Object.keys(opted_filter), 
		//groupingFldName = resp_info.facets ? "" : resp_info && resp_info.groups && resp_info.groups[0].api_name;
		groupingFldName = resp_info && resp_info.groups && resp_info.groups[0].api_name, widget_id = properties.widget_id;
		for(var eachInd=0; eachInd < jobs.length; eachInd++){
			var eachJob = jobs[eachInd];
			
			/*apply filter starts*/
			if(filterKeys && filterKeys.length){
				var displayJob = true;
				for(var filterIndex = 0; filterIndex < filterKeys.length;  filterIndex++){
					var eachFilter = filterKeys[filterIndex], jobVal = eachJob[eachFilter], jobVal = jobVal && typeof jobVal ==="object" ? jobVal.name : jobVal;
					displayJob = displayJob && jobVal && jobVal !== null && opted_filter[eachFilter].indexOf(jobVal) >= 0;
					if(Array.isArray(eachJob[eachFilter]) && eachJob[eachFilter] && eachJob[eachFilter].length > 0){
						for(var eachFilterVal = 0; eachFilterVal < opted_filter[eachFilter].length ; eachFilterVal++){
							displayJob = displayJob || eachJob[eachFilter].indexOf(opted_filter[eachFilter][eachFilterVal]) >=0 ;
						}
					}
				}
				if(!displayJob){
					continue;
				}
			}
			/*apply filter ends*/
			
			var groupingValue = eachJob[groupingFldName];
			groupingValue = groupingValue !== null && groupingValue !== undefined && typeof groupingValue === "object" ? groupingValue.name : groupingValue;//NO I18N
			if(groupingValue === undefined || groupingValue === null || groupingValue.trim().length ===0){
				empty_grouping_value.push(eachJob);
			}else{
				if(!job_groups[groupingValue]){
					job_groups[groupingValue]= [];
				}
				job_groups[groupingValue].push(eachJob);
			}
		}
		var listingDiv = document.getElementById(widget_id);//NO I18N
		var job_listing_elem = listingDiv.querySelector("."+widget_id+"_jobs") ? listingDiv.querySelector("."+widget_id+"_jobs") :  rec_embed_js.create_element({"name":"div","attrs":{"class":widget_id+"_jobs"}});//NO I18N
		job_listing_elem.innerHTML = "";
		rec_embed_js.show_hide_rec_loading(listingDiv, properties, true);
		
		if(Object.keys(job_groups).length ===0 && empty_grouping_value.length === 0){
			job_listing_elem.textContent = properties.empty_job_msg;
		}else{
			var groupElem = rec_embed_js.get_group_jobs(job_groups, resp_info), otherElem =rec_embed_js.get_group_jobs({"Others":empty_grouping_value}, resp_info, true);//NO I18N
			if(groupElem !==""){
				job_listing_elem.appendChild(rec_embed_js.get_group_jobs(job_groups, resp_info));
			}
			if(otherElem !== ""){
				job_listing_elem.appendChild(rec_embed_js.get_group_jobs({"Others":empty_grouping_value}, resp_info, true));//NO I18N
			}
		}
		listingDiv.appendChild(job_listing_elem);
	},
	
	"get_group_jobs": function(job_groups, resp_info, no_grouping){//NO I18N
		if(job_groups && Object.keys(job_groups).length ===0){
			return "";
		}
		var jobListingFrg = document.createDocumentFragment(), grouping_values = Object.keys(job_groups).sort(), dummyDivElem = document.createElement("div");
		for(var eachGroupIndex =0; eachGroupIndex < grouping_values.length; eachGroupIndex ++){
			var groupName = grouping_values[eachGroupIndex], groupValues = job_groups[groupName], groupUl = rec_embed_js.create_element({"name":"ul", "attrs":{"class":"rec-group"}});//NO I18N
			
			if(!no_grouping){
				jobListingFrg.appendChild(rec_embed_js.create_element({"name": "h2", "attrs":{"class":"rec-grp-heading"}, "text": groupName +" ( "+ groupValues.length +" ) " }) );//NO I18N
			}
			
			for(var eachJobIndex = 0; eachJobIndex < groupValues.length; eachJobIndex++){
				var eachJob = groupValues[eachJobIndex],//NO I18N 

				jobInfoUl = rec_embed_js.create_element( {"name":"ul", "attrs":{"class":"rec-job-info"},"child":[//NO I18N
					{"name":"li","attrs":{"class":"rec-job-title"},"child":[//NO I18N
						{"name":"a","attrs":{"href":eachJob.$url},"text":eachJob.Job_Opening_Name}//NO I18N
						]
					}
				]});
				for(var fldInd = 0; fldInd < resp_info.fields.length; fldInd ++){
					var eachField = resp_info.fields[fldInd], content = eachJob[eachField.api_name];
					
					if(eachField.api_name === "Job_Description"){
						if(content && content.length > 150){
							content = content.substr(0,150)+"...";
						}
					}
					
					if(eachField.api_name === "Job_Opening_Name" || content === "null" || content ==="" || content ===undefined || content == null){
						continue;
					}
					
					if(content && content.name != "" && content.name != null && content.name != undefined){
						content = content.name;
					}
					
					jobInfoUl.appendChild(rec_embed_js.create_rec_li_element(content, eachField.field_label, eachField.api_name));//NO I18N
				}
				groupUl.appendChild(jobInfoUl);
			}
			jobListingFrg.appendChild(groupUl);
		}
		return jobListingFrg;
	},
	
	create_rec_li_element : function(content, name, api_name){
		return rec_embed_js.create_element({
			"name":"li", "attrs":{"class":"zrsite_"+api_name},//NO I18N 
			"child":[{"name":"span","text":name+":"}, {"name":"span","text":content}]//NO I18N
		});
	},
	create_element: function(json){
		var rec_elem; 
		if(json.name){
			rec_elem = document.createElement(json.name);
		}
		if(json.text){
			rec_elem.textContent = json.text;
		}
		for(var key in json.attrs) {
			rec_elem.setAttribute(key, json.attrs[key]);
		}
		if(json.child){
			for(var childInd =0; childInd < json.child.length; childInd++){
				rec_elem.appendChild(rec_embed_js.create_element(json.child[childInd]));
			}
		}
		if(json.childNode){
			rec_elem.appendChild(json.childNode);
		}
		return rec_elem;
	}
}