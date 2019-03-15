Page({
	data: {

	},
	onLoad: function() {

	},
	onCompanyAddressTap: function() {
		wx.openLocation({
			latitude: 30.798716362847227,
			longitude: 104.0373480902777,
			name: "佳佳展柜制作厂",
			address: "四川省成都市新都区龙桥镇银龙国际H栋21号"
		})
	},
	onCompanyPhoneTap: function() {
		wx.makePhoneCall({
			phoneNumber: '18911160487' // 仅为示例，并非真实的电话号码
		});
	}
})