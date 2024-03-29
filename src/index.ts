import path from "path";
import express from "express";
import { engine } from "express-handlebars";
import { routes } from "./controllers";
import { db, sessions } from "./services";
import { errorHandlers } from "./middleware";
import { viewHelpers as helpers } from "./utils";
import { SERVER_PORT } from "./config";

const app = express();

app.engine("hbs", engine({ extname: ".hbs", helpers }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(sessions);
app.use(routes);
app.use(errorHandlers.catchAll);

app.listen(SERVER_PORT, async () => {
  const connection = await db.open();
  await connection.sync({ force: false });
  console.log(`connected to database ${connection.config.database}`);
  console.log(`listening on port ${SERVER_PORT}`);
});
