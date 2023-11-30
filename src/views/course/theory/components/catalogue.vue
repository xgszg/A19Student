<template>
  <div>
    <span>共{{ chapterSum }}个章节 {{ timeNumSum }}学时</span>
    <el-tree
      class="coursetree"
      :data="catalogueData"
      node-key="id"
      :render-content="renderContent"
    />
  </div>
</template>

<script>
export default {
  props: {
    'catalogueData': {
      type: Array,
      default: () => []
    },
    'chapterSum': {
      type: Number,
      default: 0
    },
    'timeNumSum': {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    renderContent(h, { node, data, store }) {
      return (
        <span class='custom-tree-node'>
          <span>{node.label} </span>
          <span>
            <el-tag type='info' size='mini' effect='dark'>{data.state}</el-tag>
            <el-tag size='mini' effect='plain'>{data.timeNum}学时</el-tag>
          </span>
        </span>)
    }
  }
}
</script>
<style scoped>
.coursetree /deep/ .coursetree{
  font-size: 18px;
}
.coursetree /deep/ .el-tree-node__content{
  height: 40px;
}
.coursetree /deep/ .el-tree-node__expand-icon{
    font-size: 18px;
}
</style>
