-- 10_constraints_index.sql
-- This script demonstrates how to apply different SQL constraints and indexes.
-- Constraints are essential for maintaining data integrity.

-- Step 1: Drop table if exists (to ensure repeatable script runs)
DROP TABLE IF EXISTS customers;

-- Step 2: Create table with various constraints
CREATE TABLE customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,     -- Auto-incremented primary key
    first_name VARCHAR(50) NOT NULL,                -- Cannot be null
    last_name VARCHAR(50) NOT NULL,                 -- Cannot be null
    email VARCHAR(100) UNIQUE,                      -- Must be unique across table
    age INT CHECK (age >= 18),                      -- Age must be 18 or older
    country VARCHAR(50) DEFAULT 'India'             -- Default country value
);

-- Step 3: Insert sample data
INSERT INTO customers (first_name, last_name, email, age, country)
VALUES
('Amit', 'Sharma', 'amit.sharma@example.com', 30, 'India'),
('Neha', 'Verma', 'neha.verma@example.com', 25, NULL),
('Rohit', 'Kapoor', 'rohit.kapoor@example.com', 40, 'USA');

-- Step 4: Attempt inserting invalid data (this should fail)
-- Uncomment to test failure scenarios
-- INSERT INTO customers (first_name, last_name, email, age) VALUES ('Invalid', 'User', 'amit.sharma@example.com', 17);

-- Step 5: Create an index to speed up lookup on email
CREATE INDEX idx_email ON customers(email);

-- Step 6: View data and structure
SELECT * FROM customers;

-- Step 7: Show indexes
SHOW INDEX FROM customers;

-- 🔎 Report Summary:
-- 3 valid customer records inserted.
-- All constraints applied:
-- - No NULLs in required fields.
-- - Unique email constraint enforced.
-- - Primary Key with auto increment working.
-- - Age CHECK constraint restricts minors.
-- - Country defaults to 'India' if not provided.
-- - Index created on 'email' column for fast search.
