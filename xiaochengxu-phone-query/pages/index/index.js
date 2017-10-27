//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')   
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
         console.log(userInfo);
    }) 
  },

  applyCode:function(e){
  
    this.setData(
      {
        applycode:e.detail.value
      }
    );
    console.log(e.detail.value);
  },
  confirmLogin:function(){
    wx.request({
      url: 'http://www.wxcs.com/public/index.php/wxapi',
      data: {
        applycode:this.data.applycode,
        userinfo:this.data.userInfo
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        if(res.data.code=='1'){
        
          // wx.switchTab({
          //   url:"/pages/intr/intr"
          // });
          wx.navigateTo({
            url:'../find/find'
          })
        }else{
           
          wx.showToast({
            title: '验证码错误',
            icon: 'fail',
            duration: 2000
          })
        }
      },
      fail: function() {
        // fail
        console.log('sorry ,you fail');
      },
      complete: function() {
        // complete
        console.log('ok ,complete this request');
      }
    })
  }
})
