<template>
    <div id="crumbs" class="crumbs">
        <el-breadcrumb class="breadcrumb" separator=">">
            <el-breadcrumb-item :to="{ path: '/' }">轩天实业</el-breadcrumb-item>
            <el-breadcrumb-item>财务中心</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<style scoped lang="less">
.crumbs {
    height: 54px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    >.breadcrumb{
        line-height: 60px;
    }
}
</style>

