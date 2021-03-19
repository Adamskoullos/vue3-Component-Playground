<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 side-nav-container" v-if="showSideNav">
        <h2>Side-Nav</h2>
      </div>
      <div class="col main-container">
        <div class="row">
          <div class="col top-nav">
            <div class="nav-div">
                <button class="btn" @click="toggleSideNav">Menu</button>
            </div>
            <div class="nav-div">
                <h2>User Name</h2>
            </div>
          </div>
        </div>
        <div class="row main-content-div">
          <div class="col main-content">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {

    setup(){
        const showSideNav = ref(true)

        const toggleSideNav = () => {
            showSideNav.value = !showSideNav.value
        }

        return { toggleSideNav, showSideNav }
    }
}
</script>

<style>
.side-nav-container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100px;
}
.side-nav{
  background: rgb(204, 204, 204);
  flex: 1;
}
.main-container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content-div{
  flex: 1;
}
.top-nav{
  display: flex;
  align-content: center;
  justify-content:space-between;
  background: rgb(163, 163, 163);
  height: 75px;
}
.nav-div{
    display: flex;
    align-content: center;
}
.nav-div h2{
    margin: auto;
}
.main-content{
  background: rgb(247, 236, 179);
}
</style>