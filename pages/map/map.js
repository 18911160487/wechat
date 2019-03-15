var app = getApp(),
	deviceInfo = app.globalData.deviceInfo;
Page({
	data: {
		longitude: "",
		latitude: "",
		controls: [{
			id: 1,
			iconPath: '/img/pin.png',
			position: {
				left: deviceInfo.windowWidth / 2 - 10,
				top: (deviceInfo.windowHeight - 42) / 2 - 10,
				width: 20,
				height: 26
			}
		}, {
			id: 2,
			iconPath: '/img/center.png',
			position: {
				left: 15,
				top: deviceInfo.windowHeight - 40,
				width: 30,
				height: 30
			},
			clickable: true
		}]
	},
	onReady: function(e) {
		this.mapCtx = wx.createMapContext('map');
	},
	onTabItemTap: function(options) {
		/*wx.switchTab({
			url: '/pages/map/map'
		});*/
		wx.openLocation({
			latitude: 30.798716362847227,
			longitude: 104.0373480902777,
			name: "佳佳展柜制作厂",
			address: "四川省成都市新都区龙桥镇银龙国际H栋21号"
		})
	},
	onShow: function() {
		wx.getLocation({
			type: 'gcj02',
			altitude: true,
			success: this.handleGetLocationSucc.bind(this)
		})
	},
	handleGetLocationSucc: function(res) {
		this.setData({
			longitude: res.longitude,
			latitude: res.latitude
		})
	},
	handleControlTap: function(e) {
		var id = e.controlId;
		if(id = 2) {
			this.mapCtx.moveToLocation();
		}

	}
})