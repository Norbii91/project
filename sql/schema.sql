DELIMITER ;;

/**
 * Adatbázis létrehozása.
 */

CREATE DATABASE IF NOT EXISTS PLANNER CHARACTER SET utf8 COLLATE utf8_hungarian_ci;;

USE PLANNER;;

/**
 * Felhasznáók táblájának létrehozása.
 */

DROP TABLE IF EXISTS USERS;;

CREATE TABLE IF NOT EXISTS USERS (
      UID               VARCHAR(40)     NOT NULL
    , USERNAME          VARCHAR(100)    NOT NULL
    , PWD               VARCHAR(100)    NOT NULL
    , PRIMARY KEY (UID)
);;

/**
 * Alapértelmezett felhasználók létrehozása.
 */

INSERT INTO USERS (UID, USERNAME, PWD) VALUES ('ADMIN', 'Adminisztrátor', 'admin');;


/*
* A tervek táblájának létrehozása
*/

DROP TABLE IF EXISTS PLANS;;

CREATE TABLE IF NOT EXISTS PLANS (
      PID               VARCHAR(40)     NOT NULL
    , PLANNAME          VARCHAR(100)    NOT NULL
    , DATE               DATE   NOT NULL
    ,DESCRIPTION        VARCHAR(200)
    , PRIMARY KEY (PID)
);;

/**
 * Alapértelmezett terv létrehozása.
 */
 
 INSERT INTO PLANS (PID, PLANNAME, DATE,DESCRIPTION) VALUES ('1', 'OutDoor Activity', '2024-03-01','Going to the Park to meet up with my friend');;
