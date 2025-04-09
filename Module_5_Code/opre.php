<?php

$x = 10; 
$y = 4; 
echo($x + $y); // 0utputs: 14 
echo($x - $y); // 0utputs: 6 
echo($x * $y); // 0utputs: 40 
echo($x / $y); // 0utputs: 2.5 
echo($x % $y); // 0utputs: 2


$x = 10; 
echo $x; // Outputs: 10 
$x = 20; 
$x += 30; // $x=$x+30;
echo $x; // Outputs: 50 
$x = 50; 
$x -= 20; 
echo $x; // Outputs: 30 
$x = 5; 
$x *= 25; 
echo $x; // Outputs: 125 
$x = 50; 
$x /= 10; 
echo $x; // Outputs: 5 
$x = 100; 
$x %= 15; 
echo $x; // Outputs: 10 


$x = 25; 
$y = 35; 
$z = "25"; 


var_dump($x == $z);  // Outputs: boolean true 
var_dump($x === $z); // Outputs: boolean false 
var_dump($x != $y);  // Outputs: boolean true 
var_dump($x !== $z); // Outputs: boolean true 
var_dump($x < $y);   // Outputs: boolean true 
var_dump($x > $y);   // Outputs: boolean false 
var_dump($x <= $y);  // Outputs: boolean true 
var_dump($x >= $y);  // Outputs: boolean false 
?>