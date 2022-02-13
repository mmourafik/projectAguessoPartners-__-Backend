<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2> Create Company</h2>

      <form id="create-post-form" @submit.prevent="createCompany">
        <div class="form-group col-md-12">
          <label for="name">name</label>
          <input type="text" id="name" v-model="name" name="title" class="form-control" placeholder="Enter name">
        </div>

        <div class="form-group col-md-12">
          <label for="email">email</label>
          <input type="text" id="email" v-model="email" name="title" class="form-control" placeholder="Enter email">
        </div>
        <div class="form-group col-md-12">
          <label for="adress">adress</label>
          <input type="text" id="adress" v-model="adress" name="title" class="form-control" placeholder="Enter adress">
        </div>
        <div class="form-group col-md-12">
          <label for="start_date">start_date</label>
          <input type="text" id="start_date" v-model="start_date" name="title" class="form-control" placeholder="Enter start date">
        </div>
        <div class="form-group col-md-12">
          <label for="end_year">end_year</label>
          <input type="text" id="end_year" v-model="end_year" name="title" class="form-control" placeholder="Enter end fiscal year">
        </div>
        <div class="form-group col-md-12">
            <label for="status">status</label>
            <input type="text" id="status" v-model="description" name="status" class="form-control" placeholder="Enter status">
        </div>
        <div class="form-group col-md-4 pull-right">
            <button class="btn btn-success" type="submit">Create Company</button>
        </div>
      </form>
    </div>
  </div>
</template>



<script>
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";
export default {
  data() {
    return {
      name: "",
      email: "",
      adress: "",
      start_date: "",
      end_year: "",
      status: ""
    };
  },
  methods: {
    createCompany() {
      let companyData = {
        name: this.name,
        email: this.email,
        adress: this.adress,
        start_date: this.start_date,
        end_year: this.end_year,
        status: this.status
      };
      this.__submitToServer(companyData);
    },
    __submitToServer(data) {
      // eslint-disable-next-line no-unused-vars
      axios.post(`${server.baseURL}/companies/create`, data).then(data => {
        router.push({ name: "home" });
      });
    }
  }
};
</script>



