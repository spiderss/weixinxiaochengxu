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
  
  loginBtnClick:function(e){
    var that=this;
    wx.request({
      url: '../../testData/login.json',
      data:{
        username:this.data.username,
        password:this.data.password,
        dosubmit:1
      },
      method:"post",
      success:function(res)
      {
        console.log(res.data)
        try
        {
          wx.setStorageSync("id", res);
        }catch(e){}
        wx.navigateTo({
          url: '../user/user',
        })
      },
      fail: function (res) {
        console.log(res.data);
        console.log('is failed')
      }  
    })
  },  
  userNameInput:function(e)
  { 
    this.setData({
      userName:e.detail.value
    })
    //console.log(e.detail.value );
  },
  passWordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
    //console.log(e.detail.value );
  }



})