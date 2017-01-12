(function(window) {
    var Check = function(options) {
        //让ie9以下兼容getElementsByClassName方法
        if (!document.getElementsByClassName) {
            document.getElementsByClassName = function(className) {
                var classNameArr = [];
                var elenent = document.getElementsByTagName('*');
                for (var i = 0, len = element.length; i < len; i++) {
                    if (element[i].className === className ||
                        elenent[i].className.indexOf(' ' + className) >= 0 ||
                        element[i].className.indexOf(' ' + className + ' ') >= 0 ||
                        element[i].className.indexOf(className + ' ') >= 0) {
                        classNameArr.push(element[i]);
                    }
                }
                return classNameArr;
            }
        }

        // 获取元素在数组内的索引
        Array.prototype.key = function(val) {
            for (var l = 0, len = this.length; l < len; l++) {
                if (this[l] == val) {
                    return l;
                }
            }
            return -1;
        }

        //根据索引删除指定元素
        Array.prototype.remove = function(val) {
            var index = this.key(val);
            if (index > -1) {
                this.splice(index, 1);
            }
        }

        //设置默认参数
        var defaults = {
            id: 'checkAll',
            className: 'check'
        };

        var checkAll = document.getElementById(defaults.id);
        var checkSingle = document.getElementsByClassName(defaults.className);
        var checkArr = [];
        //全选事件
        var checkAllFun = function() {
            checkAll.onclick = function() {
                if (checkArr.length > -1) {
                    checkArr.length = 0;
                }
                for (var j = 0, len = checkSingle.length; j < len; j++) {
                    checkSingle[j].checked = this.checked;
                    if (checkSingle[j].checked) {
                        checkArr.push(checkSingle[j]);
                    } else {
                        checkArr.remove(checkSingle[j]);
                    }
                    console.log(checkArr);
                }
            }
        };
        var checkSingleFun = function() {
            for (var k = 0, len = checkSingle.length; k < len; k++) {
                checkSingle[k].onclick = function() {
                    if (this.checked) {
                        checkArr.push(this);
                    } else {
                        checkAll.checked = this.checked;
                        checkArr.remove(this);
                    }
                    console.log(checkArr);
                    if (checkArr.length == checkSingle.length) {
                        checkAll.checked = true;
                    }
                }
            }
        }
        checkAllFun();
        checkSingleFun();
    }
    window.check = Check;
})(window);