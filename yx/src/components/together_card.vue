<template>
  <div class="Card " id="Card" @mouseover="getIt"  @mouseout="lostIt"   v-bind:style="{  background:'url('+ childMsg.url + ')no-repeat center' }">   
    <div v-show="isActive" class="front face "><p  v-html="childMsg.content"></p></div>
    <div v-show="!isActive" class="back face">{{childMsg.title}}</div>  
  </div>
  <!-- // v-bind:style="{  background:'url('+ childMsg[0] + ')no-repeat center' }" -->
</template>

<script>
 


export default {
    name: 'TogetherCard',
    data:function(){
        return {
            isActive:false
        }
    },
     props: {
        childMsg: {}
    },
    methods:{
        getIt:function(){  
            // console.log('in')       
                this.isActive=true;  
                      
        },
        lostIt:function(){
            this.isActive=false;           
        }
    }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#Card{
    width:245px;height:200px;
    .face{
       width:245px;height:200px;
        position: absolute;
        cursor: pointer;
    }
    
    .back{
        z-index: 1;
         background: #000;
        opacity: 0.55;
        color: #fff;
        font-size: 20px;
        line-height: 200px;      
    }
    .front{       
        background: #fff;
        opacity: 0.9;
        z-index: 2;
        padding: 75px 0 0;
        text-align: center;
        
       
        p{color: #2B84c6;
        font-size: 20px;
        text-align: center;
        line-height: 30px;
        margin: 0;
        padding: 0;
        }
        
        
    }
}




    // .face{
    //       position: absolute;
    //       top: 0;
    //       left: 0;
    //       width: 100%;
    //       height: 100%;
    //       border-radius: 4px;
    //       backface-visibility: hidden;
    //       transition: all 0.5s ease-out;
    //       cursor: pointer;
    //    }
    //    .front {
    //           background: #81d1e9 ;
    //           transform: rotate3d(0, 1, 0, 0deg);
    //         }

    //       .back {
    //           background: #4474b5 ;
    //           transform: rotate3d(0, 1, 0, 180deg);
    //           border: 3px solid white;
    //         }
    //     .flipped > .face.front {
    //       transform: rotate3d(0, 1, 0, -180deg);
    //     }

    //     .flipped > .face.back {
    //       transform: rotate3d(0, 1, 0, 0deg);
    //       border: 1px solid #ccc;
    //     }

       
</style>
