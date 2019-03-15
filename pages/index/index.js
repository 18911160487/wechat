//index.js
//获取应用实例
const app = getApp() 
const product = require('../../utils/product.js').product;
var productHome = product.productHome;
var productListHome = product.productListHome;
var pageSize = 5; //上拉加载更多,每页加载的个数
Page({  
	data: {
		mode: "scaleToFill",
		arr: [
			"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg",
			"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg",
			"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg",
			"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg",
		],
		indicatorDots: true,
		autoplay: true,
		interval: 2000,
		duration: 1000,
		navbarActiveIndex: 0,
		productListHome: productListHome,
		productHome: productHome.slice(0, pageSize),
		productHomeCount: 1
	},
	onLoad: function(options) {
		wx.showLoading({
			title: '加载中',
		})
	},
	onReady: function() {
		wx.hideLoading();
	},
	onReachBottom: function() {
		var productHomeCount = this.data.productHomeCount + 1;
		if(this.data.productHome.length >= productHome.length) {
			return;
		}
		var start = productHomeCount * pageSize - pageSize;
		var end = productHomeCount * pageSize > productHome.length ? productHome.length : productHomeCount * pageSize;
		this.setData({
			productHomeCount: productHomeCount,
			productHome: this.data.productHome.concat(productHome.slice(start, end))
		})
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