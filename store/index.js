
export const state = () => ({
  loadingResults: false
})

export const mutations = {
  setLoading (state, loading) {
    state.loadingResults = loading
  }
}
