// pages/yao/yao.js
let isYao = true
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prizes: [
      {
        "type": "未中奖",
        "num": 99999999999999
      },
      {
        "type": "一等奖",
        "num": 10
      },
      {
        "type": "二等奖",
        "num": 10
      },
      {
        "type": "三等奖",
        "num": 10
      },
      {
        "type": "四等奖",
        "num": 10
      },
      {
        "type": "五等奖",
        "num": 10
      },
      {
        "type": "六等奖",
        "num": 10
      },
      {
        "type": "七等奖",
        "num": 10
      },
      {
        "type": "八等奖",
        "num": 10
      },
      {
        "type": "九等奖",
        "num": 10
      }
    ],
    prizeNum: 3,
    intro: {
      title: "活动介绍",
      content: "本次活动仅限于住过此酒店的用户，每人每次可有十次抽奖机会，抽中以后请在规定时间内领取，有十次抽奖机会，抽中以后再说"
    },
    rule: {
      title: "活动规则",
      content: "本次活动仅限于住过此酒店的用户，每人每次可有十次抽奖机会，抽中以后请在规定时间内领取，有十次抽奖机会，抽中以后再说"
    },
    topNum: 0,
    botNum: -3
  },
  // 返回首页
  goback: function (e) {
    wx.switchTab({
      url: '../index/index'
    })
  },
  // 单击逻辑
  tap: function(e) {
    console.log(this.data.prizes, this)
    let n = Math.random() * this.data.prizes.length >>> 0
    let prize = this.data.prizes[n].type
    if (!this.data.prizeNum) {
      wx.showModal({
        title: '抱  歉',
        content: '您的抽奖次数已经用完， 感谢您的使用',
        showCancel: false,
        confirmText: '朕知道了'
      })
      return
    }
    if (!isYao) return
    console.log('进来了')
    isYao = false 
    this.setData({
      topNum: -125,
      botNum: 124,
      prizeNum: --this.data.prizeNum
    })
    setTimeout(() => {
      this.setData({
        topNum: 0,
        botNum: -3
      })
      setTimeout(() => {
        isYao = true
        wx.showModal({
          title: '恭喜',
          content: '恭喜你获得' + prize,
        })
      }, 2000)
    }, 2000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.onAccelerometerChange(function(e){
      if (e.x > .7 && e.y > .7) {
        let n = Math.random() * _this.data.prizes.length >>> 0
        let prize = _this.data.prizes[n].type
        if (!_this.data.prizeNum) {
          wx.showModal({
            title: '抱  歉',
            content: '您的抽奖次数已经用完， 感谢您的使用',
            showCancel: false,
            confirmText: '朕知道了'
          })
          return
        }
        if (!isYao) return
        console.log('进来了')
        isYao = false
        _this.setData({
          topNum: -125,
          botNum: 124,
          prizeNum: --_this.data.prizeNum
        })
        setTimeout(() => {
          _this.setData({
            topNum: 0,
            botNum: -3
          })
          setTimeout(() => {
            isYao = true
            wx.showModal({
              title: '恭喜',
              content: '恭喜你获得' + prize,
            })
          }, 2000)
        }, 2000)
      }
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