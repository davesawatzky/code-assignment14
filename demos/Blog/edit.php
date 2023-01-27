<!-- 
	  Assignment 2 - Blog
    Name: David Sawatzky
    Course: WEBD-2008 Web Development 2
    Date: June 16, 2022
 -->

<?php

	require('connect.php');
	require('authenticate.php');


// Sets the return url to the homepage
	$returnUrl = './index.php';

// Set the initial query on page load
	if ($_GET) {
		$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
		$query = "SELECT * FROM blog WHERE id = " . $id;
		$statement = $db->prepare($query);
		$statement->execute();
		$data = $statement->fetch();
		$title = $data['title'];
		$content = $data['content'];
	}

	// Checks to see if the delete button was pressed
	// The array key won't exist if not.
	if ($_POST)	$deletePost = array_key_exists('deletebutton', $_POST);

	// Once the form is submitted, validates the input and either
	// updates or deletes the post
	if ($_POST) {
		if(!empty($_POST['title']) && !empty($_POST['content']) && !$deletePost) {
			$id = filter_input(INPUT_POST, 'id', FILTER_VALIDATE_INT);
			$title = filter_input(INPUT_POST, 'title', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$content = filter_input(INPUT_POST, 'content', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$updateQuery = "UPDATE blog SET title = :title, content = :content WHERE id = " . $id;
		
			$update = $db->prepare($updateQuery);
			$update->bindValue(':title', $title);
			$update->bindValue(':content', $content);
			$update->execute();
			header("Location: " . $returnUrl);

		} elseif ($deletePost) {
			$id = filter_input(INPUT_POST, 'id', FILTER_VALIDATE_INT);
			$deleteQuery = "DELETE FROM blog WHERE id = " . $id;
			$delete = $db->prepare($deleteQuery);
			$delete->execute();
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
	<title>Dave's Blog - Editing <?=$title?></title>
</head>
<body>
	<div class="container">
		<h1>Dave's Blog</h1>
		<h2>Edit Post</h2>
		<form method="POST" action="edit.php">
			<input type="hidden" name="id" id="id" value="<?=$id;?>"/>
			<label for="title">Title:</label>
			<input type="text" name="title" id="title" value="<?=$title;?>" />
			<br>
			<label for="content">Content:</label>
			<textarea name="content" id="content" cols="80" rows="20"><?=$content;?></textarea>
			<button type="submit">Update Post</button>
			<button type="submit" name="deletebutton" id="deletebutton" value="true">Delete Post</button>
		</form>
	</div>
</body>
</html>