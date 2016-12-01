FORMAT: 1A

# Return all the things
Lists all the things from the API

## Things [/api/things]

### Retrieve all the things [GET]

+ Response 200 (application/json)
    + attributes
        + id: 123 (number)


## Things [/api/things2]

### Create a new thing [POST]

+ Request (application/json)
    + attributes
        + email: '' (string)
        + password: 'password' (string)

+ Response 200 (application/json;charset=UTF-8)

    + Body

            {
                "text": "",
                "id": "1"
            }

## Things [/api/things2]

### Create a new thing [POST]

+ Request (application/json)

    + Body

            {
              "email": "123",
              "password": "password"
            }

+ Response 200 (application/json;charset=UTF-8)

    + Body

            {
                "text": "123",
                "id": "1"
            }

## Things [/api/things3]
### Allow cross site origin [OPTIONS]

+ Response 200
    + Headers

            Access-Control-Allow-Origin: custom-domain.com

### Update thing by it's id [POST]

+ Request ( application/json)
Update the text of the thing

    + Body

            {
                "text": "Hyperspeed jet",
                "id": "1"
            }

+ Response 200 (application/json;charset=UTF-8)

    + Body

            {
                "text": "Hyperspeed jet",
                "id": "1"
            }

## Likes [/api/things/{thingId}/like]

+ Parameters
    + thingId (string, `12345`) ... ID of the desired thing.

### Register a like on a thing [PUT]

+ Response 200 (application/json;charset=UTF-8)

    + Body

            { "like": true }

### Register a like on a thing [DELETE]

+ Response 204

## Things undefined charset [/api/charsetless]

### Retrieve all the things and not add charset on the response [GET]

+ Response 200 (application/json)

    + Body

            {
                "charset":"not present",
                "id": "1"
            }
