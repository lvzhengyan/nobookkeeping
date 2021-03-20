<template>
  <div>
    <Layout classPrefix="layout">
      <Number-pad @update:value="onUpdateAmount" @submit="saveRecord" />
      <Types :value.sync="record.type" />
      <div class="note">
        <Notes
          field-name="备注"
          placeholder="在这里输入备注"
          @update:value="onUpdateNotes"
        />
      </div>
      <Tags :allTags.sync="tags" @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import Tags from "@/components/Money/Tags.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Input.vue";
import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";
// 数据迁移（迁移可复用）
// const version = window.localStorage.getItem("version") || "0";
// const recordList: RecordItem[] = JSON.parse(
//   window.localStorage.getItem("recordList") || ""
// );
// window.localStorage.getItem("version");
// if (version === "1.0.0") {
//   recordList.forEach((record) => {
//     record.createdAt = new Date(0);
//   });
//   window.localStorage.setItem("recordList", JSON.stringify(recordList));
// }
// window.localStorage.setItem("version", "1.0.1");

const recordList = recordListModel.fetch();

@Component({
  components: { Tags, NumberPad, Types, Notes },
})
export default class Money extends Vue {
  tags = window.tagList;
  recordList: RecordItem[] = recordList;
  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };

  onUpdateTags(tags: string[]) {
    this.record.tags = tags;
  }
  onUpdateNotes(notes: string) {
    this.record.notes = notes;
  }
  onUpdateAmount(amount: string) {
    this.record.amount = parseFloat(amount);
  }

  saveRecord() {
    recordListModel.create(this.record);
  }

  @Watch("recordList")
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.note {
  padding: 12px 0;
}
</style>
<style lang="scss" scoped>
</style>