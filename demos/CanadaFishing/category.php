<?php
	include './connect.php';
	include './header.php';


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
									AND b.ID = f.drainageBasinID

						WHERE h.ID = " . $id;
						
	$fishes = $db->prepare($query);
	$fishes->execute();
	
?>

<?php while ($fish = $fishes->fetch()): ?>
	<h1><?=$fish['name']?></h1>
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
	<hr>
<?php endwhile ?>
<br><br>

<?php include './footer.php'?>