<template>
    <div>
        <div>
            <div class="mt-3 text-left sm:mt-5">
              <div class="inline-flex items-center w-full">
                <h3 class="text-base font-mali lg:text-3xl">Let's Talk!</h3>
              </div>
              <div class="mt-3 text-sm lg:text-base font-dosis ">
                <p>freelance, 3d printing, circuits, just say it chief</p>
              </div>
            </div>
          </div>

          <div class="mt-6 space-y-2">

            <!-- Name -->
            <div class="relative ">
                <input  type="text" id="nameField"
                        class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-base appearance-none focus:outline-none focus:ring-0 peer peer
                            bg-gray-50 text-neutral-600 placeholder-gray-300 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300
                        " placeholder=" ">
                <label for="nameField" class="cursor-auto absolute text-base duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-gray-400 font-mali font-bold tracking-wide">
                    Name...
                </label>
            </div>

            <!-- Email -->
            <div class="relative ">
                <input  type="text" id="emailField"
                        class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-base appearance-none focus:outline-none focus:ring-0 peer peer
                            bg-gray-50 text-neutral-600 placeholder-gray-300 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300
                        " placeholder=" ">
                <label for="emailField" class="cursor-auto absolute text-base duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-gray-400 font-mali font-bold tracking-wide">
                    Email...
                </label>
            </div>

            <!-- Textarea -->
            <div class="relative">
                <textarea type="text" id="inquiryField"
                        class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-base appearance-none focus:outline-none focus:ring-0 peer peer
                            bg-gray-50 text-neutral-600 placeholder-gray-300 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300
                            resize-none" placeholder=" " rows="6" ></textarea>
                <label for="inquiryField" class="cursor-auto absolute text-base duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-gray-400 font-mali font-bold tracking-wide">
                    Speaking about an inquiry...
                </label>
            </div>

            <!-- Submit -->
            <div class=" mt-4 lg:space-y-2">
                <button type="button"
                class=" rounded-md border border-gray-300 bg-white px-10 py-4 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Submit Inquiry
            </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            email: '',
            textBox: ''
        }
    }
}
</script>
