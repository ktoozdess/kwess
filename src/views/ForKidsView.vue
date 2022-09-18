<template>
    <div class="GreatEnterpreneursView-wrapper container animate__animated animate__fadeIn animate__delay-1s">
        <div
   class="Homebook"
   v-bind:key="book.id"
  v-for="book in books">
   <div v-if="book.collection == 'forKids'" class="homebookitem">
    <img :src="book.img" alt="">
    <router-link class="nav-link back-href" :to="{name: 'BookItem', params: {id : book.id}}" >
      <p>{{ book.title }}</p>
    </router-link>
    <p>{{ book.Author }}</p>
   </div>

    </div>
    </div>
</template>
<script>
export default {
  name: 'ForKids',
  props: ['books'],
  mounted(){
    if (Object.keys(this.books).length == 0) {
        return
      }


  },
}
</script>
<style lang="scss" scoped>
  .GreatEnterpreneursView-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .homebookitem{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    width: 400px;
    border-radius: 16px;
    z-index: 100;
    margin: 0px;
    padding: 0px;
    p{
      margin: 5px 0px;
      text-align: center;
    }
    img{
      width: 120px;
    }
    .back-href{
        color: #8409F9;
      }
  }
  .homebookitem:hover{
    -webkit-box-shadow: 3px 4px 100px 4px rgba(106, 106, 106, 0.5);
-moz-box-shadow: 3px 4px 100px 4px rgba(106, 106, 106, 0.5);
box-shadow: 3px 4px 100px 4px rgba(106, 106, 106, 0.5);
  }


</style>