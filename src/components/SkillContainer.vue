<template>
        <SkillCard v-for="i in itemSkills" :key="i.name" :skillName=i.name :skillDescription=i.description :skillIcon=i.icon />
</template>

<script>
    import { defineAsyncComponent } from "vue";
    export default {
        components: {
            SkillCard: defineAsyncComponent( () => import('./Skill.vue'))
        },
        props: {
            skillObj: {
                type: Array,
                required: true,
                default: {
                    name: 'skill name',
                    description: 'skill description',
                    icon: "fa-solid fa-scroll"
                }
            }
        },
        data () {
            let itemSkills = [];
            for (let i = 0 ; i < this.skillObj.length ; i++) {
                itemSkills.push(this.skillObj[i]);
            }
            return {itemSkills,}
        }

    }
</script>
