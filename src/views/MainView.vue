<template>
    <main>
        <Hero/>
    </main>
    <div>

        <Title titleText="My skills"/>

        <section class="px-11 lg:px-24  py-12 flex flex-col w-full prose text-left prose-blue pb-10 mx-auto mt-10 mb-4 max-w-5xl">
            <!-- Info -->
            <div class="grid grid-cols-1 gap-12 md:gap-18 sm:gap-12 sm:grid-cols-2 md:grid-cols-3">		  
                <div class="sm:flex lg:items-start group">
			        <div>
                        <span class="text-gray-500">What can I do you ask?</span>
                        <h1 class="mt-3 font-medium leading-9 text-gray-800">
                            Simple. I can make this awesome things
                        </h1>
                        <p class="mt-2 text leading-normal text-gray-500">
                            I believe engineers should be flexible, able to do many things,
                            because flexibility is what you and your business need
                        </p>
                    </div>
		        </div>

                <Skills :skillObj=skills />

            </div>
        </section>
        <!-- Tools - Couldn't find a way to put this in a for loop and the way I was thinking to do so would increase the complexity way too much -->
        <section class="flex flex-col w-full prose text-left prose-blue pb-10 mx-auto mt-10 mb-4 max-w-5xl">
            <div class="flex flex-col items-center px-5 py-8 mx-auto lg:px-24">
                <div>
                    <div class="flex flex-wrap py-8 md:flex-nowrap items-center">
                        <div class="prose md:flex-grow prose-md lg:pr-12 flex flex-wrap justify-center">
                            <font-awesome-icon icon="fa-brands fa-java" size="3x" class="cursor-pointer p-3.5 duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 rounded-md w-9 h-9 text-slate-800 m-3" />
                            <font-awesome-icon icon="fa-brands fa-python" size="3x" class="cursor-pointer p-3.5 duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 rounded-md w-9 h-9 text-slate-800 m-3" />
                            <font-awesome-icon icon="fa-brands fa-html5" size="3x" class="cursor-pointer p-3.5 duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 rounded-md w-9 h-9 text-slate-800 m-3" />
                            <font-awesome-icon icon="fa-brands fa-css3" size="3x" class="cursor-pointer p-3.5 duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 rounded-md w-9 h-9 text-slate-800 m-3" />
                            <font-awesome-icon icon="fa-brands fa-react" size="3x" class="cursor-pointer p-3.5 duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 rounded-md w-9 h-9 text-slate-800 m-3" />
                            <font-awesome-icon icon="fa-brands fa-vuejs" size="3x" class="cursor-pointer p-3.5 duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 rounded-md w-9 h-9 text-slate-800 m-3" />
                            <font-awesome-icon icon="fa-brands fa-js" size="3x"  class="cursor-pointer p-3.5 duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 rounded-md w-9 h-9 text-slate-800 m-3"/>
                            <p class="cursor-pointer duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 text-slate-800 text-center text-icon inline-flex m-3 w-16 rounded-md h-16 items-center justify-center">C</p>
                            <p class="cursor-pointer duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 text-slate-800 text-center text-icon inline-flex m-3 w-16 rounded-md h-16 items-center justify-center">C++</p>
                            <p class="cursor-pointer duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 m-3 rounded-md p-3"><IconBash class="fill-slate-800 w-10 h-10"/></p>
                            <p class="cursor-pointer duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 m-3 rounded-md p-3"><IconKotlin class="fill-slate-800 w-10 h-10"/></p>
                            <p class="cursor-pointer duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 m-3 rounded-md p-3"><IconArduino class="fill-slate-800 w-10 h-10"/></p>
                            <p class="cursor-pointer duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 m-3 rounded-md p-3"><IconTailwind class="fill-slate-800 w-10 h-10"/></p>
                            <font-awesome-icon icon="fa-brands fa-git-alt" size="3x" class="cursor-pointer p-3.5 duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 rounded-md w-9 h-9 text-slate-800 m-3" />
                            <p class="cursor-pointer duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 m-3 rounded-md p-3"><IconFreecad class="fill-slate-800 w-10 h-10"/></p>
                            <font-awesome-icon icon="fa-brands fa-linux" size="3x"  class="cursor-pointer p-3.5 duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 rounded-md w-9 h-9 text-slate-800 m-3"/>
                            <font-awesome-icon icon="fa-brands fa-figma" size="3x"  class="cursor-pointer p-3.5 duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 rounded-md w-9 h-9 text-slate-800 m-3"/>
                            <p class="cursor-pointer duration-200 bg-slate-100 hover:bg-slate-200 hover:-translate-y-1 m-3 rounded-md p-3"><IconPosgresql class="fill-slate-800 w-10 h-10"/></p>
                        </div>
                        <div class="flex flex-col flex-shrink-0 px-4 mb-6 md:w-64 md:mb-0">
                            <strong class="flex text-2xl font-thin leading-none text-left text-neutral-600 lg:text-4xl">
                                Every engineer is armed with a toolbox, these are my tools
                            </strong>
                        </div>
                    </div>
                </div>
            </div>

            <Carousel :items-to-show="2.5" :wrap-around="true" :autoplay="4200" >
            <Slide v-for="slide in items" :key="slide.id">
                <Card class="cardboi" :text=slide.description :topic=slide.projectName picture="https://images.unsplash.com/photo-1561654791-00316c79efa8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60"/>
                <!-- <div class="carousel__item">{{ slide }}</div> -->
            </Slide>
        
            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>

        </section>




        
        <Title titleText="My Research"/>

        <section>

        </section>

        
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue';
    import { projectObj } from "../assets/projects";

    export default {
        components: {
        Card: defineAsyncComponent( () => import ('../components/ProjectCard.vue')),
        Hero: defineAsyncComponent( () => import('../components/Hero.vue')),
        Title: defineAsyncComponent( () => import('../components/HomeTitle.vue')),
        Skills: defineAsyncComponent( () => import('../components/SkillContainer.vue')),
        IconArduino: defineAsyncComponent( () => import('../components/icons/IconArduino.vue')),
        IconBash: defineAsyncComponent( () => import('../components/icons/IconBash.vue')),
        IconPosgresql: defineAsyncComponent( () => import('../components/icons/IconPosgresql.vue')),
        IconKotlin: defineAsyncComponent( () => import('../components/icons/IconKotlin.vue')),
        IconFreecad: defineAsyncComponent( () => import('../components/icons/IconFreecad.vue')),
        IconTailwind: defineAsyncComponent( () => import('../components/icons/IconTailwind.vue')),
        },
        data: () => {
            let skills = [
                {
                    name: "Programming Embedded Systems",
                    description: "Simple circuits that make my life a bit easier",
                    icon: "fa-solid fa-microchip"
                },
                {
                    name: "Databases",
                    description: "Building em with Postgresql, Prisma, and deploying on Heroku or Netlify",
                    icon: "fa-solid fa-database"
                },
                {
                    name: "3D Printing",
                    description: "Tinkering around with my Fokoos Odin 5-F3",
                    icon: "fa-solid fa-cubes"
                },
                {
                    name: "Full-Stack",
                    description: "I can build web pages with VueJS or React",
                    icon: "fa-solid fa-layer-group"
                },
                {
                    name: "Scripting and Automatation",
                    description: "Using python or bash you can make your life easier, just like I do!",
                    icon: "fa-solid fa-scroll"
                }
            ];
            let items = [];
            for (let i = 0; i < projectObj.length; i++) {
                items.push(projectObj[i]);
            }
            return {skills, items}
        }
    }
</script>

<style scoped>
	.text-icon {
		font-size: 2rem;
		font-weight: bolder;
	}
	h1 {
	  font-size: xx-large;
	  font-weight: 800;
	}
	h2 {
	  font-size: x-large;
	  font-weight: 800;
	}
	p {
	  font-family: Dosis;
      font-size: large
	}


    .carousel__item {
      min-height: 200px;
      width: 100%;
      background-color: #4f728a;
      color:#152f41;
      font-size: 20px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .carousel__slide {
      padding: 10px;
    }
    
    .carousel__prev,
    .carousel__next {
      box-sizing: content-box;
      border: 5px solid white;
      opacity: 0.1;
    }

    .carousel__slide--sliding {
        transition: 0.57s;   
    }

    .carousel__slide--next,
    .carousel__slide--prev {
        opacity: 1;
        transform: scale(0.92);
    }

    .carousel__slide--active {
        opacity: 1;
        transform: scale(1);
    }
    .cardboi {
        max-height: 97%;
    }

 
</style>
