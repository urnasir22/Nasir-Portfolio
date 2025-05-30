# API Testing Portfolio

This repository contains **10** Postman collections demonstrating a wide variety of API-testing concepts, from basic CRUD to advanced security and performance tests.

## Contents

1. **Auth & Session** – login, token management  
2. **User CRUD** – create/read/update/delete users  
3. **Product CRUD** – e-commerce product lifecycle  
4. **Pagination & Filtering** – list endpoints with pagination  
…  
30. **Continuous Integration** – Newman + Travis CI integration

## Environments

- `Development.postman_environment.json`: for local testing (ReqRes.in)  
- `Production.postman_environment.json`: for live API endpoints

## Getting Started

1. Install Postman v10+  
2. Import all `*.postman_collection.json` files  
3. Load the appropriate environment  
4. Run collections individually or via Newman

## CI Integration

A `.travis.yml` is provided to run all collections via Newman on each push:

```yaml
language: node_js
node_js:
  - "14"
install:
  - npm install -g newman
script:
  - newman run ./collections/Auth_Session.postman_collection.json -e ./environments/Development.postman_environment.json
  - newman run ./collections/User_CRUD.postman_collection.json -e ./environments/Development.postman_environment.json
  # … all others …
