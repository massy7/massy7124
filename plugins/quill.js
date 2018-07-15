import Vue from 'vue'
import VueQuillEditor, {Quill} from 'vue-quill-editor'
import ImageResize from 'quill-image-resize-module'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

Quill.register('modules/imageResize', ImageResize)
Vue.use(VueQuillEditor)
