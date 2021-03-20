<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-1 side-nav-container" v-if="showSideNav">
        <div class="auth">
            <h3>ProDev</h3>
        </div>
        <nav class="links">
          <router-link :to="{ name: 'Chat' }" class="nav-link">
            <div>
              <span class="material-icons">chat_bubble</span>
            </div>
          </router-link>
          <router-link :to="{ name: 'Projects' }" class="nav-link">
            <div>
              <span class="material-icons">dashboard</span>
            </div>
          </router-link>
          <router-link :to="{ name: 'Bugs' }" class="nav-link">
            <div>
              <span class="material-icons">bug_report</span>
            </div>
          </router-link>
        </nav>
        <div class="logout">
          <button class="btn"><span class="material-icons">logout</span></button>
        </div>
      </div>
      <div class="col main-container">
        <div class="row">
          <div class="col top-nav">
            <div class="nav-div">
                <button class="btn" @click="toggleSideNav"><span class="material-icons">menu</span></button>
            </div>
            <div class="theme">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
              </div>
            </div>
            <div class="nav-div">
                <h3>User Name</h3>
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
        const user = ref(true)

        const toggleSideNav = () => {
            showSideNav.value = !showSideNav.value
        }

        return { toggleSideNav, showSideNav, user }
    }
}
</script>

<style>
.side-nav-container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 110px;
  justify-content: space-around;
  align-items: center;
  background: rgb(228, 228, 228);
}

.side-nav{
  background: rgb(228, 228, 228);
  flex: 1;
}
.side-nav-container h3{
    margin: auto;
    display: flex;
    
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
  background: rgb(228, 228, 228);
  height: 75px;
}
.nav-div{
    display: flex;
    align-content: center;
    justify-content: center;
}
.nav-div h3{
    margin: auto;
}
.main-content{
  background: rgb(247, 236, 179);
}
.auth{
    font-size: 20px;
    padding: 16px 10px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
}


.navbar {
    padding: 16px 10px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    margin-bottom: 80px;
  }
  
  nav .links {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
  }
  nav .links a, button {
    font-size: 20px;
    padding: 16px 10px;
  }
  .theme{
    font-size: 25px;
    padding: 16px 10px;
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  nav span{
    display: inline-block;
    min-width: 100px;
  }
  .material-icons{
    font-size: 30px;
  }
</style>