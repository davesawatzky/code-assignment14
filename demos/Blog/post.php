<!-- 
	  Assignment 2 - Blog
    Name: David Sawatzky
    Course: WEBD-2008 Web Development 2
    Date: June 16, 2022
 -->

<?php
	require('connect.php');


	// Displays the selected post
	$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
	$query = "SELECT * FROM blog WHERE id = " . $id;
	$statement = $db->prepare($query);
	$statement->execute();
	$row = $statement->fetch();
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="styles.css">
	<title>Dave's Blog - <?= $row['title'];?></title>
</head>
<body>
	<div class="container">
	    <h1>Dave's Blog</h1>
			<div class="postheading">
				<h2 class="title"><?= $row['title']?></h2>
				<p><a class="edit" href="edit.php?id=<?= $id;?>">Edit Post</a></p>
			</div>
			<i class="date"> <?= date("F j, Y", strtotime($row['createdAt']))?> </i>
			
			<p> <?= $row['content']?> </p>
	</div>
</body>
</html>