import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



export const useContactStore = defineStore({
  id: 'contact',
  state: () => ({
    users: [],
    numberCards: 120,
    userUrl: "https://randomuser.me/api/?results=",
    title: "Contact List",
    isLoading: false,
    error: null,
    selectedUser: [],
  }),
  actions: {
    getUsers() {
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
    selectItem(user, users) {
      users.id = !users.id;
      this.selectedUser = user.login;
      this.isOpen = true;
    }
  }
})
