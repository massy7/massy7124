export const state = () => ({
    blogs: []
})

export const mutations = {
    /**
     * blogの追加
     * @param {number} id ブログ番号
     */
    add (state, id, filePath, title, date, tags, content) {
        if (!state.blogs[id]) {
            state.blogs.push({
                filePath : filePath,
                title    : title,
                date     : date,
                tags     : tags,
                content  : content,
                deletedAt: null
            })
        }
    },
    delete (state, blogId) {
        state.blogs[blogId].deleted = new Date()
    },
    addTag (state, blogId, tags) {
        let newTagIds = new Set()
        newTagIds.add(state.blogs[blogId].tags)
        newTagIds.add(tags)
        state.blogs[blogId].tags = [...new Set(tags)]
    }
}
