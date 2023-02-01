<template>
  <div>
    <el-table
      :data="data"
      style="width:100%"
    >
      <el-table-column
        label="类型"
        width="80"
      >
        <template slot-scope="scope">
          <el-tag :type="tagColor(scope.row.category)">{{ scope.row.category }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="名称"
      >
        <template slot-scope="scope">
          {{ scope.row.name }}
          <el-tag style="margin-left: 5px" v-for="(label,index) in scope.row.labels" :key="index" type="info" size="small">{{ label }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="time"
        label="开始日期"
        width="180"
      />
      <el-table-column
        prop="end"
        label="截止日期"
        width="180"
      />
    </el-table>
  </div>
</template>

<script>
import todos from '@/api/dashboard'
export default {
  name: 'Todos',
  data() {
    return {
      data: todos.todos
    }
  },
  methods: {
    tagColor(category) {
      if (category === '考试') {
        return 'warning'
      } else if (category === '课程') { return 'success' }
    }
  }
}
</script>

<style scoped>

</style>
