<?php

print_r($_GET);
exit();
$string = <<<XML
  <PrintLetterBarcodeData 
    uid="725733706873" 
    name="RAVINDER KUMAR" 
    gender="M" 
    yob="1996" 
    co="S/O KAKA RAM" 
    house="460A" 
    street="WARD NO. 6" 
    lm="NA" 
    loc="NA" 
    vtc="Nanyola (292)" 
    po="Naneola" 
    dist="Ambala" 
    state="Haryana" 
    pc="134003"
  />
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