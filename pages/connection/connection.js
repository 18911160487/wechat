
const connection = require('../../utils/product.js').product.connection;

Page({
	data: {
		connection: connection
	},
	onLoad: function() {
		
	},
	onCompanyPhoneTap: function(e) {
		if(e.currentTarget.dataset.index != 1) {
			return;
		}
		wx.makePhoneCall({
			phoneNumber: connection[e.currentTarget.dataset.index].content // 仅为示例，并非真实的电话号码
		});
	},
	onTabItemTap: function(options) {
		wx.switchTab({
			url: '/pages/connection/connection'
		});
		wx.makePhoneCall({
			phoneNumber: '18911160487' // 仅为示例，并非真实的电话号码
		});
	}
})