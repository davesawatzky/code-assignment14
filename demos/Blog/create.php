<!-- 
	  Assignment 2 - Blog
    Name: David Sawatzky
    Course: WEBD-2008 Web Development 2
    Date: June 16, 2022
 -->

<?php

	require('connect.php');
	require('authenticate.php');

	// sets the return url back to the homepage
	$returnUrl = "./index.php";


	// Validates the form when submitted
	// then enters it into the database.
	if ($_POST) {
		if (!empty($_POST['title']) && !empty($_POST['content'])) {
			$title = filter_input(INPUT_POST, 'title', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$content = filter_input(INPUT_POST, 'content', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$query = "INSERT INTO blog (title, content) VALUES (:title, :content)";
			$statement = $db->prepare($query);
			$statement->bindValue(':title', $title);
			$statement->bindValue(':content', $content);
			$statement->execute();
			header("Location: " . $returnUrl);
			
		} else {
			header("Location: ./error.html");
		}
	}
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="styles.css">
	<title>Dave's Blog - Create Post</title>
</head>
<body>
	<div class="container">
		<h1>Dave's Blog - Create Post</h1>
		<h2>Create Post</h2>
		<form method="POST" action="create.php">
			
			<label for="title">Title:</label>
			<input type="text" name="title" id="title" />
			<br>
			<label for="content">Content:</label>
			<textarea name="content" id="content" cols="80" rows="20"></textarea>
			<button type="submit">Submit Post</button>
		</form>
	</div>
</body>
</html>