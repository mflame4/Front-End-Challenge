<template>
  <div id="app">
    <div class="container">
      <!-- Title section -->
      <!-- Refresh button in case we haven't randomized data for specific first letter  -->
      <div class="row title">
        <div class="col">
          <h1>{{ title }}</h1>
        </div>
        <div class="col col-auto align-self-center text-right">
          <button
            class="btn btn-primary btn-lg"
            @click="contactStore.getUsers"
          >
            Refresh List
          </button>
        </div>
      </div>
      <!-- State section  -->
      <!-- Display loading status till we get data from the request -->
      <!-- Display error from the request -->
      <!-- Display error if we haven't received data -->
      <!-- Also possible to use throw new Error ('some server side issues, try again later') to check server side errors -->
      <p class="loadingState" v-if="isLoading">Loading...</p>
      <p class="errorState" v-else-if="!isLoading && error">{{ error }}</p>
      <p
        class="errorState"
        v-else-if="!isLoading && (!users || users.length === 0)"
      >
        No data - please refresh the list.
      </p>
      <!-- Contacts section  -->
      <transition-group v-else name="list" tag="div" class="row">
        <div v-for="(user, key) in users" :key="key" class="col-md-6 col-lg-4">
          <div class="user">
            <div class="user_header">
              <img
                :src="user.picture.large"
                :alt="user.name.first + ' ' + user.name.last"
                class="rounded img-thumbnail"
              />
              <div class="user_info">
                {{ user.name.title }} {{ user.name.first }} {{ user.name.last
                }}<br />
                <a class="user_phone" :href="'tel:' + user.phone"
                  >{{ user.phone }}
                </a>
              </div>
            </div>
            <div class="user_email">
              <a :href="'mailto:' + user.email">{{ user.email }}</a>
            </div>
            <div class="user_address">
              <p class="user_address_text">
                {{ user.location.street.number }} {{ user.location.city }}
              </p>
            </div>
            <button
              type="button"
              class="btn btn-dark"
              @click="selectItem(user, users)"
            >
              More Info
            </button>
          </div>
        </div>
      </transition-group>
    </div>
    <!-- Modal section  -->
    <Modal :open="isOpen" @close="isOpen = !isOpen">
      <div>
        <div class="user_login">
          <p><a class="loginDetails">Uuid:</a> {{ selectedUser.uuid }}</p>
          <p>
            <a class="loginDetails">Username:</a> {{ selectedUser.username }}
          </p>
          <p>
            <a class="loginDetails">Password:</a> {{ selectedUser.password }}
          </p>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "@/components/modal/Modal.vue";
import { ref } from "vue";
import { storeToRefs } from 'pinia'
import { useContactStore } from "@/stores/contact";

const { posts, loading, error } = storeToRefs(useContactStore());
const { contactStore } = useContactStore();


export default {
  components: { Modal },
  setup() {
    const contactStore = useContactStore();
    const isOpen = ref(false);
    return { isOpen };
  },
  props: {
    tabs: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      users: [],
      numberCards: 120,
      userUrl: "https://randomuser.me/api/?results=",
      title: "Contact List",
      isLoading: false,
      error: null,
      selectedUser: [],
    };
  },
  methods: {
    getUsers: function () {
      this.isLoading = true;
      this.error = null;
      axios
        .get(this.userUrl + this.numberCards)
        .then((rsp) => {
          this.isLoading = false;
          this.users = rsp.data.results
            .sort((a, b) => a.name.last.localeCompare(b.name.last))
            .filter((user) => user.name.first.charAt(0) == this.tabs);
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = "Failed to fetch data - try again later.";
        });
    },
    // Few more options for API requests - we can use XMLHttpRequest
    //   var userUrl = https://randomuser.me/api/?results=120;
    //   var request = new XMLHttpRequest();
    //   request.open("GET", url);
    //   request.responseType = 'json';
    //   request.send();
    //   request.onload = ()=> this.users = request.response.results;

    //   Also ajax or fetch
    //    apiRequest() {
    //        $.ajax({
    //    url: 'https://randomuser.me/api/?results=120',
    //    dataType: 'json',
    //    success: function(data) {
    //      /.../
    //    }
    //        });
    //   fetch("https://randomuser.me/api/?results=120")
    //     .then((responce) => {
    //       if (responce.ok) {
    //         return responce.json();
    //       }
    //     })
    //     .then((data) => {
    //       const results = [];
    //       for (const id in data) {
    //         results.push({
    //          /.../
    //         });
    //       }
    //       this.results = results;
    //     });
    // },

    selectItem(user, users) {
      users.id = !users.id;
      this.selectedUser = user.login;
      this.isOpen = true;
    },
  },
  created: function () {
    this.getUsers();
  },
};
</script>

<style scoped src="@/assets/main.css"></style>