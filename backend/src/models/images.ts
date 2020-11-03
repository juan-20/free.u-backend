import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import info from './infos';

@Entity('images')
export default class Image{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => info, info => info.images)
    @JoinColumn({ name: 'info_id' })
    info: info;

}