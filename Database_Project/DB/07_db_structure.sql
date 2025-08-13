-- Filename: 09_db_structure.sql

-- 1. SQL Database and Table Operations
CREATE DATABASE ECommerceDB;
USE ECommerceDB;

-- Create Customer Table
CREATE TABLE Customers (
  CustomerID INT PRIMARY KEY IDENTITY(1,1),
  CustomerName VARCHAR(100) NOT NULL,
  Email VARCHAR(100) UNIQUE,
  City VARCHAR(50) DEFAULT 'Unknown'
);

-- Create Orders Table
CREATE TABLE Orders (
  OrderID INT PRIMARY KEY IDENTITY(1,1),
  OrderDate DATE NOT NULL,
  Amount DECIMAL(10,2) CHECK (Amount >= 0),
  CustomerID INT,
  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Add an index on Orders Amount
CREATE INDEX idx_amount ON Orders (Amount);

-- Alter Table Example: Add Column
ALTER TABLE Customers ADD Phone VARCHAR(15);

-- Drop Column
ALTER TABLE Customers DROP COLUMN Phone;

-- Auto Increment, Constraints: shown in table creation

-- Summary:
-- ✔ Created DB, Tables, and Constraints (PK, FK, UNIQUE, CHECK, DEFAULT).
-- ✔ Added/Dropped columns using ALTER TABLE.
-- ✔ Added index for performance on Amount column.
