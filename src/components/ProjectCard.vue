<template>
    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg h-full">
        <div class="flex-shrink-0">
            <img class="object-cover w-full h-48" :src="`${picture}`" />
        </div>
        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
            <div class="flex-1 block mt-2">
                <a href="`${cardURL}`">
                    <p class="text-xl font-semibold text-neutral-600">{{ topic }}</p>
                </a>
                    <p class="mt-3 text-base text-gray-500">{{ text }}</p>
            </div>
            <div class="flex items-center mt-6">
                <div class="ml-3" v-if="tagArray !== null">
                    <p v-for="tag in tagArray" :key="tag" class="text-sm font-medium text-neutral-600 hover:underline">
                    	{{tag}}
                	</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        topic: {
            type: String,
            required: true
        },
        tagArray: {
            type: Array,
            default: null,
            required: false
        },
        text: {
            type: String,
            required: true,
        },
        picture: {
        	type: String,
        	required: false,
        },
        cardURL: {
        	type: String,
        	required: true,
        	default: "https://github.com/FrenzyExists"
        }
    }
}
</script>
