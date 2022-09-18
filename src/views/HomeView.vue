<template>
  <div class="home">
    <HelloExplore/>
    <div class="recommend animate__animated animate__fadeIn animate__delay-1s">
      <div class="left-rec">
        <img src="../assets/rec.png" alt="">
      </div>
      <div class="right-rec">
        <p>Undecided on a book?</p>
         <router-link class="nav-link" to="/RecommendationsView"><span>Check out our recommendations!</span></router-link>
      </div>
    </div>
    <h3 id="Browse" class="animate__animated animate__fadeIn animate__delay-2s">Browse</h3>
    <div class="Homebooks-main container">
      <BooksList :books="books" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
.Homebooks-main{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.home{
  h3{
    text-align: center;
  }
}
</style>

<script>
import HelloExplore from '../components/HelloExplore.vue'
import BooksList from '@/components/BooksList.vue';



export default {
  name: 'HomeView',
  components: {
    HelloExplore,
    BooksList,
},
props: ['books']
}
</script>
