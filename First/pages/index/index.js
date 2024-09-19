// index.js
Page({
  data:{
    Title:'开始title',
    ClickNum:0
  },
  BtnOnClick:function(){
    this.setData({
      ClickNum: this.data.ClickNum + 1,
      Title : "你点击了"+ this.data.ClickNum +"次",
    })
  },
})