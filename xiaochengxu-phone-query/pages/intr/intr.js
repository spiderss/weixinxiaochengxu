// pages/intr/intr.js
var app=getApp();
Page({
  data:{
    title:'',
    content:'',
    isselect:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
      
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
       var that=this;
     wx.request({
       url: app.globalData.website+'/wxapi/index/getIntr',
       data: {

       },
       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       // header: {}, // 设置请求的 header
       success: function(res){
        
        // success
         that.setData({
           content:res.data,
            title:''
         });

         wx.setNavigationBarTitle({
            title: '功能介绍'
          })
         console.log(res.data)
       },
       fail: function() {
         // fail
       },
       complete: function() {
         // complete
       }
     })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})