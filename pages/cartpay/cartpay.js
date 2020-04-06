// pages/cartpay/cartpay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    cartItems: [],
    array: ['不限时送货时间', '工作日送货', '双休日、假日送货'],
    index: 0,
    total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var _this = this
    wx.getStorage({
      key: 'cartItems',
      success(res) {
        _this.setData({
          cartItems: res.data,
        })
      }
    });
    wx.getStorage({
      key: 'total',
      success(res) {
        _this.setData({
          total: res.data,
        })
      }
    });
  },

  select: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var _this = this
    wx.getStorage({
      key: 'address',
      success(res) {
        _this.setData({
          address: res.data,
          hasAddress: true
        })
      }
    });

    wx.getStorage({
      key: 'cartItems',
      success(res) {
        _this.setData({
          cartItems: res.data,
        })
      }
    });
  },

  pay: function (e) {
    wx.showModal({
      title: '支付提示',
      content: '本程序仅用于演示，实际支付API已屏蔽！（订单成功购买）',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})