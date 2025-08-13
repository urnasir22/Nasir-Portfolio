-- ============================================
-- 05 - SQL JOINs (INNER, LEFT, RIGHT, SELF JOIN)
-- Purpose: Demonstrate how to use various types of JOINs
-- to combine data across related tables
-- ============================================

-- Step 1: Create Customers and Orders tables
DROP TABLE IF EXISTS Customers;
DROP TABLE IF EXISTS Orders;

CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY AUTO_INCREMENT,
    CustomerName VARCHAR(100) NOT NULL,
    ReferrerID INT  -- Used for SELF JOIN (who referred this customer)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY AUTO_INCREMENT,
    CustomerID INT,
    ProductName VARCHAR(100),
    Quantity INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Step 2: Insert sample data into Customers
INSERT INTO Customers (CustomerName, ReferrerID) VALUES
('Ravi Kumar', NULL),
('Priya Sharma', 1),
('Anjali Verma', 1),
('Vikas Mehta', 2);

-- Step 3: Insert sample data into Orders
INSERT INTO Orders (CustomerID, ProductName, Quantity) VALUES
(1, 'Laptop', 1),
(2, 'Mouse', 2),
(3, 'Keyboard', 1);

-- Step 4: INNER JOIN - List all orders with customer details
SELECT o.OrderID, c.CustomerName, o.ProductName, o.Quantity
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID;

-- COMMENT:
-- Shows only those orders where there is a matching customer.

-- Step 5: LEFT JOIN - Show all customers and their orders (if any)
SELECT c.CustomerName, o.ProductName, o.Quantity
FROM Customers c
LEFT JOIN Orders o ON c.CustomerID = o.CustomerID;

-- COMMENT:
-- Useful for finding customers who haven't placed any orders yet.

-- Step 6: RIGHT JOIN - Show all orders and include customer name
SELECT c.CustomerName, o.ProductName, o.Quantity
FROM Customers c
RIGHT JOIN Orders o ON c.CustomerID = o.CustomerID;

-- COMMENT:
-- Shows all orders even if any order has an unknown customer.

-- Step 7: SELF JOIN - Find customers and who referred them
SELECT c.CustomerName AS Referred, r.CustomerName AS ReferredBy
FROM Customers c
LEFT JOIN Customers r ON c.ReferrerID = r.CustomerID;

-- COMMENT:
-- Helpful for referral tracking systems.

-- ============================================
-- 🧾 Summary Report:
-- ✅ INNER JOIN returns only orders with valid customers
-- ✅ LEFT JOIN shows all customers (with/without orders)
-- ✅ RIGHT JOIN shows all orders
-- ✅ SELF JOIN finds referrer relationships
-- ============================================
