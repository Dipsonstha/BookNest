<?php
include("../config.php");
$json = array();
$success = true;
$query = mysqli_query($link, "SELECT b.id as id, b.title as title, b.original_price,b.price, b.book_condition, b.image, b.description, c.name as c_name, s.name as s_name FROM book b inner join category c on b.category_id = c.id inner join subcategory s on b.subcategory_id = s.id;");
if (!$query) {
	$success = false;
}

$total_rows = mysqli_num_rows($query);
if ($total_rows > 0) {

	while ($row = mysqli_fetch_array($query)) {
		// Append each row to the $json array
		$json[] = [
			"id" => $row['id'],
			"title" => $row['title'],
			"original_price" => $row['original_price'],
			"price" => $row['price'],
			"book_condition" => $row['book_condition'],
			"image" => $row['image'],
			"description" => $row['description'],
			"c_name" => $row['c_name'],
			"s_name" => $row['s_name'],
		];
	}
}

echo json_encode($json, JSON_PRETTY_PRINT);
?>