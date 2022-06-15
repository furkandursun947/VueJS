<template>
    <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" :style="{ 'width' : (count * 10).toString() + '%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        {{count}}/10
      </div>
    </div>
</template>


<script>
export default {
    props: {
        count: {
            default: 0,
            type: Number,
        }
    },
    data(){
        return {
        }
    }    
}
</script>


<style scoped>

</style>