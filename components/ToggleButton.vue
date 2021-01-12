<template>
    <div>
        <!-- Toggle Button -->
        <label for="toogleA" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative">
                <!-- input -->
                <input id="toogleA" type="checkbox" class="hidden" @click="$store.commit(event)" :checked="$store.state.darkMode"/>
                <!-- line -->
                <div class="toggle__line w-6 h-2 bg-gray-400 rounded-full shadow-inner"></div>
                <!-- dot -->
                <div class="toggle__dot absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0"></div>
            </div>
            <!-- label -->
            <div :class="{'text-white': $store.state.darkMode}" class="ml-3 font-medium text-xs">
                {{text}}
            </div>
        </label>
        
    </div>
</template>

<script>
export default {
    name: 'togglebutton',
    props: ['text', 'event']
}
</script>

<style scoped>
.toggle__dot {
  top: -.25rem;
  left: -.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #328fdb;
}
</style>