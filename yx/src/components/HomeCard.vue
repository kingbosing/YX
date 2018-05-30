<template>
  <div class="HomeCard">   
    <!-- <div class="cardList" v-for="k in 8" :key="k">{{k}}</div> -->
    <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"  v-for="(k,v) in mse" :key="v" style="margin-right:10px;"  :style="{background:'url('+k[1]+')'}" >
          <div class="on"></div>
          <img :src="k[2]" alt="">
      </div>
    
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
   
  </div>
</template>

<script>
 
 import Swiper from 'swiper';
 import 'swiper/dist/css/swiper.min.css';

import Photo_one from '@/assets/yxAir/Photo_one.png'
import Photo_1 from '@/assets/yxAir/yu.png'

import Photo_two from '@/assets/yxAir/Photo_two.png'
import Photo_2 from '@/assets/yxAir/j.png'

import Photo_three from '@/assets/yxAir/Photo_three.png'
import Photo_3 from '@/assets/yxAir/logo_two.png'

import Photo_four from '@/assets/yxAir/Photo_four.png'
import Photo_4 from '@/assets/yxAir/jin.png'

import Photo_five from '@/assets/yxAir/Photo_five.png'
import Photo_5 from '@/assets/yxAir/logo_three.png'

import Photo_six from '@/assets/yxAir/Photo_six.png'
import Photo_6 from '@/assets/yxAir/shu.png'

import Photo_seven from '@/assets/yxAir/Photo_seven.png'
import Photo_7 from '@/assets/yxAir/logo_one.png'

import Photo_eight from '@/assets/yxAir/Photo_eight.png'
import Photo_8 from '@/assets/yxAir/yu.png'

 

export default {
    name: 'HomeCard',
    components: {
        Swiper
        
    },
    mounted:function(){
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 10,           
            roundLengths : true, 
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: true,//可选选项，自动滑动
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        
    },
    data:function(){
        return {
            isActive:false,
            mse:[
                {1:Photo_one,2:Photo_1},
                {1:Photo_two,2:Photo_2},
                {1:Photo_three,2:Photo_3},
                {1:Photo_four,2:Photo_4},

                {1:Photo_five,2:Photo_5},
                {1:Photo_six,2:Photo_6},
                {1:Photo_seven,2:Photo_7},
                {1:Photo_eight,2:Photo_8},

                
            ]
        }
    },
     props: {
        childMsg: Object
    },
    methods:{
        getIt:function(){
            // console.info(this.childMsg)
            this.isActive=true;
        },
        LostIt:function(){
            this.isActive=false;
            
        }
    }
  
}
// var i=0;
// var HomeCard=document.getElementsByClassName('HomeCard')
// setInterval(() => {
//     i++;
//     HomeCard.style.background='#fff';
// }, 50);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.HomeCard{
     height: 358px;
     width: 4320px;
     position: absolute;
     left: 0;
    .swiper-slide{
        height: 358px;
        width: 478px;
        float: left;
        margin-right: 10px;
        background: #ccc;
       
        .on{
            height: 358px;
            width: 478px;
            background: #fff;
             position: absolute;
             z-index: 1; opacity: 0.5;
        }
        img{
            display: block;
            position: absolute;
            top: 0;right: 0;left: 0;bottom: 0;
            margin: auto;
            opacity: 1;
            color: #fff;
            z-index: 999;
        }
    }
     .swiper-slide:hover{
         
         .on{
             opacity: 0;
         }
         img{
            display: none;
             
         }
     }






}
   
</style>
