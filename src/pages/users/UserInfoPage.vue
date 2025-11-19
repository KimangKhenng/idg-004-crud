<template>
    <div v-if="loading" class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
        <div class="flex animate-pulse space-x-4">
            <div class="size-10 rounded-full bg-gray-200"></div>
            <div class="flex-1 space-y-6 py-1">
                <div class="h-2 rounded bg-gray-200"></div>
                <div class="space-y-3">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                        <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                    </div>
                    <div class="h-2 rounded bg-gray-200"></div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Hello User: {{ $route.params.userId }}</p>
        <p>Age: {{ user.age }}</p>
        <p>Salary: {{ user.salary }}</p>
        <p>Name: {{ user.name }}</p>
    </div>
</template>
<script>
import axios from 'axios';
const API = "https://68648e915b5d8d03397d8138.mockapi.io/api/v1";
export default {
    async mounted() {
        const userId = this.$route.params.userId
        this.loading = true
        const response = await axios.get(`${API}/users/${userId}`)
        this.user = response.data
        this.loading = false
        console.log(this.user)
    },
    data() {
        return {
            user: {},
            loading: false
        }
    }
}
</script>
