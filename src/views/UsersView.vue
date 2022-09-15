<template>
	<div class="container">
		<table class="table table-striped table-borderes">
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in users" :key="user._id">
					<td>{{user.firstName}}</td>
					<td>{{user.lastName}}</td>
					<td>{{user.email}}</td>
				</tr>
			</tbody>
		</table>
		<router-link class="btn btn-large btn-block btn-success full-width" to="/">Home</router-link>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
const users = ref([])
onMounted(() => {
	axios.get('http://localhost:3000/users')
		.then(res => {
			console.log(res.data);
			users.value = res.data
		})
		.catch((error) => console.log(error))
});
</script>
