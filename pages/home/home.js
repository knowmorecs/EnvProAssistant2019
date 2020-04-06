var json = require("../../data/Home_data.js")

Page({

  /* 页面的初始数据* /
  data: {
    
  },
  /* 生命周期函数--监听页面加载 */
  onLoad: function (options) {
    this.setData({
      main_key: json.homeIndex
    })
  },

  //跳转到
  onAikefu: function () {
    wx.navigateTo({
      url: '/pages/cart/cart',
    })
  },

  onAikefu1: function () {
    wx.navigateTo({
      url: '/pages/mybuy/mybuy',
    })
  },

  // 跳转子页面 详情页面
  btn: function (e) {
    var HomeId = e.currentTarget.dataset.id
    console.log(HomeId)
    wx.navigateTo({
      url: '../../pages/home-details/home-details?id=' + HomeId,
    })
  }

})