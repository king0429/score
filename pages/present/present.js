// pages/present/present.js
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
    var that = this;
    that.setData({
      company: getApp().globalData.company,
      department: getApp().globalData.department,
      name: getApp().globalData.name
    })
  },

  
})