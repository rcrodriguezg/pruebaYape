import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { errorException } from 'src/utils/utils';
import { User } from 'src/domain/models/entities/user.entity';




/**
 * @author RRG
 */
@Injectable()
export class ValidateCommunityUserMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /**
   * @method use middleware
   * @param req ActivityDto
   * @param res Response
   * @param next NextFunction
   */
  async use(req: Request, res: Response, next: NextFunction) {
    let user: Array<User> = null;
    try {
      const token = req.headers['authorization'];
      const cleanToken = token?.replace('Bearer', '')?.trim();
      const tokenPayload = JSON.parse(atob(cleanToken.split('.')[1]));
      const urlCommunityId = req.params.id;
      user = await this.userRepository.find({
        where: {
          id: +tokenPayload.sub,
          userProfileList: {
            community_id: +urlCommunityId,
          },
        },
      });
    } catch (e) {
      console.log(e);
      throw errorException(
        false,
        HttpStatus.UNAUTHORIZED,
        'Token no válido',
      );
    }

    if (!user || user.length < 1)
      throw errorException(
        false,
        HttpStatus.UNAUTHORIZED,
        'Usuario no posee acceso a datos de la comunidad',
      );
    next();
  }
}
