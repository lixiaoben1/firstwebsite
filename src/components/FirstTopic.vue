<template>
  <div>
    <div class="topic-nav">web-nav</div>
    <div class="topic">
      <div class="topic-item">
        <span class="topic-item-round"><img style="opacity: 0.5; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)" src="../assets/picture/图标/bx-shopping-bag.svg" alt="" /></span>
        <span data-id="1" style="vertical-align: middle; margin-left: 10px">Shopping store</span>
      </div>
      <hr />
      <div class="topic-item">
        <span class="topic-item-round"><img style="opacity: 0.5; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)" src="../assets/picture/图标/bx-message-square-dots.svg" alt="" /></span>
        <span data-id="2" style="vertical-align: middle; margin-left: 10px">Chat-gpt</span>
      </div>
      <hr />
      <div class="topic-item">
        <span class="topic-item-round"><img style="opacity: 0.5; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)" src="../assets/picture/图标/bx-popsicle.svg" alt="" /></span>
        <span data-id="3" style="vertical-align: middle; margin-left: 10px">Entertainment</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstTopic'
}
</script>

<style scoped>
/*region主题*/
.topic-nav {
  position: absolute;
  font-family: 'Microsoft YaHei', 'alimama', serif;
  background-image: linear-gradient(to right, #002b79, #216cc4);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  top: 310px;
  left: 20px;
  font-size: 20px;
  font-weight: bold;
}

.topic {
  width: 90%;
  height: 200px;
  display: flex;
  box-sizing: border-box;
  padding: 0 20px;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 30px;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow:
    inset 1px 1px 6px rgba(255, 255, 255, 0.3),
    1px 15px 15px rgba(0, 0, 0, 0.1);
}
.topic-item {
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;

  /*background-color: #628bd7;*/
  height: 30px;
  /*border-radius: 50%;*/
}
.topic-item-round {
  width: 30px;
  vertical-align: middle;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  box-shadow:
    inset 1px 1px 6px rgba(255, 255, 255, 0.3),
    1px 15px 15px rgba(0, 0, 0, 0.1);

  display: inline-block;
}
hr {
  border: #888888 solid 1px;
}
/*endregion主题*/
</style>
