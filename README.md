# Desafio Tecnico Yape

# Se crean dos microservicios
- Transaction Consumer
- Transaction Producer

### Transaction Consumer
Encargado de recibir el request de la transaccion nueva

### Transaction Producer
Encargado de procesar de forma asincrona el consumo del servicio de Antifraude y actualizar el resultado de la evaluacion


### Swagger
Se genera de forma automatica a partir de SwaggerModule
http://localhost:3001/api

### Variables de Entorno

- server=localhost
- port=5432
- username=postgres
- password=admin1
- database=postgres
- API_ADDRESS=api
- JWT_SECRET=1
- antifraud_path=https://dw02w.wiremockapi.cloud/json


### MockService Antifraude
- Se crear Mock Service en wiremock.cloud para evaluacion de fraude

### Kafka
- Topico : transaction-topic