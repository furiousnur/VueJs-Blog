<template>
    <div>
        <!-- Main content -->
        <section class="content">
            <div class="row justify-content-around">
                <div class="col-md-12 col-lg-12 col-sm-12">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Users</h3>
                            <div class="card-tools">
                                <!--<button class="btn btn-primary" data-toggle="modal" data-target="#addNewModal">
                                    <router-link to="/add-category" style="color: #ffffff;"><i class="fas fa-user-plus"></i>
                                        <strong>Add User</strong>
                                    </router-link>
                                </button>-->

                                <button class="btn btn-primary" data-toggle="modal" data-target="#addNewModal">
                                    <i class="fas fa-user-plus"></i>
                                        <strong>Add User</strong>
                                </button>
                            </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Type</th>
                                    <th>Registered At</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="user in users" :key="user.id">
                                        <td>{{ user.id}}</td>
                                        <td>{{ user.name}}</td>
                                        <td> {{ user.email}} </td>
                                        <td> {{ user.type | upText}} </td>
                                        <td> {{ user.created_at | myDate}} </td>
                                        <td>
                                            <span class="badge badge-success">approved</span>
                                        </td>
                                        <td>
                                            <a href="" class="btn btn-primary"><i class="fa fa-edit"></i> <strong>Edit</strong></a>
                                            <a href="" class="btn btn-primary"><i class="fa fa-trash red">  </i> <strong>Delete</strong></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </section>
        <!-- /.content -->

        <!-- Modal -->
        <div class="modal fade" id="addNewModal" tabindex="-1" role="dialog" aria-labelledby="addNewModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addNewModalLabel">Add New User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="createUser">
                        <div class="modal-body">
                            <div class="form-group">
                                <input v-model="form.name" type="text" placeholder="Name"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>

                            <div class="form-group">
                                <input v-model="form.email" name="email" placeholder="example@example.com"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                                <has-error :form="form" field="email"></has-error>
                            </div>

                            <div class="form-group">
                                <textarea v-model="form.bio" placeholder="Short bio for user (optional)"
                                          class="form-control" :class="{ 'is-invalid': form.errors.has('bio') }"></textarea>
                                <has-error :form="form" field="bio"></has-error>
                            </div>

                            <div class="form-group">
                                <select id="type" v-model="form.type" class="form-control"
                                        :class="{ 'is-invalid': form.errors.has('type') }">
                                    <option selected hidden value="">Select User Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">Standard User</option>
                                    <option value="author">Author</option>
                                </select>
                                <has-error :form="form" field="type"></has-error>
                            </div>

                            <div class="form-group">
                                <input v-model="form.password" type="password" placeholder="Password"
                                       class="form-control" :class="{ 'is-invalid': this.form.errors.has('password') }">
                                <has-error :form="form" field="password"></has-error>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
    <!-- /.col -->
</template>

<script>
    export default {
        data(){
          return {
              users:{

              },
              form: new Form({
                  name: '',
                  email: '',
                  password: '',
                  type: '',
                  bio: '',
                  photo: ''
              })
          }
        },

        methods:{
            createUser(){
                this.form.post('api/user');
            },

            loadUser(){
                axios.get("api/user").then(({ data }) => (this.users = data.data)); //by default it's going to index function
            }
        },
        created(){
          this.loadUser();
        },
        name: "Users"
    }
</script>

<style scoped></style>
