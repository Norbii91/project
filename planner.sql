-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3307
-- Létrehozás ideje: 2024. Ápr 04. 19:11
-- Kiszolgáló verziója: 10.4.24-MariaDB
-- PHP verzió: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `planner`
--
CREATE DATABASE IF NOT EXISTS `planner` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `planner`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `plans`
--

DROP TABLE IF EXISTS `plans`;
CREATE TABLE `plans` (
  `PID` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `PLANNAME` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `DATE` date NOT NULL,
  `DESCRIPTION` varchar(200) COLLATE utf8_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- TÁBLA KAPCSOLATAI `plans`:
--

--
-- A tábla adatainak kiíratása `plans`
--

INSERT INTO `plans` (`PID`, `PLANNAME`, `DATE`, `DESCRIPTION`) VALUES
('1', 'OutDoor Activity', '2024-03-01', 'Going to the Park to meet up with my friend'),
('2', 'Focifocifoci', '2024-12-31', 'WAAAA');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `UID` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `USERNAME` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `PWD` varchar(100) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- TÁBLA KAPCSOLATAI `users`:
--

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`UID`, `USERNAME`, `PWD`) VALUES
('ADMIN', 'Adminisztrátor', 'admin');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `plans`
--
ALTER TABLE `plans`
  ADD PRIMARY KEY (`PID`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
