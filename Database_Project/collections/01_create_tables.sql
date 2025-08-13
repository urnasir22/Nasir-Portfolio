-- FILE: 01_create_tables.sql

-- Creating database (optional, depends on SQL platform)
-- CREATE DATABASE EcommerceDB;
-- USE EcommerceDB;

-- Creating 'Customers' table
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE,
    Country VARCHAR(50) DEFAULT 'India'
);

-- Creating 'Products' table
CREATE TABLE Products (
    ProductID INT PRIMARY KEY AUTO_INCREMENT,
    ProductName VARCHAR(100) NOT NULL,
    Price DECIMAL(10,2) CHECK (Price >= 0),
    InStock INT DEFAULT 0 CHECK (InStock >= 0)
);

-- Creating 'Orders' table
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY AUTO_INCREMENT,
    CustomerID INT,
    OrderDate DATE,
    TotalAmount DECIMAL(10,2),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Creating 'OrderDetails' table
CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY AUTO_INCREMENT,
    OrderID INT,
    ProductID INT,
    Quantity INT CHECK (Quantity > 0),
    PriceAtPurchase DECIMAL(10,2),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Why this is important:
-- 1. Enforces data integrity (foreign keys, constraints).
-- 2. Real-world e-commerce structure.

-- BRIEF REPORT:
-- Tables Created: Customers, Products, Orders, OrderDetails.
-- Relationships: Orders linked to Customers, OrderDetails linked to Orders and Products.
-- Constraints ensure data validity.
