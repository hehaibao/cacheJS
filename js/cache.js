/*
*  JS操作缓存 [cookie && localStorage && sessionStorage]
*  by haibao [http://www.hehaibao.com/]
*
*     设置cookie的方法：cacheJS.setCookie(key,val,day);
*     获取cookie的方法：cacheJS.getCookie(key);
*     删除cookie的方法：cacheJS.delCookie(key);
*     or
*     获取storage的方法：cacheJS.setStorage();
**/
var cacheJS = {
    hours: 24*3600*1000, //24小时
    errorTxt: '您的Web浏览器不支持本地存储设置。在Safari中，最常见的原因是使用“无痕浏览模式”。有些设置可能无法保存，某些功能可能无法正常工作。',
    /**
     * 设置cookie方法
     *  @param key 名称
     *  @param val 值
     *  @param day 存储的时间 以天为单位
     * **/
    setCookie: function(key, val, day){
        var date = new Date(); // 获取当前时间
        day = typeof day === 'undefined' ? this.hours : day*this.hours; //有则存，没有则默认1天
        date.setTime(date.getTime() + day); // 格式化为cookie识别的时间
        document.cookie = key + "=" + escape(val) +";expires=" + date.toGMTString() + ";path=/"; // 设置cookie
    },
    /**
     * 获取cookie方法
     *  @param key 名称
     * **/
    getCookie: function(key){
        var getCookie = document.cookie.replace(/[ ]/g,""); // 获取cookie，并且将获得的cookie格式化，去掉空格字符
        var arrCookie = getCookie.split(";");
        var tempData;
        for(var i=0;i<arrCookie.length;i++){
            var arr = arrCookie[i].split("="); // 将单条cookie用"等号"为标识，将单条cookie保存为arr数组
            if(key == arr[0]){  // 匹配变量名称，其中arr[0]是指的cookie名称
                tempData = unescape(arr[1]);
                break;
            }
        }
        return tempData;
    },
    /**
     * 删除cookie方法
     *  @param key 名称
     * **/
    delCookie: function(key){
        var date = new Date();
        date.setTime(date.getTime() - this.hours); // 设置为前一天的时间
        if(this.getCookie(key) != null){
            document.cookie = key + "="+ this.getCookie(key) +";expires="+date.toGMTString() + ";path=/";
        }
    },
    /**
     * 存储storage单个属性
     * @param key 名称
     * @param val 值
     * @param type [object] 类型[可选值sessionStorage/localStorage]，不填则默认localStorage
     * **/
    setStorage: function(key, val, type){
        // 判断是否safari无痕浏览模式
        type = type ? type : window.localStorage; //如果不填，默认是localStorage
        if (typeof type === 'object') {
            try {
                type[key] = escape(val);
            } catch (e) {
                alert(cacheJS.errorTxt);
            }
        }
    },
    /**
     * 读取storage单个属性
     * @param key 名称
     * @param type [object] 类型[可选值sessionStorage/localStorage]，不填则默认localStorage
     * **/
    getStorage: function(key, type){
        // 判断是否safari无痕浏览模式
        type = type ? type : window.localStorage;
        if (typeof type === 'object') {
            try {
                return unescape(type[key]);
            } catch (e) {
                alert(cacheJS.errorTxt);
            }
        }
    },
    /**
     * 设置storage对象，以JSON格式存储
     * @param key 名称
     * @param val 值
     * @param type [object] 类型[可选值sessionStorage/localStorage]，不填则默认localStorage
     * **/
    setStorageObject: function(key, val, type){
    		type = type ? type : window.localStorage;
    		if (typeof type === 'object') {
            try {
                type[key] = JSON.stringify(val);
            } catch (e) {
                alert(cacheJS.errorTxt);
            }
        }
    },
    /**
     * 读取storage对象
     * @param key 名称
     * @param type [object] 类型[可选值sessionStorage/localStorage]，不填则默认localStorage
     * **/
    getStorageObject: function (key, type) {
    		type = type ? type : window.localStorage;
        if (typeof type === 'object') {
            try {
                return JSON.parse(type[key] || '{}');
            } catch (e) {
                alert(cacheJS.errorTxt);
            }
        }
    },
    /**
     * 删除storage对象
     * @param key 名称
     * @param type [object] 类型[可选值sessionStorage/localStorage]，不填则默认localStorage
     * **/
    delStorage: function(key, type){
    		type = type ? type : window.localStorage;
    		if (typeof type === 'object') {
            try {
               	type[key] = '';
        			delete type[key];
            } catch (e) {
                alert(cacheJS.errorTxt);
            }
        }
    }
};