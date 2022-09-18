<template>
    <div class="browseview-wrapper container animate__animated animate__fadeIn animate__delay-1s">
      <input class="form-control search" v-model="search" type="search" placeholder="Search by Title or Author">
      <div class="browse ">
      <div
     class="Homebook"
     v-bind:key="book.id"
     v-for="book in filteredItems">
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
    name: 'BrowseList',
    data(){
      return{
        search: '',
      }
    },
  props: ['books'],
    computed:{
      filteredItems(){
        if(Object.keys(this.books).length == 0){
           return
        }else{
        return this.books.filter(title =>{
          return title.title.toLowerCase().includes(this.search) || title.title.toUpperCase().includes(this.search) || title.title.includes(this.search) || title.Author.toLowerCase().includes(this.search) || title.Author.toUpperCase().includes(this.search) || title.Author.includes(this.search)
        })
        }

      }
    },

  }
  </script>
  <style lang="scss" scoped>
    .browseview-wrapper{
      margin-top: 70px;
    }
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
  .browse{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  }
  .search{
  width: 80%;
  margin: 0 auto;
  z-index: 1;
  }
  </style>