//index.js
//获取应用实例
const app = getApp();
const product = require('../../utils/product.js').product;
const productMsg = product.productMsg;
const productListHome = product.productListHome;
Page({  
	data: {
		pageIsShow: false,
		navbarActiveIndex: -1,
		navbarTitle: productListHome,
		navbarItemWidth: 100,
		detailMsgList: productMsg,
		translateX: 0,
		windowWidth: wx.getSystemInfoSync().windowWidth,
		pageX: -1
	},
	onLoad: function(options) {
		wx.showLoading({
			title: '加载中',
		})
		this.setData({
			navbarActiveIndex: +options.index || 0
		})
	},
	onReady: function() {
		this.setData({
			pageIsShow: true
		})
		wx.hideLoading();
		var query = wx.createSelectorQuery();
		query.select('.navbarItem').boundingClientRect(function(rect) {
			this.setData({
				navbarItemWidth: rect.width
			})
		}.bind(this)).exec();
		this.setData({
			translateX: this.computeTranslateNum(this.data.navbarActiveIndex)
		})
	},
	onNavBarTap: function(event) {
		let navbarTapIndex = event.currentTarget.dataset.navbarIndex
		this.setData({
			navbarActiveIndex: navbarTapIndex
		})
	},
	onBindAnimationFinish: function({
		detail
	}) {
		this.setData({
			navbarActiveIndex: detail.current,
			translateX: this.computeTranslateNum(detail.current)
		})
	},
	computeTranslateNum: function(index) {
		var navbarItemWidth = this.data.navbarItemWidth;
		var windowWidth = this.data.windowWidth;
		var navbarTotalNum = this.data.navbarTitle.length;
		if((windowWidth - navbarItemWidth) / 2 > index * navbarItemWidth) {
			return 0;
		} else if((windowWidth - navbarItemWidth) / 2 > (navbarTotalNum - index - 1) * navbarItemWidth) {
			return -(navbarTotalNum * navbarItemWidth - windowWidth);
		} else {
			return -(index * navbarItemWidth - (windowWidth - navbarItemWidth) / 2);
		}
	},
	ballNavMoveEvent: function(e) {
		var navbarItemWidth = this.data.navbarItemWidth;
		var windowWidth = this.data.windowWidth;
		var navbarTotalNum = this.data.navbarTitle.length;
		var tempPageX = this.data.pageX;
		var pageX = e.touches[0].pageX;
		var tempTranslateX = this.data.translateX;
		if(tempPageX < 0 || Math.abs(tempPageX - pageX) > 10) {
			this.setData({
				pageX: pageX
			})
			return;
		}
		var translateX = tempTranslateX + pageX - tempPageX;
		var maxTranslateX = (windowWidth - navbarTotalNum * navbarItemWidth);
		translateX = translateX <= maxTranslateX ? maxTranslateX : translateX >= 0 ? 0 : translateX;
		this.setData({
			pageX: pageX,
			translateX: translateX
		})

	}
})