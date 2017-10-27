# wxxiaochengxu
微信小程序学习
手机号地址查询小程序

   此小程序仅是测试，学习小程序的开发流程，使用如下：
    
	 1，组件 button事件绑定,text,view,image
	 2，wx.request()请求
	 3，wx.showToast();
	
	微信文件说明：
	  app.js  存放程序初始化操作，设置全局数据信息
	  app.json 程序主导航和顶部信息（页面中也可以修改）等
	  app.wxss 可以存放公共样式
	  
	  pages文件下：
	           存放各个页面模块，各文件名必须相同，可以通过在 ‘app.json’中配置，会生成以下文件。 每个模块下有单独的
			   （
			   xxx.js,数据处理
			   xxx.wxss,样式信息
			   xxx.json，配置信息
			   xxx.wxml 页面显示
			   ）
	 utils下存放一些公共方法
	 images下存放样式图片资源
	 
	后台说明：
	 微信中使用域名为虚拟域名，本地使用，网络无法访问。
      后台使用 thinkphp 5.0.4 ,仅简单使用了一个控制器做处理，手机号查询接口使用的是淘宝	
	  http://tcc.taobao.com/cc/json
	      /mobile_tel_segment.htm
	 
	 结语时间 2017年1月11日
	   ___             _  _ 
 |   \  ___ __ __(_)| |
 | |) |/ -_)\ V /| || |
 |___/ \___| \_/ |_||_|
                       
                      
