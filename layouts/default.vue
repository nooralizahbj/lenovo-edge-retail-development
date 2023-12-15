<template>
  <div>
    <slot></slot>
    <Footer />
  </div>
</template>

<style lang="scss">
@import url(https://fonts.bunny.net/css?family=montserrat:400,400i,600,700,900);
@import 'normalize.css/normalize.css';

:root {
  --signature-red: #e1251b;
  --deep-red-1: #64131e;
  --deep-red-2: #871c23;
  --mid-red-1: #b8252e;
  --mid-red-2: #f26a52;
  --mid-red-3: #ffb9a2;
  --pale-red-1: #f0c7bf;
  --pale-red-2: #faeceb;

  --deep-purple-1: #4d144a;
  --deep-purple-2: #7a126b;
  --pale-purple-1: #d9c1d8;
  --pale-purple-2: #f1e1ed;

  --deep-blue-1: rgb(12 24 79);
  --deep-blue-2: #294e95;
  --pale-blue-1: rgb(201 208 240);
  --pale-blue-2: #eaeef5;

  --black: #1e0013;
  --deep-gray: #4e444e;
  --mid-gray: #aba8b1;
  --pale-gray: #e6e2e4;
  --white: #fff;

  --navbar-height: 4rem;
  --plyr-color-main: #e1251b;
}

html {
  font-size: 16px;
  @media (min-width: 800px) {
    font-size: 12px;
  }
  @media (min-width: 1200px) {
    font-size: 14px;
  }

  scroll-behavior: smooth;
}

body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  background: var(--white);
  color: var(--deep-blue-2);
}
</style>
