-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: localhost:3307
-- Létrehozás ideje: 2024. Ápr 13. 14:11
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

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
  `PID` int(10) NOT NULL,
  `PLANNAME` varchar(100) NOT NULL,
  `DATE` date NOT NULL,
  `DESCRIPTION` varchar(200) DEFAULT NULL,
  `UID` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `plans`
--

INSERT INTO `plans` (`PID`, `PLANNAME`, `DATE`, `DESCRIPTION`, `UID`) VALUES
(1, 'OutDoor Activity', '2024-03-01', 'Going to the Park to meet up with my friends', 'ADMIN'),
(2, 'Drifting', '2024-05-06', 'Drifting with the Homies', 'ADMIN'),
(3, 'Meditating', '2024-05-26', 'Getting to know myself better', 'ADMIN'),
(4, 'Badminton', '2024-06-26', 'Xiaolin Showdown between our friends ', 'ADMIN'),
(5, 'Petting my favourite Caracal ', '2024-06-11', 'ig:bigfloppagosha.official', 'ADMIN'),
(6, 'Checking out Budavári Palota', '2024-04-08', 'Looks wack', 'ADMIN'),
(7, 'Yoga Class', '2024-04-15', 'Join a relaxing yoga class to unwind and improve flexibility.', 'ADMIN'),
(8, 'Cooking Workshop', '2024-04-20', 'Learn new culinary skills and recipes in a hands-on cooking workshop.', 'ADMIN'),
(9, 'Hiking Trip', '2024-05-01', 'Explore natures beauty and challenge yourself on a scenic hiking trail.', 'ADMIN'),
(10, 'Book Club Meeting', '2024-04-25', 'Engage in lively discussions about the latest novel with fellow book enthusiasts.', 'ADMIN'),
(11, 'Painting Class', '2024-04-18', 'Unleash your creativity and express yourself through acrylic painting techniques.', 'ADMIN'),
(12, 'Volunteer Day at Animal Shelter', '2024-05-05', 'Make a difference in the lives of shelter animals by volunteering your time and care.', 'ADMIN'),
(13, 'Language Exchange Meetup', '2024-04-22', 'Practice speaking a new language and meet language learners from diverse backgrounds.', 'ADMIN'),
(14, 'Photography Walk', '2024-04-28', 'Capture the beauty of the cityscape or natural surroundings on a guided photography walk.', 'ADMIN'),
(15, 'Meditation Session', '2024-04-17', 'Cultivate inner peace and mindfulness through guided meditation techniques.', 'ADMIN'),
(16, 'Dance Workshop', '2024-04-30', 'Learn new dance moves and rhythms in a fun and energetic dance workshop.', 'ADMIN');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `UID` varchar(40) NOT NULL,
  `USERNAME` varchar(100) NOT NULL,
  `PWD` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

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
  ADD PRIMARY KEY (`PID`),
  ADD KEY `PLANTOUSER` (`UID`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `plans`
--
ALTER TABLE `plans`
  MODIFY `PID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `plans`
--
ALTER TABLE `plans`
  ADD CONSTRAINT `PLANTOUSER` FOREIGN KEY (`UID`) REFERENCES `users` (`UID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
