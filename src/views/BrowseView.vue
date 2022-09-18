<template>
  <div>
    <BrowseList :books="books"/>
  </div>
</template>
<script>
import BrowseList from "../components/BrowseList.vue";

export default {
    name: "BrowseView",
    components: { BrowseList },
    props: ['books']
}
</script>
<style lang="scss" scoped>

</style>