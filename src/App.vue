<template>
  <nav class="animate__animated animate__fadeIn animate__delay-1s">
    <div class="lefthead">
      <p>&#171; <span>Kwess</span> &#187;</p>
    </div>
    <div class="righthead">
      <div class="links">
    <router-link to="/">Home</router-link> |
    <router-link to="/BrowseView">Browse</router-link>
      </div>

    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
    </a>
    <ul class="dropdown-menu">
      <li><router-link class="dropdown-item" to="/">Home</router-link></li>
      <li><router-link class="dropdown-item" to="/about">About Us</router-link></li>
      <li><router-link class="dropdown-item" to="/RecommendationsView">Recommendations</router-link></li>
    </ul>
  </li>
  </div>
  </nav>
  <router-view :books="books"/>
  <footer>
    <div class="footer-wrapper animate__animated animate__fadeIn animate__delay-1s">
      <h4>Not finding the book you want
( ˘︹˘ ) <br> <a class="nav-link" href="mailto:tigerfpvteam@gmail.com">Contact us!</a></h4>
    </div>
  </footer>
</template>

<script setup>
  import { db } from '@/firebase'
  import { collection, getDocs } from "firebase/firestore";
  import { ref, onMounted } from 'vue'
  import 'animate.css'


   const books = ref({})

  onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, 'books'))
    let libbooks = []
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data())
    const book = {
      id: doc.id,
      title: doc.data().title,
      quote1: doc.data().quote1,
      quote2: doc.data().quote2,
      quote3: doc.data().quote3,
      quote4: doc.data().quote4,
      quote5: doc.data().quote5,
      descriptions: doc.data().descriptions,
      img: doc.data().img,
      Author: doc.data().Author,
      collection: doc.data().collection
    }
      libbooks.push(book)
  })
  books.value = libbooks

  })



  </script>



<style lang="scss">
body{
  font-family: 'Raleway', sans-serif;
  background-color: #efe1fb;
}
nav{
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  align-content: center;
}
.righthead{
  display: flex;
  align-items: center;
  align-content: center;
  .links{
    a{
   text-decoration: none;
   color: black;
   margin: 0px 10px;
    }
  }
}
.lefthead{
  margin-bottom: 20px;
  p{
    font-size: 35px;
    margin-bottom: 0px;
    span{
        color: #8409F9;
      }
  }
}
.dropdown{
  display: flex;
  justify-content: center;
}
.dropdown-menu{
  background-color: #efe1fb;
  border: 0px;
  -webkit-box-shadow: 3px 4px 100px 4px rgba(106, 106, 106, 0.2);
  -moz-box-shadow: 3px 4px 100px 4px rgba(106, 106, 106, 0.2);
  box-shadow: 3px 4px 100px 4px rgba(106, 106, 106, 0.2);
  li{
    a{
      color: #8409F9;
    }
  }
}
ul.dropdown-menu.show{
  transform: translate3d(0px, 0px, 0px)!important;
}
.dropdown-toggle::after {
    display:none;
}
.footer-wrapper{
  margin-top: 70px;
  text-align: center;
  height: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  a{
    color: #8409F9;
  }
}
@media screen and (max-width: 520px){
  .footer-wrapper{
    h4{
      font-size: 20px;
    }
}
}
@media screen and (max-width: 395px){
  .lefthead{
    p{
      font-size: 30px;
    }
  .righthead{
    .links{
      font-size: 18px;
    }
  }
}
}
</style>
