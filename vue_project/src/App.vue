<template>
  <div id="app">
    <p class="header-link">
      <router-link class="link" to="/">Home</router-link> |
      <router-link class="link" to="/about">About</router-link> |
      <router-link class="link" to="/products">Products</router-link>
    </p>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header-link {
  font: 24px tahoma;
  text-align: center;
}

.content {
  border: 1px solid black;
  border-radius: 10px;
  width: 800px;
  padding: 10px;
  text-align: center;
  background-color: ivory;
}
</style>
