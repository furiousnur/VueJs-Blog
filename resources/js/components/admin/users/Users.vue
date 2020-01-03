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
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>OmniWeb 5.5</td>
                                        <td>
                                            <p>nuralam@gmail.com</p>
                                        </td>
                                        <td>
                                            <p>This is a reason.....</p>
                                        </td>
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
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Create</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <!-- /.col -->
</template>

<script>
    export default {
        name: "Users"
    }
</script>

<style scoped></style>
