<template>
<div class="recommend animate__animated animate__fadeIn animate__delay-1s">
    <div class="left-rec">
    <img src="../assets/rec.png" alt="">
    </div>
    <div class="right-rec">
    <p>Undecided on a book?</p>
        <router-link class="nav-link" to="/RecommendationsView"><span>Check out our recommendations!</span></router-link>
    </div>
</div>
</template>
<script>
export default {
    name: 'UndecidedItem'
}
</script>
<style lang="scss">
.recommend{
  background-color: #e6d1f9;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  margin-bottom: 75px;
  padding-top: 40px;
  padding-bottom: 40px;
  .left-rec{
    img{
      width: 100px;
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