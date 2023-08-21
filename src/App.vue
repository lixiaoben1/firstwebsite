<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <FirstHeader> </FirstHeader>
        <FirstList></FirstList>
        <FirstTopic></FirstTopic>
        <SecondList></SecondList>
        <!--        <FirstFooter></FirstFooter>-->
      </div>
    </div>
  </div>
</template>

<script>
import FirstHeader from './components/FirstHeader.vue'
import FirstList from './components/FirstList'
import FirstTopic from '@/components/FirstTopic.vue'
import SecondList from '@/components/SecondList.vue'
// import FirstFooter from './components/FirstFooter'
export default {
  name: 'App',
  components: { FirstTopic, FirstHeader, FirstList, SecondList }
}
</script>

<style>
body {
  width: 100%;
  height: 900px;
  background-image: url('./assets/picture/background.png');
  background-size: cover;
  position: relative;
}
</style>
