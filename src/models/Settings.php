<?php
namespace verbb\iconpicker\models;

use verbb\iconpicker\IconPicker;

use Craft;
use craft\base\Model;

class Settings extends Model
{
    // Public Properties
    // =========================================================================

    public $iconSetsPath = CRAFT_BASE_PATH . '/icons/';
    public $iconSetsUrl = '/icons/';
}
