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
            db.executeSql('CREATE TABLE IF NOT EXISTS CHARACTER(ID_NUM int(10), C_NAME character(50), C_TYPE character(10), PRIMARY KEY(ID_NUM))', []).catch(e => console.log(e));
            db.executeSql('CREATE TABLE IF NOT EXISTS DETAILS(ID_NUM int(10), AGE int(6), HEIGHT character(10), C_WEIGHT character(10), HAIR character(10), EYES character(15), GENDER character(10), RACE character(20), CLASS character(20), LEVEL int(2), EXPERIENCE int(10), PRIMARY KEY(ID_NUM))',[]).catch(e => console.log(e));
            db.executeSql('CREATE TABLE IF NOT EXISTS STATS(ID_NUM int(10), STRENGTH int(2), DEXTERITY int(2), CONSTITUTION int(2), INTELLEGENCE int(2), WISDOM int(2), CHARISMA int(2), MAX_HIT_POINTS int(4), HIT_POINTS int(4), BASE_ATTACK_BONUS int(2), PROFICIENCY_BONUS int(2), INSPIRATION int(1), PRIMARY KEY(ID_NUM))',[]).catch(e => console.log(e));
            db.executeSql('CREATE TABLE IF NOT EXISTS SKILLS(ID_NUM int(10), C_ID int(10), SK_NAME character(10), RANKS int(2), PROFICIENCY int(1), PRIMARY KEY(ID_NUM, C_ID))',[]).catch(e => console.log(e));
            db.executeSql('CREATE TABLE IF NOT EXISTS GEAR(ID_NUM int(10), C_ID int(10), G_NAME character(32), G_WEIGHT int(4), AMOUNT int(4), PRIMARY KEY(ID_NUM, C_ID))', []).catch(e => console.log(e));
            db.executeSql('CREATE TABLE IF NOT EXISTS WEAPONS(ID_NUM int(10), C_ID int(10), W_NAME character(32), DAMAGE character(6), TYPE character(12), RANGE int(4), CRITICAL character(6), W_WEIGHT int(4), W_AMOUNT int(4), PRIMARY KEY(ID_NUM, C_ID))', []).catch(e => console.log(e));
            //db.executeSql('CREATE TABLE IF NOT EXISTS ARMOR(ID_NUM int(10), C_ID int(10), AR_NAME character(32), AC_BONUS int(2), MAX_DEX int(2), CHECK int(2), SPELL_FAIL int(2), AR_WEIGHT int(4), AR_AMOUNT int(4), PRIMARY KEY(ID_NUM, C_ID))', []).catch(e => console.log(e));
            db.executeSql('CREATE TABLE IF NOT EXISTS ABILITIES(ID_NUM int(10), C_ID int(10), AB_NAME character(32), AB_TYPE int(1), AB_LEVEL int(2), PRIMARY KEY(ID_NUM, C_ID))', []).catch(e => console.log(e));
            db.executeSql('CREATE TABLE IF NOT EXISTS SPELLS(ID_NUM int(10), C_ID int(10), SP_NAME character(32), SP_LEVEL int(1), PRIMARY KEY(ID_NUM, C_ID))', []).catch(e => console.log(e));
            db.executeSql('CREATE TABLE IF NOT EXISTS COUNT(COUNTER int(10), PRIMARY KEY(COUNTER))', []).catch(e => console.log(e));
            db.executeSql('INSERT OR IGNORE INTO COUNT VALUES(?)', [0]).catch(e => console.log(e));

        })
    }
    openDatabase(){
        this.sqlite.create({
            name: DATABASE_FILE_NAME,
            location: 'default',
        }).catch(e => console.log(e));
    }

    testmake(){
        this.db.executeSql('INSERT INTO CHARACTER(ID_NUM,C_NAME,C_TYPE) VALUES (?,?,?)',[15,"BOB",10]);
    }

    showall(){
        this.db.executeSql('SELECT * FROM CHARACTER',[]).then((data) => {
            let things = [];
            for(var i = 0; i < data.rows.length; i++){
                console.log(data.rows.item(i).ID_NUM + " " + data.rows.item(i).C_NAME + " " + data.rows.item(i).C_TYPE);

            }
        });
        this.db.executeSql('SELECT * FROM STATS',[]).then((data) => {
            for(var i = 0; i < data.rows.length; i++){
                console.log(data.rows.item(i).ID_NUM + " " + data.rows.item(i).STRENGTH + " " + data.rows.item(i).DEXTERITY + " " + data.rows.item(i).CONSTITUTION + " " + data.rows.item(i).INTELLEGENCE + " " + data.rows.item(i).WISDOM + " " + data.rows.item(i).CHARISMA);

            }
        });
    }

    createCharacter(name: any, stats: {}){
        var idnum = 0;
        this.db.executeSql('SELECT COUNTER FROM COUNT',[]).then((data) =>{
            idnum = data.rows.item(0).COUNTER + 1;
            console.log(idnum)
            this.db.executeSql('UPDATE COUNT SET COUNTER = ?',[idnum]).catch(e => console.log(e));
            this.db.executeSql('INSERT INTO CHARACTER VALUES (?,?,?)',[idnum,name,"5E"]).catch(e => console.log(e));
            this.db.executeSql('INSERT INTO STATS(ID_NUM, STRENGTH, DEXTERITY, CONSTITUTION, INTELLEGENCE, WISDOM, CHARISMA) VALUES (?,?,?,?,?,?,?)', [idnum, stats["Strength"], stats["Dexterity"], stats["Constitution"], stats["Intelligence"], stats["Wisdom"], stats["Charisma"]]).catch(e => console.log(e));
            

        });
    }

    getAll(){
        let stuff = [];
        return this.db.executeSql('SELECT * FROM CHARACTER',[]).then((data) => {
            for(var i = 0; i < data.rows.length; i++){
                stuff.push({
                    ID: data.rows.item(i).ID_NUM,
                    Name: data.rows.item(i).C_NAME

                });
                //stuff.push([data.rows.item(i).ID_NUM,data.rows.item(i).C_NAME]);
            }
            return stuff
        }).catch(e => {console.log(e)});
    }
}