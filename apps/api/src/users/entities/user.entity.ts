import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {


    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })    
    identification: string;

    @Column()
    name: string;

    @Column({ nullable: false })
    password: string;

    @Column()
    role_id: number;

}
