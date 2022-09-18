    <template>
      <div class="book-item-wrapper container">
        <div class="book-item">
          <img :src="book.img" alt="">
          <p class="book-title">{{ book.title }}</p>
          <p class="book-author">{{ book.Author }}</p>
          <p class="book-quote book-quote1">{{ book.quote1 }}</p>
          <p class="book-quote book-quote2">{{ book.quote2 }}</p>
          <p class="book-quote book-quote3">{{ book.quote3 }}</p>
          <p class="book-quote book-quote4">{{ book.quote4 }}</p>
          <p class="book-quote book-quote5">{{ book.quote5 }}</p>
          <p class="book-descr">{{ book.descriptions }}</p>
        </div>
      </div>
    </template>

    <script>
        export default {
          data(){
            return{
              book:{}
            }
          },
            props: ['books'],
            mounted(){
              window.scrollTo(0, 0);
              if (Object.keys(this.books).length == 0) {
                this.$router.push('/')
              }else{
                this.id = this.$route.params.id;
                this.book = this.books.find((book) => book.id == this.id)
              }
              if(this.book.quote1 == "" || this.book.quote1 == undefined){
                document.querySelector('.book-quote1').classList.add('quote-hidden')
              }
               if(this.book.quote2 == "" || this.book.quote2 == undefined ){
                document.querySelector('.book-quote2').classList.add('quote-hidden')
              }
               if(this.book.quote3 == "" || this.book.quote3 == undefined){
                document.querySelector('.book-quote3').classList.add('quote-hidden')
              }
              if(this.book.quote4 == "" || this.book.quote4 == undefined){
              document.querySelector('.book-quote4').classList.add('quote-hidden')
            }
               if(this.book.quote5 == "" || this.book.quote5 == undefined ){
                document.querySelector('.book-quote5').classList.add('quote-hidden')
              }



            }

        }
    </script>
    <style lang="scss" scoped>
      .book-item{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        margin-top: 95px;
        p{
          margin-top: 18px;
          margin-bottom: 18px;
        }
        .book-title{
          color: #8409F9;
          font-size: 26px;
        }
        .book-quote{
          background-color: #8509f962;
          padding: 10px;
          border-radius: 10px;
        }
        .quote-hidden{
          display: none;
        }
        .book-descr{
          text-align: center;
        }
        img{
          width: 160px;
          -webkit-box-shadow: 3px 4px 100px 4px rgba(106, 106, 106, 0.5);
          -moz-box-shadow: 3px 4px 100px 4px rgba(106, 106, 106, 0.5);
          box-shadow: 3px 4px 100px 4px rgba(106, 106, 106, 0.5);
        }
      }
      .back-href{
        color: #8409F9;
          border-radius: 10px;
          padding: 10px;
      }
    </style>