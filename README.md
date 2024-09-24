# Backend PAW 10 2024

## Team Member

1. Deren Tanaphan (22/503261/TK/54976)
2. Aisa Selvira Q.A (22/498561/TK/54690)
3. Moh. Nazril Ilham (22/493142/TK/54000)
4. Muhammad Rafli Ramadani (22/497787/TK/54571)
5. Satama Safika (22/492880/TK/53955)

### Installation 🌐
1. Clone the repository
```
git clone
```
2. Install NPM packages
```
npm install
```
3. Run the application
```
npm run start
```
4. Access the API via `http://localhost:5000`

## API Documentation: HTTP Methods and Endpoints

### HTTP Methods and Item Endpoints

| HTTP Method | Endpoint                                    | Description                                     |
|-------------|---------------------------------------------|-------------------------------------------------|
| **POST**    | `http://localhost:5000/items/create`         | Add new item to the inventory.               |
| **GET**     | `http://localhost:5000/items`               | Retrieves a list of all available items.        |
| **GET**     | `http://localhost:5000/items/{id}`          | Retrieves details of a specific item by its ID. |
| **PUT**     | `http://localhost:5000/items/edit/{id}`     | Updates the details of a specific item by its ID. |
| **DELETE**  | `http://localhost:5000/items/delete/{id}`   | Deletes a specific item by its ID.              |

### HTTP Methods and Log In Endpoints
| HTTP Method | Endpoint                          | Description               |
|-------------|------------------------------------|---------------------------|
| **POST**        | `http://localhost:5000/register`    | user creates an account   |
| **GET**         | `http://localhost:5000/login`        | user logs in to the account |



## Important Diagram 🛎️

For a visual representation of the use cases, please refer to the following diagram:

![Use Case Diagram](./use%20case.png)


