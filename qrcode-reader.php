<?php


$xmldata = "aadhar.xml";

$xmlobj = simplexml_load_file($xmldata);

$attribs = $xmlobj->attributes();

foreach($attribs as $key=>$val) {
    $arrayOfAttribs[(string)$key] = "'".(string)$val."'";
}
echo json_encode($arrayOfAttribs);
?>