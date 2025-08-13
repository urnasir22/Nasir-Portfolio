-- ============================================
-- 04 - INSERT, UPDATE, DELETE Operations
-- Purpose: Demonstrate how to add, modify, and remove records
-- in a typical E-commerce 'Orders' table with validations
-- ============================================

-- Step 1: Create the Orders table
DROP TABLE IF EXISTS Orders;
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY AUTO_INCREMENT,
    CustomerName VARCHAR(100) NOT NULL,
    ProductName VARCHAR(100) NOT NULL,
    Quantity INT CHECK (Quantity > 0),
    OrderDate DATE DEFAULT CURRENT_DATE
);

-- COMMENT:
-- - 'CustomerName' and 'ProductName' are required fields.
-- - 'Quantity' cannot be zero or negative.
-- - 'OrderDate' defaults to the current date if not provided.

-- Step 2: Insert sample orders
INSERT INTO Orders (CustomerName, ProductName, Quantity)
VALUES
('Ravi Kumar', 'Headphones', 2),
('Priya Sharma', 'USB Cable', 3),
('Anjali Verma', 'Mobile Phone', 1);

-- Step 3: Select all rows
SELECT * FROM Orders;

-- EXPECTED OUTPUT:
-- 3 rows should be returned with auto-generated OrderIDs.

-- Step 4: Update an order's quantity
UPDATE Orders
SET Quantity = 5
WHERE OrderID = 1;

-- COMMENT:
-- - Useful when customers change their mind and modify the order.

-- Step 5: Attempt to insert invalid quantity (Negative)
-- This should FAIL due to CHECK constraint
-- Uncomment to test:
-- INSERT INTO Orders (CustomerName, ProductName, Quantity)
-- VALUES ('Test User', 'Power Bank', -1);

-- Step 6: Delete an order
DELETE FROM Orders
WHERE OrderID = 2;

-- COMMENT:
-- - This simulates canceling an order.

-- Step 7: View final state of Orders table
SELECT * FROM Orders;

-- ============================================
-- 🧾 Summary Report:
-- ✅ 3 Orders inserted
-- ✅ 1 Order updated (OrderID = 1, Quantity changed to 5)
-- ✅ 1 Order deleted (OrderID = 2)
-- ❌ 1 invalid insert prevented (negative quantity)
-- ============================================
