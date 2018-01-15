### cacheJS
JS缓存操作的简单封装，支持 cookie/localStorage/sessionStorage，不依赖jQuery，支持主流浏览器

#### 使用方法：

  设置cookie的方法：cacheJS.setCookie(key,val,day);
  
  获取cookie的方法：cacheJS.getCookie(key);
  
  删除cookie的方法：cacheJS.delCookie(key);

  or
  
  设置storage的方法：
  
      cacheJS.setStorage(key, val);                 //第三个参数不传则默认是：localStorage

      cacheJS.setStorage(key, val, sessionStorage); //sessionStorage
                    
  获取storage的方法: 
                    
      cacheJS.getStorage(key);

      cacheJS.getStorage(key, sessionStorage);
                    
  删除storage的方法：
                    
      cacheJS.delStorage(key);

      cacheJS.delStorage(key, sessionStorage);

  设置storage的其他方法：
      
      cacheJS.setStorageObject(key, val);     // val传对象

  举个栗子：
  
  var postJson = {
      id: 1,
      name: 'haibao'
  };
  
  cacheJS.setStorageObject("postJson",postJson);

  获取storage的其他方法：cacheJS.getStorageObject(key);
