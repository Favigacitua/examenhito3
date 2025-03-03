export const request = {
  payload: {
    "type": "object",
    "properties": {
      "email": {
        "type": "string",
        "format": "email"
      },
      "nombre": {
        "type": "string"
      },
      "apellido": {
        "type": "string"
      },
      "password": {
        "type": "string"
      },
    },
    "required": ["email", "nombre", "apellido", "password"]
  }
};

export const response = {
  "type": "object",
  "properties": {
    "token": {
      "type": "string"
    },
    "user": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "nombre": {
          "type": "string"
        },
        "apellido": {
          "type": "string"
        },
        "email": {
          "type": "string",
          "format": "email"
        }
      },
      "required": ["id", "nombre", "apellido", "email"]
    }
  },
  "required": ["token", "user"]
};
