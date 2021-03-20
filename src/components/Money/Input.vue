<template>
  <div>
    <label class="notes">
      <span class="notes-text">{{ this.fieldName }}</span>
      <input
        :value="value"
        @input="onValueChange($event.target.value)"
        type="text"
        :placeholder="placeholder"
      />
    </label>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component, Watch, Prop } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  @Prop({ default: "" }) value!: string;

  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;

  onValueChange(value: string, oldValue: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  padding-left: 16px;
  display: block;
  padding: 0 16px;
  display: flex;
  align-items: center;
  .notes-text {
    padding-right: 16px;
  }
  input {
    height: 44px;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>