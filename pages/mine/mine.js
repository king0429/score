// pages/mine/mine.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    todayScore:'100',
    target:'200',
    usermotto:'水能载舟,也能煮粥',
    count:['当天','当月','累计'],
    typeSel:0,
    result:[
      {
        a: 10, b: 15, c: 0, d: 0, ticket: 1
      },{
        a: 100, b: 150, c: 20, d: 19, ticket: 10
      }, {
        a: 1500, b: 1000, c: 800, d: 1350, ticket: 150
      }
    ],
    rank:{
      sum:2,a:3,b:1,c:1,d:2
    },
    statusSel:0,
    status:['全部','已完成','未审核','已驳回']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      company: getApp().globalData.company,
      department: getApp().globalData.department,
      name: getApp().globalData.name,
      userheader: getApp().globalData.userInfo.avatarUrl,
      nickname: getApp().globalData.userInfo.nickName
    })  
  },
  typeSel:function(e){
    var that = this;
    that.setData({
      typeSel:e.currentTarget.dataset.index
    })
  },
  statusSel: function (e) {
    var that = this;
    that.setData({
      statusSel: e.currentTarget.dataset.index
    })
  },
  editMotto:function(){
    var that = this;
    that.setData({
      hidden:0,
      scroll:'hidden'
    })
  },
  close:function(){
    this.setData({
      hidden:1,
      scroll:'visitable'
    })
  }
})