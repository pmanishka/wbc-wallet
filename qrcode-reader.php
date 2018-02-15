<?php

$xml =  $_REQUEST;
//exit();

$string = <<<XML . $xml
XML;


$xml = simplexml_load_string($string);
$attribs = $xml->attributes();
// convert the '$attribs' to an array
foreach($attribs as $key=>$val) {
    $arrayOfAttribs[(string)$key] = "'".(string)$val."'";
	//$arrayOfAttribs['uid'];
}
echo json_encode($arrayOfAttribs);

//$namesOfColumns = implode(",", array_keys($arrayOfAttribs));
//$valuesOfColumns = implode(",", array_values($arrayOfAttribs));



?>