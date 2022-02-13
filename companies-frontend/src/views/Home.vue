<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>Nest Company List App </h1>
      <p>Built with Nest.js, Vue.js, and MongoDB</p>
      <div v-if="companies.length === 0">
        <h2>No company found at the moment</h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">adress</th>
            <th scope="col">start_date</th>
            <th scope="col">end_year</th>
            <th scope="col">status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="company in companies" :key="company._id">
            <td>{{ company.name }}</td>
            <td>{{ company.email }}</td>
            <td>{{ company.adress }}</td>
            <td>{{ company.start_date }}</td>
            <td>{{ company.end_year }}</td>
            <td>{{ company.status }}</td>
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style="margin-bottom: 20px;">
                  <router-link :to="{name: 'Edit', params: {id: company._id}}" class="btn btn-sm btn-outline-secondary">Edit Company</router-link>
                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteCompany(company._id)">Delete Company</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { server } from "../helper";
import axios from "axios";
export default {
  data() {
    return {
      companies: []
    };
  },
  created() {
    this.fetchCompanies();
  },
  methods: {
    fetchCompanies() {
      axios
        .get(`${server.baseURL}/company/companies`)
        .then(data => (this.companies = data.data));
    },
    deleteCompany(id) {
      axios
        .delete(`${server.baseURL}/company/delete?companyID=${id}`)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  }
};
</script>
