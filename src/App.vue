<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <img id = "Medic" src = "../assets/oms2.png">
       
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view"> Appointed Patients</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create">Sign Up Patients </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/gallery">Gallery </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/programs">Programs </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

.container ul{
  margin-left: -200px;
}

.container img{
  width: 300px;
}
</style>