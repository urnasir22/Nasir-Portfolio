-- Filename: 02_insert_data.sql
-- Description: Insert sample test data into e-commerce tables with basic validation.

-- Insert customers
INSERT INTO Customers (CustomerID, CustomerName, ContactName, Country)
VALUES 
  (1, 'Aman Enterprises', 'Aman Verma', 'India'),
  (2, 'QuickShop', 'Preeti Sharma', 'India'),
  (3, 'TechWave', 'Ravi Kumar', 'USA');

-- Insert products
INSERT INTO Products (ProductID, ProductName, Supplier, Price, InStock)
VALUES 
  (101, 'Mobile Phone', 'Samsung', 20000, 50),
  (102, 'Wireless Mouse', 'Logitech', 800, 100),
  (103, 'Bluetooth Speaker', 'Boat', 1500, 75);

-- Insert orders
INSERT INTO Orders (OrderID, CustomerID, OrderDate, ShippedDate, Status)
VALUES 
  (501, 1, '2024-05-01', '2024-05-03', 'Shipped'),
  (502, 2, '2024-05-02', NULL, 'Pending');

-- Insert order details
INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quantity, UnitPrice)
VALUES
  (1001, 501, 101, 2, 20000),
  (1002, 501, 102, 1, 800),
  (1003, 502, 103, 3, 1500);

-- Comments: Why this step is important?
-- This test data helps validate foreign key constraints, default values, and ensures referential integrity across the database.
-- Good insert data allows for testing JOINs, aggregates, and various queries later.

-- Expected Outcome:
-- - 3 customers added
-- - 3 products added
-- - 2 orders created
-- - 3 order detail lines added

-- Brief Report:
-- ✅ Sample data inserted into 4 key tables for further SELECT/UPDATE/DELETE testing.
-- ✅ No constraint errors indicate relational integrity is intact.
