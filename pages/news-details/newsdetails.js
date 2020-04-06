// Pages/news-details/newsdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsid: 0,
    newscontent: {}
  },

  getData(options) {
    let that = this
    console.log(that.data.newsid)
    wx.cloud.callFunction({
      name: "getNewsList",
      success(res) {
        console.log("请求云函数成功了", res.result.data[that.data.newsid])
        that.setData({
          newscontent: res.result.data[that.data.newsid]
        })
      },
      fail(res) {
        console.log("请求云函数失败", res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    console.log(options.newsid)
    that.setData({ newsid: options.newsid});
    that.getData()
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