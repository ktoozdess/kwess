<template>
    <div class="install-wrapper animate__animated animate__fadeIn animate__delay-1s">
        <div class="right-rec">
        <router-link class="nav-link" to="/InstallView"><span>Install Kwess icon on your <br> home screen</span></router-link>
    </div>
        <div class="left-rec">
    <img src="../assets/screen4.png" alt="">
    </div>
    </div>
</template>
<script>
export default {
    name: 'InstallItem'
}
</script>
<style lang="scss">
.install-wrapper{
  background-color: #e6d1f9;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
  .left-rec{
    img{
      width: 200px;
    }
  }
  .right-rec{
    span{
      color: #8409F9;
    }
    p{
      margin-bottom: 10px;
    }
  }
}
</style>