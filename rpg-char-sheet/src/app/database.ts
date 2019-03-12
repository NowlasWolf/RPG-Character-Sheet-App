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
        
        this.db.executeSql('create table CUSTOMER_PROFILE(ID_NUM int(10) PRIMARY KEY, LAST_NAME character(10),FIRST_NAME character(10),PHONE_NUMBER int(10), DATE_OF_BIRTH int(8),HEIGHT int(3),EMAIL character(20), PASSWD character(20))', [])
        .then(() => console.log('CREATED CUSTOMER table '))
        .then(() => 
        this.db.executeSql('create table IF NOT EXISTS STATISTICS(ID_NUM int(10) PRIMARY KEY,DATE text,WEIGHT int(255),WEEKLY_AVERAGE int(255),DIFFERENCE_TO_PRIOR_WEEK int(255), QUESTIONS varchar(255))', [])
        )
        .then(() => console.log('CREATED STATS TABLE'))
        .then(() => 
        this.db.executeSql('create table IF NOT EXISTS EXERCISE(ID_NUM int(10) PRIMARY KEY,TIME text,TYPE character(20),Distance decimal(10,7))', [])
        )
        .then(() => console.log('CREATED EXERCISE TABLE'))
        .then(() => 
        this.db.executeSql('create table IF NOT EXISTS MEASUREMENTS(ID_NUM int(10) PRIMARY KEY,NECK decimal(3,3), HIPS decimal(3,3),THIGHS decimal(3,3),BELLY decimal(3,3),BICEP decimal(3,3))', [])
        )
        .then(() => console.log('CREATED MEASUREMENTS TABLE '))
        .then(() => 
        this.db.executeSql('create table IF NOT EXISTS NUTRITION(PROTEIN decimal(3,3),CARBS decimal(3,3),FATS decimal(3,3),FIBERS decimal(3,3),CALORIES int(255))', [])
        )
        .then(() => console.log('CREATED NUTRITION TABLE '))
        
        .catch(e => console.log(e));
    }
    
    public executeSql(sql: string)
    {
        this.db.executeSql(sql)
        .catch(e => console.log(e));
    }
}