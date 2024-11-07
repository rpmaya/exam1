const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Exam - Express API with Swagger (OpenAPI 3.1)",
      version: "0.1.0",
      description:
        "This is a test",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Ricardo Palacios",
        email: "rpmaya@gmail.com",
      },
    },
    servers: [
      {
        url: "https://disabled-crawdad-rpmaya-4073b98a.koyeb.app/",
        description: "Testing"
      }
    ],
    components: {
      schemas: {
        ipfs: {
          type: "object",
          example: {
            "content": {
              "field": "value1"
            }
          }
        }
      }
    }
  }
};

module.exports = swaggerJsdoc(options)