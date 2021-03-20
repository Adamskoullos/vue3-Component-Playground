<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col main-container">
        <div class="row top-nav-container">
          <div class="col top-nav">
            <nav class="links">
                <div class="nav-link">
                    <span class="material-icons" @click="toggleSideChat">chat_bubble</span>
                </div>
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
            <div class="theme">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
              </div>
            </div>
            <div class="nav-div">
                <h3>User Name</h3>
            </div>
            <div class="logout">
                <button class="btn"><span class="material-icons">logout</span></button>
            </div>
          </div>
        </div>
        <div class="row main-content-div">
          <div class="col main-content">
            <router-view/>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-4 side-nav-container" v-if="showSideChat">
          <h1>Live Chat</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {

    setup(){
        const showSideChat = ref(false)
        const user = ref(true)

        const toggleSideChat = () => {
            showSideChat.value = !showSideChat.value
        }

        return { toggleSideChat, showSideChat }
    }
}
</script>

<style>
.top-nav-container{
  box-sizing: border-box;
  padding: 10px;
}
.side-nav-container{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100px;
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
  border-radius: 10px;
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
    align-content: flex-start;
    margin-bottom: 80px;
  }
  nav {
      display: flex;
      justify-content: center;
      align-items: center;
  }
  nav .links {
    max-width: 1200px;
    display: flex;
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
    min-width: 20px;
    color: rgb(107, 107, 107);
  }
  .material-icons{
    font-size: 30px;
  }

  .logout{
      display: flex;
      align-items: center;
      padding-left: 10px;
  }
</style>