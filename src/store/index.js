import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      todos: [
        {
          title: "Test title #1",
          description: "Some text description",
          status: false,
        },
        {
          title: "Finished task",
          description: "Finished yesterday",
          status: true,
        },
        {
          title: "Buy powerbank for laptop",
          description: "It`s important for work",
          status: false,
        },
      ],
    };
  },
  getters: {
    UNDONE_TODOS: (state) => {
      return state.todos.filter((item) => item.status === false);
    },
    DONE_TODOS: (state) => {
      return state.todos.filter((item) => item.status === true);
    },
  },
  mutations: {
    fetch(state) {
      const localTodos = localStorage.getItem("todos");
      if (localTodos) {
        state.todos = JSON.parse(localTodos);
      }
    },
    update(state) {
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    saveItem(state, item) {
      state.todos.push(item);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
  actions: {
    switchStatus({ commit, state }, item) {
      const index = state.todos.findIndex((i) => {
        i.title === item.title && i.description === item.description;
      });
      item.status = !item.status;
      state.todos[index] = item;
      commit("update");
    },
    deleteItem({ commit, state }, item) {
      const index = state.todos.findIndex((i) => {
        i.title === item.title && i.description === item.description;
      });
      state.todos.pop(item);
      commit("update");
    },
  },
});
