<template>
  <div class="home">
    <!-- 头部开始 -->
    <div>
      <mt-header>
        <!-- 信息开始 -->
        <mt-button id="info-button" slot="left" icon='back' @click="info">
          <img src="../assets/info.svg" id="infosvg" slot="icon" alt="信息">
        </mt-button>
        <!-- 信息结束 -->
        <!-- 搜索和高级模式开始 -->
        <div slot="right">
          <input id="search" type="text" placeholder="搜索：目的地·酒店·景点">
          <mt-button id="heightSearch" ><img src="../assets/change.svg" id="changeimg" alt="交换"> 高级模式</mt-button>
        </div>
        <!-- 搜索和高级模式结束 -->
      </mt-header>
    </div>
    <!-- 头部结束 -->
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="train"><img src="../assets/train1.png" v-show="selected=='train'" slot="icon" ><img src="../assets/train.png" v-show="selected!='train'" slot="icon" >火车票</mt-tab-item>
      <mt-tab-item id="airplane"><img src="../assets/airplane1.png" v-show="selected=='airplane'" slot="icon" ><img src="../assets/airplane.png" v-show="selected!='airplane'" slot="icon" >机票</mt-tab-item>
      <mt-tab-item id="car"><img src="../assets/car1.png" v-show="selected=='car'" slot="icon" ><img src="../assets/car.png" v-show="selected!='car'" slot="icon" >汽车·船票</mt-tab-item>
      <mt-tab-item id="pub"><img src="../assets/pub1.png" v-show="selected=='pub'" slot="icon" ><img src="../assets/pub.png" v-show="selected!='pub'" slot="icon" >酒店</mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板开始 -->
    <div>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="train" >
          <!-- 顶部选择栏开始 -->
          <div id="topCh">
            <!-- 起点终点选择开始 -->
            <div>
              <div class="line-1"><input type="text" class="line-fir"></div>
              <div class="line-2"><button><img src="../assets/转换.png" slot='icon' alt=""></button></div>
              <div class="line-1"><input type="text" class="line-fir"></div>
            </div>
            <!-- 起点终点选择结束 -->
            <!-- 日期选择开始 -->
            <div></div>
            <!-- 日期选择结束 -->
            <!-- 查询即特殊选项开始 -->
            <div></div>
            <!-- 查询即特殊选项结束-->
          </div>
          <!-- 顶部选择栏结束 -->
        </mt-tab-container-item>
        <mt-tab-container-item id="airplane">二</mt-tab-container-item>
        <mt-tab-container-item id="car">三</mt-tab-container-item>
        <mt-tab-container-item id="pub">四</mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 面板结束 -->
    <!-- 底部导航栏开始 -->
    <mt-tabbar v-model="bottom" fixed>
      <mt-tab-item id="index"><img src="../assets/index.png" slot="icon" v-show="bottom!='index'"><img src="../assets/index1.png" slot="icon" v-show="bottom=='index'">首页</mt-tab-item>
      <mt-tab-item id="goFast"><img src="../assets/heart.png" slot="icon" v-show="bottom!='goFast'"><img src="../assets/heart1.png" slot="icon" v-show="bottom=='goFast'">抢票</mt-tab-item>
      <mt-tab-item id="order"><img src="../assets/order.png" slot="icon" v-show="bottom!='order'"><img src="../assets/order1.png" slot="icon" v-show="bottom=='order'">订单</mt-tab-item>
      <mt-tab-item id="my"><img src="../assets/my.png" slot="icon" v-show="bottom!='my'"><img src="../assets/my1.png" slot="icon" v-show="bottom=='my'">个人中心</mt-tab-item>
    </mt-tabbar>
    <!-- 底部导航栏结束 -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      selected: 'train',
      bottom: 'index'
    }
  },
  methods: {
    info () {
      this.$router.push('/information')
    }
  }
}
</script>
<style scoped>
.line-fir{
  outline: none;
  width: 100%;
  margin: 0;
  border: 0;
  padding: 0;
  height: 100%;
  font-size: 40px;
}
/* 变为行内块 */
.line-2{
  display: inline-block;
  width: 20%;
  text-align: center;
  border: 0;
  border-radius: 0%;
  padding: 0;
  line-height: 60px;
}
.line-2>button{
  border: 0;
  border-radius: 50%;
}
.line-2>button>img{
  width: 100%;
  border: 0;
  border-radius: 50%;
}
.line-1{
  display: inline-block;
  width: 40%;
  /* margin: 0; */
  /* border: 0; */
  /* border: 1xp solid #000; */
  padding: 0;
  border-bottom: 1px solid rgba(54, 53, 53, 0.1);
  height: 60px;
  line-height: 60px;
}
/* 火车面板样式 */
#topCh{
  width: 90%;
  margin: auto;
  margin-top: 5px;
  border-radius: 5px;
}
#topCh>div:first-child{
  display: flex;
}
#heightSearch{
  margin-left: 25px;
}
#changeimg{
  width: 20px;
  line-height: 30px;
  text-align: center;
  margin-right: -5px;
}
#info-button{
  width: 20px;
}

#infosvg{
  width: 100%;
}
#search{
  display: inline-block;
  border-radius: 30px;
  outline: none;
  border: none;
  background-color:rgba(0, 0, 0, .1) ;
  color: #fff;
  width: 200px;
}
</style>>
