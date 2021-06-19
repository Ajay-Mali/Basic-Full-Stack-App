
# Full Stack app

An Add Addresses REST API created using Node.js, Express.js and MongoDB. The API uses promises extensively to query the MongoDB database.

# Setup
After cloning, use "npm install" and server the app using "node index.js".
client App using "ng serve -o"

## API Reference

#### POST registration User

```http
  POST http:localhost:3000/api/server/registration
```

#### POST login User

```http
  POST http:localhost:3000/api/server/login
```

This Endpoint send JWT Token to Client

#### GET All Addresses

```http
  GET http:localhost:3000/api/server/address
```
 
 This Endpoint Take Request Headers authorization 

#### POST Add Addresses

```http
  POST http:localhost:3000/api/server/address
```

 This Endpoint Take Request Headers authorization And Request Body 

 
#### POST Add Addresses

```http
  POST http:localhost:3000/api/server/address/:id
```

 This Endpoint Take Request Params id 
## Deployment

To Run Client this project run

```bash
  ng serve -o
```


To Run Server this project run

```bash
  node index.js
```


To Run Server in Dev Mode this project run

```bash
  npm run dev
```

  
## Features

#### Client site
- User registration 
- User Login
- User **Add** / **Delete** / **View** Address
- User Login auth guard
- User auth guard

#### Server site
- User registration API 
- User Login API 
- User **Add** / **Delete** / **View** Address API With JWT


  
## Screenshots

**App Registration Page Screenshot**

![App Registration Page Screenshot](https://www.linkpicture.com/q/Screenshot-268_1.png)

  
**App Login Page Screenshot**

![App Login Page Screenshot](https://www.linkpicture.com/q/Screenshot-269.png)

  
**App Home Page Screenshot**

![App Home Page Screenshot](https://www.linkpicture.com/q/Screenshot-272.png)

  
**App Add Address Page Screenshot**

![App Add Address Page Screenshot](https://www.linkpicture.com/q/Screenshot-270.png)

  
    
**App Delete Address Page Screenshot**

![App Delete Address Page Screenshot](https://www.linkpicture.com/q/Screenshot-271_1.png)

**App Page Not Found Screenshot**

![App Delete Address Page Screenshot](https://www.linkpicture.com/q/Screenshot-273.png)

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

  