<?php

class Connect_Database
{
    // private const SERVERNAME = "localhost";
    // private const USERNAME = "id20789344_root";
    // private const PASSWORD = "Domain@123";
    // private const DB_NAME = "id20789344_petitplatresto";
    private const SERVERNAME = "localhost";
    private const USERNAME = "root";
    private const PASSWORD = "";
    private const DB_NAME = "PetitPlatResto";

    // Data Source Network
    private $DSN = 'mysql:host=' . self::SERVERNAME . ';dbname=' . self::DB_NAME . '';

    // conn variable
    protected $CONN = null;

    // Constructor Function
    public function __construct()
    {
        try {
            $this->CONN = new PDO($this->DSN, self::USERNAME, self::PASSWORD);
            $this->CONN->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            die('Connectionn Failed : ' . $e->getMessage());
        }
        return $this->CONN;
    }

    // Sanitize Inputs
    public function test_input($data)
    {
        $data = strip_tags($data);
        $data = htmlspecialchars($data);
        $data = stripslashes($data);
        $data = trim($data);
        return $data;
    }

    // JSON Format Converter Function
    public function message($content, $status)
    {
        return json_encode(['message' => $content, 'error' => $status]);
    }
}
