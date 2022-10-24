<template>
    <div class="flex flex-col w-full prose text-left prose-blue pb-10 mx-auto mt-10 mb-4 border-b border-gray-200 max-w-5xl">
      <div class="w-full mx-auto text-center">
        <h1 class="font-mali text-gray-800 tracking-widest"> {{ titleText }} </h1>
      </div>
    </div>
</template>

<script>
    export default {
        props: {
            titleText: {
                type: String,
                required: true
            }
        }
    }
</script>


<style scoped>
	h1 {
	  font-size: xx-large;
	  font-weight: 800;
	}
</style>
