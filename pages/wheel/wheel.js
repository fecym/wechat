  // pages/wheel/wheel.js
let runDegs = 0,    // 跑的度数
    isWheel = true  // 是否再转
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
    chance: true,
    animationData: {},
    btnDisabled: '',
    list: '',
    dataLen: 0,
    jiangpin: [],
    prizeNum: 3,
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
  goback: function(e) {
    wx.switchTab({
      url: '../index/index'
    })
  },
  // 开始游戏逻辑
  begin: function(e) {
    if (!this.data.prizeNum) {
      wx.showModal({
        title: '抱  歉',
        content: '您的抽奖次数已经用完， 感谢您的使用',
        showCancel: false,
        confirmText: '朕知道了'
      })
      return
    }
    if (!isWheel) return;
    isWheel = false;
    this.setData({
      prizeNum: --this.data.prizeNum
    })
    // 根据数组的长度定义的一个随机数
    let awardIndex = Math.random() * this.data.dataLen >>> 0;
    let runNum = 8; // 要旋转的度数
    let animationRun = wx.createAnimation({
      duration: 4000,
      timingFunction: 'ease'
    })
    // 旋转的度数 += (整圈数 - 转了多少圈后又多转了多少度) + (想让他转多少圈的度数 - 随机数 * (每一圈所对应的范围))
    runDegs += (360 - runDegs % 360) + (360 * runNum - awardIndex * (360 / this.data.dataLen))
    animationRun.rotate(runDegs).step()
    this.setData({
      animationData: animationRun.export()
    })
    var _this = this
    // 提示
    setTimeout(function () {
      wx.showModal({
        title: '恭喜',
        content: '获得' + (_this.data.jiangpin[awardIndex].type),
        showCancel: false
      })
      isWheel = true
    }, 4000);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let query = wx.createSelectorQuery()
    query.select('#the-id').boundingClientRect()
    // 开始绘制转盘
        // 4 - 10之间的随机数
    let rdNum = Math.random() * 5 + 5 >>> 0,
        // 随机奖品数据
        prizeList = this.data.prizes.slice(0, rdNum),
        // 奖品数据的长度
        len = prizeList.length,
        // 旋转度数, 加上90暂时未知
        rotateDeg = 360 / len / 2,
        html = [],
        turnNum = 1 / len  // 文字旋转的 trun 值

    this.setData({
      dataLen: len,
      jiangpin: prizeList,
    })
    // canvas
    let ctx = wx.createContext()
    for (let i = 0; i < len; i++) {
      // 保存当前状态Dis
      ctx.save();
      // 开始一条新路径
      ctx.beginPath();
      // 位移到圆心，下面需要围绕圆心旋转
      ctx.translate(163.5, 163.5);
      // 从(0, 0)坐标开始定义一条新的子路径
      ctx.moveTo(0, 0);
      // 旋转弧度,需将角度转换为弧度,使用 degrees * Math.PI/180 公式进行计算。
      ctx.rotate((360 / len * i - rotateDeg) * Math.PI / 180);
      // 绘制圆弧
      ctx.arc(0, 0, 163.5, 0, 2 * Math.PI / len, false);
      // 颜色间隔
      if (i % 2 == 0) {
        // ctx.setFillStyle('#FFD944');
        ctx.setFillStyle('#fff');
      } else {
        ctx.setFillStyle('#FEEE8F');
      }
        // 填充扇形
        ctx.fill();
        // 绘制边框
        ctx.setLineWidth(0.5);
        ctx.setStrokeStyle('green');
        ctx.stroke();

        // 恢复前一个状态
        ctx.restore();
        ctx.draw()
        // 奖项列表
        html.push({ turn: i * turnNum + 'turn', lineTurn: i * turnNum + turnNum / 2 + 'turn', prize: prizeList[i].type });
      }
      this.setData({
        list: html
      });
      console.log(this.data.list)
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