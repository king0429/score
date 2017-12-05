//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    console.log(getApp().globalData.userInfo)
    var that = this;
    if(getApp().globalData.userInfo){
      that.setData({
        userheader: getApp().globalData.userInfo.avatarUrl,
        nickname: getApp().globalData.userInfo.nickName
      })
    }
    setTimeout(function(){
      wx.redirectTo({
        url: '/pages/signup/signup',
      })
    },5000)

  },



  
})
