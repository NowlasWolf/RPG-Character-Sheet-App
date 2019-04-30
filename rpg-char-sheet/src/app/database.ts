import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { promise } from 'protractor';

const DATABASE_FILE_NAME: string = 'rpg.db';

@Injectable()
export class DatabaseProvider
{

    public db: SQLiteObject;

    constructor(public sqlite: SQLite) {}

    public createDbFile()
    {
        console.log("DB file making...")
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default',
        }).then((db:SQLiteObject)=> {
            console.log("table")
        
            db.executeSql('CREATE TABLE IF NOT EXISTS CHARACTER(ID_NUM int(10), C_NAME character(50), C_TYPE character(10), PRIMARY KEY(ID_NUM))', []).catch(e => console.log("Character table: " + e));
            db.executeSql('CREATE TABLE IF NOT EXISTS DETAILS(ID_NUM int(10), AGE int(6), HEIGHT character(10), C_WEIGHT character(10), HAIR character(10), EYES character(15), GENDER character(10), RACE character(20), CLASS character(20), LEVEL int(2), EXPERIENCE int(10), PRIMARY KEY(ID_NUM))',[]).catch(e => console.log("Details table: " + e));
            db.executeSql('CREATE TABLE IF NOT EXISTS STATS(ID_NUM int(10), STRENGTH int(2), DEXTERITY int(2), CONSTITUTION int(2), INTELLEGENCE int(2), WISDOM int(2), CHARISMA int(2), MAX_HIT_POINTS int(4), HIT_POINTS int(4), BASE_ATTACK_BONUS int(2), INSPIRATION int(1), PRIMARY KEY(ID_NUM))',[]).catch(e => console.log("Stats table: " + e));
            db.executeSql('CREATE TABLE IF NOT EXISTS SKILLS(ID_NUM int(10), C_ID int(10), SK_NAME character(10), RANKS int(2), PROFICIENCY int(1), PRIMARY KEY(ID_NUM, C_ID))',[]).catch(e => console.log("Skills table: " + e));
            db.executeSql('CREATE TABLE IF NOT EXISTS GEAR(ID_NUM int(10), C_ID int(10), G_NAME character(32), G_WEIGHT int(4), AMOUNT int(4), PRIMARY KEY(ID_NUM, C_ID))', []).catch(e => console.log("Gear table: " + e));
            db.executeSql('CREATE TABLE IF NOT EXISTS WEAPONS(ID_NUM int(10), C_ID int(10), W_NAME character(32), DAMAGE character(6), TYPE character(12), RANGE int(4), CRITICAL character(6), W_WEIGHT int(4), W_AMOUNT int(4), PRIMARY KEY(ID_NUM, C_ID))', []).catch(e => console.log("Weapon table: " + e));
            //db.executeSql('CREATE TABLE IF NOT EXISTS ARMOR(ID_NUM int(10), C_ID int(10), AR_NAME character(32), AC_BONUS int(2), MAX_DEX int(2), CHECK int(2), SPELL_FAIL int(2), AR_WEIGHT int(4), AR_AMOUNT int(4), PRIMARY KEY(ID_NUM, C_ID))', []).catch(e => console.log(e));
            db.executeSql('CREATE TABLE IF NOT EXISTS ABILITIES(ID_NUM int(10), C_ID int(10), AB_NAME character(32), AB_TYPE int(1), AB_LEVEL int(2), PRIMARY KEY(ID_NUM, C_ID))', []).catch(e => console.log("Abilities table: " + e));
            db.executeSql('CREATE TABLE IF NOT EXISTS SPELLS(ID_NUM int(10), C_ID int(10), SP_NAME character(32), SP_LEVEL int(1), PRIMARY KEY(ID_NUM, C_ID))', []).catch(e => console.log("Spells table: " + e));
            console.log("Tables probably made...")

        }).catch(e => console.log(e));
    }

    public testTables()
    {
        this.makeTest()
        console.log(this.getData("0","CHARACTER","C_NAME"))
    }

    public makeTest(){
        console.log("Making test...");
        var querry: string = "INSERT INTO CHARACTER VALUES(0000000000, \"Test Tester\", \"5e\")";
        this.db.executeSql(querry,[]).catch(e => console.log(e));
        var querry: string = "INSERT INTO STATS VALUES(0000000000, 20, 10, 15, 13, 50, 5, 4, 3, 1, 0)";
        this.db.executeSql(querry,[]).catch(e => console.log(e));
        console.log("Maybe this was made?")
    }
    
    public getData(ID, table, item){
        var querry: string = "SELECT " + item + " FROM " + table + " WHERE ID_NUM = " + ID;
        return this.db.executeSql(querry).catch(e => console.log(e));
    }

    public setData(ID, table, item){
        
    }
}