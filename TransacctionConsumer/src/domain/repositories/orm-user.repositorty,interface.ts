import { UserDto } from "../models/dto/user.dto";

export interface IOrmUserRepository {
    
    /* The `saveUser` method is a function that takes a `userDto` object of type `UserDto` as a
    parameter and returns a `Promise` that resolves to a `UserDto` object. This method is likely
    used to save a user's data to a database or some other form of persistent storage. */
    saveUser(userDto: UserDto): Promise<UserDto>;
}