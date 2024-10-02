<?php
include("../config.php");

// Initialize response array
$json = array();
$success = true;

// Get the book ID from the query parameter
$book_id = $_GET['id'];

// Query to select the book based on ID
$query = mysqli_query($link, "SELECT b.id as bookId,  c.name as categoryName,u.fullname as userName,b.title,b.original_price,b.price,b.image,b.description,b.book_condition
FROM bookstore.book b 
LEFT JOIN bookstore.users u ON b.user_id = u.id 
INNER JOIN bookstore.category c ON b.category_id = c.id
WHERE b.id =  '$book_id';");

// Check if the query failed
if (!$query) {
    $success = false;
}

// Fetch the book data
if ($row = mysqli_fetch_array($query)) {
    $json = [
        "bookId" => $row['bookId'],
        "categoryName" => $row['categoryName'],
        "userName" => $row['userName'],
        "title" => $row['title'],
        "original_price" => $row['original_price'],
        "price" => $row['price'],
        "book_condition" => $row['book_condition'],
        "image" => $row['image'],
        "description" => $row['description'],
    ];
} else {
    $success = false; // No book found with the given ID
}

// Send the response back to the client
header('Content-Type: application/json');
echo json_encode($json);
?>