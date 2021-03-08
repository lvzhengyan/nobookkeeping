<template>
  <div class="number-pad">
    <div class="output">100</div>
    <div class="buttons clearfix">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清空</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="ok">OK</button>
      <button class="zero">0</button>
      <button>.</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "number-pad",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/all.scss";

.number-pad {
  .output {
    font-size: 36px;
    font-family: Consolas, monospace;
    padding: 9px 18px;
    text-align: right;
    // 只有上下阴影
    box-shadow: inset 0 -3px 3px -3px fade_out(black, 0.7),
      inset 0 3px 3px -3px fade_out(black, 0.7);
  }
  .buttons {
    @extend %clearfix;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background-color: transparent;
      border: none;
      &.ok {
        height: 64 * 2px;
        float: right;
      }
      &.zero {
        width: 25 * 2%;
      }
      $bg: #f2f2f2;
      &:nth-child(1) {
        background-color: $bg;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background-color: darken($bg, 4%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background-color: darken($bg, 4 * 2%);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background-color: darken($bg, 4 * 3%);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background-color: darken($bg, 4 * 4%);
      }
      &:nth-child(14) {
        background-color: darken($bg, 4 * 5%);
      }
      &:nth-child(12) {
        background-color: darken($bg, 4 * 6%);
      }
    }
  }
}
</style>