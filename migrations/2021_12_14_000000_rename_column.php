<?php

use Flarum\Database\Migration;

return Migration::renameColumns('virtual_authors', ['displayName' => 'display_name']);
