import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { UserProfile } from './user.profile.entity';

/**
 * @author RRG
 */
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 255 })
  last_name: string;

  @Column('varchar', { length: 255 })
  document_type: string;

  @Column('boolean')
  status: boolean;

  @Column('varchar', { length: 255 })
  document: string;

  @Column('varchar', { length: 255 })
  email: string;

  @Column('varchar', { length: 255 })
  password: string;

  @Column('varchar', { length: 255 })
  phone: string;

  @Column('varchar', { length: 255 })
  language: string;

  @Column('text')
  image: string;

  @Column('text')
  token: string;

  @Column('text')
  push_token: string;

  @Column('integer')
  pin_code: number;

  @Column('text')
  token_timestamp_valid: string;

  @Column('timestamp without time zone')
  created_at: Date;

  @Column('timestamp without time zone')
  updated_at: Date;

  @Column('boolean')
  notification: boolean;

  @Column('boolean')
  guest: boolean;

  @Column('varchar', { length: 255 })
  app_password: string

  @OneToMany(() => UserProfile, (userProfile) => userProfile.user)
  userProfileList!: Array<UserProfile>;
}
