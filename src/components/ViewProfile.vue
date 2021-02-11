<template>
    <div class="view-profile">
        <h2>Profile for {{userId}}</h2>
    </div>
</template>

<script>
export default {
    name: 'ViewProfile',
    data(){
        return {
            // $route refers to the current route
            userId: this.$route.params.user_id
        }
    },
    methods: {
        updateId(){
            this.userId = this.$route.params.user_id;
        }
    },
    watch: {
        // watch for $route, if it changes then invoke 'updateId'
        $route: 'updateId'
    }
}
</script>

<style>

</style>