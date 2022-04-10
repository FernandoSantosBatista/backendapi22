import IDogsRepository from '../repositories/IDogsRepository';
import Dogs from '../models/Dogs';

class ListallDogsService {
  private dogsRepository: IDogsRepository;

  constructor(dogsRepository: IDogsRepository) {
    this.dogsRepository = dogsRepository;
  }

  public async execute(): Promise<Dogs[]> {
    const dogs = await this.dogsRepository.findAll();

    return dogs;
  }
}

export default ListallDogsService;
