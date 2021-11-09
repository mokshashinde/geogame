<?php
	$fname = $_POST['fname'];

	// Database connection
	$conn = new mysqli('localhost','root','','geogame');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into input(fname) values(?)");
		$stmt->bind_param("s", $fname);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>
