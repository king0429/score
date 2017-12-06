// pages/cast/cast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:[
      { icon: '/images/menu1.png', title: '积分学堂', bg: '#ffc92b' }, { icon: '/images/menu2.png', title: '公司政策', bg: '#ff642b' }, { icon: '/images/menu3.png', title: '活动公告', bg: '#1269a6' },
    ],
    plate:[
      [{title:'条目1',id:1},{title:'条目2',id:2}],[{title:'政策1',id:3}],[]
    ]
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
  todetail:function(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/castDetail/castDetail?_id='+e.currentTarget.dataset.id,
    })
  }
 
})