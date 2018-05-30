<template>
  <div class="DownLoad" id="DownLoad">
    <div class="img">
     <div class="img-text">
      <h2>- 公司资讯 -</h2>
      <p>Company information</p>
     </div>
    </div>
    
    <div class="contentB">
      <div class='product_tap'>
      <ul>
        <li @click="myFunction(1)" id="news" class="nav active" style="margin-right:40px;">新闻中心</li>
        <li @click="myFunction(2)" id="act" class="nav">活动中心</li>
      </ul>
    </div>
    <div class='min'>
        <ul id="newsUl">        
        <li>
        <router-link to="/Details?num=2&id=1">
        <img src="../assets/yxAir/one_small.png">
        <div class="textBox">
         <h2>包场预告</h2>
         <p>2018年5月3号</p>
         <hr/>
         <div class="text1">
          <p>小包厢装不下大抱负</p>
          <p>那就来个大玩法！</p>
          <p>赢享空间包场模式即将开启</p>
         </div>
        </div>
        </router-link>       
        </li>
         <li>
        <router-link to="/Details?num=2&id=2">
        <img src="../assets/yxAir/two_small.png">
        <div class="textBox">
         <h2>共享经济下半场怎么玩 加速变革呼声高</h2>
         <p>2018年5月3号</p>
         <hr/>
          <div class="text1">
          <p>随着滴滴和优步的合并，网约车行业发展进入缓行期；随着共享单车行业的两个龙头老大摩拜、ofo频频遭遇合并传言，中国的共享经济大潮进入下半场似乎已经确定无疑。然而在共享经济逐步向公共服务等诸多领域延伸的同时，也带来一些新问题、新矛盾。
共享经济下半场该怎么玩？这不仅仅是企业单方面要操心的，有关人士认为，相较共享经济蓬勃发展的势头，政府部门应更好适应新兴经济业态，加快管理变革。</p>
         </div>
        </div>
        </router-link>       
        </li>
         <li>
        <router-link to="/Details?num=2&id=3">
        <img src="../assets/yxAir/three_small.png">
        <div class="textBox">
         <h2>空间寻觅-miss咖啡</h2>
         <p>2018年5月3号</p>
         <hr/>
         <div class="text1">
          <p>我的梦里有一片海，</p>
          <p>白天 星星在这里沉睡，</p>
          <p>夜里 月光盛满了船帆。</p>
         </div>
        </div>
        </router-link>       
        </li>
         <li>
        <router-link to="/Details?num=2&id=4">
        <img src="../assets/yxAir/four_small.png">
        <div class="textBox">
         <h2>空间寻觅——比翼鸟花园主题餐厅</h2>
         <p>2018年5月3号</p>
         <hr/>
         <div class="text1">
          <p>空间坐标：杭州市西湖区青芝坞7号</p>
          <p>关键词：青春、人气</p>
          <p>“湛湛玉泉色，悠悠浮云身”，在风景独好的杭州青芝坞里有一座三层欧式小洋楼，小楼简约朴实，门前..</p>
         </div>
        </div>
        </router-link>       
        </li>
         <li>
        <router-link to="/Details?num=2&id=5">
        <img src="../assets/yxAir/five_small.png">
        <div class="textBox">
         <h2>空间寻觅-啡述咖啡</h2>
         <p>2018年5月3号</p>
         <hr/>
         <div class="text1">
          <p>关键词：宁静、美丽</p>
          <p>坐标：杭州市西湖区兰家湾8号</p>
          <p>我多么希望，有一个门口，早晨，阳光照在草上。我们站着，扶着自己的门窗，门很低，但是太阳是明亮..</p>
         </div>
        </div>
        </router-link>       
        </li>
        </ul>
        <ul id="actUl" style="display:none;">
         <li>
        <router-link to="/Details?num=2&id=6">
        <img src="../assets/yxAir/six_small.png">
        <div class="textBox">
         <h2>遗失在繁华都市的美好，在漫咖啡中悉数寻尽</h2>
         <p>2018年5月3号</p>
         <hr/>
         <div class="text1">
          <p>摘要：时间很快，需要慢慢品味。</p>
          <p>时间就像指尖的细沙，总是在不经意间悄然滑落。人们每天都在和时间赛跑，为生活和工作奔波劳碌，却忘了有时慢下来，生活的另一番风景就在转角之处。</p>
         </div>
        </div>
        </router-link>       
        </li>
        <li>
        <router-link to="/Details?num=2&id=7">
        <img src="../assets/yxAir/seven_small.png">
        <div class="textBox">
         <h2>赢享空间扫码领红包活动方案</h2>
         <p>2018年5月3号</p>
         <hr/>
         <div class="text1">
          <p>前期准备好赢享空间宣传易拉宝及抽奖箱，本司工作人员在现场引导路人扫码注册赢享空间并分享至朋友圈，工作人员确认后即可参与红包抽奖。抽奖箱里面放置总额2元-100元不等的现金红包，一个抽奖箱子总额预计1000元，共300个红包。</p>
         </div>
        </div>
        </router-link>       
        </li>
        <li>
        <router-link to="/Details?num=2&id=8">
        <img src="../assets/yxAir/eight_small.png">
        <div class="textBox">
         <h2>在婉约咖啡，尝到了家的味道</h2>
         <p>2018年5月3号</p>
         <hr/>
         <div class="text1">
          <p>摘要：陌生的城市，熟悉的感觉。</p>
          <p>家是每个人的避风港，它包容我们的缺点和失败，使我们可以完全卸下身上的铠甲，暴露自己最柔软的内心。</p>
         </div>
        </div>
        </router-link>       
        </li>
        </ul>
    </div>
    </div>
    
  </div>
