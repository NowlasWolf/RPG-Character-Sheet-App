import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { defineBase } from '@angular/core/src/render3';

const DATABASE_FILE_NAME: string = 'rpg.db';

@Injectable({
	providedIn: 'root'
})
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
        }).then((db: SQLiteObject) => {
            this.db = db;
            db.executeSql('CREATE TABLE IF NOT EXISTS CHARACTER(ID_NUM int(10), C_NAME character(50), C_TYPE character(10), PRIMARY KEY(ID_NUM))', []).catch(e => console.log("Character table: " + e));
        })
    }
    test(){
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default',
        }).then((db: SQLiteObject) => {
            
            db.executeSql('INSERT INTO CHARACTER(ID_NUM,C_NAME,C_TYPE) VALUES (?,?,?)',[15,"BOB",10]);

        })
        
    }
    showall(){
        this.db.executeSql('SELECT * FROM CHARACTER',[]).then((data) => {
            let things = [];
            for(var i = 0; i < data.rows.length; i++){
                console.log(data.rows.item(i).ID_NUM);
            }
        });
    }
    /*public createTables()
    {
        this.createDbFile();
        console.log("table")
        
        this.db.executeSql('CREATE TABLE IF NOT EXISTS CHARACTER(ID_NUM int(10) PRIMARY KEY, NAME character(50), TYPE character(10)', []).catch(e => console.log(e));
        this.db.executeSql('CREATE TABLE IF NOT EXISTS DETAILS(ID_NUM int(10), AGE int(6), HEIGHT character(10), WEIGHT character(10), HAIR character(10), EYES character(15), GENDER character(10), RACE character(20), CLASS character(20), LEVEL int(2), EXPERIENCE int(10))',[]).catch(e => console.log(e));
        this.db.executeSql('CREATE TABLE IF NOT EXISTS STATS(ID_NUM int(10), STRENGTH int(2), DEXTERITY int(2), CONSTITUTION int(2), INTELLEGENCE int(2), WISDOM int(2), CHARISMA int(2), MAX_HIT_POINTS int(4), HIT_POINTS int(4), BASE_ATTACK_BONUS int(2) INSPIRATION int(1))',[]).catch(e => console.log(e));
        this.db.executeSql('CREATE TABLE IF NOT EXISTS SKILLS(ID_NUM int(10), NAME character(10), RANKS int(2), PROFICIENCY int(1))',[]).catch(e => console.log(e));
        this.db.executeSql('CREATE TABLE IF NOT EXISTS GEAR(ID_NUM int(10), NAME character(32), WEIGHT int(4), AMOUNT int(4))', []).catch(e => console.log(e));
        this.db.executeSql('CREATE TABLE IF NOT EXISTS WEAPONS(ID_NUM int(10), NAME character(32), DAMAGE character(6), TYPE character(12), RANGE int(4), CRITICAL character(6), WEIGHT int(4), AMOUNT int(4))', []).catch(e => console.log(e));
        this.db.executeSql('CREATE TABLE IF NOT EXISTS ARMOR(ID_NUM int(10), NAME character(32), AC_BONUS int(2), MAX_DEX int(2), CHECK int(2), SPELL_FAIL int(2), WEIGHT int(4), AMOUNT int(4))', []).catch(e => console.log(e));
        this.db.executeSql('CREATE TABLE IF NOT EXISTS ABILITIES(ID_NUM int(10), NAME character(32), TYPE int(1), LEVEL int(2))', []).catch(e => console.log(e));
        this.db.executeSql('CREATE TABLE IF NOT EXISTS SPELLS(ID_NUM int(10), NAME character(32), LEVEL int(1))', []).catch(e => console.log(e));
        console.log("Tables probably made...")
    }
    
    public executeSql(sql: string)
    {
        this.db.executeSql(sql).catch(e => console.log(e));
    }*/
}