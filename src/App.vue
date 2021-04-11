<!--
 * @Author: your name
 * @Date: 2021-04-07 09:49:05
 * @LastEditTime: 2021-04-09 21:00:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jingdong03\src\App.vue
-->
<template>
  <div>
    <div class="wapper">
      <div class="navigationBar">
        <div class="location">&#xe607;</div>
        <div class="txt">北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层北京理工大学国防科技园2号楼10层</div>
        <div class="message">&#xe622;</div>
      </div>
      <div class="search">
        <div class="icon">&#xe612;</div>
        <div class="txt">请输入查找内容</div>
      </div>
      <div class="bar"><img src="./assets/img/bar11.jpg"></div>
    </div>
    <div class="docker">
      <div class="box box--active">
        <div class="icon">&#xe617;</div>
        <div class="txt text2">首页</div>
      </div>
      <div class="box">
        <div class="icon2">&#xe63f;</div>
        <div class="txt">购物车</div>
      </div>
      <div class="box">
        <div class="icon2">&#xe629;</div>
        <div class="txt">订单</div>
      </div>
      <div class="box">
        <div class="icon">&#xe602;</div>
        <div class="txt text2">我的</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixins.scss';
.wapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: .49rem;
  padding: 0 .18rem;
  color: $contene-fontcolor;
  .navigationBar {
    padding: .16rem 0;
    display: flex;
    justify-content: space-between;
    text-align: center;
    .location {
      font-family:"iconfont" !important;
      font-size: .25rem;
    }
    .txt {
      width: 80%;
      text-align: left;
      height: .22rem;
      line-height: .22rem;
      font-size: .16rem;
      padding-top: .01rem;
      padding-left: .1rem;
      padding-right: .1rem;
      @include ellipsis;
      // border: .01rem #f1f1f1 solid;
      // border-radius: .5rem;
      //超出内容滚动显示
      // white-space: nowrap;
      // overflow:auto;
    }
    //隐藏滚动条
    // .txt::-webkit-scrollbar {
    //   display: none;
    // }
    .message {
      font-family:"iconfont" !important;
      font-size: .23rem;
      padding-top: .015rem;
    }
  }
  .search {
    line-height: .22rem;
    background: #F5F5F5;
    display: flex;
    border-radius: .16rem;
    color: #B7B7B7;
    .icon {
      font-family:"iconfont" !important;
      font-size: .2rem;
      padding:.03rem .08rem 0;
    }
    .txt {
      height: 0.25rem;
      line-height: 0.25rem;
      text-align: center;
    }

  }
  .bar {
    padding-top: .16rem;
    height: 0;
    overflow: hidden;
    padding-bottom: 31.5%;
    img {
      width: 100%;
    }
  }
  
}
//
.docker {
  color: $contene-fontcolor;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  position: absolute;
  padding:0 .18rem;
  left: 0;
  bottom:0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #f1f1f1;
  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    padding: .04rem;
    .icon {
      font-family:"iconfont" !important;
      font-size: 0.2rem;
      padding-top: .03rem;
    }
    .icon2 {
      font-family:"iconfont" !important;
      font-size: 0.25rem;
    }
    .txt {
      line-height: .24rem; 
      font-size: .2rem;
      transform: scale(.5,.5);
      transform-origin: center top;
    }
    .text2 {
      margin-top: .018rem;
    }
  }
  .box--active {
    color: rgb(53, 160, 248);
  }
}
</style>
