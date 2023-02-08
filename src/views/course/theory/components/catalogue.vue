<template>
  <div>
    <span>共22个章节 48学时</span>
    <el-tree
      class="coursetree"
      :data="data"
      node-key="id"
      :render-content="renderContent"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1'
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1'
        }, {
          label: '二级 2-2'
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1'
        }, {
          label: '二级 3-2'
        }]
      }],
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
            <el-tag type='info' size='mini' effect='dark'>线上</el-tag>
            <el-tag size='mini' effect='plain'>5学时</el-tag>
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
