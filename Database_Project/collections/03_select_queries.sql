-- 03_select_queries.sql
-- Title: SQL SELECT Queries for Basic Data Validation
-- Description: Demonstrates use of SELECT, WHERE, ORDER BY, DISTINCT, LIKE, BETWEEN, IN clauses

-- ============================================
-- 📌 Scenario: Retrieve and filter data from e-commerce tables
-- ============================================

-- ✅ SELECT all products
SELECT * FROM Products;
-- This shows all product records for verification.

-- ✅ SELECT specific columns from Customers
SELECT CustomerID, Name, Email FROM Customers;
-- Important to confirm the integrity of key customer details.

-- ✅ SELECT with WHERE clause
SELECT * FROM Orders WHERE Status = 'Delivered';
-- Helps validate only successful transactions.

-- ✅ SELECT with ORDER BY clause
SELECT * FROM Products ORDER BY Price DESC;
-- Useful to detect outliers or incorrect pricing.

-- ✅ SELECT DISTINCT brands
SELECT DISTINCT Brand FROM Products;
-- Validates list of unique brands in inventory.

-- ✅ SELECT with BETWEEN
SELECT * FROM Products WHERE Price BETWEEN 100 AND 500;
-- Helps verify product pricing boundaries.

-- ✅ SELECT with LIKE
SELECT * FROM Customers WHERE Email LIKE '%@gmail.com';
-- Validates domain-based customer segmentation.

-- ✅ SELECT with IN
SELECT * FROM Orders WHERE Status IN ('Pending', 'Shipped');
-- Retrieves orders in specific states for tracking.

-- ============================================
-- 📝 Brief Report:
-- Verified product count, pricing order, filtered orders, and email patterns.
-- All queries assist in confirming data quality for common retrieval use cases.
-- ============================================
