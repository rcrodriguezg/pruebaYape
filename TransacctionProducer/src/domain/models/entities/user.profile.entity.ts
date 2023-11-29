import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './user.entity';
/**
 * @author RRG
 */
@Entity('users_profiles')
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  user_id: number;

  @Column('integer')
  apartment_id: number;

  @Column('integer')
  profile_id: number;

  @Column('integer')
  community_id: number;

  @Column('boolean')
  status: boolean;

  @Column('timestamp without time zone')
  created_at: Date;

  @Column('timestamp without time zone')
  updated_at: Date;

  @Column({ name: 'community_id' })
  community!: Number;


  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
