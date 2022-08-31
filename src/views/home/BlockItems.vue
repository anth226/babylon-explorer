<script></script>

<template>
    <div id="block-items" class="mt-5">
      <div class="flex mx-auto">
        <div class="flex" v-for="index in 10" :key="index">
          <div class="box"></div>
          <img class="arrow" src="../../assets/arrow.svg" alt="arrow">
        </div>
      </div>
    </div>
</template>

<style scoped>
.box {
  width: 102px;
  height: 90px;
  background: #FFA436;
  border-radius: 10px;
}

.arrow {
  width: 15px;
  height: 20px;
  margin: 25% 10px 0 10px;
}
</style>

