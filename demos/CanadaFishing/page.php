<?php
	include './connect.php';
	include './header.php';

	$returnUrl = "./index.php";

if ($_POST) {
		if (!empty($_POST['commentname']) && !empty($_POST['commentbox'])) {
			$id = filter_input(INPUT_POST, 'id', FILTER_VALIDATE_INT);
			$commentName = filter_input(INPUT_POST, 'commentname', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$commentBox = filter_input(INPUT_POST, 'commentbox', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			
			$addCommentQuery = "INSERT INTO tbl_comments (fishId, name, comment) VALUES (:fishId, :name, :comment)";
			$addCommentData = $db->prepare($addCommentQuery);
			$addCommentData->bindValue(':fishId', $id);
			$addCommentData->bindValue(':name', $commentName);
			$addCommentData->bindValue(':comment', $commentBox);
			$addCommentData->execute();

			header("Location: " . $returnUrl);
			
		} else {
			header("Location: ./error.html");
		}
	}


	$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
	$query = 	"SELECT f.name AS name,
										f.scientific_name AS scientific_name,
										a.name AS family,
										h.type AS habitat,
										b.name AS drainage_basin,
										f.colour AS colour,
										f.maxLength AS max_length,
										f.maxWeight AS max_weight,
										f.description AS description,
										f.image AS image
						
						FROM tbl_fish f
						INNER JOIN tbl_family a
						INNER JOIN tbl_habitat h
						INNER JOIN tbl_drainagebasin b

						ON h.ID = f.habitatId
							AND a.ID = f.familyId
							AND b.ID = f.drainageBasinId

						WHERE f.ID = " . $id;
						
	$statement = $db->prepare($query);
	$statement->execute();
	$fish = $statement->fetch();

	$commentQuery = "SELECT c.fishId as fishId, c.name AS name, c.comment AS comment 
					FROM tbl_comments c
					INNER JOIN tbl_fish f
					ON c.fishId = f.ID
					WHERE c.fishId = " . $id;
	$commentData = $db->prepare($commentQuery);
	$commentData->execute();

?>

<script src="./script/tinymce.min.js" referrerpolicy="origin"></script>
	<script>
		tinymce.init({
			selector: '#commentbox',
			height: 300
		});
	</script>

<div>
	<h1><?=$fish['name']?></h1>
	<br>
		<h2>Scientific Name: <?=$fish['scientific_name']?></h2>
		<div class="row">
			<h4>Family: <?=$fish['family']?></h4>
			<h4>Colour: <?=$fish['colour']?></h4>
			<h4>Maximum Length: <?=$fish['max_length']?>cm</h4>
			<h4>Maximum Weight: <?=$fish['max_weight']?>kg</h4>
			<h4>Habitat: <?=$fish['habitat']?></h4>
			<h4>Drainage Basin: <?=$fish['drainage_basin']?></h4>
			<h4>Description:</h4>
			<p><?=htmlspecialchars_decode($fish['description'])?></p>
			<img class="image" src="<?=$fish['image']?>" alt="<?=$fish['name']?>">

		</div>
		<br>
		<h2>Comments</h2>
		<?php while ($comment = $commentData->fetch()):?>
			<div class="comment">
				<p><strong><?=$comment['name']?></strong></p>
				<p><?=htmlspecialchars_decode($comment['comment'])?></p>
			</div>
		<?php endwhile ?>
		<form method="POST" action="page.php">
			<input id="id" name="id" type="hidden" value="<?=$id?>">
			<h4 class="mt-5">Add a Comment</h4>
			<label class="form-label" for="commentname">Name:</label>
			<input class="form-control mb-3 " type="text" id="commentname" name="commentname">
			<textarea name="commentbox" id="commentbox" cols="80" rows="10"></textarea>
			<button class="btn btn-primary mt-3" type="submit">Submit Comment</button>
		</form>

</div>
	<?php include './footer.php'?>