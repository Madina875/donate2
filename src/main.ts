import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  try {
    const PORT = process.env.PORT ?? 3030;
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
      .setTitle("project donate")
      .setDescription("The cats API description")
      .setVersion("1.0")
      .addTag("validation,swagger")
      .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api/docs", app, documentFactory);

    await app.listen(PORT, () => {
      console.log(`server running on: ${PORT} 🕶️`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();

// npm i --save @nestjs/config
// npm install --save @nestjs/sequelize sequelize sequelize-typescript pg
// npm install --save-dev @types/sequelize (podskazka un )

// nest g mo <company> - module yaratadi
// nest g co <company>  --no-spec     - controller yaratadi
// nest g s <company>  --no-spec     - service yaratadi
