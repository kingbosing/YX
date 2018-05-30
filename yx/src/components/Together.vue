<template>
  <div class="Together">
    <div class="img"></div>
    <div class="mainContent">
        <div class="aboutCompany Tcell" id="CompanyProfile" style="overflow: hidden;">
          <h3><b></b>赢享优势<b></b></h3>
          <h5>Yingxiang advantage</h5>
          <div style="width:245px;height:200px;overflow: hidden;;float:left;margin:16px;" v-for="k in advantageList" :key="k.title">
             <TogetherCard :childMsg="k"></TogetherCard>
          </div>
         
        </div>
        <div class="yxService Tcell" id="yxService">
          <h3><b></b>合作方案<b></b></h3>
          <h5>Cooperative programme</h5>
          <h4>合作场地</h4>
          <div class="CooperativePlace">         
            <template>
              <el-tabs v-model="activeName" @tab-click="handleClick" >
                <el-tab-pane :label="k.title" :name="k.title" v-for="k in CooperativePlace" :key="k.title">
                  <div class="ActivityCenter">
                    <div> <p v-html='k.content'></p></div>                                 
                  </div>
                </el-tab-pane>
              </el-tabs>
            </template>
            <h4 style=" text-align: left;font-size: 16px;margin:30px 0 20px;">合作流程</h4>
            <img src="../assets/yxAir/tu_sixteen.png" alt=""  style=" margin:0 0 50px;">
          </div>
          <div class="cityVgency">
            <div>
              <h4>城市代理</h4>
              <p>目前，赢享空间在杭州地区已实现稳步发展，形成了成熟的运营体。现因发展需要，诚招外阜区域代理合作伙伴，由赢享空间团队负责项目线上运营与推广，区域代理负责线下市场开拓与维护。</p>
              <p class="title">代理商资质：</p>
              <p>1.年满18周岁具备独立法人资格，热爱互联网行业，有一定独立经济基础，独立承担市场风险；</p>
              <p>2.有互联网或同类行业市场拓展开发经验，能够完成总公司各考核期考核指标；</p>
              <p>3、公司或团队有一定的市场开发、运营人员；</p>
              <p>4、公司或团队市场反应迅速，业务开展及时；</p>
              <p>5、在代理城市有一定客户资源（咖啡馆、产业园、物业、茶吧、餐饮协会、社群运营组织、等资源）优先代理。</p>
              <p class="title">合作流程:</p>
              <img src="../assets/yxAir/tu_eighteen.png" alt="">

            </div>
            
          </div>
          <div class="businessCooperation">
            <div>
              <h4>商务合作</h4>
              <p>赢享空间期待与杭州区域培训机构、校园社团、社区社群运营方、主题游戏的组织者、具备整合第三方资源的机构或个人建立长期的商务合作关系，协同发展、共创未来。</p>
              <img src="../assets/yxAir/tu_nineteen.png" alt="">
            </div>
          </div>
        </div>
       

        
        <div class="Cooperative Tcell">
              <h3><b></b>合作伙伴<b></b></h3>
              <h5>Cooperative partner</h5>
              <div>
              <el-row>
                <el-col :span="5"><div class="grid-content bg-purple grid-content1"><img src="../assets/yxAir/logo_one.png" alt=""></div></el-col>                                        
                <el-col :span="5"><div class="grid-content bg-purple-light grid-content1"> <img src="../assets/yxAir/logo_two.png" alt=""></div></el-col>                                                       
                <el-col :span="5"><div class="grid-content bg-purple grid-content1"><img src="../assets/yxAir/logo_three.png" alt=""> </div></el-col>                                                     
                <el-col :span="5"><div class="grid-content bg-purple-light grid-content1"><img src="../assets/yxAir/logo_four.png" alt=""></div></el-col>                                                      
                <el-col :span="4"><div class="grid-content bg-purple-light grid-content1"><img src="../assets/yxAir/logo_five.png" alt=""></div></el-col>           
              </el-row>
              <el-row>
                <el-col :span="5"><div class="grid-content bg-purple"><img src="../assets/yxAir/jin.png" alt=""></div></el-col>                                        
                <el-col :span="5"><div class="grid-content bg-purple-light"> <img src="../assets/yxAir/shu.png" alt=""></div></el-col>                                                       
                <el-col :span="5"><div class="grid-content bg-purple"><img src="../assets/yxAir/chao.png" alt=""> </div></el-col>                                                     
                <el-col :span="5"><div class="grid-content bg-purple-light"><img src="../assets/yxAir/yu.png" alt=""></div></el-col>                                                      
                <el-col :span="4"><div class="grid-content bg-purple-light"><img src="../assets/yxAir/we.png" alt=""></div></el-col>           
              </el-row>
              <el-row>
                <el-col :span="5"><div class="grid-content bg-purple"><img src="../assets/yxAir/qi.png" alt=""></div></el-col>                                        
                <el-col :span="5"><div class="grid-content bg-purple-light"> <img src="../assets/yxAir/wan.png" alt=""></div></el-col>                                                       
                <el-col :span="5"><div class="grid-content bg-purple"><img src="../assets/yxAir/yuan.png" alt=""> </div></el-col>                                                     
                <el-col :span="5"><div class="grid-content bg-purple-light"><img src="../assets/yxAir/cc.png" alt=""></div></el-col>                                                      
                <el-col :span="4"><div class="grid-content bg-purple-light"><img src="../assets/yxAir/pl.png" alt=""></div></el-col>           
              </el-row>
              <el-row>
                <el-col :span="5"><div class="grid-content bg-purple"><img src="../assets/yxAir/miss.png" alt=""></div></el-col>                                        
                <el-col :span="5"><div class="grid-content bg-purple-light"> <img src="../assets/yxAir/mai.png" alt=""></div></el-col>                                                       
                <el-col :span="5"><div class="grid-content bg-purple"><img src="../assets/yxAir/3fbox.png" alt=""> </div></el-col>                                                     
                <el-col :span="5"><div class="grid-content bg-purple-light"><img src="../assets/yxAir/nuan.png" alt=""></div></el-col>                                                      
                <el-col :span="4"><div class="grid-content bg-purple-light"><img src="../assets/yxAir/yin.png" alt=""></div></el-col>           
              </el-row>
              <el-row>
                <el-col :span="5"><div class="grid-content bg-purple"><img src="../assets/yxAir/qi.png" alt=""></div></el-col>                                        
                <el-col :span="5"><div class="grid-content bg-purple-light"> <img src="../assets/yxAir/ka.png" alt=""></div></el-col>                                                       
                <el-col :span="5"><div class="grid-content bg-purple"><img src="../assets/yxAir/kafei.png" alt=""> </div></el-col>                                                     
                <el-col :span="5"><div class="grid-content bg-purple-light"><img src="../assets/yxAir/j.png" alt=""></div></el-col>                                                      
                <el-col :span="4"><div class="grid-content bg-purple-light"><img src="../assets/yxAir/yi.png" alt=""></div></el-col>           
              </el-row>
              <el-row>
                <el-col :span="5"><div class="grid-content bg-purple"><img src="../assets/yxAir/hao.png" alt=""></div></el-col>                                        
                <el-col :span="5"><div class="grid-content bg-purple-light"> <img src="../assets/yxAir/wunan.png" alt=""></div></el-col>                                                       
                <el-col :span="5"><div class="grid-content bg-purple"><img src="../assets/yxAir/bi.png" alt=""> </div></el-col>                                                     
                <el-col :span="5"><div class="grid-content bg-purple-light"><img src="../assets/yxAir/yuan.png" alt=""></div></el-col>                                                      
                <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>           
              </el-row>
             </div>
              <!-- <p> <router-link to="/Together?num=2"><el-button>加入合作</el-button></router-link> </p> -->
            </div>
    
        
    </div>
   <a class='toServer el-icon-arrow-down' @click="CompanyProfile"></a>
    
  </div>
