<template>
  <div class="main">
    <div class="logo animate__animated animate__fadeInLeft animate__delay-1s">
      <p>&#171; <span>Kwess</span> &#187;</p>
    </div>
    <div class="rightblock animate__animated animate__fadeInRight animate__delay-2s">
      <p>Explore Books by reading <br><span>Quotes</span></p>
    </div>
  </div>
</template>

<script>
import 'animate.css'


export default {
  name: 'HelloExplore',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  min-height: 800px;
}
  .logo{
    p{
      font-weight: 700;
      font-size: 60px;
      span{
        color: #8409F9;
      }
    }
  }
  @media screen and (max-width: 520px){
    .main{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }
</style>
