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
                                <button class="btn btn-primary" @click="newModal">
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
                                            <a href="#" @click="editModal(user)" class="btn btn-primary">
                                                <i class="fa fa-edit"></i><strong>Edit</strong>
                                            </a>
                                            <a href="#" @click="deleteUser(user.id)" class="btn btn-primary">
                                                <i class="fa fa-trash red"></i>
                                                <strong>Delete</strong>
                                            </a>
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
        <div class="clearfix"></div>
        <!-- Modal -->
        <div class="modal fade" id="addNewModal" tabindex="-1" role="dialog" aria-labelledby="addNewModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 v-show="!editmode" class="modal-title" id="addNewModalLabel">Add New User</h5>
                        <h5 v-show="editmode" class="modal-title" id="addNewModalLabel">Update User's Info</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editmode ? updateUser() : createUser()">
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
                            <button v-show="editmode" type="submit" class="btn btn-success">Update</button>
                            <button v-show="!editmode" type="submit" class="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
<<<<<<< HEAD

=======
>>>>>>> 1a60e41db53dc3fd8c4a4271927768d2b87b3af9
    </div>
    <!-- /.col -->
</template>

<script>
    export default {
        data(){
          return {
              editmode:false,
              users:{

              },
              form: new Form({
                  'id': '',
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
            editModal(user){
                this.editmode = true;
                this.form.reset();
                $('#addNewModal').modal('show');
                this.form.fill(user);
            },
            newModal(){
                this.editmode = false;
                this.form.reset();
                $('#addNewModal').modal('show');
            },
            deleteUser(id){
                swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {

                        //send request to the server
                    if (result.value) {
                        this.form.delete('api/user/' + id).then(() => {
                            swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            Fire.$emit('AfterDelete');
                        }).catch(() => {
                            swal("Failed!", "There was something wrong.", "warning");
                        });
                    }
                })
            },
            loadUsers(){
                axios.get("api/user").then(({ data }) => (this.users = data.data)); //by default it's going to index function
            },
            createUser(){
                this.$Progress.start();
                this.form.post('api/user')

                .then(()=>{
                    Fire.$emit('AfterCreate');
                    $('#addNewModal').modal('hide')
                    $('.modal-backdrop').removeClass('modal-backdrop');
                    toast.fire({
                        icon: 'success',
                        title: 'User Created successfully'
                    })
                    this.$Progress.finish();
                })

                .catch(()=>{

                })
            },

            updateUser(){
                this.$Progress.start();
                // console.log('edit');
                this.form.put('api/user/'+this.form.id)
                .then(()=>{
                    Fire.$emit('AfterUpdate');
                    $('#addNewModal').modal('hide')
                    swal.fire(
                        'Updated!',
                        'Information has been updated',
                        'success'
                    )
                    this.$Progress.finish();
                })
                .catch(()=>{
                    this.$Progress.fail();
                })
            },
        },
        created(){
          this.loadUsers();
          //use for page load for when needed to laod otherwise not.
          Fire.$on('AfterCreate',() => {
             this.loadUsers();
          });

          Fire.$on('AfterUpdate',() => {
             this.loadUsers();
          });
          Fire.$on('AfterDelete',() => {
             this.loadUsers();
          });
          // setInterval(() => this.loadUsers(), 3000);
        },
        name: "Users"
    }
</script>

<style scoped></style>
