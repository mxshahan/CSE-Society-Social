
<?php
    if(isset($_GET['del'])){
        $id = $_GET['del'];

        $sql = "DELETE FROM tbl_contact WHERE id=$id";
        $db->delete($sql);
    }

?>

           <div id="page-wrapper">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header"> 
                <?php 
                    if(isset($_GET['msg'])){
                        $msg = $_GET['msg'];
                        echo "<span style='color:green;font-size:18px'>$msg</span>";
                    }
                ?>
                 </h1>
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            DataTables Advanced Tables
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>SL</th>
                                        <th width="20%">Full Name</th>
                                        <th width="20%">Email</th>
                                        <th width="15%">Phone</th>
                                        <th width="5%">Conceive Number</th>
                                        <th width="5%">Currently Working</th>
                                        <th width="20%">Multiple Option</th>
                                        <th width="10%">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   <?php 
                                    $i=0;
                                    $sql = "SELECT * FROM tbl_contact order by id DESC ";
                                    $data = $db->select($sql);
                                    if($data) while($result = $data->fetch_assoc()){
                                         $i++;   
                                   ?>
                                   
                                    <tr class="gradeX">
                                        <td><?php echo $i;?></td>
                                        <td><?php echo $result['full_name'];?></td>
                                        <td><?php echo $result['email'];?></td>
                                        <td><?php echo $result['phone'];?></td>
                                        <td class="center"><?php echo $result['number'];?></td>
                                        <td class="center"><?php echo $result['ques'];?></td>
                                         <td class="center"> 
                                        <?php  
                                             $checkbox = explode(',', $result['checkbox']);
                                             foreach ($checkbox as  $value) { ?> <br/>
                                       <?php echo $value;?>
                                           <?php } ?>
                                        </td>
                                      
                                        <td><a class="btn btn-danger" href="?del=<?php echo $result['id']?>">Delete</a></td>
                                    </tr>
                                  <?php } ?>
                                   
                                </tbody>
                            </table>
                           
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
          
           
        </div>
        <!-- /#page-wrapper -->