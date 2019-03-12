import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

const DATABASE_FILE_NAME: string = 'nutri.db';

@Injectable()
export class DatabaseProvider
{

    public db: SQLiteObject;

    constructor(public sqlite: SQLite) {}

    public createDbFile()
    {

        this.sqlite.create
        ({
            name: DATABASE_FILE_NAME,
            location: 'default',
        })
        .then(res => console.log('Executed SQL'))    
        .catch(e => console.log(e));   
    }

    public createTables()
    {
        this.createDbFile();
        console.log("table")
        
        this.db.executeSql('create table CHARACTER(ID_NUM int(10) PRIMARY KEY, LAST_NAME character(32),PHONE_NUMBER int(10), DATE_OF_BIRTH int(8),HEIGHT int(3),EMAIL character(20), PASSWD character(20))', [])
        this.db.executeSql('create table CHARACTER(ID_NUM int(10) PRIMARY KEY, LAST_NAME character(10),FIRST_NAME character(10),PHONE_NUMBER int(10), DATE_OF_BIRTH int(8),HEIGHT int(3),EMAIL character(20), PASSWD character(20))', [])
        this.db.executeSql('create table CHARACTER(ID_NUM int(10) PRIMARY KEY, LAST_NAME character(10),FIRST_NAME character(10),PHONE_NUMBER int(10), DATE_OF_BIRTH int(8),HEIGHT int(3),EMAIL character(20), PASSWD character(20))', [])        
        .catch(e => console.log(e));
    }
    
    public executeSql(sql: string)
    {
        this.db.executeSql(sql)
        .catch(e => console.log(e));
    }
}