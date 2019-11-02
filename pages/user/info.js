// pages/user/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    errorMsg: '',
    username: '',
    password: ''
  },
  login() {
    console.log(this.data.username, this.data.password)
    if (!this.data.username || !this.data.password) {
      wx.showModal({
        title: '抱歉',
        content: '请输入登录信息',
        showCancel: false,
        confirmText: '朕知道了'
      })
      return
    }
    this.getInfo(this.data.username, this.data.password)
  },
  bindUsername(ev) {
    this.setData({
      username: ev.detail.value
    })
  },
  bindPassword(ev) {
    // console.log(ev)
    this.setData({
      password: ev.detail.value
    })
  },
  getInfo(username, password) {
    const _this = this
    wx.request({
      url: 'http://192.168.199.150:3000/api/login',
      method: 'POST',
      data: {
        username,
        password
      },
      success(e) {
        console.log(e, 56)
        if (e.data.code === 200) {
          _this.setData({
            userInfo: e.data.data
          })
        } else {
          _this.setData({
            errorMsg: e.data.msg
          })
        }
      },
      fail(err) {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getInfo()
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