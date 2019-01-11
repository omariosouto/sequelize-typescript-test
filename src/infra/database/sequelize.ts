import {Sequelize} from 'sequelize-typescript';
import * as path from 'path'

const modelsPath = path.join(__dirname, '..', '..', 'domain') + '/**/*.ts'

console.log(modelsPath)

export const sequelize =  new Sequelize({
        database: 'some_db',
        dialect: 'sqlite',
        operatorsAliases: false,
        username: 'root',
        password: '',
        storage: ':memory:',
        modelPaths: [modelsPath]
});
