<template>
    <p>Hello User: {{ $route.params.userId }}</p>
</template>
<script>
export default {
    mounted() {
        const userId = this.$route.params.userId
        /**
         * https://68648e915b5d8d03397d8138.mockapi.io/api/v1/users/5
         */
    }
}
</script>
