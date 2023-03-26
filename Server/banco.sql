-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2023 at 07:45 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `banco`
--

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `newPassword` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`email`, `password`, `newPassword`) VALUES
('fulalotio@gmail.com', '', ''),
('lalosianturi@gmail.com', '$2b$10$9Dr1UsEzQY8k6mlJmwv2dODBtAw8vlG3.JFo/aoRPVHMR0TsnCMjC', ''),
('tioaenjely@yahoo.com', '$2b$10$LG8GB28IX8b8idDbeM6eAuvvplLKytLnsBa.mZk9s4qEEjB9t/2M6', ''),
('tiofulalo@gmail.com', '$2b$10$uTTcEUsO9YHz9fAr8X3dhuCn0SQr9onQWqBJNJ/N/fgohv.lF4rRq', ''),
('lalosimatupang@gmail.com', '$2b$10$/tMjApGXHPuTwE5vkQ7U6.uKkev.vhebuMCMbd9EoGpv8LKlRFeou', ''),
('tiofulalosimatupang@gmail.com', '$2b$10$OIxWaVGxCAfKCmnNLoOqwOJHQaH.LIp8Vyg/BC1dwtq6CQykzJ0hO', ''),
('lalo123@gmail.com', '$2b$10$3fMv0W5E0oek1dtD5oFEFu.2EwWAwyJshfJt9n5FvU0igfSmFDRn2', ''),
('nadyakhairunisa@gmail.com', '$2b$10$Tt/uy9j153vfhK6WnxIrJOXkeugKIDYuD5slLz5UVnCl8/R2SQUH.', ''),
('tiofulalo123@gmail.com', '$2b$10$BqVum3I1O2beFL1hxf1hDuX2rkwrZRWhhLUNkt9PISwuaf92ChR.i', ''),
('tiofulalogans@gmail.com', '$2b$10$R4ZLNhJxFZVwmY64Dm67beweEcHTpPf29ZLRiEK5gCVGoHkbI6dAa', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
