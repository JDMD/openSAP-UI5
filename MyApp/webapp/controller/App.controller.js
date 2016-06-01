sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"opensap/myapp/model/formatter"
], function(Controller, MessageToast, Filter, FilterOperator, formatter) {
	"use strict";
	return Controller.extend("opensap.myapp.controller.App", {
		formatter: formatter,

		onShowHello: function() {
			// get msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show the message
			MessageToast.show(sMsg);
		},
		
		onFilterProducts: function(oEvt) {
			//build filter array
			var aFilter = [],
				//query string
				sQuery = oEvt.getParameter("query"),
				//retrieve List control
				oList = this.getView().byId("productsList"),
				//get binding for aggregation 'items'
				oBinding = oList.getBinding("items");
			
			if (sQuery) {
				aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
			}
			//apply filter. if the filter is empty, all the entries will be shown
			oBinding.filter(aFilter);
		},
		
		onItemSelected: function(oEvt) {
			var oSelectedItem = oEvt.getSource();
			var oContext = oSelectedItem.getBindingContext();
			var sPath = oContext.getPath();
			var oProductDetailsPanel = this.byId("productDetailsPanel");
			
			oProductDetailsPanel.bindElement({path: sPath});
			oProductDetailsPanel.setVisible(true);
		}
	});
});