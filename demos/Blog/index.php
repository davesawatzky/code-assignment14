<!-- 
	  Assignment 2 - Blog
    Name: David Sawatzky
    Course: WEBD-2008 Web Development 2
    Date: June 16, 2022
 -->

<?php
	require('connect.php');

	$query = "SELECT * FROM blog ORDER BY createdAt DESC LIMIT 5";
	$statement = $db->prepare($query);
	$statement->execute();
	$contentSize = 200;

?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="styles.css">
	<title>Dave's Blog - Homepage</title>
</head>
<body>
	<div class="container">
		<h1>Dave's Blog</h1>
		<a href="create.php?">Create New Post</a>
		<?php while($row = $statement->fetch()): ?>
			<div class="postcard">
				<div class="postheading">
					<h2 class="title"><a href="post.php?id=<?=$row['id']?>"><?= $row['title']?></a></h2>
					<p class="edit"><a href="edit.php?id=<?= $row['id'];?>">Edit Post</a></p>
				</div>
				<p class="date"><i><?= date("F j, Y", strtotime($row['createdAt']))?></i></p>
				
				<?php if (strlen($row['content']) > $contentSize) : ?>
					<p><?= substr($row['content'], 0, $contentSize); ?>...
						<a href="post.php?id=<?=$row['id']?>"> Read Full Post</a>
					</p>
					<?php else : ?>
						<p><?= $row['content'];?> </p>
					<?php endif ?>
			</div>
			<?php endwhile ?>	
	</div>

</body>
</html>