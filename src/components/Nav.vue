<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label" />
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" />
      统计
    </router-link>
  </nav>
</template>

<script lang='ts'>
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/all.scss";
/**
    scoped 原理
    会在 div 上加上一个随机的 data-v-xxx
        <div class="nav" data-v-xxx></div>
    然后在选择器上写成 .nav[data-v-xxx] 实现
*/
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  > .item {
    font-size: 12px;
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      width: 32px;
      height: 32px;
    }
  }

  > .item.selected {
    color: $color-highlight;
  }
}
</style>