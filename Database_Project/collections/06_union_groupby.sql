-- FILE: 06_union_groupby.sql
-- This script demonstrates the use of UNION, GROUP BY, HAVING, EXISTS, ANY, and ALL in an e-commerce database context.

-- ========================
-- SETUP SAMPLE DATA
-- ========================

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderAmount DECIMAL(10, 2),
    OrderDate DATE
);

CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    Country VARCHAR(50)
);

INSERT INTO Orders VALUES
(1, 101, 120.00, '2023-01-01'),
(2, 102, 500.00, '2023-01-02'),
(3, 103, 300.00, '2023-01-05'),
(4, 104, 120.00, '2023-01-08'),
(5, 101, 50.00, '2023-01-10'),
(6, 105, 90.00, '2023-01-11');

INSERT INTO Customers VALUES
(101, 'Alice', 'USA'),
(102, 'Bob', 'Canada'),
(103, 'Charlie', 'USA'),
(104, 'David', 'UK'),
(105, 'Eva', 'India');

-- ========================
-- 1. UNION: Combine Order IDs from Orders and a temporary CancelledOrders table
-- ========================

CREATE TABLE CancelledOrders (
    OrderID INT
);

INSERT INTO CancelledOrders VALUES (7), (8), (2); -- Note: OrderID 2 appears in both tables

SELECT OrderID FROM Orders
UNION
SELECT OrderID FROM CancelledOrders;

-- Output: Unique list of all Order IDs (no duplicates)

-- ========================
-- 2. GROUP BY: Get total order amount per customer
-- ========================

SELECT CustomerID, SUM(OrderAmount) AS TotalAmount
FROM Orders
GROUP BY CustomerID;

-- ========================
-- 3. HAVING: Filter customers whose total orders exceed 200
-- ========================

SELECT CustomerID, SUM(OrderAmount) AS TotalAmount
FROM Orders
GROUP BY CustomerID
HAVING SUM(OrderAmount) > 200;

-- ========================
-- 4. EXISTS: Find customers who have placed at least one order
-- ========================

SELECT CustomerName
FROM Customers c
WHERE EXISTS (
    SELECT 1 FROM Orders o WHERE o.CustomerID = c.CustomerID
);

-- ========================
-- 5. ANY: Find orders greater than ANY order amount placed by customer 101
-- ========================

SELECT * FROM Orders
WHERE OrderAmount > ANY (
    SELECT OrderAmount FROM Orders WHERE CustomerID = 101
);

-- ========================
-- 6. ALL: Find orders greater than ALL orders placed by customer 101
-- ========================

SELECT * FROM Orders
WHERE OrderAmount > ALL (
    SELECT OrderAmount FROM Orders WHERE CustomerID = 101
);

-- ========================
-- DIGESTIBLE REPORT SECTION
-- ========================

-- ✔ UNION returned a unique list of Order IDs from both Orders and CancelledOrders tables
-- ✔ GROUP BY showed total amount spent per customer
-- ✔ HAVING filtered customers who spent more than 200 in total
-- ✔ EXISTS identified customers who have at least one order
-- ✔ ANY returned orders greater than the smallest order of customer 101
-- ✔ ALL returned orders greater than the largest order of customer 101
