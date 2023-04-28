<?php

class database
{
    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private $conn;

    public function createDB()
    {
        // Create connection
        $this->conn = new mysqli($this->servername, $this->username, $this->password);

        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
        echo "Connection established successfully";


        //sql query to create a database named petit-plat
        $query = "CREATE DATABASE petitplat";
        if ($this->conn->query($query)) {
            echo "Database created successfully";
        } else {
            echo "Error creating database: " . $this->conn->error;
        }
        $this->conn->close();
    }


    // sql to create table
    public function createTable()
    {
        $this->conn = new mysqli($this->servername, $this->username, $this->password, 'petitplat');
        $sqlTable = "CREATE TABLE menu (
            id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            names VARCHAR(30) NOT NULL,
            imageURL VARCHAR(300) NOT NULL,
            descriptions VARCHAR(200) NOT NULL,
            amount INT(10),
            postdate TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )";

        if ($this->conn->query($sqlTable)) {
            echo "Table menu created successfully";
        } else {
            echo "Error creating table: " . $this->conn->error;
        }

        $this->conn->close();
    }
}

$connection = new database();

// echo $connection->createDB();
echo $connection->createTable();
