<template>
    <div  class="install-Instructions-wrapper animate__animated animate__fadeIn animate__delay-1s">
        <h3>Instructions for ios</h3>
        <div class="screens-wrapper">
            <div class="image">
                <img src="../assets/screen1.png" alt="">
                <p>stage 1</p>
            </div>
            <div class="image">
                <img src="../assets/screen2.png" alt="">
                <p>stage 2</p>
            </div>
            <div class="image">
                <img src="../assets/screen3.png" alt="">
                <p>stage 3</p>
            </div>
            <div class="image">
                <img src="../assets/screen4.png" alt="">
                <p>stage 4</p>
            </div>
        </div>
        <br>
        <h3>Instructions for Android</h3>
        <div class="screens-wrapper">
            <div class="image">
                <img src="../assets/Ascreen1.png" alt="">
                <p>stage 1</p>
            </div>
            <div class="image">
                <img src="../assets/Ascreen2.png" alt="">
                <p>stage 2</p>
            </div>
            <div class="image">
                <img src="../assets/Ascreen3.png" alt="">
                <p>stage 3</p>
            </div>
            <div class="image">
                <img src="../assets/Ascreen4.png" alt="">
                <p>stage 4</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'InstallView',
    mounted(){
        window.scrollTo(0, 0);
    }
}
</script>
<style lang="scss" scoped>
    .install-Instructions-wrapper{
        margin-top: 26px;
        h3{
            text-align: center;
        }
        p{
            text-align: center;
        }
    }
    .screens-wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        .image{
            width: 50%;
            img{
                width: 100%;
            }
        }
    }
    @media screen and (max-width: 769px){
        .screens-wrapper{
        .image{
            width: 100%;
        }
    }
  }
</style>