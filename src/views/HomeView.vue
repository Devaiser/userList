<template>
	<div class="container">
		<form @submit.prevent="onSubmit">

			<div class="well">
				<h4>Add User</h4>
				<div class="form-group">
					<label class="pull-left"> First Name</label>
					<input type="text" class="form-control" placeholder="First Name" v-model="user.firstName">
				</div>
				<div class="form-group">
					<label class="pull-left"> Last Name</label>
					<input type="text" class="form-control" placeholder="Last Name" v-model="user.lastName">
				</div>
				<div class="form-group">
					<label class="pull-left"> Email</label>
					<input type="text" class="form-control" placeholder="Email" v-model="user.email">
				</div>
			</div>
			<button type="submit" class="btn btn-large btn-block btn-primary full-width">Submit</button>
			<router-link class="btn btn-large btn-block btn-success full-width" to="/users">Go to User</router-link>
		</form>
	</div>
</template>

<script setup>
import axios from 'axios'
import { reactive } from 'vue'

const user = reactive({
	firstName: '',
	lastName: '',
	email: ''
})

const onSubmit = () => {

	let newUser = {
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email
	}

	console.log(newUser);
	axios.post('http://localhost:3000/users', newUser)
		.then(res => {
			console.log(res);
		})
		.catch((error) => console.log(error));
	user.firstName = '',
		user.lastName = '',
		user.email = ''
}
</script>

