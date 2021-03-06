<template>
    <article class="wrapper">
        <h1>Blog作成</h1>
        <el-form ref="form" :rules="rules" label-position="top" :model="form">
            <el-form-item label="タイトル" prop="title">
                <el-input placeholder="タイトル" v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item
                v-for="(tag, index) in form.tags"
                :key="tag.key"
                :prop="'tags.' + index + '.name'"
                :rules="{required: true, message: '必須項目', trigger: 'blur'}"
            >
                <el-autocomplete
                    class=""
                    v-model="tag.name"
                    :fetch-suggestions="tagSearch"
                    value-key="name"
                    placeholder="タグ"
                ></el-autocomplete>
                <el-button @click.prevent="addTag"><i class="el-icon-circle-plus-outline"></i></el-button>
                <el-button @click.prevent="removeTag(tag)"><i class="el-icon-remove-outline"></i></el-button>
            </el-form-item>
            <el-form-item label="本文" prop="content">
                <quill-editor
                    v-model="form.content"
                    ref="myQuillEditor"
                    :options="editorOption"
                >
                </quill-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="fa fa-edit" @click="submitForm('form')">Create</el-button>
                <el-button @click="createCancel()">Cancel</el-button>
            </el-form-item>
        </el-form>
    </article>
</template>

<script>
import axios from '~/plugins/axios'

export default {
    middleware: 'redirectAuthIfNotSignin',
    data () {
        return {
            form: {
                title: '',
                tags : [{
                    name: ''
                }],
                content: ''
            },
            editorOption: {
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        [{'color': []}, {'background': []}],
                        [{'align': []}],
                        [{'indent': '-1'}, {'indent': '+1'}],
                        [{'list': 'ordered'}, {'list': 'bullet'}],
                        ['blockquote', 'code-block'],
                        ['link', 'image', 'video'],
                        ['formula', {'script': 'sub'}, {'script': 'super'}],
                        ['clean'],
                        [{'size': ['small', false, 'large', 'huge']}],
                        [{'header': [2, 3, 4, 5, 6, false]}],
                        [{'font': []}]
                    ],
                    imageResize: {
                        displayStyles: {
                            backgroundColor: 'black',
                            border         : 'none',
                            color          : 'white'
                        },
                        modules: ['Resize', 'DisplaySize', 'Toolbar']
                    }
                }
            },
            rules: {
                title  : [{ required: true, message: '必須項目', trigger: 'blur' }],
                content: [{ required: true, message: '必須項目', trigger: 'blur' }]
            }
        }
    },
    async asyncData () {
        let { data } = await axios.get('/api/tag/all')
        return {
            allTags: data
        }
    },
    methods: {
        tagSearch (tagName, callback) {
            var allTags = this.allTags
            var results = tagName ? allTags.filter(this.createFilter(tagName)) : allTags
            callback(results)
        },
        createFilter (tagName) {
            return (tag) => {
                return (tag.name.toLowerCase().indexOf(tagName.toLowerCase()) === 0)
            }
        },
        removeTag (item) {
            var index = this.form.tags.indexOf(item)
            if (index !== -1) {
                this.form.tags.splice(index, 1)
            }
        },
        addTag () {
            this.form.tags.push({
                name: ''
            })
        },
        onEditorChange ({ quill, html, text }) {
            this.content = html
        },
        submitForm (formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const content = this.form.content.replace(/<pre class="ql-syntax" spellcheck="false">/g, '<pre><code>').replace(/<\/pre>/g, '</code></pre>')
                    axios
                        .post('/api/blog/insert', {
                            title    : this.form.title,
                            tags     : this.form.tags.map(tag => tag.name),
                            content  : content,
                            createdAt: new Date(),
                            isDeleted: false
                        })
                        .then((response) => {
                            this.$message({
                                message: '投稿完了',
                                type   : 'success'
                            })
                            setTimeout(() => {
                                this.$router.push({path: '/blog/1'})
                            }, 1000)
                        })
                        .catch((error) => {
                            this.$message.error('投稿エラー')
                            console.log(error)
                        })
                }
                else {
                    return false
                }
            })
        },
        createCancel () {
            this.$router.push({path: '/blog/1'})
        }
    },
    transition (to, from) {
        if (!from) return 'slide-left'
        if (from.name === 'index' || from.name === 'works' || (to.path.split('/').length >= from.path.split('/').length)) {
            return 'slide-left'
        }
        else {
            return 'slide-right'
        }
    },
    head () {
        return {
            title: 'Blog'
        }
    }
}
</script>

<style lang="scss" scoped>
.quill-editor /deep/ .ql-picker {
    height: unset;
}
</style>
