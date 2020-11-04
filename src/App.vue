<template>
  <div class="row text-center">
    <div class="col-12">
      <div id="nav">
        <router-link to="/">
          Home
        </router-link> |
        <router-link to="/cars">
          Cars
        </router-link> |
        <router-link to="/jobs">
          Jobs
        </router-link> |
        <router-link to="/houses">
          Houses
        </router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>
