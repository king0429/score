// pages/bind/bind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  bind:function(e){
    // 提交申请
    wx.navigateTo({
      url: '/pages/firsr/first',
    })
  }
})