</template>

<script>

import TogetherCard from '@/components/together_card';
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
 

import advantage1 from "@/assets/yxAir/tu_eight.png";
import advantage2 from "@/assets/yxAir/tu_nine.png";
import advantage3 from "@/assets/yxAir/tu_ten.png";
import advantage4 from "@/assets/yxAir/tu_eleven.png";

export default {
  name: 'Home',
  mounted(){
      if(this.$route.name==='Home'){
        this.isHome=false;
         
      }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop=0;     
      
  },
  components:{ TogetherCard,HomeCard},
  data () {
    return {
      msg: [url1,url2,url3,url4,url5,url6,url7,url8,url9],
      activeName:'合作对象',
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

      ],
      advantageList:[
        {
          url:advantage1,
          title:'线上导流',
          content:'<p>突破地域限制</p><p>品牌在线推广</p>'
        },
        {
          url:advantage2,
          title:'科学管理',
          content:'<p>场地预定情况实时更新</p><p>提前预约</p><p>避免场地突然占用</p>'
        },
        {
          url:advantage3,
          title:'高效利用',
          content:'<p>提高场地使用频次</p><p>空闲时间订单不断</p>'
        },
        {
          url:advantage4,
          title:'活动发布',
          content:'<p>在线发布活动</p><p>报名情况尽在掌握</p>'
        },
      ],
      CooperativePlace:[
        {title:'合作对象',content:'咖啡馆、茶舍、写字楼物业、产业园园区等有空闲场地的伙伴'},
        {title:'场地条件',content:'1.有独立会议室、包厢或是具备隔出独立空间条件的场地；2.临近核心商圈、高端住宅区，或是交通便利的城市交通线沿线；<br/>3.房屋结构、层高、展示面、能见度、通透性均符合要求；4.免费提供空间内的供水、供电、冷暖空调以及无线网络。'},
        {title:'合作方式',content:'对于合作方提供的空间，赢享空间将提供专业的装修方案和完善的办公设备，负责线上推广运营。合作伙伴负责线下监管、保管场地设备以及场地清理。'},
        {title:'权责分成',content:'线上收益按照固定比例由赢享空间和提供场地的合作伙伴进行分成，除却场地使用费外，赢享空间不参与其他任何基于场地内发生的收益分成。场地内设备损坏由赢享空间和场地提供方按照收益分成共同担责。'},
        
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
.Together{
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
.Together .img{
  width: 100%;
  height:918px;
  background: url(../assets/yxAir/background_two.png)center;
  
  position: absolute;
  top:0;
  z-index: -99; 
}
.Together .mainContent{
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
      // text-indent: 2em;
    }
    img{
      margin-top: 40px;
    }
  }
  .yxService{
  //  height: 372px;
   width: 100%;
   background: #f0f0f0;
    margin-top: 70px;
    color: #fff;
     padding: 70px 0 0;
    h3{     
      color: #1a1a1a;
       b{      
        background: #1a1a1a;
      }         
    }
    h5{    
      color: #ccc;
      margin-bottom: 20px;
    }
    h4{
        font-size: 20px;
        color: #1a1a1a;
        
    }
    .CooperativePlace{
      width: 1100px;
      margin: 0 auto;
      .ActivityCenter{
        height: 240px;
        width: 1100px;
        background: url(../assets/yxAir/tu_twelve.png)center no-repeat;
        >div{
           height: 240px;
          width: 100%;
          background: #2B84C6;
          opacity: 0.8;
          position: absolute;
          z-index: 1;
          color: #fff;
          font-size: 18px;
          text-align: left;
          p{
            padding: 0 40px;
            line-height: 50px;
            margin-top: 65px;
          }
          
        }
      }
      .el-tabs__nav-wrap::after,.el-tabs__active-bar {  
        background-color: #f0f0f0;     
      }
    }
    .cityVgency{
      height: 748px;
      width: 100%;
      color: #fff;
      overflow: hidden;
      background: url(../assets/yxAir/tu_seventeen.png)center;
      h4{
        color: #fff;
        margin: 50px 0 40px;
        
      }
      >div{
        width: 1100px;
        margin: 0 auto;
        >p{
          text-align: left;
          line-height: 34px;
          font-size: 18px;
          color: #fff;
        }
        p.title{
          margin:10px 0;
        }
      }
    }
    .businessCooperation{
      background: #fff;
      >div{
        
        width: 1100px;
        margin: 0 auto;
        padding-top: 50px;
        h4{
          margin: 0 0 20px;
        }
        p{
          color: #1a1a1a;
          text-align: left;
          line-height: 30px;
          margin-bottom: 10px;
        }
        
      }
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
    margin: 0 auto 70px;
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
    .grid-content1.grid-content{
      height: 140px;
    }
    .grid-content{
      height: 75px;
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


.Together .toServer{
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
