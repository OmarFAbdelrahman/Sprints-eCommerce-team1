
# E-Commerce API



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->



## Endpoints

* [Auth](#auth)
    1. [Sign Up](#1-sign-up)
        * [Admin Sign Up](#i-example-request-admin-sign-up)
        * [Error: Duplicate Email](#ii-example-request-error-duplicate-email)
        * [User Sign Up](#iii-example-request-user-sign-up)
        * [Error: Invalid Email](#iv-example-request-error-invalid-email)
        * [Required Fields](#v-example-request-required-fields)
    1. [Login](#2-login)
        * [Incorrect Email](#i-example-request-incorrect-email)
        * [Incorrect Password](#ii-example-request-incorrect-password)
        * [Successful Response](#iii-example-request-successful-response)
    1. [Logout](#3-logout)
        * [Logout](#i-example-request-logout)
* [Categories](#categories)
    1. [Create Category](#1-create-category)
        * [Error Response](#i-example-request-error-response)
        * [Successful Response](#ii-example-request-successful-response)
        * [Duplicate name value](#iii-example-request-duplicate-name-value)
    1. [Get Categories](#2-get-categories)
        * [Successful response](#i-example-request-successful-response)
    1. [Get Single Category](#3-get-single-category)
        * [Successful Response](#i-example-request-successful-response-1)
        * [Wrong ID](#ii-example-request-wrong-id)
    1. [Update Category](#4-update-category)
        * [Succsessful Response](#i-example-request-succsessful-response)
        * [Wrong ID](#ii-example-request-wrong-id-1)
    1. [Delete Category](#5-delete-category)
        * [Wrong ID](#i-example-request-wrong-id)
        * [Successful Response](#ii-example-request-successful-response-1)
* [Products](#products)
    1. [Upload Image](#1-upload-image)
        * [Successful Response](#i-example-request-successful-response-2)
        * [Uploaded File is not an image](#ii-example-request-uploaded-file-is-not-an-image)
        * [No File Uploaded Response](#iii-example-request-no-file-uploaded-response)
    1. [Create Product](#2-create-product)
        * [Successful Response](#i-example-request-successful-response-3)
        * [Default Values (Price, Discount, Image, Stock)](#ii-example-request-default-values-price-discount-image-stock)
        * [Empty Request/ Error Response](#iii-example-request-empty-request-error-response)
    1. [Get Products](#3-get-products)
        * [Successful Response](#i-example-request-successful-response-4)
    1. [Get Single Product](#4-get-single-product)
        * [Wrong ID](#i-example-request-wrong-id-1)
        * [Successful Response](#ii-example-request-successful-response-2)
    1. [Update Product](#5-update-product)
        * [Wrong ID](#i-example-request-wrong-id-2)
        * [Successful Response](#ii-example-request-successful-response-3)
    1. [Delete Product](#6-delete-product)
        * [Successful Response](#i-example-request-successful-response-5)
        * [Wrong ID](#ii-example-request-wrong-id-2)
* [Orders](#orders)
    1. [Create Order](#1-create-order)
        * [Card Order/ No Card ID (Deactivated)](#i-example-request-card-order-no-card-id-deactivated)
        * [No Payment Method](#ii-example-request-no-payment-method)
        * [Cash Order Example](#iii-example-request-cash-order-example)
        * [Card Order Example (Deactivated)](#iv-example-request-card-order-example-deactivated)
        * [No Authentication](#v-example-request-no-authentication)
        * [No Cart Items](#vi-example-request-no-cart-items)
    1. [Get Orders](#2-get-orders)
        * [Invalid Authentication](#i-example-request-invalid-authentication)
        * [Successful Response](#ii-example-request-successful-response-4)
        * [Unauthorized (not admin)](#iii-example-request-unauthorized-not-admin)
    1. [Get Single Order](#3-get-single-order)
        * [Invalid Authentication](#i-example-request-invalid-authentication-1)
        * [Wrong ID](#ii-example-request-wrong-id-3)
        * [Unauthorized (not the same user that created the order)](#iii-example-request-unauthorized-not-the-same-user-that-created-the-order)
        * [Successful Response](#iv-example-request-successful-response)
    1. [Get Current Orders](#4-get-current-orders)
        * [Invalid Authentication](#i-example-request-invalid-authentication-2)
        * [Get Current Orders Of A User](#ii-example-request-get-current-orders-of-a-user)
    1. [Update Order Status](#5-update-order-status)
        * [Successful Response](#i-example-request-successful-response-6)
        * [Wrong ID](#ii-example-request-wrong-id-4)
        * [Invalid Authentication (Must be an admin)](#iii-example-request-invalid-authentication-must-be-an-admin)

--------



## Auth



### 1. Sign Up



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/auth/signup
```



***Body:***

```js        
{
    "email": "test@gmail.com",
    "password": "secret",
    "firstName": "Omar",
    "lastName": "Farouk",
    "phone":"01112345566",
    "shippingAddress": "22,street,city",
    "billingAddress": "22,street,city"


}
```



***More example Requests/Responses:***


#### I. Example Request: Admin Sign Up



***Body:***

```js        
{
    "email": "omarrr@gmail.com",
    "password": "secret",
    "firstName": "Omar",
    "lastName": "Farouk",
    "phone":"01112345566",
    "shippingAddress": "22,street,city",
    "billingAddress": "22,street,city",
    "gender": 0,
    "dateOfBirth": "1996-01-01",
    "role": 1

}
```



#### I. Example Response: Admin Sign Up
```js
{
    "user": "62a69c906880414e096f9daa"
}
```


***Status Code:*** 201

<br>



#### II. Example Request: Error: Duplicate Email



***Body:***

```js        
{
    "email": "omar@gmail.com",
    "password": "secret",
    "firstName": "Omar",
    "lastName": "Farouk",
    "phone":"01112345566",
    "shippingAddress": "22,street,city",
    "billingAddress": "22,street,city",
    "gender": 0,
    "dateOfBirth": "1996-01-01",
    "role": 1

}
```



#### II. Example Response: Error: Duplicate Email
```js
{
    "msg": "Duplicate value entered for email field, please choose another value"
}
```


***Status Code:*** 400

<br>



#### III. Example Request: User Sign Up



***Body:***

```js        
{
    "email": "omarr@gmail.com",
    "password": "secret",
    "firstName": "Omar",
    "lastName": "Farouk",
    "phone":"01112345566",
    "shippingAddress": "22,street,city",
    "billingAddress": "22,street,city",
    "gender": 0,
    "dateOfBirth": "1996-01-01"

}
```



#### III. Example Response: User Sign Up
```js
{
    "user": "62a69bd76880414e096f9da8"
}
```


***Status Code:*** 201

<br>



#### IV. Example Request: Error: Invalid Email



***Body:***

```js        
{
    "email": "omar@gmailcom",
    "password": "secret",
    "firstName": "Omar",
    "lastName": "Farouk",
    "phone":"01112345566",
    "shippingAddress": "22,street,city",
    "billingAddress": "22,street,city",
    "gender": 0,
    "dateOfBirth": "1996-01-01",
    "role": 1

}
```



#### IV. Example Response: Error: Invalid Email
```js
{
    "msg": "Please enter a valid email"
}
```


***Status Code:*** 400

<br>



#### V. Example Request: Required Fields



***Body:***

```js        
{
    "email": "test@gmail.com",
    "password": "secret",
    "firstName": "Omar",
    "lastName": "Farouk",
    "phone":"01112345566",
    "shippingAddress": "22,street,city",
    "billingAddress": "22,street,city"


}
```



#### V. Example Response: Required Fields
```js
{
    "user": "62a69d6b6880414e096f9db0"
}
```


***Status Code:*** 201

<br>



### 2. Login



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/auth/login
```



***Body:***

```js        
{
    "email": "omar@gmail.com",
    "password": "secret"
}
```



***More example Requests/Responses:***


#### I. Example Request: Incorrect Email



***Body:***

```js        
{
    "email": "",
    "password": "secret"
}
```



#### I. Example Response: Incorrect Email
```js
{
    "msg": "incorrect email"
}
```


***Status Code:*** 400

<br>



#### II. Example Request: Incorrect Password



***Body:***

```js        
{
    "email": "omar@gmail.com",
    "password": "secret2"
}
```



#### II. Example Response: Incorrect Password
```js
{
    "msg": "incorrect password"
}
```


***Status Code:*** 400

<br>



#### III. Example Request: Successful Response



***Body:***

```js        
{
    "email": "omar@gmail.com",
    "password": "secret"
}
```



#### III. Example Response: Successful Response
```js
{
    "user": "62a66e5f1881a22a218090bf"
}
```


***Status Code:*** 200

<br>



### 3. Logout



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/auth/logout
```



***More example Requests/Responses:***


#### I. Example Request: Logout



***Body: None***



#### I. Example Response: Logout
```js
{
    "msg": "logged out"
}
```


***Status Code:*** 200

<br>



## Categories



### 1. Create Category



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/categories
```



***Body:***

```js        
{
    "name": "Others"
}

```



***More example Requests/Responses:***


#### I. Example Request: Error Response



***Body:***

```js        
{
    
}
```



#### I. Example Response: Error Response
```js
{
    "msg": "Please provide category name"
}
```


***Status Code:*** 400

<br>



#### II. Example Request: Successful Response



***Body:***

```js        
{
    "name":"Mobiles"
}
```



#### II. Example Response: Successful Response
```js
{
    "category": {
        "name": "Mobiles",
        "_id": "62a32ad155ae64dcf7d80b7c",
        "createdAt": "2022-06-10T11:28:17.469Z",
        "updatedAt": "2022-06-10T11:28:17.469Z",
        "__v": 0
    }
}
```


***Status Code:*** 201

<br>



#### III. Example Request: Duplicate name value



***Body:***

```js        
{
    "name": "Mobiles"
}

```



#### III. Example Response: Duplicate name value
```js
{
    "msg": "Duplicate value entered for name field, please choose another value"
}
```


***Status Code:*** 400

<br>



### 2. Get Categories



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/categories
```



***More example Requests/Responses:***


#### I. Example Request: Successful response



***Body: None***



#### I. Example Response: Successful response
```js
{
    "categories": [
        {
            "_id": "62a32dad0e8281e47780986f",
            "name": "Mobiles",
            "createdAt": "2022-06-10T11:40:29.834Z",
            "updatedAt": "2022-06-10T11:40:29.834Z",
            "__v": 0
        },
        {
            "_id": "62a32dfb0e8281e477809873",
            "name": "Others",
            "createdAt": "2022-06-10T11:41:47.449Z",
            "updatedAt": "2022-06-10T11:41:47.449Z",
            "__v": 0
        }
    ],
    "count": 2
}
```


***Status Code:*** 200

<br>



### 3. Get Single Category



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/categories/:id
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a28bab5f4b07296885c78a |  |



***More example Requests/Responses:***


#### I. Example Request: Successful Response



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a32dad0e8281e47780986f |  |



***Body: None***



#### I. Example Response: Successful Response
```js
{
    "category": {
        "_id": "62a32dad0e8281e47780986f",
        "name": "Mobiles",
        "createdAt": "2022-06-10T11:40:29.834Z",
        "updatedAt": "2022-06-10T11:40:29.834Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



#### II. Example Request: Wrong ID



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1 |  |



***Body: None***



#### II. Example Response: Wrong ID
```js
{
    "msg": "No item found with id : 1"
}
```


***Status Code:*** 404

<br>



### 4. Update Category



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/categories/:id
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a28bab5f4b07296885c78a |  |



***Body:***

```js        
{
    "name":"Mobile Phones"
}
```



***More example Requests/Responses:***


#### I. Example Request: Succsessful Response



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a32dad0e8281e47780986f |  |



***Body:***

```js        
{
    "name":"Mobile Phones"
}
```



#### I. Example Response: Succsessful Response
```js
{
    "category": {
        "_id": "62a32dad0e8281e47780986f",
        "name": "Mobile Phones",
        "createdAt": "2022-06-10T11:40:29.834Z",
        "updatedAt": "2022-06-10T11:44:40.584Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



#### II. Example Request: Wrong ID



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1 |  |



***Body:***

```js        
{
    "name":"Mobile Phones"
}
```



#### II. Example Response: Wrong ID
```js
{
    "msg": "No item found with id : 1"
}
```


***Status Code:*** 404

<br>



### 5. Delete Category



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/categories/:id
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a28bab5f4b07296885c78a |  |



***More example Requests/Responses:***


#### I. Example Request: Wrong ID



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1 |  |



***Body: None***



#### I. Example Response: Wrong ID
```js
{
    "msg": "No item found with id : 1"
}
```


***Status Code:*** 404

<br>



#### II. Example Request: Successful Response



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a32dad0e8281e47780986f |  |



***Body: None***



#### II. Example Response: Successful Response
```js
{
    "msg": "Category is deleted"
}
```


***Status Code:*** 200

<br>



## Products



### 1. Upload Image



***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: {{URL}}/products/uploadImage
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| image |  |  |



***More example Requests/Responses:***


#### I. Example Request: Successful Response



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| image |  |  |



#### I. Example Response: Successful Response
```js
{
    "image": "/images/iphone-13-pro-family-hero.png"
}
```


***Status Code:*** 200

<br>



#### II. Example Request: Uploaded File is not an image



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| image |  |  |



#### II. Example Response: Uploaded File is not an image
```js
{
    "msg": "Please upload an image"
}
```


***Status Code:*** 400

<br>



#### III. Example Request: No File Uploaded Response



#### III. Example Response: No File Uploaded Response
```js
{
    "msg": "No file uploaded"
}
```


***Status Code:*** 400

<br>



### 2. Create Product



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/products
```



***Body:***

```js        
    {
        "name": "Samsung S22",
        "description": "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum",
        "category": "62a3358dfa70c8308b31810b"
    }
```



***More example Requests/Responses:***


#### I. Example Request: Successful Response



***Body:***

```js        
    {
        "name": "Iphone",
        "description": "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum",
        "price": 15000,
        "discount": 0,
        "gallery": [
            "/images/iphone-13-pro-family-hero.png"
        ],
        "stock": 100,
        "category": "62a3358dfa70c8308b31810b"
    }
```



#### I. Example Response: Successful Response
```js
{
    "product": {
        "name": "Iphone",
        "description": "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum",
        "price": 15000,
        "discount": 0,
        "gallery": [
            "/images/iphone-13-pro-family-hero.png"
        ],
        "stock": 100,
        "category": "62a3358dfa70c8308b31810b",
        "_id": "62a335b9fa70c8308b31810d",
        "createdAt": "2022-06-10T12:14:49.641Z",
        "updatedAt": "2022-06-10T12:14:49.641Z",
        "__v": 0
    }
}
```


***Status Code:*** 201

<br>



#### II. Example Request: Default Values (Price, Discount, Image, Stock)



***Body:***

```js        
    {
        "name": "Samsung S22",
        "description": "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum",
        "category": "62a3358dfa70c8308b31810b"
    }
```



#### II. Example Response: Default Values (Price, Discount, Image, Stock)
```js
{
    "product": {
        "name": "Samsung S22",
        "description": "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum",
        "price": 0,
        "discount": 0,
        "gallery": [
            "/images/default-product-image.png"
        ],
        "stock": 20,
        "category": "62a3358dfa70c8308b31810b",
        "_id": "62a3368efa70c8308b318111",
        "createdAt": "2022-06-10T12:18:22.776Z",
        "updatedAt": "2022-06-10T12:18:22.776Z",
        "__v": 0
    }
}
```


***Status Code:*** 201

<br>



#### III. Example Request: Empty Request/ Error Response



***Body:***

```js        
{
    
}
```



#### III. Example Response: Empty Request/ Error Response
```js
{
    "msg": "Please provide product category,Please provide description,Please provide product name"
}
```


***Status Code:*** 400

<br>



### 3. Get Products



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/products
```



***More example Requests/Responses:***


#### I. Example Request: Successful Response



***Body: None***



#### I. Example Response: Successful Response
```js
{
    "products": [
        {
            "_id": "62a335b9fa70c8308b31810d",
            "name": "Iphone",
            "description": "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum",
            "price": 15000,
            "discount": 0,
            "gallery": [
                "/images/iphone-13-pro-family-hero.png"
            ],
            "stock": 100,
            "category": "62a3358dfa70c8308b31810b",
            "createdAt": "2022-06-10T12:14:49.641Z",
            "updatedAt": "2022-06-10T12:14:49.641Z",
            "__v": 0
        },
        {
            "_id": "62a3368efa70c8308b318111",
            "name": "Samsung S22",
            "description": "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum",
            "price": 0,
            "discount": 0,
            "gallery": [
                "/images/default-product-image.png"
            ],
            "stock": 20,
            "category": "62a3358dfa70c8308b31810b",
            "createdAt": "2022-06-10T12:18:22.776Z",
            "updatedAt": "2022-06-10T12:18:22.776Z",
            "__v": 0
        }
    ],
    "count": 2
}
```


***Status Code:*** 200

<br>



### 4. Get Single Product



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/products/:id
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a3368efa70c8308b318111 |  |



***More example Requests/Responses:***


#### I. Example Request: Wrong ID



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1 |  |



***Body: None***



#### I. Example Response: Wrong ID
```js
{
    "msg": "No item found with id : 1"
}
```


***Status Code:*** 404

<br>



#### II. Example Request: Successful Response



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a335b9fa70c8308b31810d |  |



***Body: None***



#### II. Example Response: Successful Response
```js
{
    "product": {
        "_id": "62a335b9fa70c8308b31810d",
        "name": "Iphone",
        "description": "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum",
        "price": 15000,
        "discount": 0,
        "gallery": [
            "/images/iphone-13-pro-family-hero.png"
        ],
        "stock": 100,
        "category": "62a3358dfa70c8308b31810b",
        "createdAt": "2022-06-10T12:14:49.641Z",
        "updatedAt": "2022-06-10T12:14:49.641Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 5. Update Product



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/products/:id
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a3368efa70c8308b318111 |  |



***Body:***

```js        
{
    "price": 14000 
}
```



***More example Requests/Responses:***


#### I. Example Request: Wrong ID



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1 |  |



***Body:***

```js        
{
    "price": 14000 
}
```



#### I. Example Response: Wrong ID
```js
{
    "msg": "No item found with id : 1"
}
```


***Status Code:*** 404

<br>



#### II. Example Request: Successful Response



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a335b9fa70c8308b31810d |  |



***Body:***

```js        
{
    "price": 14000 
}
```



#### II. Example Response: Successful Response
```js
{
    "product": {
        "_id": "62a335b9fa70c8308b31810d",
        "name": "Iphone",
        "description": "Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum",
        "price": 14000,
        "discount": 0,
        "gallery": [
            "/images/iphone-13-pro-family-hero.png"
        ],
        "stock": 100,
        "category": "62a3358dfa70c8308b31810b",
        "createdAt": "2022-06-10T12:14:49.641Z",
        "updatedAt": "2022-06-10T12:23:41.704Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 6. Delete Product



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: {{URL}}/products/:id
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a3368efa70c8308b318111 |  |



***More example Requests/Responses:***


#### I. Example Request: Successful Response



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a335b9fa70c8308b31810d |  |



***Body: None***



#### I. Example Response: Successful Response
```js
{
    "msg": "Product removed"
}
```


***Status Code:*** 200

<br>



#### II. Example Request: Wrong ID



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 1 |  |



***Body: None***



#### II. Example Response: Wrong ID
```js
{
    "msg": "No item found with id : 1"
}
```


***Status Code:*** 404

<br>



## Orders



### 1. Create Order



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: {{URL}}/orders
```



***Body:***

```js        
{
    "cartItems": [
        {
            "product": "62a5ff8126bb8cf59688e530",
            "quantity": 12,
            "price": 14
        },
        {
            "product": "62a645061a948f01f333847e",
            "quantity": 5,
            "price": 14
        }
    ],
    
    "paymentMethod": "Cash"
    
}
```



***More example Requests/Responses:***


#### I. Example Request: Card Order/ No Card ID (Deactivated)



***Body:***

```js        
{
    "cartItems": [
        {
            "product": "62a5ff8126bb8cf59688e530",
            "quantity": 12,
            "price": 14
        },
        {
            "product": "62a645061a948f01f333847e",
            "quantity": 5,
            "price": 14
        }
    ],
    "shippingFee" : 30,
    "paymentMethod": "Card"
    
}
```



#### I. Example Response: Card Order/ No Card ID (Deactivated)
```js
{
    "msg": "Please provide card id"
}
```


***Status Code:*** 400

<br>



#### II. Example Request: No Payment Method



***Body:***

```js        
{
    "cartItems": [
        {
            "product": "62a5ff8126bb8cf59688e530",
            "quantity": 12,
            "price": 14
        },
        {
            "product": "62a645061a948f01f333847e",
            "quantity": 5,
            "price": 14
        }
    ],
    "shippingFee" : 30
    
}
```



#### II. Example Response: No Payment Method
```js
{
    "msg": "Please provide valid payment method"
}
```


***Status Code:*** 400

<br>



#### III. Example Request: Cash Order Example



***Body:***

```js        
{
    "cartItems": [
        {
            "product": "62a5ff8126bb8cf59688e530",
            "quantity": 12,
            "price": 14
        },
        {
            "product": "62a645061a948f01f333847e",
            "quantity": 5,
            "price": 14
        }
    ],
    "shippingFee" : 30,
    "paymentMethod": "Cash"
    
}
```



#### III. Example Response: Cash Order Example
```js
{
    "order": {
        "subTotal": 238,
        "shippingFee": 30,
        "total": 268,
        "orderItems": [
            {
                "product": "62a5ff8126bb8cf59688e530",
                "quantity": 12,
                "gallery": [
                    "/images/default-product-image.png"
                ],
                "price": 14,
                "name": "shampoo",
                "_id": "62a6a5a602d38de2815e5c69"
            },
            {
                "product": "62a645061a948f01f333847e",
                "quantity": 5,
                "gallery": [
                    "/images/default-product-image.png"
                ],
                "price": 14,
                "name": "Test123",
                "_id": "62a6a5a602d38de2815e5c6a"
            }
        ],
        "status": "Pending",
        "paymentMethod": "Cash",
        "user": "62a66e5f1881a22a218090bf",
        "_id": "62a6a5a602d38de2815e5c68",
        "createdAt": "2022-06-13T02:49:10.289Z",
        "updatedAt": "2022-06-13T02:49:10.289Z",
        "__v": 0
    }
}
```


***Status Code:*** 201

<br>



#### IV. Example Request: Card Order Example (Deactivated)



***Body:***

```js        
{
    "cartItems": [
        {
            "product": "62a5ff8126bb8cf59688e530",
            "quantity": 12,
            "price": 14
        },
        {
            "product": "62a645061a948f01f333847e",
            "quantity": 5,
            "price": 14
        }
    ],
    "shippingFee" : 30,
    "paymentMethod": "Card",
    "cardId": "62a645061a948f01f3338471"
    
}
```



#### IV. Example Response: Card Order Example (Deactivated)
```js
{
    "order": {
        "subTotal": 238,
        "shippingFee": 30,
        "total": 268,
        "orderItems": [
            {
                "product": "62a5ff8126bb8cf59688e530",
                "quantity": 12,
                "gallery": [
                    "/images/default-product-image.png"
                ],
                "price": 14,
                "name": "shampoo",
                "_id": "62a6a60202d38de2815e5c6f"
            },
            {
                "product": "62a645061a948f01f333847e",
                "quantity": 5,
                "gallery": [
                    "/images/default-product-image.png"
                ],
                "price": 14,
                "name": "Test123",
                "_id": "62a6a60202d38de2815e5c70"
            }
        ],
        "status": "Pending",
        "paymentMethod": "Card",
        "user": "62a66e5f1881a22a218090bf",
        "_id": "62a6a60202d38de2815e5c6e",
        "createdAt": "2022-06-13T02:50:42.937Z",
        "updatedAt": "2022-06-13T02:50:42.937Z",
        "__v": 0
    }
}
```


***Status Code:*** 201

<br>



#### V. Example Request: No Authentication



***Body:***

```js        
{
    "cartItems": [
        {
            "product": "62a5ff8126bb8cf59688e530",
            "quantity": 12,
            "price": 14
        },
        {
            "product": "62a645061a948f01f333847e",
            "quantity": 5,
            "price": 14
        }
    ],
    "shippingFee" : 30
    
}
```



#### V. Example Response: No Authentication
```js
{
    "msg": "Authentication Invalid"
}
```


***Status Code:*** 401

<br>



#### VI. Example Request: No Cart Items



***Body:***

```js        
{
  
}
```



#### VI. Example Response: No Cart Items
```js
{
    "msg": "No cart items provided"
}
```


***Status Code:*** 400

<br>



### 2. Get Orders



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/orders
```



***More example Requests/Responses:***


#### I. Example Request: Invalid Authentication



***Body: None***



#### I. Example Response: Invalid Authentication
```js
{
    "msg": "Authentication Invalid"
}
```


***Status Code:*** 401

<br>



#### II. Example Request: Successful Response



***Body: None***



#### II. Example Response: Successful Response
```js
{
    "orders": [
        {
            "_id": "62a6a36bd3cf54128032fab5",
            "subTotal": 75,
            "shippingFee": 30,
            "total": 105,
            "orderItems": [
                {
                    "product": "62a3368efa70c8308b318111",
                    "quantity": 12,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 0,
                    "_id": "62a6a36bd3cf54128032fab6"
                },
                {
                    "product": "62a645061a948f01f333847e",
                    "quantity": 5,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 14,
                    "_id": "62a6a36bd3cf54128032fab7"
                }
            ],
            "status": "Pending",
            "paymentMethod": "Cash",
            "user": "62a66e5f1881a22a218090bf",
            "createdAt": "2022-06-13T02:39:39.646Z",
            "updatedAt": "2022-06-13T02:39:39.646Z",
            "__v": 0
        },
        {
            "_id": "62a6a55c02d38de2815e5c62",
            "subTotal": 238,
            "shippingFee": 30,
            "total": 268,
            "orderItems": [
                {
                    "product": "62a5ff8126bb8cf59688e530",
                    "quantity": 12,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 14,
                    "name": "shampoo",
                    "_id": "62a6a55c02d38de2815e5c63"
                },
                {
                    "product": "62a645061a948f01f333847e",
                    "quantity": 5,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 14,
                    "name": "Test123",
                    "_id": "62a6a55c02d38de2815e5c64"
                }
            ],
            "status": "Pending",
            "paymentMethod": "Cash",
            "user": "62a66e5f1881a22a218090bf",
            "createdAt": "2022-06-13T02:47:56.373Z",
            "updatedAt": "2022-06-13T02:47:56.373Z",
            "__v": 0
        },
        {
            "_id": "62a6a5a602d38de2815e5c68",
            "subTotal": 238,
            "shippingFee": 30,
            "total": 268,
            "orderItems": [
                {
                    "product": "62a5ff8126bb8cf59688e530",
                    "quantity": 12,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 14,
                    "name": "shampoo",
                    "_id": "62a6a5a602d38de2815e5c69"
                },
                {
                    "product": "62a645061a948f01f333847e",
                    "quantity": 5,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 14,
                    "name": "Test123",
                    "_id": "62a6a5a602d38de2815e5c6a"
                }
            ],
            "status": "Pending",
            "paymentMethod": "Cash",
            "user": "62a66e5f1881a22a218090bf",
            "createdAt": "2022-06-13T02:49:10.289Z",
            "updatedAt": "2022-06-13T02:49:10.289Z",
            "__v": 0
        },
        {
            "_id": "62a6a60202d38de2815e5c6e",
            "subTotal": 238,
            "shippingFee": 30,
            "total": 268,
            "orderItems": [
                {
                    "product": "62a5ff8126bb8cf59688e530",
                    "quantity": 12,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 14,
                    "name": "shampoo",
                    "_id": "62a6a60202d38de2815e5c6f"
                },
                {
                    "product": "62a645061a948f01f333847e",
                    "quantity": 5,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 14,
                    "name": "Test123",
                    "_id": "62a6a60202d38de2815e5c70"
                }
            ],
            "status": "Pending",
            "paymentMethod": "Card",
            "user": "62a66e5f1881a22a218090bf",
            "createdAt": "2022-06-13T02:50:42.937Z",
            "updatedAt": "2022-06-13T02:50:42.937Z",
            "__v": 0
        }
    ],
    "count": 4
}
```


***Status Code:*** 200

<br>



#### III. Example Request: Unauthorized (not admin)



***Body: None***



#### III. Example Response: Unauthorized (not admin)
```js
{
    "msg": "Unauthorized to access this route"
}
```


***Status Code:*** 403

<br>



### 3. Get Single Order



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/orders/:id
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a28bab5f4b07296885c78a |  |



***More example Requests/Responses:***


#### I. Example Request: Invalid Authentication



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a6a36bd3cf54128032fab5 |  |



***Body: None***



#### I. Example Response: Invalid Authentication
```js
{
    "msg": "Authentication Invalid"
}
```


***Status Code:*** 401

<br>



#### II. Example Request: Wrong ID



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a6a36bd3cf54128032faba |  |



***Body: None***



#### II. Example Response: Wrong ID
```js
{
    "msg": "No order with id : 62a6a36bd3cf54128032faba"
}
```


***Status Code:*** 404

<br>



#### III. Example Request: Unauthorized (not the same user that created the order)



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a6a36bd3cf54128032fab5 |  |



***Body: None***



#### III. Example Response: Unauthorized (not the same user that created the order)
```js
{
    "msg": "Not authorized to access this route"
}
```


***Status Code:*** 403

<br>



#### IV. Example Request: Successful Response



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a6a36bd3cf54128032fab5 |  |



***Body: None***



#### IV. Example Response: Successful Response
```js
{
    "order": {
        "_id": "62a6a36bd3cf54128032fab5",
        "subTotal": 75,
        "shippingFee": 30,
        "total": 105,
        "orderItems": [
            {
                "product": "62a3368efa70c8308b318111",
                "quantity": 12,
                "gallery": [
                    "/images/default-product-image.png"
                ],
                "price": 0,
                "_id": "62a6a36bd3cf54128032fab6"
            },
            {
                "product": "62a645061a948f01f333847e",
                "quantity": 5,
                "gallery": [
                    "/images/default-product-image.png"
                ],
                "price": 14,
                "_id": "62a6a36bd3cf54128032fab7"
            }
        ],
        "status": "Pending",
        "paymentMethod": "Cash",
        "user": "62a66e5f1881a22a218090bf",
        "createdAt": "2022-06-13T02:39:39.646Z",
        "updatedAt": "2022-06-13T02:39:39.646Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 4. Get Current Orders



***Endpoint:***

```bash
Method: GET
Type: 
URL: {{URL}}/showMyOrders
```



***More example Requests/Responses:***


#### I. Example Request: Invalid Authentication



***Body: None***



#### I. Example Response: Invalid Authentication
```js
{
    "msg": "Authentication Invalid"
}
```


***Status Code:*** 401

<br>



#### II. Example Request: Get Current Orders Of A User



***Body: None***



#### II. Example Response: Get Current Orders Of A User
```js
{
    "orders": [
        {
            "_id": "62a6a36bd3cf54128032fab5",
            "subTotal": 75,
            "shippingFee": 30,
            "total": 105,
            "orderItems": [
                {
                    "product": "62a3368efa70c8308b318111",
                    "quantity": 12,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 0,
                    "_id": "62a6a36bd3cf54128032fab6"
                },
                {
                    "product": "62a645061a948f01f333847e",
                    "quantity": 5,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 14,
                    "_id": "62a6a36bd3cf54128032fab7"
                }
            ],
            "status": "Pending",
            "paymentMethod": "Cash",
            "user": "62a66e5f1881a22a218090bf",
            "createdAt": "2022-06-13T02:39:39.646Z",
            "updatedAt": "2022-06-13T02:39:39.646Z",
            "__v": 0
        },
        {
            "_id": "62a6a55c02d38de2815e5c62",
            "subTotal": 238,
            "shippingFee": 30,
            "total": 268,
            "orderItems": [
                {
                    "product": "62a5ff8126bb8cf59688e530",
                    "quantity": 12,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 14,
                    "name": "shampoo",
                    "_id": "62a6a55c02d38de2815e5c63"
                },
                {
                    "product": "62a645061a948f01f333847e",
                    "quantity": 5,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 14,
                    "name": "Test123",
                    "_id": "62a6a55c02d38de2815e5c64"
                }
            ],
            "status": "Pending",
            "paymentMethod": "Cash",
            "user": "62a66e5f1881a22a218090bf",
            "createdAt": "2022-06-13T02:47:56.373Z",
            "updatedAt": "2022-06-13T02:47:56.373Z",
            "__v": 0
        },
        {
            "_id": "62a6a5a602d38de2815e5c68",
            "subTotal": 238,
            "shippingFee": 30,
            "total": 268,
            "orderItems": [
                {
                    "product": "62a5ff8126bb8cf59688e530",
                    "quantity": 12,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 14,
                    "name": "shampoo",
                    "_id": "62a6a5a602d38de2815e5c69"
                },
                {
                    "product": "62a645061a948f01f333847e",
                    "quantity": 5,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 14,
                    "name": "Test123",
                    "_id": "62a6a5a602d38de2815e5c6a"
                }
            ],
            "status": "Pending",
            "paymentMethod": "Cash",
            "user": "62a66e5f1881a22a218090bf",
            "createdAt": "2022-06-13T02:49:10.289Z",
            "updatedAt": "2022-06-13T02:49:10.289Z",
            "__v": 0
        },
        {
            "_id": "62a6a60202d38de2815e5c6e",
            "subTotal": 238,
            "shippingFee": 30,
            "total": 268,
            "orderItems": [
                {
                    "product": "62a5ff8126bb8cf59688e530",
                    "quantity": 12,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 14,
                    "name": "shampoo",
                    "_id": "62a6a60202d38de2815e5c6f"
                },
                {
                    "product": "62a645061a948f01f333847e",
                    "quantity": 5,
                    "gallery": [
                        "/images/default-product-image.png"
                    ],
                    "price": 14,
                    "name": "Test123",
                    "_id": "62a6a60202d38de2815e5c70"
                }
            ],
            "status": "Pending",
            "paymentMethod": "Card",
            "user": "62a66e5f1881a22a218090bf",
            "createdAt": "2022-06-13T02:50:42.937Z",
            "updatedAt": "2022-06-13T02:50:42.937Z",
            "__v": 0
        }
    ],
    "count": 4
}
```


***Status Code:*** 200

<br>



### 5. Update Order Status



***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: {{URL}}/orders/:id
```



***URL variables:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a6a60202d38de2815e5c6e |  |



***Body:***

```js        
{
    "status": "In Review"
}
```



***More example Requests/Responses:***


#### I. Example Request: Successful Response



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a6a60202d38de2815e5c6e |  |



***Body:***

```js        
{
    "status": "In Review"
}
```



#### I. Example Response: Successful Response
```js
{
    "order": {
        "_id": "62a6a60202d38de2815e5c6e",
        "subTotal": 238,
        "shippingFee": 30,
        "total": 268,
        "orderItems": [
            {
                "product": "62a5ff8126bb8cf59688e530",
                "quantity": 12,
                "gallery": [
                    "/images/default-product-image.png"
                ],
                "price": 14,
                "name": "shampoo",
                "_id": "62a6a60202d38de2815e5c6f"
            },
            {
                "product": "62a645061a948f01f333847e",
                "quantity": 5,
                "gallery": [
                    "/images/default-product-image.png"
                ],
                "price": 14,
                "name": "Test123",
                "_id": "62a6a60202d38de2815e5c70"
            }
        ],
        "status": "In Review",
        "paymentMethod": "Card",
        "user": "62a66e5f1881a22a218090bf",
        "createdAt": "2022-06-13T02:50:42.937Z",
        "updatedAt": "2022-06-13T03:18:17.699Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



#### II. Example Request: Wrong ID



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a28bab5f4b07296885c78a |  |



#### II. Example Response: Wrong ID
```js
{
    "msg": "No order with id : 62a28bab5f4b07296885c78a"
}
```


***Status Code:*** 404

<br>



#### III. Example Request: Invalid Authentication (Must be an admin)



***Query:***

| Key | Value | Description |
| --- | ------|-------------|
| id | 62a28bab5f4b07296885c78a |  |



#### III. Example Response: Invalid Authentication (Must be an admin)
```js
{
    "msg": "Authentication Invalid"
}
```


***Status Code:*** 401

<br>



---
[Back to top](#e-commerce-api)

>Generated at 2022-06-16 17:22:40 by [docgen](https://github.com/thedevsaddam/docgen)
