<template>
  <div id="main">
    <header id="header">
      <span class="logo">CODECLAN</span>
      <div></div>
    </header>
    <aside id="left-side">사이드 메뉴 영역</aside>
    <div id="body">
      <RouterView />
    </div>
  </div>
</template>

<script >
  export default {
    name: 'Layout',
    data() {
      return {
        niname : 'code',
      }
    }
  }
</script>

<style lang="scss" scoped>
#main {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

#header {
  position: relative;
  width: 100%;
  height: 60px;
  margin: 0;
  padding: 0;
  background-color: #e6e6e6;
  display: flex;
  align-items: center;

  .logo {
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
  }
}

#left-side {
  position: relative;
  width: 10%;
  height: calc(100vh - 60px);
  flex-basis: 10%;
  border: 1px solid yellow
}

#body {
  position: relative;
  width: 10%;
  height: calc(100vh - 60px);
  flex-basis: 90%;
  border: 1px solid red;
}
</style>