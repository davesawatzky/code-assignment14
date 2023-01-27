<?php

include './connect.php';
include './authenticate.php';
include './script/ImageResize.php';
include './script/ImageResizeException.php';
include './header.php';


$returnUrl = "./index.php";

// Data for drop-down menus
$familyQuery = "SELECT * FROM tbl_family ORDER BY name";
$familyData = $db->prepare($familyQuery);
$familyData->execute();

$habitatQuery = "SELECT * FROM tbl_habitat ORDER BY type";
$habitatData = $db->prepare($habitatQuery);
$habitatData->execute();

$basinQuery = "SELECT * FROM tbl_drainagebasin ORDER BY name";
$basinData = $db->prepare($basinQuery);
$basinData->execute();

function file_upload_path($original_filename, $upload_subfolder_name = 'images') {
	$current_folder = dirname(__FILE__);
	$path_segments = [$current_folder, $upload_subfolder_name, basename($original_filename)];
	return join(DIRECTORY_SEPARATOR, $path_segments);
}

function file_is_an_image($temporary_path, $new_path) {
	$allowed_mime_types      = ['image/gif', 'image/jpeg', 'image/png'];
	$allowed_file_extensions = ['gif', 'jpg', 'jpeg', 'png'];
	$actual_file_extension   = pathinfo($new_path, PATHINFO_EXTENSION);
	$actual_mime_type        = mime_content_type($temporary_path);
	$file_extension_is_valid = in_array($actual_file_extension, $allowed_file_extensions);
	$mime_type_is_valid      = in_array($actual_mime_type, $allowed_mime_types);
	return $file_extension_is_valid && $mime_type_is_valid;
}
$image_upload_detected = isset($_FILES['image_file']) && ($_FILES['image_file']['error'] === 0);
$upload_error_detected = isset($_FILES['image_file']) && ($_FILES['image_file']['error'] > 0);


	// Validates the form when submitted
	// then enters it into the database.
	if ($_POST) {
		if (!empty($_POST['name']) && !empty($_POST['description'])) {

			$image_filename = '';
			if ($image_upload_detected) {
				$image_filename = $_FILES['image_file']['name'];
				$temporary_image_path = $_FILES['image_file']['tmp_name'];
				$new_image_path = file_upload_path($image_filename);
				if (file_is_an_image($temporary_image_path, $new_image_path)) {
					move_uploaded_file($temporary_image_path, $new_image_path);
					$filename_parts = pathinfo($new_image_path);
						
					$image_medium = new \Gumlet\ImageResize($new_image_path);
					$image_medium->resizeToWidth(600);
					$image_medium->save($filename_parts['dirname'] . DIRECTORY_SEPARATOR . $filename_parts['filename'] . '_medium' . '.' . $filename_parts['extension']);
					$image_filename = './images/' . $filename_parts['filename'] . '_medium' . '.' . $filename_parts['extension'];
					
				}
			}

			$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$scientificName = filter_input(INPUT_POST, 'scientific-name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$fishColour = filter_input(INPUT_POST, 'fish-colour', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$maxWeight = filter_input(INPUT_POST, 'max-weight', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$maxLength = filter_input(INPUT_POST, 'max-length', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$description = filter_input(INPUT_POST, 'description', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$family = filter_input(INPUT_POST, 'family', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$habitat = filter_input(INPUT_POST, 'habitat', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			$basin = filter_input(INPUT_POST, 'basin', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
			
			$query = "INSERT INTO tbl_fish (name, scientific_name, colour, maxWeight, maxLength, image, familyId, habitatId, drainageBasinId, description) VALUES (:name, :scientificName, :fishColour, :maxWeight, :maxLength, :image, :family, :habitat, :basin, :description)";
			$statement = $db->prepare($query);
			$statement->bindValue(':name', $name);
			$statement->bindValue(':scientificName', $scientificName);
			$statement->bindValue(':description', $description);
			$statement->bindValue(':fishColour', $fishColour);
			$statement->bindValue(':maxWeight', $maxWeight);
			$statement->bindValue(':maxLength', $maxLength);
			$statement->bindValue(':image', $image_filename);
			$statement->bindValue(':family', $family);
			$statement->bindValue(':habitat', $habitat);
			$statement->bindValue(':basin', $basin);
			$statement->execute();
			header("Location: " . $returnUrl);
			
		} else {
			header("Location: ./error.html");
		}
	}
?>

	<script src="./script/tinymce.min.js" referrerpolicy="origin"></script>
	<script>
		tinymce.init({
			selector: '#description',
			height: 300
		});
	</script>
	<div class="container">
		<h2>Create Page</h2>
		<form method="POST" action="create.php" enctype="multipart/form-data">
			<div class="row">
				<div class="col-md-9">
					<div class="row mt-3">
						<div class="col-md-6">
							<label class="form-label" for="name">Name:</label>
							<input class="form-control" type="text" name="name" id="name" />
						</div>
						<div class="col-md-6">
							<label class="form-label" for="scientific-name">Scientific Name:</label>
							<input class="form-control" type="text" name="scientific-name" id="scientific-name" />
						</div>
					</div>
					<div class="row mt-3">
						<div class="col-md-4">
							<label class="form-label" for="fish-colour">Colour:</label>
							<input class="form-control" type="text" name="fish-colour" id="fish-colour" />
						</div>
						<div class="col-md-4">
							<label class="form-label" for="max-weight">Max Weight (kg):</label>
							<input class="form-control" type="text" name="max-weight" id="max-weight" />
						</div>
						<div class="col-md-4">
							<label class="form-label" for="max-length">Max Length (cm):</label>
							<input class="form-control" type="text" name="max-length" id="max-length" />
						</div>
					</div>
					<div class="row mt-3">
						<div class="col-12">
							<label class="form-label" for="image_file">Image File:</label>
							<input class="form-control" type="file" name="image_file" id="image_file">
							<?php if ($upload_error_detected): ?>
								<p>Error Number: <?= $_FILES['image_file']['error']?></p>
							<?php endif ?>
							<br>
							<label class="form-label" for="description">Description:</label>
							<textarea class="form-control" name="description" id="description" cols="80" rows="10"></textarea>
						</div>
					</div>
				</div>
				<div class="col-md-3 pt-3">
					<select class="form-select mb-3" name="habitat" id="habitat-select">
						<option value="">--Please Choose a Habitat --</option>
						<?php while($habitatOption = $habitatData->fetch()): ?>
							<option value="<?=$habitatOption['ID']?>"><?=$habitatOption['type']?></option>
						<?php endwhile ?>
					</select>
					<select class="form-select mb-3" name="family" id="family-select">
						<option value="">--Please Choose a Fish Family --</option>
						<?php while($familyOption = $familyData->fetch()): ?>
							<option value="<?=$familyOption['ID']?>"><?=$familyOption['name']?></option>
						<?php endwhile ?>
					</select>
					<select class="form-select mb-3" name="basin" id="basin-select">
						<option value="">--Please Choose a Drainage Basin --</option>
						<?php while($basinOption = $basinData->fetch()): ?>
							<option value="<?=$basinOption['ID']?>"><?=$basinOption['name']?></option>
						<?php endwhile ?>
					</select>
					<button class="btn btn-primary" type="submit">Submit Page</button>
				</div>
			</div>
		</form>
	</div>

	<?php include './footer.php';?>