<?php
    if(!$_GET['msg'])
    {
        die();
    }
    
    $message = $_GET['msg'];
    $chatlog = "chatlog.txt";
    $fh = fopen($chatlog, 'a');
    fwrite($fh, $message);
    fclose($fh);
?>