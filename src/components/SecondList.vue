<template>
  <div>
    <div class="wisdom">wisdom</div>
    <div class="swiperBox">
      <div id="swiper2" class="swiper-container mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/picture/主页3d图/1.svg" alt="" />
          </div>
          <div class="swiper-slide">
            <img src="../assets/picture/主页3d图/2.svg" alt="" />
          </div>
        </div>

        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: 'FirstList',
  mounted() {
    new Swiper('#swiper2', {
      slidesPerView: 2.22,

      slidesOffsetBefore: window.innerWidth * 0.05,
      spaceBetween: 15,
      pagination: {
        clickable: true
      }
      // direction: 'vertical', // 垂直切换选项
      // loop: true, // 循环模式选项
      // 如果需要分页器
      // pagination: {
      //   el: '.swiper-pagination'
      // },
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev'
      // }
      // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar'
      // }
    })
  }
}
</script>

<style scoped>
.wisdom {
  position: absolute;
  font-family: 'Microsoft YaHei', 'alimama', serif;
  background-image: linear-gradient(to right, #4e139b, #6813e7);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  top: 580px;
  left: 20px;
  font-size: 20px;
  font-weight: bold;
}
/*region轮播图模块*/
body {
  /*background: #eee;*/
  font-family:
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 100%;
  height: 300px;
  margin-top: 50px;
}

.swiper-slide {
  top: 20px;
  width: 100%;
  height: 210px;
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 35px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow:
    inset 1px 1px 6px rgba(255, 255, 255, 0.3),
    1px 15px 15px rgba(0, 0, 0, 0.1);

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  /*-webkit-box-pack: center;*/
  /*-ms-flex-pack: center;*/
  /*-webkit-justify-content: center;*/
  justify-content: center;
  /*-webkit-box-align: center;*/
  /*-ms-flex-align: center;*/
  /*-webkit-align-items: center;*/
  /*align-items: center;*/
}

.swiper-slide img {
  display: block;
  width: 60%;
  height: 60%;
  margin-top: 20px;
  margin-left: 20%;
  margin-right: 20%;
}
.picture-3d {
  width: 100%;
  font-family: 'alimama', serif;
  font-weight: bold;
  //padding-left: 25%;
  margin-left: 20%;
  /*height: 158px;*/
}
</style>
