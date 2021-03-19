<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 side-nav-container" v-if="showSideNav">
        <div class="auth">
            <h2>User Name</h2>
            <button class="btn auth">Logout</button>
        </div>
        <div class="navbar">
            <nav>
                <div v-if="!user">
                    <h1>Login</h1>
                </div>
                <div v-if="user">
                    <nav>
                        <div class="links">
                            <router-link class="btn" :to="{ name: 'Home' }">Home</router-link>
                            <router-link class="btn" :to="{ name: 'LiveChat' }">Live Chat</router-link>
                            <router-link class="btn" :to="{ name: 'Projects' }">Projects</router-link>
                            <router-link class="btn" :to="{ name: 'Bugs' }">Bugs</router-link>
                        </div>
                    </nav>
                </div>
            </nav>
        </div>
        <div class="theme">
            <button class="btn theme">Theme</button>
        </div>
      </div>
      <div class="col main-container">
        <div class="row">
          <div class="col top-nav">
            <div class="nav-div">
                <button class="btn" @click="toggleSideNav">Menu</button>
            </div>
            <div class="nav-div">
                <h2>ProDev</h2>
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
        const showSideNav = ref(false)
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
  min-width: 100px;
  justify-content: space-around;
}
.side-nav{
  background: rgb(204, 204, 204);
  flex: 1;
}
.side-nav-container h2{
    margin-top: 15px;
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
.auth{
    margin: 20px auto;
}


.navbar {
    padding: 16px 10px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    background: rgb(197, 167, 167);
  }
  nav {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav .links {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 20px;
  }
  .theme{
    padding: 16px 10px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
  }
</style>