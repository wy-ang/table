var $we = (function(options) {
    var check = function(options) {
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

        var selectAllEm = document.getElementById(options.selectAllId);
        var selectSingleEm = document.getElementsByClassName(options.groupClass);
        var checkArr = [];

        //全选方法
        var selectAll = function() {
            selectAllEm.onclick = function() {
                if (checkArr.length > -1) {
                    checkArr.length = 0;
                }
                for (var j = 0, len = selectSingleEm.length; j < len; j++) {
                    selectSingleEm[j].checked = this.checked;
                    if (selectSingleEm[j].checked) {
                        checkArr.push(selectSingleEm[j]);
                    } else {
                        checkArr.remove(selectSingleEm[j]);
                    }
                    console.log(checkArr);
                }
            }
        };

        //单选方法
        var selectSingle = function() {
            for (var k = 0, len = selectSingleEm.length; k < len; k++) {
                selectSingleEm[k].onclick = function() {
                    if (this.checked) {
                        checkArr.push(this);
                    } else {
                        selectAllEm.checked = this.checked;
                        checkArr.remove(this);
                    }
                    console.log(checkArr);
                    if (checkArr.length == selectSingleEm.length) {
                        selectAllEm.checked = true;
                    }
                }
            }
        }
        selectAll();
        selectSingle();
    }
    return {
        check:check
    }
})({});
