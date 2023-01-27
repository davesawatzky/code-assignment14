<?php

include './connect.php';
include './authenticate.php';
include './header.php';

$sortField = "f.name";
$sortDirection = "DESC";

$query = " SELECT f.ID AS ID,
									f.name AS name,
									a.name AS family,
									f.created_at AS created_at,
									f.updated_at AS updated_at
					 FROM tbl_fish f
					 INNER JOIN tbl_family a
					 ON f.familyId = a.ID
					 ORDER BY " . $sortField . " " . $sortDirection;
$fishData = $db->prepare($query);
$fishData->execute();

?>

	<h1>Admin Page</h1>
	<br><br>
	<div>
		<a class="btn btn-primary" href="create.php">Create New Page</a>
		<br><br>
		<div>
			<table id="fishtable" class="table">
				<thead class="table-headings">
					<tr class="table-heading-row">
						<th id="ID-heading">ID</th>
						<th id="name-heading">Name</th>
						<th id="family-heading">Family</th>
						<th id="created-heading">Created</th>
						<th id="updated-heading">Updated</th>
					</tr>
				</thead>
				<tbody>
				<?php while($row = $fishData->fetch()): ?>
					<tr class="table-row">
						<td class="ID-data"><?=$row['ID']?></td>
						<td class="name-data"><a href="edit.php?id=<?= $row['ID']?>"><?=$row['name']?></a></td>
						<td class="famly-data"><?=$row['family']?></td>
						<td class="created-date"><?=date("F j, Y", strtotime($row['created_at']))?></td>
						<td class="updated-data"><?=date("F j, Y", strtotime($row['updated_at']))?></td>
					</tr>
				<?php endwhile ?>
				</tbody>
			</table>
		</div>
	</div>

	<?php include './footer.php';?>

