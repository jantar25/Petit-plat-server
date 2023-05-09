<?php

class Connect_Database
{
    private const SERVERNAME = "sql300.epizy.com";
    private const USERNAME = "epiz_34169727";
    private const PASSWORD = "61rJc8bvrOB4J";
    private const DB_NAME = "epiz_34169727_PetitPlatResto";

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
