import swaggerJSDoc from 'swagger-jsdoc';


const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Alten Shop API',
    version: '1.0',
    description: 'Express API documented with Swagger',
  },
  explorer: true
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};

console.log("Swagger running at /api-docs");

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;