// pages/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCard: ['全部','未审核','已通过','已驳回'],
    point_type:['+','-'],
    sel:'0',
    check:[
      {name:'审核01', info:'审核详情,包含审核内容和提交的信息',date:'2017-12-01',type:'1',status:'0',point:10},
      { name: '审核02', info: '审核详情,包含审核内容和提交的信息', date: '2017-12-02', type: '1', status: '0', point: 10 },
      { name: '审核03', info: '审核详情,包含审核内容和提交的信息', date: '2017-12-03', type: '0', status: '0', point: 10 },
      { name: '审核04', info: '审核详情,包含审核内容和提交的信息', date: '2017-12-04', type: '1', status: '0', point: 10 },
      { name: '审核05', info: '审核详情,包含审核内容和提交的信息', date: '2017-12-05', type: '1', status: '1', point: 10 },
      // { name: '审核06', info: '审核详情,包含审核内容和提交的信息', date: '2017-12-06', type: '0', status: '2', point: 10 },
      { name: '审核07', info: '审核详情,包含审核内容和提交的信息', date: '2017-12-07', type: '0', status: '0', point: 10 },
      { name: '审核08', info: '审核详情,包含审核内容和提交的信息', date: '2017-12-08', type: '0', status: '1', point: 10 },
      { name: '审核09', info: '审核详情,包含审核内容和提交的信息', date: '2017-12-09', type: '1', status: '0', point: 10 },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    if(that.data.check.length==0){
      that.setData({
        isNone:1
      })
    }
  },
  changeTab:function(e){
    console.log(e.currentTarget.dataset)
    var that = this;
    var co_check = [];
    var isNone = 0;
    that.data.check.forEach(function(val,index){
      if (val.status==e.currentTarget.dataset.index-1){
        co_check.push(val);
      }
    })
    console.log(co_check)
    if (co_check.length == 0 && e.currentTarget.dataset.index!=0){
      isNone = 1;
    }
    that.setData({
      sel:e.currentTarget.dataset.index,
      co_check:co_check,
      isNone:isNone,
    })
  }
})