<template>
  <div id="app" v-cloak>
   <header :class="{'NotTop':!theIde||!this.$route.query.num==2}">
     <div class='header-nav' >
      
       <div class="left"></div>
       
       
       <div class="right Toback"  v-if="this.$route.query.num==2">
         <ul style="float:right" >
           <!-- :to="{ path:'/Home', query: { num:  1} }" -->         
           <li class="nav "> <router-link to="/">返回首页</router-link></li>
           <li class="nav "> <a @click="dialogVisible=true">下载</a></li>
         </ul>
       </div>
       <div class="right"  v-else>
         <ul>
           <!-- :to="{ path:'/Home', query: { num:  1} }" -->
           <li class="nav "  :class="{'nav_act':actA==0}"> <a @click="toTop">首页</a></li>
           <li class="nav " :class="{'nav_act':actA==1}"> <a @click="CompanyProfile">公司简介</a></li>
           <li class="nav " :class="{'nav_act':actA==2}"> <a @click="toService">赢享服务</a></li>
           <li class="nav " :class="{'nav_act':actA==3}"> <a @click="tocompanyInfo">公司资讯</a></li>
           <li class="nav "> <router-link to="/Together?num=2">共赢合作</router-link></li>
           <li class="nav "> <a @click="dialogVisible=true">下载</a></li>
         </ul>
       </div>
     </div>


     <el-dialog
      title="下载赢享空间"
      :visible.sync="dialogVisible"
      width="30%" > 
      <img src="./assets/yxAir/xiazai.png" alt="">   
    </el-dialog>
   </header>
    <router-view/>



    <footer>
      <div class="mainFooter">
        <el-row>
          <el-col :span="7"><div class="grid-content bg-purple">
            <ul>
              <li class='title'>联系方式</li>
              <li><a>座机电话：0571-28271671</a></li>
              <li><a >客服电话：400-114-7700</a></li>
              <li><a >公司邮箱：contact@yinglaijinrong.com</a></li>              
            </ul>
          </div>            
          </el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light">
            <ul>
              <li class='title'>友情链接</li>
              <li><a href="http://www.yinglaikonggu.com/">赢莱控股官网</a></li>
              <li><a href="http://www.qijikj.cn/">齐集科技官网</a></li>
              <li><a href="http://www.work-oa.com/">小赢计划</a></li>
              <li><a >小赢招聘</a></li>
              <!-- href="http://hr.work-oa.com/" -->
              <li><a href="http://www.showbuy100.com/">秀百贝</a></li>           
            </ul>
            </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">
            <ul>
              <li class='title'>关于我们</li>
              <li><a >加入我们：contact@yinglaijinrong.com</a></li>
                     
            </ul>
            </div>
          </el-col>
          <el-col :span="4"><div class="grid-content bg-purple-light">
              <img src="./assets/yxAir/gongzhonghao.png" alt="">
              <p style="color: #fff;margin-top: 10px;font-size: 14px;">赢享空间公众号</p>
            </div></el-col>
          
          
        </el-row>
      </div>
      <div class="footer_footer">
        <p>© 2015 浙ICP15030957号 杭州赢享信息咨询服务有限公司</p>
      </div>
    </footer>
  </div>

  
</template>

<script>
import downloadimg from "@/assets/yxAir/xiazai.png";

export default {
  name: 'App',
  data:function(){
      return{
        isHome:true,
        num:'',
        scroll:'',
        theIde:true,
        actA:0,
        dialogVisible:false,
      }
  },
  created:function(){
   
    
  },
  
   beforeMount() {
   window.addEventListener('scroll', this.menu)
  },
 
  methods:{
    CompanyProfile(){
        this.num=2;
        document.body.scrollTop = 918-80;
        document.documentElement.scrollTop=918-80;     
               
    },
    toService(){
        document.body.scrollTop = 1755;
        document.documentElement.scrollTop=1755;     
               
    },
    tocompanyInfo(){
        document.body.scrollTop = 5400; 
        document.documentElement.scrollTop=5400;     
    },
    toTop(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop=0;     
      
      // this.actA=0;
    },
    
    menu() {
    var e =e || window.event;
    this.scroll=document.documentElement.scrollTop||document.body.scrollTop;
    // this.scroll = document.body.scrollTop;
    console.log(this.scroll)
    if(this.scroll>0){
      this.theIde=false;
    }else{
      this.theIde=true;    
    }
    
    if(this.scroll<838){
      this.actA=0;
    }else if(this.scroll>=838&&this.scroll<1755){
      this.actA=1;
    }else if(this.scroll>=1755&&this.scroll<5400){
      this.actA=2;
    }else if(this.scroll>=5400){
      this.actA=3;
      
    }
    
   }

  }
  

}

</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  font-family:"微软雅黑"
}
[v-cloak]{
            display: none;
        }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  margin: 0;
}
header{
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0; 
  z-index: 1000000000;
  /* width: 100%; */
}
.header-nav{
  width: 1100px;
  height: 80px;
  line-height: 80px; 
  margin:0 auto;
 
  
  .nav a{
  text-decoration:none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.5;
  
  }
  .nav_act a{
    color: #fff;
     opacity: 1;

  }
  .left{
    width: 220px;
    height: 100%;
    float: left;
    background: url(assets/yxAir/logo_bai.png)no-repeat center;//logo_bai
  } 
  .nav_act .Toback a{
    color: #000;
    // opacity: 1;  
  } 
}
.NotTop{
   background: #fff;
   border-bottom: 1px solid #ccc;
   .nav a{
    color: #000; 
  }
  .nav_act a{
    color: #2B84C6;
  }
  .left{
    width: 220px;
    height: 100%;
    float: left;
    background: url(assets/yxAir/logo_web.png)no-repeat center;//logo_bai
  }
 
  .nav_act .Toback a{
    color: #000;
    // opacity: 1;  
  } 
}

.header-nav .right{
  width: 600px;
  height: 100%;
  float: right;
}
.header-nav .right ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
.header-nav .right ul li{
 margin: 0 18px;
  float: left;
}


footer{
   
    width: 100%;
    background: #383d40;
    .mainFooter{
      width: 1180px;
      height: 320px;
      // height: 100%;
      margin: 0 auto;
      padding-top: 45px;
      .grid-content{
          ul{
            list-style: none;
            margin: 0;
            padding:0;
            text-align: left;
            li{
              display: block;
              margin: 10px;
            }
            .title{
              color: #fff;
            }
            a{
              text-decoration: none;
              color: #fff;
              font-size: 14px;
            }
          }
      }
    }
   .footer_footer{
     height: 100px;
     background: #1f2224;
     p{
       color: #fff;
       line-height: 80px;
     }
   }
}




.amap-wrapper {
  width: 414px;
    height: 414px;
    float: left;
}
</style>
