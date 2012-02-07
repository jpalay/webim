<?php
    if(!$_GET['msg'])
    {
        die();
    }
    
    $message = $_GET['msg'];
    $log = "chatlog.txt";
    $fh = fopen($log, 'a');
    fwrite($fh, $message);
    fclose($fh);
?>