<template>
  <div class="top-banner">
    <box-icon pull="right" size="40px" name="menu"></box-icon>
    <div class="logo">QLRR</div>
    <div class="topbar-nav">
      <div class="search">
        <div :class="{ serchAnimate: !unflip, searchInput: unflip }">
          <input v-show="!unflip" ref="autoFocus" class="search-demo" @blur="todoBlur()" type="text" />
        </div>
        <a @click.prevent="flip" href="#"><img style="opacity: 0.5; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)" src="../assets/picture/图标/bx-search.svg" alt="" /></a>
      </div>
      <div class="login-top">登</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstHeader',
  data() {
    return {
      unflip: true
    }
  },
  methods: {
    flip() {
      this.unflip = !this.unflip
      setTimeout(() => this.$refs.autoFocus.focus(), 200)
    },
    todoBlur() {
      this.unflip = !this.unflip
    }
  }
}
</script>

<style scoped>
.top-banner {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topbar-nav {
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;
  font-size: 12px;
}
@keyframes logo {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: 101px;
  }
}
.logo {
  font-size: 25px;
  padding: 0 15px;
  font-family: 'Microsoft YaHei', 'alimama', serif;
  font-weight: bold;
  line-height: 50px;
  background-image: linear-gradient(to right, orange, purple, orange);
  background-clip: text;
  background-position-x: 0;
  -webkit-background-clip: text;
  color: transparent;
  animation: logo 3s linear infinite;
}

.search {
  width: 150px;
  //margin-top: 13px;
  margin-right: 15px;
  /*background-color: #0ac2f3;*/
  height: 36px;
  position: relative;
}
.search-demo {
  width: 100px;
  height: 25px;
  position: absolute;
  font-size: 16px;
  z-index: 3;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
  background: transparent;
}
.search a {
  position: absolute;
  right: 18px;
  top: 18px;
}
.searchInput {
  width: 36px;
  height: 36px;
  background-color: red;
  position: absolute;
  right: 0;
  transition: all 0.2s;
  border-radius: 18px;
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow:
    inset 1px 1px 5px rgba(255, 255, 255, 0.5),
    0 20px 20px rgba(0, 0, 0, 0.15);
}
.serchAnimate {
  width: 150px;
  height: 36px;
  background-color: red;
  position: absolute;
  right: 0;
  transition: all 0.2s;
  border-radius: 18px;
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow:
    inset 1px 1px 5px rgba(255, 255, 255, 0.5),
    0 20px 20px rgba(0, 0, 0, 0.15);
}
.login-top {
  width: 40px;
  font-size: 18px;
  height: 40px;
  font-family: 'alimama', serif;
  font-weight: 700;
  backdrop-filter: blur(4px);
  border-radius: 45%;
  text-align: center;
  line-height: 40px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow:
    inset 1px 1px 5px rgba(255, 255, 255, 0.5),
    0 20px 20px rgba(0, 0, 0, 0.15);
}
</style>
