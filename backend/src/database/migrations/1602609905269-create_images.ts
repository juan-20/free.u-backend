import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602609905269 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'images',
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
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'info_id',
                    type: 'integer',
                }
            ],
            foreignKeys:[
                {
                    name: 'imageinfo',
                    columnNames: ['info_id' ],
                    referencedTableName: 'infos',
                    referencedColumnNames: ['id'],
                    // caso o id do orfanato altere a imagem altera tmb
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]

        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
