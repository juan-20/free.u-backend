import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import Image from './images';


@Entity('infos')
export default class Info{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    bio: number;

    @Column()
    adress: string;

    @Column()
    school: string;

    @Column()
    email: string;

    @Column()
    password: string;
    
    @OneToMany(() => Image, Image => Image.info, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'info_id '})
    images: Image[];
}