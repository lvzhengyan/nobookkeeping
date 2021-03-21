<template>
  <div>
    <Layout classPrefix="layout">
      <Number-pad @submit="saveRecord" />
      <Types :value.sync="record.type" />
      <div class="note">
        <Notes
          field-name="备注"
          placeholder="在这里输入备注"
          @update:value="onUpdateNotes"
        />
      </div>
      <Tags />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tags from "@/components/Money/Tags.vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Input.vue";

@Component({
  components: { Tags, NumberPad, Types, Notes },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };

  created() {
    this.$store.commit("fetchRecords");
  }

  onUpdateNotes(notes: string) {
    this.record.notes = notes;
  }

  saveRecord() {
    this.$store.commit("createRecord", this.record);
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