<?php
	include './connect.php';
	include './header.php';

	$mainQuery = 	"SELECT ID,
										name,
										scientific_name,
										image  
						
						FROM tbl_fish
						ORDER BY name
						";
	$statement = $db->prepare($mainQuery);
	$statement->execute();


$habitatQuery = "SELECT * FROM tbl_habitat ORDER BY type";
$habitatData = $db->prepare($habitatQuery);
$habitatData->execute();

?>


<h1 class="pagetitle mb-5">Canadian Fresh Water Fish</h1>
<div class = row>

	<div class="col-md-9">

		<?php while($fish = $statement->fetch()): ?>
			<div class="row mb-5">
				<div class="col-md-4">
					<h2> <?=$fish['name']?></h2>
					<h3>Scientific Name: <?=$fish['scientific_name']?></h3>
					<a class="btn btn-primary mb-4" href="page.php?id=<?=$fish['ID']?>">View Details</a>
				</div>
				<div class="col-md-8">
					<div class="row">
					<img class="image-fluid" src="<?=$fish['image']?>" alt="<?=$fish['name']?>">
					</div>
				</div>
			</div>
			<hr>
		<?php endwhile ?>

	</div>
	<div class="col-md-3">
		<aside>
			<h2>Categories</h2>
			<h3>Habitat</h3>
			<ul>
				<?php while($habitat = $habitatData->fetch()):?>
					<li><a href="category.php?id=<?=$habitat['ID']?>"><?=$habitat['type']?></a></li>
				<?php endwhile ?>
			</ul>
		</aside>
	</div>
</div>


<?php include './footer.php' ?>