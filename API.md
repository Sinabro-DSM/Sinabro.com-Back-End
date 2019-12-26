# Admin Login

## Base 10.156.147.200:8000

## POST /admin

### request

    {
        id: String,
        password: String
    }

### response

- success

        200
        {
            message: "successful login",
            access-token: token
        }

- failed

        403
        {
            message: "failed login"
        }

# Data

## GET /data/file

### request
    header: x-access-token

### response

- success

        200
        {
            message: "success",
            post
        }

- failed

        403
        {
            message: "Not logged in"
        }

        500
        {
            message: "failed"
        }

## POST /data

### request
    headers: x-access-token

    {
        title: String,
        content: String,
        file: String,
        category: String
    }

### response

- success

        200
        {
            message: "success",
            post
        }

- failed

        403
        {
            message: "Not logged in"
        }

        500
        {
            message: "failed"
        }


## GET /data

### request

    {
        category: String
    }

### response

- success

        200
        {
            message: "success",
            post
        }

- failed

        404
        {
            message: "Not Found"
        }

        500
        {
            message: "failed"
        }

## GET /data/:_id

### request
    
    path: _id
    {
        
    }

### response

- success

        200
        {
            message: "success",
            post
        }

- failed

        500
        {
            message: "failed"
        }
