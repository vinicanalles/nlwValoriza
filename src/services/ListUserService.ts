import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class ListUserService {

  async execute() {
    const userRepository = getCustomRepository(UsersRepository);

    const users = userRepository.find();

    return classToPlain(users);
  }
}

export { ListUserService }