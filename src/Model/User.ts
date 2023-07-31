// @/models.ts
import {Table, Model, Column, CreatedAt, UpdatedAt} from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "users",
})
export class User extends Model {
    @Column({
        autoIncrement: true,
        primaryKey: true
    })
    id!: string;

    @Column({
        allowNull: false,
    })
    name!: string;

    @Column({
        allowNull: false,
    })
    email!: string;

    @Column({
        allowNull: false,
    })
    password!: string;

    @CreatedAt
    @Column({
        field: 'created_at',
        allowNull: true,
    })
    createdAt!: Date;

    @UpdatedAt
    @Column({field: 'updated_at'})
    updatedAt: Date;
}
