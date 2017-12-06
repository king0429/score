// pages/appdetail/appdetail.js
Page({
  data: {
    freq_type:['小时','天','月','年'],
    point_type:['+','-'],
    type_type:['A','B','C','D'],
    sheet:{
      _sn:'001',type:1,item:'考勤',demand:'每天9点之前打卡',info:'可以压哨打卡',freq:1,point:10,checker:'董事长',isAdd:1,
    }
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      company: getApp().globalData.company,
      department: getApp().globalData.department,
      name: getApp().globalData.name
    })    
  },
})