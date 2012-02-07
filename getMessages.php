<?php
    $chatlog = "chatlog.txt";
    
    if(!filesize($chatlog))
    {
        return;
    }
    
    $fh = fopen($chatlog, 'r');
    $text = fread($fh, filesize($chatlog));
    fclose($fh);
    echo $text;
?>