Page({
  data: {
      'userName':'',
      'password':''
  },
  onLoad: function (options) {
     console.log("obloaler-------");
  },
  onReady: function () {
    console.log("页面已经渲染-------");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
     console.log("什么时候------");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
     console.log("页面被后台隐藏----");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  
  loginBtnClick:function(event){
    console.log(event);
  },  
  userNameInput:function(evevt)
  { 
     var that=this;
     this.setData({ "userName":'ok'});
  }



})