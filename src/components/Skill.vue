<template>
    <div class="justify-evenly transition duration-300 ease-in-out delay-150 hover:cursor-pointer md:hover:-translate-y-6 sm:flex flex-col rounded-xl items-center text-center group w-full max-w-lg mx-auto my-4 bg-white shadow-xl p-3">
        <div class="flex-shrink-0 mb-4 sm:mb-0">
                <font-awesome-icon :icon="`${skillIcon}`" class="w-full text-gray-800 sm:h-20 sm:w-20 object-cover"/>
        </div>
        <div>
            <p class="font-dosis mt-3 text-lg font-medium leading-6 text-gray-800">
                {{ skillName }}
            </p>
            <p class="font-dosis mt-2 text leading-normal text-gray-500">
                {{ skillDescription }}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            skillName: {
                type: String,
                required: true
            },
            skillDescription: {
                type: String,
                required: false
            },
            skillIcon: {
                type: String
            }
        }
    }
</script>

