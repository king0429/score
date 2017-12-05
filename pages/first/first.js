// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    point_sum:'99',
    point_month:'21',
    ticket:'10',
    nav:[
      [{ icon: '/images/icon1.png', title: '积分申请' }, { icon: '/images/icon2.png', title: '排名查询' }], [{ icon: '/images/icon3.png', title: '修改目标分' }, { icon:'/images/icon4.png',title:'积分审核'}]
    ],
    tabSel:0,
    tableTitle:['姓名','加分','减分'],
    // 模拟数据
    rank:[
      { name: '姓名1', add: 90, rec: 15 }, { name: '姓名1', add: 70, rec: 15 }, { name: '姓名1', add: 60, rec: 15 }, { name: '姓名1', add: 80, rec: 45 }, { name: '姓名1', add: 30, rec: 15 },
    ],
    color:['rgb(202,21,36)','rgb(248,75,77)','rgb(252,156,18)']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      company:getApp().globalData.company,
      department:getApp().globalData.department,
      name:getApp().globalData.name
    })
  },
  changeTab:function(e){
    var that = this;
    that.setData({
      tabSel:e.currentTarget.dataset.index
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})