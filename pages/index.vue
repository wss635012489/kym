<template>
    <div class="bg-bai">
      <div class="banner">
        <img src="~assets/img/index_banner.png">
      </div>
      <!--品牌介绍-->
      <div class="i-mod i-mod_01">
        <div class="mod-title-box">
          <div class="text-center color-huang font-16 blod">品牌介绍</div>
          <div class="text-center my-dot"><span></span><span></span><span></span></div>
        </div>
        <div class="container video">
          <video src="~static/video/video.mp4?vframe/png/offset/3/w/480/h/480%7CimageView2/1/w/480/h/360" controls controlsList="nodownload"></video>
        </div>
      </div>
      <!--品牌优势-->
      <div class="i-mod i-mod_02">
        <div class="mod-title-box">
          <div class="text-center color-huang font-16 blod">品牌优势</div>
          <div class="text-center my-dot"><span></span><span></span><span></span></div>
        </div>
        <div class="container brand">
          <div class="row">
            <div class="col-md-4">
              <div class="item ">
                  <img src="~assets/img/brand_i_01.png" class="enlarge">
                <div>
                  <div class="font-16 blod text-center">课程优势</div>
                  <div class="mt-10 introduce">结合“动手实践、动脑思考”的科创教育理念，引入国内外优秀课程资源，自主研发的课程体系</div>
                  <div class="my-btn"><span class="point" @click="$router.push('/system')">查看详情</span></div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="item">
                <img src="~assets/img/brand_i_02.png" class="enlarge">
                <div>
                  <div class="font-16 blod text-center">系统优势</div>
                  <div class="mt-10 introduce">开源猫教学管理孕系统，五大板块，用数据支撑，为伙伴助力</div>
                  <div class="my-btn"><span class="point" @click="$router.push('/administration')">查看详情</span></div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="item">
                <img src="~assets/img/brand_i_03.png" class="enlarge">
                <div>
                  <div class="font-16 blod text-center">招生优势</div>
                  <div class="mt-10 introduce">专业的营销技巧和推广引流方法，为合作伙伴排忧解难</div>
                  <div class="my-btn"><span class="point" @click="$router.push('/attract')">查看详情</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--课程体系-->
      <div class="i-mod i-mod_03">
        <div class="mod-title-box">
          <div class="text-center color-huang font-16 blod">课程体系</div>
          <div class="text-center my-dot"><span></span><span></span><span></span></div>
        </div>
        <div class="container brand">
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <div class="item">
                <img src="~assets/img/cur_i_01.png" class="enlarge">
                <div>
                  <div class="font-16 blod text-center">预科班课程</div>
                  <div class="font-16 text-center color-huang">《科创启蒙》</div>
                  <div class="mt-10 introduce">适合4-6岁孩子，课程围绕科学实验和制作展开，充分调动孩子的学习兴趣，爱上科学</div>
                  <div class="my-btn"><span class="point" @click="linkTo('course')">查看详情</span></div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="item">
                <img src="~assets/img/cur_i_02.png" class="enlarge">
                <div>
                  <div class="font-16 blod text-center">初级课程</div>
                  <div class="font-16 text-center color-huang">《电子积木》</div>
                  <div class="mt-10 introduce">适合6-8岁孩子，通过学习电子器件，了解电子产品的基本构成，并制作出相应的电子装置。</div>
                  <div class="my-btn"><span class="point" @click="linkTo('primary')">查看详情</span></div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="item">
                <img src="~assets/img/cur_i_03.png" class="enlarge">
                <div>
                  <div class="font-16 blod text-center">中级课程</div>
                  <div class="font-16 text-center color-huang">《编程入门》</div>
                  <div class="mt-10 introduce">适合8-10岁孩子，认识最流行的Scratch可视化编程语言，理解编程思维逻辑。</div>
                  <div class="my-btn"><span  class="point" @click="linkTo('intermediate')">查看详情</span></div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="item">
                <img src="~assets/img/cur_i_04.png" class="enlarge">
                <div>
                  <div class="font-16 blod text-center">高级课程</div>
                  <div class="font-16 text-center color-huang">《编程进阶》</div>
                  <div class="mt-10 introduce">适合10-12岁孩子，通过使用SourcePi图形化编程软件和电子积木模块，实现编程低门槛。 </div>
                  <div class="my-btn"><span  class="point" @click="linkTo('senior')">查看详情</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hotline"><img src="~assets/img/course_hotline.png"></div>
      <!--专家团队-->
      <!-- <div class="i-mod i-mod_04">
        <div class="mod-title-box">
          <div class="text-center color-huang font-16 blod">专家团队</div>
          <div class="text-center my-dot"><span></span><span></span><span></span></div>
        </div>
        <div class="container">
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide text-center">
                      <div>
                        <div><img src="~assets/img/dt_01.png"></div>
                        <div class="font-16 blod mt-15">施友岚</div>
                        <div>创始人</div>
                        <p class="mt-10">毕业于电子科技大学，10年资深创客，负责多款百万级并发软件系统开发，数款年销量数百万智能硬件研发，1万家医疗连锁门店会员系统打造负责人</p>
                      </div>
                  </div>
                  <div class="swiper-slide text-center">
                      <div>
                        <div><img src="~assets/img/dt_02.png"></div>
                        <div class="font-16 blod mt-15">江承利</div>
                        <div>创始人</div>
                        <p class="mt-10">毕业于庆邮电大学，10年的资深创客，手工DIY爱好者，连续创业者，6年IT及教育创业经验，丰富互联网教育资源整合渠道，人力资源专家</p>
                      </div>
                  </div>
                  <div class="swiper-slide text-center">
                      <div>
                        <div><img src="~assets/img/dt_03.png"></div>
                        <div class="font-16 blod mt-15">钱超</div>
                        <div>合伙人</div>
                        <p class="mt-10">慕尼黑大学硕士，曾负责某警用无人机产品研发工作，5年科创教育教研，德国创客教材研发人员</p>
                      </div>
                  </div>
                  <div class="swiper-slide text-center">
                      <div>
                        <div><img src="~assets/img/dt_04.png"></div>
                        <div class="font-16 blod mt-15">杨向兴</div>
                        <div>合伙人</div>
                        <p class="mt-10">德州大学电子硕士，师从全球20大杰出青年科学家鲁南殊教授，5年科创教育教研，美国创客教材研发人员</p>
                      </div>
                  </div>
                  <div class="swiper-slide text-center">
                      <div>
                        <div><img src="~assets/img/dt_05.png"></div>
                        <div class="font-16 blod mt-15">唐时浩</div>
                        <div>产品总监</div>
                        <p class="mt-10">前浪尖集团设计总监；超8年产品设计经验；曾主导多个世界五百强企业教育产品设计项目</p>
                      </div>
                  </div>
                  <div class="swiper-slide text-center">
                      <div>
                        <div><img src="~assets/img/dt_06.png"></div>
                        <div class="font-16 blod mt-15">程俊衡</div>
                        <div>课程研发主管</div>
                        <p class="mt-10">5年科创教育教研，多所知名中小学科创导师，多次担任VEX全球机器人比赛教练并多次获奖，高校航模协会创始人</p>
                      </div>
                  </div>
                  <div class="swiper-slide text-center">
                      <div>
                        <div><img src="~assets/img/dt_07.png"></div>
                        <div class="font-16 blod mt-15">余进波</div>
                        <div>技术总监</div>
                        <p class="mt-10">超6年教育电子产品研发经验;曾负责出货百万级电子儿童手表等硬件产品研发制造及供应链</p>
                      </div>
                  </div>
                  <div class="swiper-slide text-center">
                      <div>
                        <div><img src="~assets/img/dt_08.png"></div>
                        <div class="font-16 blod mt-15">鄢雅琪</div>
                        <div>校长</div>
                        <p class="mt-10">5年STEAM教育从业经验，资深儿童steam教育老师、3年校长经验，乐高机器人校长、凤凰机器人校长、开源猫科创基地校长</p>
                      </div>
                  </div>
              </div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
          </div>
        </div> 
      </div>
      <script>
        var mySwiper = new Swiper ('.swiper-container', {
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            loop:true,
            autoplay:{
              delay:5000
            },
            slidesPerView:'auto',
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        }) 
      </script> -->
      <!--扶持体系-->
      <div class="i-mod i-mod_05">
        <div class="mod-title-box">
          <div class="text-center color-huang font-16 blod">六大保姆式扶持体系</div>
          <div class="text-center my-dot"><span></span><span></span><span></span></div>
        </div>
        <div>
          <div class="text-center">
            <img src="~assets/img/index_al.png" class="al">
          </div>
          <div class="text-center">
            <span class="btn btn-click-huang" @click="$router.push('/support')">查看详情</span>
          </div>
        </div>
      </div>
      <!--合作案例-->
      <div class="i-mod i-mod_06">
        <div class="mod-title-box">
          <div class="text-center color-huang font-16 blod">合作案例</div>
          <div class="text-center my-dot"><span></span><span></span><span></span></div>
        </div>
        <div class="container text-center">
          <ul>
            <li>
              <div><img src="~assets/img/p1.png"></div>
            </li>
            <li>
              <div><img src="~assets/img/p2.png"></div>
            </li>
            <li>
              <div><img src="~assets/img/p3.png"></div>
            </li>
            <li>
              <div><img src="~assets/img/p4.png"></div>
            </li>
            <li>
              <div><img src="~assets/img/p5.png"></div>
            </li>
            <li>
              <div><img src="~assets/img/p6.png"></div>
            </li>
            <li>
              <div><img src="~assets/img/p7.png"></div>
            </li>
            <li>
              <div><img src="~assets/img/p8.png"></div>
            </li>
            <li>
              <div><img src="~assets/img/p9.png"></div>
            </li>
            <li>
              <div><img src="~assets/img/p10.png"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  head() {
      return {
          title:'首页',
      }
  },
  head: {
    link: [
      { rel: 'stylesheet', type:"text/css", href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css' }
    ],
    title:'首页'
  },
  methods:{
    linkTo(name){
      sessionStorage.setItem('sysTopName',name)
      this.$router.push('/system')
    }
  },
  mounted(){
        $(window).off("scroll")
    }
}
</script>
<style lang="less" scoped>
@import '~assets/css/main.less';
.banner {
  img {
    width: 100%;
    display: block
  }
}
.i-mod {
  padding-bottom: 90px;
  .mod-title-box {
    padding-top: 50px;
    padding-bottom: 30px;
    .my-dot {
        margin-top: -8px;
        span {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 100%;
          background-color: @bg_huang;
          margin-right: 6px;
        }
        span:last-child {
          margin-right: 0
        }
    }
  }
}
.hotline {
  img {
    width:100%;
    display:block;
  }
}
.i-mod_01 {
  .video {
    background-color: #000;
    text-align: center;
    padding: 0 15px;
    video {
      width: 100%;
      height: 430px;
      display: inline-block;
      vertical-align:bottom;
    }
  }
}
.i-mod_02,.i-mod_03 {
  background-color: #fffae9;
  .brand {
    .item {
      border-radius: 5px;
      box-shadow: 4px 4px 10px 0 #feedcb;
      overflow: hidden;
      img {
        width: 100%;
        display: block
      }
      >div {
        padding: 30px;
        background-color: #fff;
        .introduce {
          height: 64px;
          overflow: hidden;
        }
        .my-btn {
          text-align: center;
          margin-top: 20px;
          span {
            display: inline-block;
            padding: 5px 30px;
            border: 1px solid #cccccc;
            box-sizing: border-box;
            border-radius: 50px;
            font-size: 12px
          }
          span:hover {
            background-color: @bg_huang;
            color: #fff;
            border-color: @bg_huang
          }
        }
      }
    }
  }
}
.i-mod_03 {
  background: url(~assets/img/index_mod03_bg.png);
  background-size: 100%;
  .mod-title-box { 
    padding-bottom: 10px;
  }
  .brand {
    .item {
      margin-top: 20px
    }
  }
}
.i-mod_05 {
  background: url(~assets/img/index_mod05_bg.png);
  background-size: 100%;
  .al {
    margin-top: 60px;
    width: 55%;
    display: inline-block
  }
  .btn {
    background-color: @bg_huang;
    color: #fff;
    padding: 6px 36px;
    border-radius: 50px;
    margin-top: 55px
  }
}
.i-mod_06 {
  ul {
    overflow: hidden;
    li {
      float: left;
      width: 20%;
      >div {
        padding:10px 15px;
        img {
          width: 60%;
          display: inline-block
        }
      }
    }
  }
}
.swiper-container {
    margin-top: 30px;
    .swiper-slide {
      width: 25% !important;
      >div {
        padding: 0 20px;
        img {
          max-width: 110px;
          width: 50%
        }
        p {
          color: #666;
          padding: 0 20px;
          text-align: left
        }
      }
    }
}  
.swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23c1c1c1'%2F%3E%3C%2Fsvg%3E")
}
.swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23c1c1c1'%2F%3E%3C%2Fsvg%3E")
}
@media (max-width:800px) {
  .i-mod {
    padding-bottom: 30px;
    .mod-title-box {
      padding-top: 20px;
      padding-bottom: 0;
    }
  }
  .hotline {
    display: none
  }
  .i-mod_01 {
    .video {
      margin-top: 20px;
      video {
        height: 60vw;
      }
    }
  }
  .i-mod_02,.i-mod_03 {
    .brand {
      .item {
        margin-top: 20px;
      }
    }
  }
  .i-mod_05 {
    .al {
      width: 90%
    }
  }
  .i-mod_06 {
    ul {
      li {
        width: 25%;
        >div {
          img {
            width: 90%;
          }
        }
      }
    }
  }
  .swiper-container {
    .swiper-slide {
      width: 100% !important
    }
  }
}
</style>