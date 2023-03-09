<template class="user-card">
  <!--TODO: 更改图标样式-->
  <div>
    <!--卡片-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户</span>
      </div>
      <!--用户信息-->
      <div class="user-items">
        <div class="user-avatar">
          <el-avatar shape="circle" :size="100" :fit="fit" :src="url" />
        </div>
        <div class="user-name">
          <span id="user-name">{{ $store.state.user.name }}</span>
        </div>
        <div class="user-role">
          {{ user.role }}
        </div>
        <div class="user-info-header">
          <i class="el-icon-user" /><span>个人简介:</span>
        </div>
        <div class="user-intro">
          <!--          TODO: 添加vuex实现简介数据互通-->
          {{ user.intro }}
        </div>
        <div class="user-info-header">
          <i class="el-icon-user" />
          <span>社交方式:</span>
        </div>
        <div>
          <span class="user-social-icon"><svg-icon icon-class="wechat" /></span>
          <span class="user-social-text">张佳</span>
        </div>

      </div>
    </el-card>

  </div>
</template>

<script>

export default {
  name: 'UserCard',
  data() {
    return {
      user: {
        name: '张佳',
        role: '学生',
        intro: '这里是个人简介'
      },
      fit: 'contain',
      url: 'https://snz04pap001files.storage.live.com/y4m-AveJOL6Bt7kQQEWolmDjUa3tezMydmpNlhGjxB464X3XQUyYZw-AqtFIfbrJfnJ02v4eb-8Jt0GwkeQZCc7WRsrQua8FG2SPSfnqJ0evyAuWpd3gFFWugncVNOzmuUVdGFiPiBaTwOCH0z_duK0hAPGQoJRAtQgB4jtpJv7lZmqqw3wQXSF7zWFCxrOvQxp?width=700&height=700&cropmode=none'
    }
  }
}
</script>

<style lang="scss" scoped>
//.user-items{
//  height:200px;
//}

.user-avatar{
  text-align: center;
}

.user-name,.user-role{
  margin-top: 10px;
  text-align: center;
}
.user-role{
  margin-bottom: 10px;
}
.user-info-header{
  border-bottom: 1px solid #dfe6ec;
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-weight: bold;
}

.user-intro{
  height: 50px;
}

.user-social-icon{
  font-size:25px
}
.user-social-text{
  margin-left:10px
}
.user-name{
  font-size: 30px;
}
</style>
