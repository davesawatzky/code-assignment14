<!-- 
	  Assignment 2 - Blog
    Name: David Sawatzky
    Course: WEBD-2008 Web Development 2
    Date: June 16, 2022
 -->

<?php

	define('ADMIN_LOGIN', 'wally');
	define('ADMIN_PASSWORD', 'mypass');

	if(!isset($_SERVER['PHP_AUTH_USER']) ||
			!isset($_SERVER['PHP_AUTH_PW']) ||
			($_SERVER['PHP_AUTH_USER'] != ADMIN_LOGIN) || 
			($_SERVER['PHP_AUTH_PW'] != ADMIN_PASSWORD)) {
		header('HTTP/1.1 401 Unauthorized');
		header('WWW-Authenticate: Basic real="Our Blog"');
		exit("Access Denied: Username and password required.");
	}

?>