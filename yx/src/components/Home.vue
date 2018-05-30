<template>
  <div class="hello">
    <div class="img"></div>
    <div class="mainContent">
        <div class="aboutCompany Tcell" id="CompanyProfile">
          <h3><b></b>公司简介<b></b></h3>
          <h5>Company profile</h5>
          <p>赢享空间隶属于杭州赢莱控股集团旗下，秉承垫付传统会客模式，打造新型办公方式理念，致力于用户在全城定制上百个精品专业移动会客厅。杭州赢莱控股集团有限公司是一家科技互联+金融的知名企业，企业秉承“一切以用户价值为根本”的经营理念，现阶段处于稳定的高速的发展状态。</p>
          <p>现赢享空间在杭州凭借高水准的空间总体设计布局、设备齐全的软硬件设备、顶尖的线下私密体验服务，吸引了来自各行业的精英人士到此办公、会客、交友。</p>
          <img src="../assets/yxAir/tu_one.png" alt="">       
        </div>
        <div class="yxService Tcell" id="yxService">
          <h3><b></b>赢享服务<b></b></h3>
          <h5>Yingxiang service</h5>
          <div class="yxService_content">
            <el-row>
              <el-col :span="6"><div class="grid-content bg-purple">
                <b></b>
                <h2><b>方便快捷</b></h2>
                <span></span>
                <h5>一键预定，遍布杭城</h5>
                </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple-light">
                 <b></b>
                <h2><b>专业私密</b></h2>
                <span></span>
                <h5>设备完善，保护隐私</h5>
                </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple">
                 <b></b>
                <h2><b>即时即用</b></h2>
                <span></span>
                <h5>即定即用，按时计费</h5>
                </div></el-col>
              <el-col :span="6"><div class="grid-content bg-purple-light">
                 <b></b>
                <h2><b>极致体验</b></h2>
                <span></span>
                <h5>匠心设计，功能多样</h5>
                </div></el-col>
            </el-row>
          </div>
        </div>
        <div class="TheServices">
          <div class="cell">
            <div class="left">
              <img src="../assets/yxAir/tu_three.png" alt="">
            </div>
            <div class="right TheText">
                <h2><span>方便快捷</span></h2>
                <h5>精准定位，快速筛选，一键预定，遍布杭城</h5>
            </div>
          </div>
           <div class="cell">
            <div class="left TheText">
               <h2><span>专业私密</span></h2>
                <h5>智能密码门锁全程保护隐私安全，用户从预定到退房，全程自动化操作，打破传统办公模式，为你在整个城市定制上百个专属私密空间。</h5>
            </div>
            <div class="right ">
               <img src="../assets/yxAir/tu_four.png" alt="">
              
            </div>
          </div>
           <div class="cell">
            <div class="left">
              <img src="../assets/yxAir/tu_five.png" alt="">
            </div>
            <div class="right TheText">
                <h2><span>即时即用</span></h2>
                <h5>「即时即用」的创新租赁模式，让你在喜欢的空间里多停留一刻，也让自由生活充满更多可能。</h5>
            </div>
          </div>
           <div class="cell">
            <div class="left TheText">
               <h2><span>极致体验</span></h2>
                <h5>赢享所有空间均由顶尖设计师精心设计，打造私密的个性化空间，让每一次享用都是极致的体验。</h5>
            </div>
            <div class="right ">
               <img src="../assets/yxAir/tu_six.png" alt="">
              
            </div>
          </div>

           <div class="cell lastCell">
            <div class="left">
               <el-carousel height="417px">
                  <el-carousel-item v-for="item in msg" :key="item">
                    <img :src="item" alt="">
                  </el-carousel-item>
                </el-carousel>
            </div>
            <div class="right TheText">
                <h2><span>便捷流程</span></h2>
                <h5>打破传统办公模式，为你在整个城市定制上百个专属私密空间。拥有上百个智能化专属间，遍布各个地段，面向拥有空间需求的客户，无论是朋友聚会、部门团建，还是面试培训、商务会谈等，一键预定，移动会客，触手可达。</h5>
                <img src="@/assets/yxAir/tu_seven.png" alt="">
            </div>
          </div>
        </div>
        <div class="spareDisplay Tcell">
          <h3><b></b>空间展示<b></b></h3>
          <h5>Space display</h5>
          <!-- <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel> -->
          <div style="height:358px;overflow: hidden;width:100%"><HomeCard style="height:358px;overflow: hidden;width:100%"></HomeCard></div>
          
        </div>

        <div class="companyInfomation Tcell">
          <h3><b></b>公司资讯<b></b></h3>
          <h5>Company information</h5>
          <router-link to="/News?num=2" class="moreInfo">更多资讯>></router-link>
          <template>
            <el-tabs v-model="activeName" @tab-click="handleClick" >
              <el-tab-pane label="新闻中心" name="first">
                 <div class="ActivityCenter">
                  <div class="cell" v-for="(k,v) in news" :key="v" @click="toContent(1,v+1)">
                    
                      <div class="left" :style="{background:'url('+k.url+')center no-repeat'}"></div>
                      <div class="right">
                        <h2>{{k.title}}</h2>
                        <span class="time">{{k.time}}</span>
                        <i></i>
                        <p>{{k.content}}</p>
                      </div>
                    
                  </div>
                 
                </div>
              </el-tab-pane>
              <el-tab-pane label="活动中心" name="second">
                <div class="ActivityCenter">
                  <div class="cell" v-for="(k,v) in actInfo" :key="v"  @click="toContent(2,v+6)">
                    <div class="left" :style="{background:'url('+k.url+')center no-repeat'}"></div>
                    <div class="right">
                      <h2>{{k.title}}</h2>
                      <span class="time">{{k.time}}</span>
                      <i></i>
                      <p>{{k.content}}</p>
                    </div>
                  </div>
                 
                </div>
                </el-tab-pane>             
            </el-tabs>
          </template>
          
        </div>

        <div class="Cooperative Tcell">
              <h3><b></b>合作伙伴<b></b></h3>
              <h5>Cooperative partner</h5>
              <div>
               <el-row>
              <el-col :span="5"><div class="grid-content bg-purple">
                <img src="../assets/yxAir/logo_one.png" alt="">
                </div></el-col>
              <el-col :span="5"><div class="grid-content bg-purple-light">
                <img src="../assets/yxAir/logo_two.png" alt="">
                 
                </div></el-col>
              <el-col :span="5"><div class="grid-content bg-purple">
                <img src="../assets/yxAir/logo_three.png" alt="">
                
                </div></el-col>
              <el-col :span="5"><div class="grid-content bg-purple-light">
                <img src="../assets/yxAir/logo_four.png" alt="">
               
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-light">
                <img src="../assets/yxAir/logo_five.png" alt="">
               
                </div></el-col>
               
                
               
            </el-row>
             </div>
              <p> <router-link to="/Together?num=2"><el-button>加入合作</el-button></router-link> </p>
            </div>
    
        
    </div>
   <a class='toServer el-icon-arrow-down' @click="CompanyProfile"></a>
    
  </div>
