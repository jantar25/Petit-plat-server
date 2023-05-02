<?php

class Items
{
    private $TABLE_NAME = "menu";
    private $CONN;
    public $ID;
    public $NAMES;
    public $DESCRIPTIONS;
    public $AMOUNT;
    public $IMAGEURL;
    public $POSTDATE;

    public function __construct($db)
    {
        $this->CONN = $db;
    }

    function create()
    {

        $STATEMENT = $this->CONN->prepare("
            INSERT INTO " . $this->TABLE_NAME . "(`names`, `imageURL`, `amount`, `descriptions`, `postdate`)
            VALUES(?,?,?,?,?)");

        $this->NAMES = htmlspecialchars(strip_tags($this->NAMES));
        $this->DESCRIPTIONS = htmlspecialchars(strip_tags($this->DESCRIPTIONS));
        $this->AMOUNT = htmlspecialchars(strip_tags($this->AMOUNT));
        $this->IMAGEURL = htmlspecialchars(strip_tags($this->IMAGEURL));
        $this->POSTDATE = htmlspecialchars(strip_tags($this->POSTDATE));


        $STATEMENT->bind_param("ssisd", $this->NAMES, $this->IMAGEURL, $this->AMOUNT, $this->DESCRIPTIONS, $this->POSTDATE);

        if ($STATEMENT->execute()) {
            return true;
        }

        return false;
    }

    function read()
    {
        if ($this->ID) {
            $STATEMENT = $this->CONN->prepare("SELECT * FROM " . $this->TABLE_NAME . " WHERE id = ?");
            $STATEMENT->bind_param("i", $this->ID);
        } else {
            $STATEMENT = $this->CONN->prepare("SELECT * FROM " . $this->TABLE_NAME);
        }
        $STATEMENT->execute();
        $result = $STATEMENT->get_result();
        return $result;
    }
}
