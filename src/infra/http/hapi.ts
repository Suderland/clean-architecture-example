import Hapi from "@hapi/hapi";
import HapiAdapter from "../../adapter/HapiAdapter";
import EstacionamentoController from "../../controller/EstacionamentoController";

const server = Hapi.server({
  port: 3001,
  host: "localhost"
});

server.route({
  method: "GET",
  path: "/estacionamento/{cod}",
  handler: HapiAdapter.create(EstacionamentoController.getEstacionamento)
});

server.start();