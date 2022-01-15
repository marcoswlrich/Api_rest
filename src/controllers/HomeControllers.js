import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Marcos',
      sobrenome: 'Wlrich',
      email: 'marcos@gmail.com',
      idade: 25,
      peso: 80,
      altura: 1.84,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
