// pages/application/application.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sel:'null',
    isAll:0,
    color:['#38adff','#4a4eff','#2bff9f','#ffa32b'],
    changeType:1,
    application:[
      { id: 1, type: 'C', info: '+5' }, { id: 2, type: 'B', info: '+5' }, { id: 1, type: 'C', info: '+5' }, { id: 1, type: 'D', info: '+5' }, { id: 1, type: 'C', info: '-5' }, { id: 1, type: 'C', info: '+15' }, { id: 1, type: 'D', info: '-15' }, { id: 1, type: 'B', info: '+5' }, { id: 1, type: 'C', info: '+25' }, { id: 1, type: 'C', info: '-25' }, { id: 1, type: 'C', info: '-99' },
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var isTap = [];
    that.data.application.forEach(function(val,index){
      isTap[index] = 0;
    })
    that.setData({
      company: getApp().globalData.company,
      department: getApp().globalData.department,
      name: getApp().globalData.name,
      isTap:isTap,
    }) 
  },
  // 详情卡片
  showDetail:function(e){
    var that = this;
    var type = ['A','B','C','D'];
    var itemLen = 0;
    that.data.application.forEach(function(val,index1){
      if (val.type == type[e.currentTarget.dataset.index]){
        itemLen++;
      }
    })
    that.setData({
      // hidden:0,
      showDeatl:1,
      selType:e.currentTarget.dataset.index,
      sel: type[e.currentTarget.dataset.index],
      itemLen: itemLen
    })
  },
  // 选项卡(公共项目和部门项目)
  changeType:function(e){
    this.setData({
      changeType:e.currentTarget.dataset.index
    })
  },
  // 单选
  changeSel:function(e){
    console.log(e)
    var that = this;
    var isTap = that.data.isTap;
    isTap[e.currentTarget.dataset.index] = 1;
    that.setData({
      isTap:isTap
    })
  },
  // 全选,反宣
  isAll:function(e){
    var that = this;
    if(e.currentTarget.dataset.all==0){
      var isTap = [];
      that.data.application.forEach(function(val,index){
        isTap[index] = 1
      })
      that.setData({
        isAll:1,
        isTap:isTap
      })
    }else{
      var isTap = [];
      that.data.application.forEach(function (val, index) {
        isTap[index] = 0
      })      
      that.setData({
        isAll:0,
        isTap:isTap
      })
    }
  },
  todetail:function(e){
    wx.navigateTo({
      url: '/pages/appdetail/appdetail?id='+e.currentTarget.dataset.id,
    })
  }
})