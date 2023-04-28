<?php

class database
{
    private $servername = "localhost";
    private $username = "root";
    private $password = "";

    // Create connection
    private $conn = new mysqli($this->servername, $this->username, $this->password);

    // Check connection
    protected function checkConnection()
    {
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    // Create database
    protected function createDatabase()
    {
        $sql = "CREATE DATABASE BarberShop";
        if ($this->conn->query($sql) === TRUE) {
            echo "Database created successfully";
        } else {
            echo "Error creating database: " . $this->conn->error;
        }

        $this->conn->close();
    }

    // sql to create table
    protected function createTable()
    {
        $sql = "CREATE TABLE Clients (
            id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            names VARCHAR(30) NOT NULL,
            telephone VARCHAR(30) NOT NULL,
            amount VARCHAR(50),
            haircut VARCHAR(50),
            dateop VARCHAR(50),
            reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )";

        if ($this->conn->query($sql) === TRUE) {
            echo "Table MyGuests created successfully";
        } else {
            echo "Error creating table: " . $this->conn->error;
        }

        $this->conn->close();
    }
}
