<template>
  <div>
    <!--头部-->
    <may-nav></may-nav>
    <!--身体-->
    <div class="body">
      <nuxt />
    </div>
    <!--底部-->
    <may-footer></may-footer>
  </div>
</template>
<script>
import mayNav from '../components/nav'
import mayFooter from '../components/footer'
export default {
    mounted(){
      this.$nextTick(() => {
        document.body.addEventListener('touchstart', function () { });
      })
    },
    components:{
      mayNav,
      mayFooter
    }
}
</script>
<style lang="less" scoped>
  .body {
    padding-top: 99px;
    background-color: #f5f5f5;
  }
  @media (max-width:800px) {
      .body {
        padding-top: 44px;
      }
  }
</style>



