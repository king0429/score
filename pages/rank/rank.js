// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSshow:0,
    search_department:'所有部门',
    search_pointType:'全部',
    sea_rank:'null',
    rank:[
      {name:'姓名1',department:'开发部',position:'前端开发',point:1000,user_id:1,user_id:10},
      { name: '姓名1', department: '开发部', position: '前端开发', point: 900,user_id:11 },
      { name: '姓名1', department: '销售部', position: '前端开发', point: 800,user_id:12},
      { name: '姓名1', department: '董事会', position: '前端开发', point: 700,user_id:13 },
      { name: '姓名1', department: '内勤部', position: '前端开发', point: 600,user_id:14 },
      { name: '姓名1', department: '销售部', position: '前端开发', point: 500,user_id:15 },
      { name: '姓名1', department: '开发部', position: '前端开发', point: 400,user_id:16 },
      { name: '姓名1', department: '销售部', position: '前端开发', point: 300,user_id:17 },
      { name: '姓名1', department: '开发部', position: '前端开发', point: 200,user_id:18 },
    ], 
    color: ['rgb(202,21,36)', 'rgb(248,75,77)', 'rgb(252,156,18)'],
    all_department:['所有部门','董事会','开发部','销售部','内勤部']
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
  changeDepartment:function(e){
    var that = this;
    if(e.detail.value!=0){
      that.setData({
        isShow: 1,
      })
      var searchItem = that.data.all_department[e.detail.value ];
      console.log(e.detail.value)
      console.log(searchItem)
      var result = [];
      that.data.rank.forEach(function (val, index) {
        if (val.department == searchItem) {
          result.push(val)
        }
      })
      console.log(result)
      that.setData({
        sea_rank: result,
        isShow: 0,
        search_department: searchItem
      })
    }else{
      that.setData({
        sea_rank:'null',
        search_department:'所有部门'
      })
    }
  }
})