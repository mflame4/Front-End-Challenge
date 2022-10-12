<template>
  <transition name="fade">
    <div class="vue-modal-overlay" v-if="open" @click="close">
      <div class="vue-modal" v-if="open">
        <transition name="drop-in">
          <div class="vue-modal-inner" v-if="open">
            <div class="vue-modal-content" @click.stop>
              <div class="vue-modal-header">
                <slot name="vue-modal-header"> <h1>Additional info</h1> </slot>
              </div>
              <div class="vue-modal-body">
                <slot />
              </div>
              <div class="vue-modal-footer">
                <slot name="footer">
                  <button type="button" class="btn btn-dark" @click="close">
                    Close
                  </button>
                </slot>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import { onMounted, onUnmounted } from "vue";

export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  setup(_, { emit }) {
    const close = () => {
      emit("close");
    };
    const handleKeyup = (event) => {
      if (event.keyCode === 27) {
        close();
      }
    };
    onMounted(() => document.addEventListener("keyup", handleKeyup));
    onUnmounted(() => document.removeEventListener("keyup", handleKeyup));
    return { close };
  },
};
</script>

<style scoped src="@/assets/main.css"></style>
