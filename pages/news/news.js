
Page({

  /**
   * 页面的初始数据
   */
  data: {
   datalist: []
  },

  getData(){
    let that = this
    wx.cloud.callFunction({
      name: "getNewsList",
      success(res){
        console.log("请求云函数成功了", res)
        that.setData({
          datalist: res.result.data
        })
      },
      fail(res){
        console.log("请求云函数失败", res)
      }
    })
  },

  // v1
  // onNewsTap: function (event) {
  //   console.log(event);
  //   wx.navigateTo({
  //     url: './1',
  //   });
  // },
  
  onNewsTap: function (event) {
    console.log(event);
    let newsid = event.currentTarget.dataset.id;
    console.log(newsid);
    wx.navigateTo({
      url: '../news-details/newsdetails?newsid='+newsid,
    });
  },

  onNewsTapa: function (event) {
    console.log(event);
    wx.navigateTo({
      url: '../news-details/newsdetails?newsid=' + 0,
    });
  },
  onNewsTapb: function (event) {
    console.log(event);
    wx.navigateTo({
      url: '../news-details/newsdetails?newsid=' + 1,
    });
  },
  onNewsTapc: function (event) {
    console.log(event);
    wx.navigateTo({
      url: '../news-details/newsdetails?newsid=' + 2,
    });
  },
  gotopages: function(param){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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