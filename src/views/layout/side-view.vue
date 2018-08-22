<template>
  <div class="sidebar-wrapper">
    <el-menu router class="el-menu-vertical" :collapse="collapse" background-color="#324157" text-color="#fff">
      <div class="logo">
        {{ !collapse ? '管理后台': '管'}}
      </div>
      <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
        <el-submenu :index="index+''" v-if="!item.leaf" :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.title}}</span>
          </template>
          <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
            <!-- <router-link :to="{path:child.path}">{{child.title}}</router-link> -->
            <span>{{child.title}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path" :key="item.children[0].path">
          <i :class="item.icon"></i>
          <span slot="title">{{item.children[0].title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
      return {}
    },
    computed: {
      collapse() {
        return this.$store.state.collapsed
      }
    }
}
</script>
<style scoped>
.logo {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #7b802c;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}

.el-menu-vertical.el-menu--collapse {
  height: 100%;
}

.el-submenu__title i,
.el-menu-item i {
  width: 22px;
  color: #fff;
}
</style>
