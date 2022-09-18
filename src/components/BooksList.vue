<template>
<div
   class="Homebook animate__animated animate__fadeIn animate__delay-2s"
   v-bind:key="book.id"
   v-for="book in books">
    <img :src="book.img" alt="">
    <router-link class="nav-link back-href" :to="{name: 'BookItem', params: {id : book.id}}" >
      <p>{{ book.title }}</p>
    </router-link>
    <p>{{ book.Author }}</p>
    </div>
</template>

<script>
  export default{
    name: 'BooksList',
    props: ['books']
  }

</script>

<style lang="scss" scoped>
 .Homebook{
    width: 400px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    padding: 14px;
    border-radius: 16px;
    z-index: 100;
    margin-top: 80px;
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
  .Homebook:hover{
    -webkit-box-shadow: 3px 4px 100px 4px rgba(106, 106, 106, 0.5);
-moz-box-shadow: 3px 4px 100px 4px rgba(106, 106, 106, 0.5);
box-shadow: 3px 4px 100px 4px rgba(106, 106, 106, 0.5);
  }
</style>