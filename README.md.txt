
---

## 🔹 Collections Overview

1. **Auth_Session**  
   - Login and Logout flows using ReqRes.in  
2. **User_CRUD**  
   - Create, Read, Delete users using JSONPlaceholder  
3. **Product_CRUD**  
   - CRUD operations on products using FakeStoreAPI  
4. **Pagination_Filtering**  
   - Paginated user lists and filtering using ReqRes.in  
5. **File_Upload_Download**  
   - Upload and download files using Postman Echo  
6. **Order_Processing**  
   - Order management using FakeStoreAPI carts endpoints  
7. **Payment_Gateway**  
   - Simulated payment initiation and status checks (Postman Echo)  
8. **Notifications_API**  
   - Simulated notifications get/create/delete (Postman Echo)  
9. **Booking_Flow**  
   - Hotel booking create/read using Restful Booker API  
10. **Search_Query**  
   - Book search by title/author using OpenLibrary API  

*(More collections coming soon to cover parts like “Search & Query,” “Rate Limiting,” “OAuth2,” etc.)*

---

## 🔍 Environments

- **Testing.postman_environment.json**  
  - Defines:  
    - `baseUrl = https://reqres.in/api`  
    - `user.email = eve.holt@reqres.in`  
    - `user.password = cityslicka`  
    - `authToken = ` (empty by default)  

- **Production.postman_environment.json**  
  - Placeholder for actual API hosts, e.g.,  
    - `baseUrl = https://api.yourcompany.com`  
    - `authToken = ` (empty by default)

---

## 🚀 How to Import & Run

1. **Download or Clone** this repo:  
   ```bash
   git clone https://github.com/urnasir22/postman-api-portfolio.git
