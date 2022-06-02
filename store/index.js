/* eslint-disable import/no-named-as-default-member */
export const state = () => ({
    articles: {},
    title: "New Articles",
    total: 0,
    page: 0,
    showNext: true,
});

export const mutations = {
    setNew(state, data) {
        state.articles = data
    },
    setSearch(state, data) {
        state.articles = data
    },
    setSearchTitle(state, data) {
        state.title = data
    },
    setArticle(state, data) {
        state.articles = data
    },
    setPage(state, data) {
        state.page = data
    },
    setPageNext(state, data) {
        state.showNext = data
    },
    setPush(state, data) {
        if ((data.pagination.currentPage + 1) === data.pagination.totalPages) {
            state.showNext = false
            const newArticle = data.data
            newArticle.forEach(dt => {
                state.articles = [...state.articles, dt]
            });
        } else {
            state.showNext = true
            const newArticle = data.data
            newArticle.forEach(dt => {
                state.articles = [...state.articles, dt]
            });
        }
    }
};

export const actions = {
    async getAll(context, payload) {
        await this.$axios.$get(`article?page=${payload.page}&size=${payload.size}`)
            .then((res) => {
                context.commit('setPush', res)
                context.commit('setSearchTitle', "All Article")
            })
    },
    async getDefault(context, payload) {
        await this.$axios.$get(`article?page=${payload.page}&size=${payload.size}`)
            .then((res) => {
                context.commit('setPageNext', true)
                context.commit('setArticle', res.data)
                context.commit('setSearchTitle', 'All Article')
            })
    },
    async searchData(context, payload) {
        await this.$axios.$get(`article/search?keyword=${payload}`)
            .then((res) => {
                context.commit('setSearch', res.data)
                context.commit('setSearchTitle', `Keyword : ${payload}`)
            })
    },
    async getCategory({ commit }, payload) {
        await this.$axios.get(`article?category=${payload.category}&page=${payload.page}&size=${payload.size}`)
            .then((res) => {
                commit('setPush', res.data)
                commit('setSearchTitle', `Category : ${payload.category}`)
            })
    },
};
