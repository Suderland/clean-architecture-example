import EstacionamentoRepositorioSQL from "../src/core/repositorio/EstacionamentoRepositorioSQL";
import EntrarEstacionamento from "../src/core/usecase/EntrarEstacionamento";
import GetEstacionamento from "../src/core/usecase/GetEstacionamento";
import EstacionamentoRepositorioMemoria from "../src/infra/repositorio/EstacionamentoRepositorioMemoria";


test.skip("Deve ter estacionamento", async function() {
  const estacionamentoRepositorioMemoria = new EstacionamentoRepositorioMemoria();
  const estacionamentoRepositorioSQL = new EstacionamentoRepositorioSQL();  
  const getEstacionamento = new GetEstacionamento(estacionamentoRepositorioSQL);

  const estacionamento = await getEstacionamento.execute("shopping")
  console.log(estacionamento)
  //expect(estacionamento.cod).toBe("shopping");
})

test("Deve ter entrado no estacionamento", async function() {
  const estacionamentoRepositorioMemoria = new EstacionamentoRepositorioMemoria();
  const estacionamentoRepositorioSQL = new EstacionamentoRepositorioSQL();  
  const entrarEstacionamento = new EntrarEstacionamento(estacionamentoRepositorioSQL);
  const getEstacionamento = new GetEstacionamento(estacionamentoRepositorioSQL);

  const estacionamentoAntesEntrar = await getEstacionamento.execute("shopping");
  expect(estacionamentoAntesEntrar.espacosOcupados).toBe(0);

  await entrarEstacionamento.execute("shopping", "MMM-0001", new Date("2022-03-01T10:00:00"));
  
  const estacionamentoDepoisEntrar = await getEstacionamento.execute("shopping");
  expect(estacionamentoDepoisEntrar.espacosOcupados).toBe(1);
})

test.skip("Deve estar fechado", async function() {
  const estacionamentoRepositorioMemoria = new EstacionamentoRepositorioMemoria();
  const estacionamentoRepositorioSQL = new EstacionamentoRepositorioSQL();
  const entrarEstacionamento = new EntrarEstacionamento(estacionamentoRepositorioMemoria);
  const getEstacionamento = new GetEstacionamento(estacionamentoRepositorioMemoria);
  const estacionamentoAntesEntrar = await getEstacionamento.execute("shopping");
  expect(estacionamentoAntesEntrar.espacosOcupados).toBe(0);

  await entrarEstacionamento.execute("shopping", "MMM-0001", new Date("2022-03-01T23:00:00"));
  
})

test.skip("Deve estar cheio", async function() {
  const estacionamentoRepositorioMemoria = new EstacionamentoRepositorioMemoria();
  const entrarEstacionamento = new EntrarEstacionamento(estacionamentoRepositorioMemoria);
  const getEstacionamento = new GetEstacionamento(estacionamentoRepositorioMemoria);
  const estacionamentoAntesEntrar = await getEstacionamento.execute("shopping");
  expect(estacionamentoAntesEntrar.espacosOcupados).toBe(0);

  await entrarEstacionamento.execute("shopping", "MMM-0001", new Date("2022-03-01T10:00:00"));
  await entrarEstacionamento.execute("shopping", "MMM-0002", new Date("2022-03-01T10:00:00"));
  await entrarEstacionamento.execute("shopping", "MMM-0003", new Date("2022-03-01T10:00:00"));
  await entrarEstacionamento.execute("shopping", "MMM-0004", new Date("2022-03-01T10:00:00"));
  await entrarEstacionamento.execute("shopping", "MMM-0005", new Date("2022-03-01T10:00:00"));
  await entrarEstacionamento.execute("shopping", "MMM-0006", new Date("2022-03-01T10:00:00"));
  
})