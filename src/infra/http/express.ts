import Express from "express";
import ExpressAdapter from "../../adapter/ExpressAdapter";
import EstacionamentoController from "../../controller/EstacionamentoController";

const app = new Express();

app.get("/estacionamento/:cod", ExpressAdapter.create(EstacionamentoController.getEstacionamento));

app.listen(3001);