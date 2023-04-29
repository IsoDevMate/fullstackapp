migrate((db) => {
  const collection = new Collection({
    "id": "nwf3x9ip4z20o38",
    "created": "2023-04-20 14:40:06.409Z",
    "updated": "2023-04-20 14:40:06.409Z",
    "name": "rws",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "94rnzvyh",
        "name": "field",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "8tjalh8v",
        "name": "field1",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_CtBjLc2` ON `rws` (`field`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nwf3x9ip4z20o38");

  return dao.deleteCollection(collection);
})
