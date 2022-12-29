# Timeline API

API for creating timelines and it's events.

https://timeline-api-juliancavallo.vercel.app

## Endpoints

### `GET /timelines`
Response: 
```json
[
    {
        "Id": 1,
        "Title": "Test 1"
    },
    {
        "Id": 3,
        "Title": "Test 2"
    }
]
```
## 

### `POST /timelines`
Request:
```json
{
    "title": "Test"
}
```
Response: 200 status
## 

### `PUT /timelines/{id}`
Request:
```json
{
    "title": "Test"
}
```
Response: 200 status
## 

### `DELETE /timelines/{id}`
Response: 200 status
## 
