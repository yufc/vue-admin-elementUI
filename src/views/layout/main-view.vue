<template>
  <div class="main-container">
    <div class="main-header">
      <i class="fa fa-list-ul menu-icon" @click="toggleCollapse"></i>
      <el-breadcrumb v-if="$route.meta.bread" class="breadcrumb" separator="/">
        <el-breadcrumb-item :key="key+''" v-for="(item,key) in $route.matched">{{ item.meta.title }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="main-header-user">
        <el-dropdown @command="handleClick">
          <span class="el-dropdown-link">
            {{name}}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="main-body">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        title: '管理后台'
      }
    },
    mounted() {
      this.$store.commit('getUser')
    },
    computed: {
      name() {
        return this.$store.state.user.name;
      },
      collapse() {
        return this.$store.state.collapsed
      }
    },
    methods: {
      toggleCollapse() {
        this.$store.commit('toggleCollapse')
        if (!this.collapse) {
          this.title = '管理后台'
        } else {
          this.title = '管'
        }
      },
      logout() {
        this.$confirm('确认退出吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.$router.push('/login');
        }).catch(() => {});
      },
      handleClick(val) {
        switch (val) {
          case 'logout':
            this.logout();
            break;
        }
      }
    }
}
</script>
<style scoped lang="less">
.main-header {
  position: relative;
  height: 50px;
  background-color: #324157;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  .menu-icon {
    display: inline-block;
    float: left;
    font-size: 28px;
    color: #fff;
    cursor: pointer;
    line-height: 50px;
    height: 50px;
    margin: 0 15px 0 5px;
    vertical-align: middle;
  }
}

.main-header-user {
  position: absolute;
  right: 20px;
  top: 0;
  height: 50px;
  line-height: 50px;
  .el-dropdown-link {
    color: #fff;
    cursor: pointer;
  }
}

.main-body {
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  overflow: auto;
  min-width: 1000px;
  height: calc(~ '100vh - 50px');
  z-index: 1;
}
.breadcrumb {
  float: left;
  height: 50px;
  line-height: 50px;
}
</style>
