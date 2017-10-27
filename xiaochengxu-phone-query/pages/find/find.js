// pages/find/find.js
Page({
   data:{
       tel:'',
       result:'',
       loading:false,
       cod:false,
       allow:true
   },
   cx:function(e){
        var that=this;
        that.setData({
            tel:e.detail.value
        })
        if(verifyPhone(e.detail.value)){
              that.setData({
            allow:false
            })
      
        }else{
            that.setData({
            allow:true
            })
            wx.showToast({
            title: '手机号格式不正确',
            icon: 'fail',
            duration: 2000
          })
             console.log(e.detail.value+"xxx")
        }
   },
   confirmQuery:function(e){
       var self=this;
       wx.request({
         url: 'http://www.wxcs.com/public/index.php/wxapi/index/query',
         data: {
            
             number:this.data.tel
         },
         method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
         // header: {}, // 设置请求的 header
         success: function(res){
           // success
          self.setData({
              loading:false,
              result:res.data
          })
          console.log(res) 
         },
         fail: function() {
           // fail
         },
         complete: function() {
           // complete
           self.setData({
               //loading:true
               cod:true
           })
         }
       })
   }
})
function verifyPhone($phone){
    var preg=/^1[34578]{1}\d{9}/;
    if(preg.test($phone)){
        return true;
    }else{
        return false;
    }
}