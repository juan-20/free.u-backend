import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createinfos1602600779623 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'infos',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'nome',
                    type: 'varchar',
                },
                {
                    name: 'bio',
                    type: 'varchar',
                },
                {
                    name: 'adress',
                    type: 'varchar',
                },
                {
                    name: 'school',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'email',
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
            ],
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('infos');

    }

}
