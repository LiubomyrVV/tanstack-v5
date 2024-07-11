import { Database } from './types/Database'

// Assuming this is your JSON string
const jsonString = `{
    "todos": [
    { "checked": true, "title": "title1", "description": "desc1", "id": 1},
      { "checked": true, "title": "title6", "description": "desc6", "id": 6 },
      { "checked": true, "title": "title7", "description": "desc7", "id": 7 },
      { "checked": true, "title": "title8", "description": "desc8", "id": 8 },
      { "title": "test", "description": "test", "id": 9, "checked": true },
      { "title": "test", "description": "", "id": 10, "checked": true },
      { "title": "test", "description": "test", "id": 11, "checked": true },
      { "title": "test", "description": "test", "id": 12, "checked": true },
      { "title": "test", "description": "test", "id": 13, "checked": true },
      { "title": "test", "description": "test", "id": 14 },
      { "title": "test", "description": "test", "id": 15 },
      { "title": "new todo", "description": "new todo", "id": 16 },
      { "title": "new todo", "description": "new todo", "id": 17 },
      { "title": "new todo", "description": "new todo", "id": 18 },
      { "title": "new todo", "description": "new todo", "id": 19 },
      { "title": "new todo", "description": "new todo", "id": 20 }
    ],
    "projects": [
      { "id": 1, "name": "project1" },
      { "id": 2, "name": "project2" },
      { "id": 3, "name": "project3" },
      { "id": 4, "name": "project4" },
      { "id": 5, "name": "project5" },
      { "id": 6, "name": "project6" },
      { "id": 7, "name": "project7" },
      { "id": 8, "name": "project8" },
      { "id": 9, "name": "project9" },
      { "id": 10, "name": "project10" },
      { "id": 11, "name": "project11" },
      { "id": 12, "name": "project12" },
      { "id": 13, "name": "project13" },
      { "id": 14, "name": "project14" },
      { "id": 15, "name": "project15" },
      { "id": 16, "name": "project16" }
    ],
    "products": [
      { "id": 1, "name": "product 1" },
      { "id": 2, "name": "product 2" },
      { "id": 3, "name": "product 3" },
      { "id": 4, "name": "product 4" },
      { "id": 5, "name": "product 5" },
      { "id": 6, "name": "product 6" },
      { "id": 7, "name": "product 7" },
      { "id": 8, "name": "product 8" },
      { "id": 9, "name": "product 9" },
      { "id": 10, "name": "product 10" },
      { "id": 11, "name": "product 11" },
      { "id": 12, "name": "product 12" },
      { "id": 13, "name": "product 13" },
      { "id": 14, "name": "product 14" },
      { "id": 15, "name": "product 15" },
      { "id": 16, "name": "product 16" }
    ]
  }`

// Parse the JSON string
export const parsedData: Database = JSON.parse(jsonString)
