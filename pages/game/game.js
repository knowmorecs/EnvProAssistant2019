var laji = require('../../data/laji.js');
const { $Message } = require('../../dist/base/index');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        SHOW_MODAL: false,
        percent:10,
        showDataArr: [],
        curDataIndex: 0,
        rightRes: [],
        errorRes: [],
        key: "",
        val: "",
        errorNum: 0,
        rightNum: 0,
        result: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var showDataArr = [];//10道题目
        var data = laji.lajiData;
        var gljData = data[0];
        var sljData = data[1];
        var khsljData = data[2];
        var yhljData = data[3];
        for (var i = 0; i < 2; i++) {
            var randomIndex = Math.round(Math.random() * (gljData.length - 1));
            showDataArr.push(gljData[randomIndex]);
        }
        for (var i = 0; i < 3; i++) {
            var randomIndex = Math.round(Math.random() * (sljData.length - 1));
            showDataArr.push(sljData[randomIndex]);
        }
        for (var i = 0; i < 2; i++) {
            var randomIndex = Math.round(Math.random() * (khsljData.length - 1));
            showDataArr.push(khsljData[randomIndex]);
        }
        for (var i = 0; i < 3; i++) {
            var randomIndex = Math.round(Math.random() * (yhljData.length - 1));
            showDataArr.push(yhljData[randomIndex]);
        }
        var firstData = showDataArr[0];
        var key = "";
        var val = "";
        for (var key_ in firstData) {
            key = key_;
            val = firstData[key_];
        }
        this.setData({
            showDataArr: showDataArr,
            key: key,
            val: val
        })
    },
    click: function (data) {
        if (this.data.curDataIndex == 10) {
            console.log("点击重玩");
            wx.showToast({
                title: '点击重玩一次'
            })
        } else {
            var val = data.currentTarget.dataset.val;//题目的名称
            var key = data.currentTarget.dataset.key;//题目的答案
            var sel = data.currentTarget.dataset.sel;//选择的答案
            var index = this.data.curDataIndex;//题目所在数组中的下标
            var percent = this.data.percent;
            var showData = this.data.showDataArr[index];
            this.setData({
                percent: percent+10
            });
            if (key == sel) {
                //对
                this.data.rightRes.push(showData);
                
                this.setData({
                    rightNum: this.data.rightNum + 1
                });
                this.data.result.push({ 'key': key, 'val': val, 'sel': sel });
                console.log("题目的名称" + val + "--题目的答案" + key + "--选择的答案" + sel + "恭喜选对了");
            } else {
                //错
                this.data.errorRes.push(showData);
                
                this.setData({
                    errorNum: this.data.errorNum + 1
                });
                this.data.result.push({ 'key': key, 'val': val, 'sel': sel });
                console.log("题目的名称" + val + "--题目的答案" + key + "--选择的答案" + sel + "遗憾选错了");
            }
            index = index + 1;
            if (index <= 9) {
                var showData_ = this.data.showDataArr[index];//下一道题目
                var key = "";
                var val = "";
                for (var key_ in showData_) {
                    key = key_;
                    val = showData_[key_];
                }
                console.log("展示的数据是--->key:" + key + " val:" + val);
                this.setData({
                    curDataIndex: index,
                    key: key,
                    val: val
                });
            } else {
                this.setData({
                    curDataIndex: index,
                    SHOW_MODAL:true,
                    result: this.data.result
                });
                $Message({
                    content: '恭喜完成答题',
                    type: 'success'
                });
                console.log("答对了" + this.data.rightNum + "道");
                console.log("答错了" + this.data.errorNum + "道");
            }
        }
    },
    playAgain: function () {
        /////////////初始化数据/////////////
        this.setData({
            SHOW_MODAL: false,
            percent:10,
            showDataArr: [],
            curDataIndex: 0,
            rightRes: [],
            errorRes: [],
            key: "",
            val: "",
            errorNum: 0,
            rightNum: 0,
            result: []
        });
        ////////////在执行一遍onLoad事件中的逻辑////////////////
        var showDataArr = [];//10道题目
        var data = laji.lajiData;
        var gljData = data[0];
        var sljData = data[1];
        var khsljData = data[2];
        var yhljData = data[3];
        for (var i = 0; i < 2; i++) {
            var randomIndex = Math.round(Math.random() * (gljData.length - 1));
            showDataArr.push(gljData[randomIndex]);
        }
        for (var i = 0; i < 3; i++) {
            var randomIndex = Math.round(Math.random() * (sljData.length - 1));
            showDataArr.push(sljData[randomIndex]);
        }
        for (var i = 0; i < 2; i++) {
            var randomIndex = Math.round(Math.random() * (khsljData.length - 1));
            showDataArr.push(khsljData[randomIndex]);
        }
        for (var i = 0; i < 3; i++) {
            var randomIndex = Math.round(Math.random() * (yhljData.length - 1));
            showDataArr.push(yhljData[randomIndex]);
        }
        var firstData = showDataArr[0];
        var key = "";
        var val = "";
        for (var key_ in firstData) {
            key = key_;
            val = firstData[key_];
        }
        this.setData({
            showDataArr: showDataArr,
            key: key,
            val: val
        })
    },
    okHandler:function(){
        this.setData({
            SHOW_MODAL: false
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})