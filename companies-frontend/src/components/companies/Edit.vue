<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()">View All Companies</button>
      </small>
    </h4>
    <div class="col-md-12 form-wrapper">
      <h2>Edit Company</h2>
      <form id="create-post-form" @submit.prevent="editCompany">
        <div class="form-group col-md-12">
          <label for="name">name</label>
          <input type="text" id="name" v-model="company.name" name="title" class="form-control" placeholder="Enter name">
        </div>
        <div class="form-group col-md-12">
          <label for="email">email</label>
          <input type="text" id="email" v-model="company.email" name="title" class="form-control" placeholder="Enter email">
        </div>
        <div class="form-group col-md-12">
          <label for="adress">adress</label>
          <input type="text" id="adress" v-model="company.adress" name="title" class="form-control" placeholder="Enter adress">
        </div>
        <div class="form-group col-md-12">
          <label for="start_date">start_date</label>
          <input type="text" id="start_date" v-model="company.start_date" name="title" class="form-control" placeholder="Enter start date">
        </div>
        <div class="form-group col-md-12">
          <label for="end_year">end_year</label>
          <input type="text" id="end_year" v-model="company.end_year" name="title" class="form-control" placeholder="Enter end fiscal year">
        </div>
        <div class="form-group col-md-12">
          <label for="status">status</label>
          <input type="text" id="status" v-model="company.status" name="status" class="form-control" placeholder="Enter status">
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit Company</button>
        </div>
      </form>
    </div>
  </div>
</template>






<script>
import { server } from "../../helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      company: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getCompany();
  },
  methods: {
    editCompany() {
      let companyData = {
        name: this.company.name,
        email: this.company.email,
        adress: this.company.adress,
        start_date: this.company.start_date,
        end_year: this.company.start_date,
        status: this.company.status
      };
      axios
        .put(
          `${server.baseURL}/company/update?companyID=${this.id}`,
          companyData
        )
        // eslint-disable-next-line no-unused-vars
        .then(data => {
          router.push({ name: "home" });
        });
    },
    getCompany() {
      axios
        .get(`${server.baseURL}/company/company/${this.id}`)
        .then(data => (this.company = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>