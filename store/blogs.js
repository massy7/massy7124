export const state = () => ({
    blogs: []
})

export const mutations = {
    /**
     * blogをストアに
     * @param {number} id
     * @param {string} title
     * @param {array}  tags
     * @param {string} content
     * @param {date}   createdAt
     */
    add (state, id, title, tags, content, createdAt) {
        state.blogs.push({
            _id      : id,
            title    : title,
            tags     : tags,
            content  : content,
            createdAt: createdAt
        })
    }
}
