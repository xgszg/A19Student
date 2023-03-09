<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :show-header="false"
      class="show-table"
      @row-click="handleClick"
    >
      <el-table-column
        width="100px"
      >
        <template v-slot="scope">
          <svg-icon icon-class="code" style="margin-right: 10px" />实验{{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column>
        <template v-slot="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column
        width="50px"
        fixed="right"
      >
        <template v-slot="scope">
          <i style="font-size: 20px" :class="scope.row.status ? 'el-icon-circle-check' : 'el-icon-remove-outline'" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Chapter from '@/api/experiment-chapter'

export default {
  name: 'Chapter',
  data() {
    return {
      tableData: Chapter.chapters
    }
  },
  methods: {
    // 处理行点击
    handleClick(row, event, colum) {
      // 更改章节
      this.$store.commit('chapter/CHANGE_CHAPTER', row.id)
      console.log(this.$store.state.chapter.chapter)
      this.$store.commit('chapter/CHANGE_TAB', 'step')
      console.log(this.$store.state.chapter.tab)
    }
  }
}
</script>

<style lang="scss" scoped>
.show-table{
  cursor: pointer;
  td{
    border-bottom: none;
  }
  .el-table--border{
    border: none;
  }
}
.show-table td,.customer-no-border-table th.is-leaf {
  border:none;
}

</style>
