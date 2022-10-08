<template>
  <div class="home">
    <HelloExplore/>
    <InstallItem/>
    <UndecidedItem/>
    <h3 id="Browse" class="animate__animated animate__fadeIn animate__delay-2s">Browse</h3>
    <div class="Homebooks-main container">
      <BooksList :books="books" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

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
import UndecidedItem from '@/components/UndecidedItem.vue';
import InstallItem from '@/components/InstallItem.vue';



export default {
  name: 'HomeView',
  components: {
    HelloExplore,
    BooksList,
    UndecidedItem,
    InstallItem
},
props: ['books']
}
</script>
