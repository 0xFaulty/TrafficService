﻿# Traffic Service

Angular 5 Universal with Spring Boot 2.0.0.RELEASE Service

## Requirements
- Java 1.8
- Apache Maven 3.5.2
- Node.js 8.9.3

## Back

Development run:
- `run cloud.templates.TrafficApplication class in your IDE`

Deploy build:
- `mvn clean package`

## Front

Prepare:
- `npm install`

Development run:
- `npm start`

Deploy build:
- `npm run build`
- `node dist/server.js`

Navigate to `http://localhost:4200/`.

## Advices

Java part using Lombok library. If you run project in Intellij Idea, you may need enable annotation processing in Settings->Build->Compiler->Annotation Processor, also install Lombok plugin in Settings->Plugins.