</template>




<script>
export default {
  name: 'Together',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
      
      document.body.scrollTop = 0;
      document.documentElement.scrollTop=0;     
      
  },
   methods:{
  
    myFunction(data){
      if(data==1){
 document.getElementById("news").className="nav active";
 document.getElementById("act").className="nav";
 document.getElementById("newsUl").style.display="block";
 document.getElementById("actUl").style.display="none";
      }else if(data==2){
 document.getElementById("news").className="nav";
 document.getElementById("act").className="nav active";
 document.getElementById("newsUl").style.display="none";
 document.getElementById("actUl").style.display="block";
      }
    }

  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#DownLoad.DownLoad{
  margin-bottom: 135px;
 
  .img{
    width: 100%;
    height: 400px;
    color:#fff;
    background: url(../assets/yxAir/background_three.png)no-repeat center;
    position:relative;
    .img-text{
      width:100%;
    
  position: absolute;
        top: 45%;
    }
    h2{
      font-size:30px;
      font-weight: normal;
      margin-bottom:10px;
      }
    p{
      font-size:18px;
      opacity:0.5;
    }
  }
  ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
 .contentB{
   width:1100px;
  margin:0 auto;
   overflow: hidden;
 }
 .product_tap{
    overflow: hidden;
    margin:70px 0 20px 0;
   li{
     float:left;
     font-size:16px;
     cursor: pointer;
   }
   li.active{
     color:#2b84c6;
   }
   
 }
    
 .min{
   width:100%;
    overflow: hidden;
    li{
      width:100%;
      height:210px;
      margin:0 0 50px 0;
        cursor: pointer;
        a{
          display:inline-block;
          width:100%;
      height:210px;
        }
      img{
        height:210px;
        width:360px;
        margin-right:38px;
        float:left;
      }
      .textBox{
         width:660px;
        // height:210px;
        float:left;
         padding:17px 40px 17px 0;
         text-align: left;
         .text1{
            width: 100%;  
           display: -webkit-box;  
           display: -moz-box;  
             overflow: hidden;  
      text-overflow: ellipsis;  
      word-break: break-all;  
      -webkit-box-orient: vertical;  
      -webkit-line-clamp:3;  
      color:#808080;
           font-size:14px;
         }
         h2{
           font-size:20px;
           color:#1a1a1a;
           margin-bottom:12px;
         }
         p{
           color:#808080;
           font-size:14px;
         }
         hr{
           width:20px;
           border:1px solid #1a1a1a;
           margin:30px 0;
         }
      }
    }
    li:hover{
      background-color:#f0f0f0;
    }
 }
  
  
}

</style>
