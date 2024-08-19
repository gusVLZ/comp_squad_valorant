-- --------------------------------------------------------
-- Host:                         192.168.0.100
-- Server version:               9.0.1 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for comp_squad_val
CREATE DATABASE IF NOT EXISTS `comp_squad_val` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `comp_squad_val`;

-- Dumping structure for table comp_squad_val.agent
CREATE TABLE IF NOT EXISTS `agent` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table comp_squad_val.agent: ~22 rows (approximately)
DELETE FROM `agent`;
INSERT INTO `agent` (`id`, `name`, `role`) VALUES
	(1, 'Jett', 'Duelist'),
	(2, 'Brimstone', 'Controller'),
	(3, 'Sova', 'Initiator'),
	(4, 'Sage', 'Sentinel'),
	(5, 'Reyna', 'Duelist'),
	(6, 'Viper', 'Controller'),
	(7, 'Killjoy', 'Sentinel'),
	(8, 'Phoenix', 'Duelist'),
	(9, 'Omen', 'Controller'),
	(10, 'Breach', 'Initiator'),
	(11, 'Raze', 'Duelist'),
	(12, 'Cypher', 'Sentinel'),
	(13, 'Skye', 'Initiator'),
	(14, 'Yoru', 'Duelist'),
	(15, 'Astra', 'Controller'),
	(16, 'KAY/O', 'Initiator'),
	(17, 'Chamber', 'Sentinel'),
	(18, 'Neon', 'Duelist'),
	(19, 'Fade', 'Initiator'),
	(20, 'Harbor', 'Controller'),
	(21, 'Gekko', 'Initiator'),
	(22, 'Deadlock', 'Sentinel');

-- Dumping structure for table comp_squad_val.log
CREATE TABLE IF NOT EXISTS `log` (
  `text` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table comp_squad_val.log: ~0 rows (approximately)
DELETE FROM `log`;

-- Dumping structure for table comp_squad_val.map
CREATE TABLE IF NOT EXISTS `map` (
  `id` int NOT NULL AUTO_INCREMENT,
  `map` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table comp_squad_val.map: ~10 rows (approximately)
DELETE FROM `map`;
INSERT INTO `map` (`id`, `map`) VALUES
	(1, 'Bind'),
	(2, 'Haven'),
	(3, 'Split'),
	(4, 'Ascent'),
	(5, 'Icebox'),
	(6, 'Breeze'),
	(7, 'Fracture'),
	(8, 'Pearl'),
	(9, 'Lotus'),
	(10, 'Sunset');

-- Dumping structure for table comp_squad_val.prefagent
CREATE TABLE IF NOT EXISTS `prefagent` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `idAgent` int NOT NULL,
  `nuPref` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idUser` (`idUser`),
  KEY `idAgent` (`idAgent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table comp_squad_val.prefagent: ~0 rows (approximately)
DELETE FROM `prefagent`;

-- Dumping structure for table comp_squad_val.squad
CREATE TABLE IF NOT EXISTS `squad` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `active` int NOT NULL,
  `createDate` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table comp_squad_val.squad: ~5 rows (approximately)
DELETE FROM `squad`;
INSERT INTO `squad` (`id`, `name`, `active`, `createDate`) VALUES
	(1, 'Alpha Team', 1, '2023-08-01 10:30:00'),
	(2, 'Beta Squad', 1, '2023-08-05 14:45:00'),
	(3, 'Gamma Unit', 0, '2023-07-25 09:20:00'),
	(4, 'Delta Force', 1, '2023-08-15 16:00:00'),
	(5, 'Epsilon Group', 0, '2023-07-30 12:00:00');

-- Dumping structure for table comp_squad_val.squadperusermapagent
CREATE TABLE IF NOT EXISTS `squadperusermapagent` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idMap` int NOT NULL,
  `idAgent` int NOT NULL,
  `idSquadUser` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idMap` (`idMap`),
  KEY `idAgent` (`idAgent`),
  KEY `idSquadUser` (`idSquadUser`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table comp_squad_val.squadperusermapagent: ~10 rows (approximately)
DELETE FROM `squadperusermapagent`;
INSERT INTO `squadperusermapagent` (`id`, `idMap`, `idAgent`, `idSquadUser`) VALUES
	(1, 1, 1, 1),
	(2, 2, 2, 2),
	(3, 3, 3, 3),
	(4, 4, 4, 4),
	(5, 5, 5, 5),
	(6, 6, 6, 1),
	(7, 7, 7, 2),
	(8, 8, 8, 3),
	(9, 9, 9, 4),
	(10, 10, 10, 5);

-- Dumping structure for table comp_squad_val.squaduser
CREATE TABLE IF NOT EXISTS `squaduser` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idSquad` int NOT NULL,
  `idUsuario` int NOT NULL,
  `accepted` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idSquad` (`idSquad`),
  KEY `idUsuario` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table comp_squad_val.squaduser: ~5 rows (approximately)
DELETE FROM `squaduser`;
INSERT INTO `squaduser` (`id`, `idSquad`, `idUsuario`, `accepted`) VALUES
	(1, 1, 1, 1),
	(2, 2, 2, 1),
	(3, 1, 3, 0),
	(4, 4, 4, 1),
	(5, 2, 5, NULL);

-- Dumping structure for table comp_squad_val.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table comp_squad_val.user: ~5 rows (approximately)
DELETE FROM `user`;
INSERT INTO `user` (`id`, `username`, `nickname`, `slug`, `password`) VALUES
	(1, 'john_doe', 'Johnny', 'john-doe', 'password123'),
	(2, 'jane_smith', 'Jane', 'jane-smith', 'mypassword456'),
	(3, 'alex_williams', 'Alex', 'alex-williams', 'securepass789'),
	(4, 'maria_garcia', 'Maria', 'maria-garcia', 'password000'),
	(5, 'michael_brown', 'Mike', 'michael-brown', 'passpass999');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
