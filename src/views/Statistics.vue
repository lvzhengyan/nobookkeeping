<template>
  <div>
    <Layout>
      <Tabs
        class-prefix="type"
        :data-source="recordTypeList"
        :value.sync="type"
      />
      <Tabs
        class-prefix="interval"
        :data-source="intervalList"
        :value.sync="interval"
      />
    </Layout>
  </div>
</template>

<script lang='ts'>
import Tabs from "@/components/Tabs.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import intervalList from "@/constants/intervalList";
import recordTypeList from "@/constants/recordTypeList";

@Component({
  components: {
    Tabs,
  },
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>
<style scoped lang="scss">
::v-deep {
  .type-tabs-item {
    background: #c4c4c4;
    &.selected {
      background: white;
      &::after {
        display: none;
      }
    }
  }
  .interval-tabs-item {
    height: 48px;
  }
}
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
</style>