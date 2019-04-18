import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

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
        }).then(res => console.log('Executed SQL')).catch(e => console.log(e));   
    }

    public createTables()
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
    }
}