</template>

<script>

import HomeCard from '@/components/HomeCard';

import url1 from "@/assets/yxAir/iPhone_one.png";
import url2 from "@/assets/yxAir/iPhone_two.png";
import url3 from "@/assets/yxAir/iPhone_three.png";
import url4 from "@/assets/yxAir/iPhone_four.png";
import url5 from "@/assets/yxAir/iPhone_five.png";
import url6 from "@/assets/yxAir/iPhone_six.png";
import url7 from "@/assets/yxAir/iPhone_seven.png";
import url8 from "@/assets/yxAir/iPhone_eight.png";
import url9 from "@/assets/yxAir/iPhone_nine.png";

import new1 from "@/assets/yxAir/one_small.png";
import new2 from "@/assets/yxAir/two_small.png";
import new3 from "@/assets/yxAir/three_small.png";

//six_small
import actimg1 from "@/assets/yxAir/six_small.png";
import actimg2 from "@/assets/yxAir/seven_small.png";
import actimg3 from "@/assets/yxAir/eight_small.png";
 
export default {
  name: 'Home',
  mounted(){
      if(this.$route.name==='Home'){
        this.isHome=false;
         
      }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop=0;     
      
  },
  components:{ HomeCard},
  data () {
    return {
      msg: [url1,url2,url3,url4,url5,url6,url7,url8,url9],
      activeName:'first',
      news:[
        {title:'包场预告',
        url:new1,
        time:'2018-10-12',
        content:'小包厢装不下大抱负,那就来个大玩法！赢享空间包场模式即将开启'
        },
        {title:'共享经济下半场怎么玩 加速变革呼声高',
        url:new2,        
        time:'2018-10-12',
        content:'随着滴滴和优步的合并，网约车行业发展进入缓行期；随着共享单车行业的两个龙头老大摩拜、ofo频频遭遇合并传言，中国的共享经济大潮进入下半场似乎已经确定无疑。然而在共享经济逐步向公共服务等诸多领域延伸的同时，也带来一些新问题、新矛盾。'
        },
        {title:'空间寻觅-miss咖啡',
        url:new3,        
        time:'2018-10-12',
        content:'我的梦里有一片海，白天 星星在这里沉睡，夜里 月光盛满了船帆。'
        }
      ],
      actInfo:[
        {title:'遗失在繁华都市的美好，在漫咖啡中悉数寻尽',
        url:actimg1,
        time:'2018-10-12',
        content:'时间就像指尖的细沙，总是在不经意间悄然滑落。人们每天都在和时间赛跑，为生活和工作奔波劳碌，却忘了有时慢下来，生活的另一番风景就在转角之处。'
        },
        {title:'赢享空间扫码领红包活动方案',
        url:actimg2,        
        time:'2018.3.21-3.25',
        content:'提高注册用户量，推广赢享空间开会场地概念'
        },
        {title:'在婉约咖啡，尝到了家的味道',
        url:actimg3,        
        time:'2018-10-12',
        content:'陌生的城市，熟悉的感觉。'
        }

      ]
    }
  },
  methods:{
    toUrl:function(){
      window.open('www.work-oa.com',"_blank");
    },
    toContent(k,v){
      
      // console.log(k,v)
     this.$router.push("/Details?num=2&id="+v)
        
    },
     CompanyProfile(){
      
        document.body.scrollTop = 918-80;
        document.documentElement.scrollTop=918-80;     
               
    },
    handleClick(tab, event) {
        // console.log(tab, event);
    },
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
*{
  font-family: '晴圆'
}
.hello{
  min-height: 918px;
  overflow: hidden;
}
h1, h2 ,h3,h4,h5{
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello .img{
  width: 100%;
  height:918px;
  background: url(../assets/yxAir/background.png)center;
  
  position: absolute;
  top:0;
  z-index: -99; 
}
.hello .mainContent{
  margin: 918px auto 0;
  opacity: 1;
  overflow: hidden;
  .Tcell{
     h3{
      font-size: 30px;
      // color: #1a1a1a;
      font-weight: bold;
      b{
        width: 14px;
        height: 2px;
        // background: #1a1a1a;
        display: inline-block;
        margin: 10px;
      }
    }
    h5{
      font-size: 18px;
      // color: #ccc;
      margin-bottom: 50px;
    }
  }
  .aboutCompany{
    width: 1110px;
    margin: 0 auto;
    padding: 70px 0 0;
    h3{     
      color: #1a1a1a;
       b{      
        background: #1a1a1a;
      }         
    }
    h5{
     
      color: #ccc;
    }
    p{
      text-align: left;
      font-size: 18px;
      color: #808080;
      line-height: 30px;
      margin-bottom: 10px;
      text-indent: 2em;
    }
    img{
      margin-top: 40px;
    }
  }
  .yxService{
   height: 372px;
   width: 100%;
   background: url(../assets/yxAir/tu_two.png)center;
    margin-top: 70px;
    color: #fff;
     padding: 70px 0 0;
    h3{     
      color: #fff;
       b{      
        background: #fff;
      }         
    }
    h5{    
      color: #fff;
    }
    .yxService_content{
      width: 1110px;
      margin: 0 auto;
      .grid-content{
        text-align: center;
        >b{
          width: 50px;
          height: 36px;
          margin-bottom: 24px;
          display: inline-block;
          // background: url(../assets/yxAir/bianjie.png)no-repeat center;
        }
        >span{
          width: 64px;
          height: 2px;
          display: inline-block;
          background: #fff;
          opacity: 0.26;
             margin: 20px 0;
        }
        h2{
          font-size: 24px;
        }
        h5{
          font-size: 18px;
          
        }
      }
     .el-col:nth-child(1) .grid-content >b{
        background: url(../assets/yxAir/bianjie.png)no-repeat center;
      }
      .el-col:nth-child(2) .grid-content >b{
        background: url(../assets/yxAir/zhuanye.png)no-repeat center;
      }
      .el-col:nth-child(3) .grid-content >b{
        background: url(../assets/yxAir/jishi.png)no-repeat center;
      }
      .el-col:nth-child(4) .grid-content >b{
        background: url(../assets/yxAir/jizhi.png)no-repeat center;
      }
    }
  }
  .TheServices{
    width: 1110px;
    margin: 0 auto;
    overflow: hidden;
    .cell{
      height: 380px;
      width: 100%;
      margin-top: 100px;
      overflow: hidden;
      .left{
        width:530px;
        height: 380px;
        float: left;
      }
      .right{
        width:530px;
        height: 380px;        
        float: right;
      }
      .TheText{
        text-align: left;
        h2{
          margin-top: 70px;
          font-size: 30px;
          color: #2B84C6;
          >span{
            border-bottom: 2px solid  #2B84C6;
            padding-bottom: 10px;
          }
        }
        h5{
            font-size: 20px;
          color: #1a1a1a;
          margin: 30px 0 0;
        }
      }
    }
    .lastCell{
      height: 550px;
      margin-bottom: 70px;
      .left{
        width: 265px;
        height: 550px;
        position: relative;
        background: url(../assets/yxAir/iPhone.png)center no-repeat;
        li{
          margin: 0 2px;
        }
        .el-carousel__indicator button{
          background: #ccc;
          
        }
        .is-active button{
          background: #42b983;
        }
        .el-carousel {
            overflow-x: hidden;
            position: relative;
            background: #ccc;
            width: 236px;
            position: absolute;
            top: 67px;
            left: 15px;
            .el-carousel__button {             
              width: 4px;
              height: 4px;
            
          }
        }
        .el-carousel__indicator {
            display: inline-block;
            background-color: transparent;
            padding: 12px 0px;
            cursor: pointer;
        }
      }
      .right{
        width: 795px;
        height: 550px;
        img{
          margin: 40px 50px;
        }
        }
    }
  }
  .spareDisplay{
    background: #f0f0f0;
    padding-top: 70px;
    >h3{     
      color: #1a1a1a;
      // margin-top: 70px;
       b{      
        background: #1a1a1a;
      }         
    }
    >h5{
     
      color: #ccc;
    }
  }
  .companyInfomation{
    width: 1110px;
    margin: 0 auto;
    padding-top: 70px;
    position: relative;
    .el-tabs__nav-wrap::after{
      background-color: #fff;
    }
    .el-tabs__active-bar{
      background-color: #fff;      
    }
    .el-tabs__item{
      font-size: 16px;
    }
    .moreInfo{
      text-decoration: none;
      position: absolute;
      top:185px;
      right: 20px;
      color: #1a1a1a;
      cursor: pointer;
      z-index: 9999;
    }
    >h3{     
      color: #1a1a1a;
      // margin-top: 70px;
       b{      
        background: #1a1a1a;
      }         
    }
    >h5{
     
      color: #ccc;
    }
    .ActivityCenter{
      .cell{
        height: 210px;
        margin-bottom: 50px;
        cursor: pointer;
        .left{
          width: 360px;
          height: 100%;
          float: left;
        }
        .right{
          width: 710px;
          height: 100%;          
          float: right;
          text-align: left;
          font-size: 14px;          
          color: #808080;        
          h2{
            font-size: 20px;
            color: #1a1a1a;
            margin: 20px 0 10px;
          }
          i{
            height: 2px;
            width: 20px;
            background: #1a1a1a;
            display: block;
            margin: 30px 0;
          }

        }
      }
    }
  }
  .Cooperative  {
    padding-top: 70px;
     width: 1110px;
    margin: 0 auto;
    >h3{     
      color: #1a1a1a;
      // margin-top: 70px;
       b{      
        background: #1a1a1a;
      }         
    }
    >h5{
     
      color: #ccc;
    }
    .grid-content{
      height: 140px;
      position: relative;
      img{
        display: block;
        position: absolute;
        top: 0;bottom: 0;left: 0;right: 0;
        margin: auto;
      }
    }
    button{
      margin: 30px 0 120px;
    }
  }

}


.hello .toServer{
      display: block;
    height: 20px;
    width: 20px;
    line-height: 20px;
    color: #fff;
    font-size: 16px;
    /* text-decoration: none; */
    /* letter-spacing: 2px; */
    border-radius: 50%;
    border: 2px solid #ccc;
    position: absolute;
    top: 700px;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    z-index: 999999;
    cursor: pointer;
    }

</style>
