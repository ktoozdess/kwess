<template>
    <div class="recommendations-wrapper container">
        <div class="GreatEntrepreneurs animate__animated animate__fadeIn animate__delay-1s">
            <img src="../assets/recenterp.png" alt="">
            <div class="GreatEntrepreneurs-txt">
                <router-link class="nav-link" to="/GreatEntrepreneursView">Books about Great Entrepreneurs</router-link>
            </div>
        </div>
        <br>
        <div class="GreatEntrepreneurs animate__animated animate__fadeIn animate__delay-1s">
            <img src="../assets/forKids.png" alt="">
            <div class="GreatEntrepreneurs-txt">
                <router-link class="nav-link" to="/ForKids">Books for kids</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RecommendationsView',
    props: ['books'],
    mounted(){
        window.scrollTo(0, 0);
    }
}
</script>
<style lang="scss" scoped>
.GreatEntrepreneurs{
    background-color: #e6d1f9;
    border-radius: 7px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    align-content: center;
    flex-direction: row;
    img{
        width: 400px;
    }
    .GreatEntrepreneurs-txt{
        a{
            color: #8409F9;
        }
    }
}
@media screen and (max-width: 990px){
  .GreatEntrepreneurs{
    padding-bottom: 40px;
  }
}

</style>