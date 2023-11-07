<template>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "intelone-mono-font-family-regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/intelone-mono-font-family-regular.woff2")
    format("woff2");

  font-style: normal;
  unicode-range: U+0020-007F;
}
@font-face {
  font-family: "S-CoreDream-3Light";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  unicode-range: U+AC00-D7A3;
}
::-webkit-scrollbar {
  background-color: #0f172a;
}
::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 10px;
}
#app {
  font-family: "intelone-mono-font-family-regular", "S-CoreDream-3Light",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}
body {
  background-color: #0f172a;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
