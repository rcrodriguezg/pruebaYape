import { DataSource, Repository } from "typeorm";
import { User } from "../models/entities/user.entity";
import { IOrmUserRepository } from "./orm-user.repositorty,interface";
import { UserDto } from "../models/dto/user.dto";

export class OrmUserRepository extends Repository<User> implements IOrmUserRepository {
    constructor(dataSource: DataSource){
        super(User, dataSource.createEntityManager());
    }
    
    saveUser(userDto: UserDto): Promise<UserDto> {
        return this.save(userDto);
        
    }

    
}