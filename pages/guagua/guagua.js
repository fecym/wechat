// pages/guagua/guagua.js
let ctx = wx.createCanvasContext('gua', this)
let isTouch = false
// 手指信息
let start_x, start_y, move_x, move_y
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
    prizeNum: 10,
    intro: {
      title: "活动介绍",
      content: "本次活动仅限于住过此酒店的用户，每人每次可有十次抽奖机会，抽中以后请在规定时间内领取，有十次抽奖机会，抽中以后再说"
    },
    rule: {
      title: "活动规则",
      content: "本次活动仅限于住过此酒店的用户，每人每次可有十次抽奖机会，抽中以后请在规定时间内领取，有十次抽奖机会，抽中以后再说"
    }
  },
  // 返回首页
  goback: function (e) {
    wx.switchTab({
      url: '../index/index'
    })
  },
  // 手指按下事件
  touchstart: function(e) {
    // 获取手指按下的位置
    start_x = e.touches[0].x
    start_y = e.touches[0].y
    console.log(e.target)
  },
  touchmove: function(e) {
    move_x = e.touches[0].x
    move_y = e.touches[0].y
    if (move_x < 0) {
      move_x = 0
    }
    if (move_y < 0) {
      move_y = 0
    }
    // console.log('x: ' + move_x, 'y: ' + move_y)
    ctx.globalCompositeOperation = 'destination-out'
    ctx.arc(move_x, move_y, 20, 0, 2 * Math.PI)
    ctx.draw()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 异步请求逻辑
    wx.request({
      url: './guagua.json',
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
    // 获取元素逻辑

    // canvas逻辑
    wx.chooseImage({
      success: function(res) {
        ctx.drawImage(res.tempFilePaths[0], 0, 0, 325, 150)
        ctx.draw()
      },
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