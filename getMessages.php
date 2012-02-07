<?php
    $log = "chatlog.txt";
    
    if(!filesize($log))
    {
        return;
    }
    
    $fh = fopen($log, 'r');
    $text = fread($fh, filesize($log));
    fclose($fh);
    echo $text;
?>