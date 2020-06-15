<template>
  <Container title="create a product">
    <template slot="content">
      <ValidationObserver v-slot='{invalid}'>
        <form>
          <ValidationProvider
            v-slot="{errors}"
            mode="aggressive"
            rules="required"
            persist
          >
            <input
              type="text"
              name="name"
              v-model="name"
              placeholder="Name"
            >
            <span class="error-msg">{{errors[0]}}</span>
          </ValidationProvider>
          <UploadImages
            @upload-success="uploadImageSuccess"
            @before-remove="beforeRemove"
            @edit-image="editImage"
            @data-change="dataChange"
            @limited-exceeded="limitExceeded"
          />
          <ValidationProvider
            v-slot="{errors}"
            mode="aggressive"
            rules="required"
            persist
            v-for="(specification, counter) in specifications"
            :key="counter"
          >
            <span class="inline"></span>
            <input
              type="text"
              name="specification"
              v-model.lazy="specification.value"
              placeholder="Specification"
            >
            <span
              class="inline"
              v-if="counter > 0"
              @click="removeSpecification(counter)"
            >-</span>
            <span class="error-msg">{{errors[0]}}</span>
            <br>
          </ValidationProvider>
          <img
            :src="add"
            alt="add icon"
            height="22"
            width="22"
            @click="addSpecification"
          >
          <ValidationProvider
            v-slot="{errors}"
            mode="aggressive"
            rules="required|min:100"
            persist
          >
            <textarea
              name="description"
              v-model="description"
              placeholder="Description"
            ></textarea>
            <span class="error-msg">{{errors[0]}}</span>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{errors}"
            mode="aggressive"
            rules="required|integer"
            persist
          >
            <input
              type="text"
              name="price"
              v-model="price"
              placeholder="Price"
            >
            <span class="error-msg">{{errors[0]}}</span>
          </ValidationProvider>
          <Button
            name="SAVE"
            :onClick="createProduct"
            type="button"
            :disable="invalid"
          />
        </form>
      </ValidationObserver>
    </template>
  </Container>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver
} from "vee-validate";
import http from '@/http'
import UploadImages from '@/components/UploadImages'
import Container from '@/components/Container'
import Button from '@/components/Button'
import add from '@/assets/add.svg'
export default {
  name: 'AddProduct',
  components: {
    Container,
    Button,
    ValidationObserver,
    ValidationProvider,
    UploadImages
  },
  data () {
    return {
      add,
      name: '',
      specifications: [{
        value: ''
      }],
      description: '',
      price: ''
    }
  },
  props: {
    msg: String
  },
  methods: {
    addSpecification () {
      this.specifications.push({
        value: ''
      })
    },
    removeSpecification (counter) {
      this.specifications.splice(counter, 1)
    },
    createProduct: function () {
      return console.log(this.name, this.specifications, this.description, this.price)
    },
    uploadImageSuccess (formData, index, fileList) {
      console.log('data', formData, index, fileList)
      // Upload image api
      http.post('https://api.imgur.com/3/image', formData).then(response => {
        console.log(response)
      })
    },
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm("remove image")
      if (r == true) {
        done()
      } 
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    },
    dataChange (data) {
      console.log(data)
    },
    limitExceeded (amount) {
      console.log(amount)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
input,
textarea {
  margin: 5px 0;
  width: 100%;
  height: 35px;
  padding: 5px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 15px;
  color: #222;
}

textarea {
  resize: none;
  height: 105px;
}

::placeholder {
  font-size: 15px;
  line-height: 1.5;
  color: #d3d3d3;
}

.error-msg {
  font-size: 11px;
  font-weight: bold;
  color: tomato;
}

span.inline {
  display: inline;
  /* the default for span */
}
</style>
