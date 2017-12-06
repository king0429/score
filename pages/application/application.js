// pages/application/application.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color:['#38adff','#4a4eff','#2bff9f','#ffa32b'],
    changeType:1,
    application:[
      { id: 1, type: 'A', info: '+5' }, { id: 2, type: 'B', info: '+5' }, { id: 1, type: 'C', info: '+5' }, { id: 1, type: 'D', info: '+5' }, { id: 1, type: 'A', info: '-5' }, { id: 1, type: 'C', info: '+15' }, { id: 1, type: 'D', info: '-15' }, { id: 1, type: 'B', info: '+5' }, { id: 1, type: 'A', info: '+25' }, { id: 1, type: 'C', info: '-25' }, { id: 1, type: 'A', info: '-99' },
    ],
    unsel:'/images/unselect.png'
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
  showDetail:function(e){
    var that = this;
    var type = ['A','B','C','D']
    that.setData({
      // hidden:0,
      showDeatl:1,
      selType:e.currentTarget.dataset.index,
      sel: type[e.currentTarget.dataset.index]
    })
  },
  changeType:function(e){
    this.setData({
      changeType:e.currentTarget.dataset.index
    })
  },
  changeSel:function(e){
    console.log(e)
    var that = this;
    var isTap = that.data.isTap;
    isTap[e.currentTarget.dataset.index] = 1;
    that.setData({
      isTap:isTap
    })
  }
})