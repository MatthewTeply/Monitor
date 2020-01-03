<?php

namespace Monitor;

use Lampion\Core\Runtime;
use Lampion\Http\Client;
use Lampion\View\View;

class Monitor
{
    public static function display() {
        $db = Runtime::dbInfo();
        $execTime = Runtime::execTime();

        $view = new View(APP . "monitor" . TEMPLATES, "monitor");

        $view->render("common/monitor", [
            'db'       => $db,
            'execTime' => $execTime,
            'client' => [
                'os'      => Client::os(),
                'browser' => Client::browser(),
                'ip'      => Client::ip(),
                'device'  => Client::device()
            ]
        ]);
    }
}