-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: SG-student-5242-mysql-master.servers.mongodirector.com
-- Generation Time: Dec 06, 2021 at 08:46 AM
-- Server version: 5.7.30-log
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `student`
--

-- --------------------------------------------------------

--
-- Table structure for table `academics`
--

CREATE TABLE `academics` (
  `id` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `subj_id` varchar(255) NOT NULL,
  `CAT1` bigint(20) DEFAULT NULL,
  `cat2` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `academics`
--

INSERT INTO `academics` (`id`, `roll_no`, `subj_id`, `CAT1`, `cat2`) VALUES
(1, '19CS019', 'CS123', 58, '90'),
(2, '19CS009', 'CS123', 58, '99'),
(3, '20EE009', 'CE123', 58, '90'),
(4, '18EE016', 'EE123', 58, '99'),
(5, '20IT045', 'PH123', 58, '90'),
(6, '19IT031', 'PY123', 58, '99'),
(7, '19ME006', 'FM123', 58, '90'),
(8, '18ME002', 'ME123', 58, '99'),
(9, '20EC020', 'EC123', 58, '90'),
(10, '19EC015', 'EC123', 58, '99');

-- --------------------------------------------------------

--
-- Table structure for table `academic_summary`
--

CREATE TABLE `academic_summary` (
  `roll_no` varchar(45) NOT NULL,
  `attendance_percentage` varchar(100) DEFAULT NULL,
  `CGPA` varchar(45) DEFAULT NULL,
  `total_credits` varchar(45) DEFAULT NULL,
  `placement_eligiblity` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `academic_summary`
--

INSERT INTO `academic_summary` (`roll_no`, `attendance_percentage`, `CGPA`, `total_credits`, `placement_eligiblity`) VALUES
('19CS019', '99', '9.9', '400', 'Yes'),
('19CS043', '95%', '8.5', '25', 'Yes'),
('19CS048', '96%', '8.7', '25', 'Yes'),
('19CS050', '80%', '9.2', '25', 'Yes'),
('20EE009', '99', '9.9', '400', 'Yes'),
('19EE011', '95%', '8.5', '25', 'Yes'),
('18EE016', '96%', '8.7', '25', 'Yes'),
('20IT045', '80%', '9.2', '25', 'Yes'),
('19IT031', '99', '9.9', '400', 'Yes'),
('18IT043', '95%', '8.5', '25', 'Yes'),
('20ME009', '96%', '8.7', '25', 'Yes'),
('19ME006', '80%', '9.2', '25', 'Yes'),
('18ME002', '99', '9.9', '400', 'Yes'),
('19EC015', '95%', '8.5', '25', 'Yes'),
('20EC020', '96%', '8.7', '25', 'Yes'),
('18EC012', '80%', '9.2', '25', 'Yes');


-- --------------------------------------------------------

--
-- Table structure for table `ec_club_activity`
--

CREATE TABLE `ec_club_activity` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `club_name` varchar(45) DEFAULT NULL,
  `activity_name` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `outcome` varchar(1000) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ec_club_activity`
--

INSERT INTO `ec_club_activity` (`s_no`, `roll_no`, `club_name`, `activity_name`, `date`, `outcome`, `verified`, `credits`) VALUES
(1, '19CS048', 'NSS', 'Survey', '2020-11-12', 'Good', 'Verified', '6'),
(2, '19CS043', 'LEAF', 'Tree plantation', '2020-12-12', 'Good', 'Verified', '5'),
(3, '19CS050', 'Rotaract', 'Beach Cleanup', '2021-03-20', 'Good', 'Verified', '5'),
(4, '19CS019', 'PATTARAI', 'Website rewamp', '2021-11-28', 'React JS', 'Pending', NULL),
(5, '20EE009', 'test', 'test', '2021-11-29', 'test', 'Pending', NULL),
(6, '19EE011', 'NSS', 'Survey', '2020-11-12', 'Good', 'Verified', '6'),
(7, '18EE016', 'LEAF', 'Tree plantation', '2020-12-12', 'Good', 'Verified', '5'),
(8, '20IT045', 'Rotaract', 'Beach Cleanup', '2021-03-20', 'Good', 'Verified', '5'),
(9, '19IT031', 'PATTARAI', 'Website rewamp', '2021-11-28', 'React JS', 'Pending', NULL),
(10, '18IT043', 'test', 'test', '2021-11-29', 'test', 'Pending', NULL),
(11, '20ME009', 'NSS', 'Survey', '2020-11-12', 'Good', 'Verified', '6'),
(12, '19ME006', 'LEAF', 'Tree plantation', '2020-12-12', 'Good', 'Verified', '5'),
(13, '18ME002', 'Rotaract', 'Beach Cleanup', '2021-03-20', 'Good', 'Verified', '5'),
(14, '19EC015', 'PATTARAI', 'Website rewamp', '2021-11-28', 'React JS', 'Pending', NULL),
(15, '20EC020', 'test', 'test', '2021-11-29', 'test', 'Pending', NULL),
(16, '18EC012', 'NSS', 'Survey', '2020-11-12', 'Good', 'Verified', '6');
-- --------------------------------------------------------

--
-- Table structure for table `ec_culturals`
--

CREATE TABLE `ec_culturals` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `event_name` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `position_secures` varchar(45) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ec_culturals`
--

INSERT INTO `ec_culturals` (`s_no`, `roll_no`, `event_name`, `date`, `position_secures`, `verified`, `credits`) VALUES
(1, '19CS048', 'Ship Wreck', '2021-01-13', '2', 'Verified', '5'),
(2, '19CS043', 'Spotlight', '2020-12-12', '3', 'verified', '5'),
(3, '19CS050', 'Light Music', '2021-02-03', '1', 'Verified', '5'),
(4, '19CS019', 'Test', '28-11-2021', 'Nope', 'Pending', NULL),
(5, '20EE009', 'Ship Wreck', '2021-01-13', '2', 'Verified', '5'),
(6, '19EE011', 'Spotlight', '2020-12-12', '3', 'verified', '5'),
(7, '18EE016', 'Light Music', '2021-02-03', '1', 'Verified', '5'),
(8, '20IT045', 'Ship Wreck', '2021-01-13', '2', 'Verified', '5'),
(9, '19IT031', 'Spotlight', '2020-12-12', '3', 'verified', '5'),
(10, '18IT043', 'Light Music', '2021-02-03', '1', 'Verified', '5'),
(11, '20ME009', 'Ship Wreck', '2021-01-13', '2', 'Verified', '5'),
(12, '19ME006', 'Spotlight', '2020-12-12', '3', 'verified', '5'),
(13, '18ME002', 'Light Music', '2021-02-03', '1', 'Verified', '5'),
(14, '19EC015', 'Ship Wreck', '2021-01-13', '2', 'Verified', '5'),
(15, '20EC020', 'Spotlight', '2020-12-12', '3', 'verified', '5'),
(16, '18EC012', 'Light Music', '2021-02-03', '1', 'Verified', '5');
-- --------------------------------------------------------

--
-- Table structure for table `ec_outreach`
--

CREATE TABLE `ec_outreach` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `outreach_activity_name` varchar(45) DEFAULT NULL,
  `outreach_date` varchar(45) DEFAULT NULL,
  `outreach_outcome` varchar(1000) DEFAULT NULL,
  `outreach_verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ec_outreach`
--

INSERT INTO `ec_outreach` (`s_no`, `roll_no`, `outreach_activity_name`, `outreach_date`, `outreach_outcome`, `outreach_verified`, `credits`) VALUES
(1, '19CS043', 'Helping Hands', '2020-12-11', 'Good', 'Verified', '5'),
(2, '19CS048', 'Orphanage visit', '2020-11-13', 'Good', 'Verified', '5'),
(3, '19CS050', 'Flood Relief', '2020-10-10', 'Good', 'Verified', '5'),
(4, '19CS019', 'Innovethon', '2021-11-28', 'Team work', 'Pending', NULL),
(5, '20EE009', 'Helping Hands', '2020-12-11', 'Good', 'Verified', '5'),
(6, '19EE011', 'Orphanage visit', '2020-11-13', 'Good', 'Verified', '5'),
(7, '18EE016', 'Flood Relief', '2020-10-10', 'Good', 'Verified', '5'),
(8, '20IT045', 'Helping Hands', '2020-12-11', 'Good', 'Verified', '5'),
(9, '19IT031', 'Orphanage visit', '2020-11-13', 'Good', 'Verified', '5'),
(10, '18IT043', 'Flood Relief', '2020-10-10', 'Good', 'Verified', '5'),
(11, '20ME009', 'Helping Hands', '2020-12-11', 'Good', 'Verified', '5'),
(12, '19ME006', 'Orphanage visit', '2020-11-13', 'Good', 'Verified', '5'),
(13, '18ME002', 'Flood Relief', '2020-10-10', 'Good', 'Verified', '5'),
(14, '19EC015', 'Helping Hands', '2020-12-11', 'Good', 'Verified', '5'),
(15, '20EC020', 'Orphanage visit', '2020-11-13', 'Good', 'Verified', '5'),
(16, '18EC012', 'Flood Relief', '2020-10-10', 'Good', 'Verified', '5');

-- --------------------------------------------------------

--
-- Table structure for table `ec_sports`
--

CREATE TABLE `ec_sports` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `sport_name` varchar(45) DEFAULT NULL,
  `representation` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `position_secures` varchar(45) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ec_sports`
--

INSERT INTO `ec_sports` (`s_no`, `roll_no`, `sport_name`, `representation`, `date`, `position_secures`, `verified`, `credits`) VALUES
(1, '19CS043', 'Basket Ball', 'State Level', '2020-08-01', '3', 'Verified', '5'),
(2, '19CS048', 'Badminton', 'District', '2020-09-04', '1', 'Verified', '5'),
(3, '19CS050', 'Cricket', 'National', '2020-09-09', '3', 'Verified', '5'),
(4, '19CS019', 'Chess', 'ZONE', '2021-11-28', 'Runner up', 'Pending', NULL),
(5, '20EE009', 'Basket Ball', 'State Level', '2020-08-01', '3', 'Verified', '5'),
(6, '19EE011', 'Badminton', 'District', '2020-09-04', '1', 'Verified', '5'),
(7, '18EE016', 'Cricket', 'National', '2020-09-09', '3', 'Verified', '5'),
(8, '20IT045', 'Basket Ball', 'State Level', '2020-08-01', '3', 'Verified', '5'),
(9, '19IT031', 'Badminton', 'District', '2020-09-04', '1', 'Verified', '5'),
(10, '18IT043', 'Cricket', 'National', '2020-09-09', '3', 'Verified', '5'),
(11, '20ME009', 'Basket Ball', 'State Level', '2020-08-01', '3', 'Verified', '5'),
(12, '19ME006', 'Badminton', 'District', '2020-09-04', '1', 'Verified', '5'),
(13, '18ME002', 'Cricket', 'National', '2020-09-09', '3', 'Verified', '5'),
(14, '19EC015', 'Basket Ball', 'State Level', '2020-08-01', '3', 'Verified', '5'),
(15, '20EC020', 'Badminton', 'District', '2020-09-04', '1', 'Verified', '5'),
(16, '18EC012', 'Cricket', 'National', '2020-09-09', '3', 'Verified', '5');

-- --------------------------------------------------------

--
-- Table structure for table `international_exposure`
--

CREATE TABLE `international_exposure` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `foreign_campus` varchar(100) DEFAULT NULL,
  `duration` varchar(50) DEFAULT NULL,
  `project` varchar(225) DEFAULT NULL,
  `outcome` varchar(225) DEFAULT NULL,
  `personal_development` varchar(225) DEFAULT NULL,
  `foreign_language_courses` varchar(225) DEFAULT NULL,
  `verify` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `international_exposure`
--

INSERT INTO `international_exposure` (`s_no`, `roll_no`, `foreign_campus`, `duration`, `project`, `outcome`, `personal_development`, `foreign_language_courses`, `verify`, `credits`) VALUES
(1, '19CS043', 'France', '3 months', 'Artificial Intelligence', 'Good', 'Python Concepts Learnt', 'French', 'Verified', '5'),
(2, '19CS048', 'Spain', '2 months', 'Machine Learning', 'Good', 'ML Algorithms Learnt', 'Spanish', 'Verified', '5'),
(3, '19CS050', 'Germany', '4 months', 'Robotics', 'Good ', 'Studied on Models', 'German', 'Verified', '5'),
(4, '19CS019', 'Loyola', '2021-11-28', 'ERP', 'Credits', 'Java Script', 'Nope', 'Verified', '10'),
(5, '20EE009', 'France', '3 months', 'Artificial Intelligence', 'Good', 'Python Concepts Learnt', 'French', 'Verified', '5'),
(6, '19EE011', 'Spain', '2 months', 'Machine Learning', 'Good', 'ML Algorithms Learnt', 'Spanish', 'Verified', '5'),
(7, '18EE016', 'Germany', '4 months', 'Robotics', 'Good ', 'Studied on Models', 'German', 'Verified', '5'),
(8, '20IT045', 'France', '3 months', 'Artificial Intelligence', 'Good', 'Python Concepts Learnt', 'French', 'Verified', '5'),
(9, '19IT031', 'Spain', '2 months', 'Machine Learning', 'Good', 'ML Algorithms Learnt', 'Spanish', 'Verified', '5'),
(10, '18IT043', 'Germany', '4 months', 'Robotics', 'Good ', 'Studied on Models', 'German', 'Verified', '5'),
(11, '20ME009', 'France', '3 months', 'Artificial Intelligence', 'Good', 'Python Concepts Learnt', 'French', 'Verified', '5'),
(12, '19ME006', 'Spain', '2 months', 'Machine Learning', 'Good', 'ML Algorithms Learnt', 'Spanish', 'Verified', '5'),
(13, '18ME002', 'Germany', '4 months', 'Robotics', 'Good ', 'Studied on Models', 'German', 'Verified', '5'),
(14, '19EC015', 'France', '3 months', 'Artificial Intelligence', 'Good', 'Python Concepts Learnt', 'French', 'Verified', '5'),
(15, '20EC020', 'Spain', '2 months', 'Machine Learning', 'Good', 'ML Algorithms Learnt', 'Spanish', 'Verified', '5'),
(16, '18EC012', 'Germany', '4 months', 'Robotics', 'Good ', 'Studied on Models', 'German', 'Verified', '5');

-- --------------------------------------------------------

--
-- Table structure for table `intl_se_program`
--

CREATE TABLE `intl_se_program` (
  `roll_no` varchar(45) NOT NULL,
  `campus_name` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `project` varchar(45) DEFAULT NULL,
  `fl_pursuing` varchar(45) DEFAULT NULL,
  `outcome` varchar(1000) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `intl_se_program`
--

INSERT INTO `intl_se_program` (`roll_no`, `campus_name`, `date`, `project`, `fl_pursuing`, `outcome`, `verified`, `credits`) VALUES
('19CS043', 'Spain', '2021-01-13', 'Artificial Intelligence', 'Spanish', 'Good', 'Verified', '5'),
('19CS048', 'German', '2020-08-09', 'Machine Learning', 'Germany', 'Good', 'Verified', '5'),
('19CS050', 'France', '2021-02-01', 'Robotics', 'French', 'Good', 'Verified', '5'),
('20EE009', 'Spain', '2021-01-13', 'Artificial Intelligence', 'Spanish', 'Good', 'Verified', '5'),
('19EE011', 'German', '2020-08-09', 'Machine Learning', 'Germany', 'Good', 'Verified', '5'),
('18EE016', 'France', '2021-02-01', 'Robotics', 'French', 'Good', 'Verified', '5'),
('20IT045', 'Spain', '2021-01-13', 'Artificial Intelligence', 'Spanish', 'Good', 'Verified', '5'),
('19IT031', 'German', '2020-08-09', 'Machine Learning', 'Germany', 'Good', 'Verified', '5'),
('18IT043', 'France', '2021-02-01', 'Robotics', 'French', 'Good', 'Verified', '5'),
('20ME009', 'Spain', '2021-01-13', 'Artificial Intelligence', 'Spanish', 'Good', 'Verified', '5'),
('19ME006', 'German', '2020-08-09', 'Machine Learning', 'Germany', 'Good', 'Verified', '5'),
('18ME002', 'France', '2021-02-01', 'Robotics', 'French', 'Good', 'Verified', '5'),
('19EC015', 'Spain', '2021-01-13', 'Artificial Intelligence', 'Spanish', 'Good', 'Verified', '5'),
('20EC020', 'German', '2020-08-09', 'Machine Learning', 'Germany', 'Good', 'Verified', '5'),
('18EC012', 'France', '2021-02-01', 'Robotics', 'French', 'Good', 'Verified', '5');

-- --------------------------------------------------------

--
-- Table structure for table `login_details`
--

CREATE TABLE `login_details` (
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `auth_token` varchar(255) DEFAULT NULL,
  `roll_no` varchar(10) DEFAULT NULL,
  `dept` varchar(45) DEFAULT NULL,
  `batch` varchar(45) DEFAULT NULL,
  `user_type` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login_details`
--

INSERT INTO `login_details` (`email`, `password`, `auth_token`, `roll_no`, `dept`, `batch`, `user_type`) VALUES
('aishwaryapl.23cs@licet.ac.in', '581387ae7ae67b05b79d63cb158e78c781d70c11a22db231b22ffa4726b48754d2a2679d02dae980c4b72f5da50b983224ceb8a040bc2fe812d509a0cf9ecd9f', 'abce5c90f95191f344127accadd3174c53a1426994f4e1de1b1bdf50f0b02178eb2e3f2c9f8f2c391b9d580192c0b4d4e13907502b402d1d01e29d486e3cb70b', '19CS019', 'cse', '2019-2023', '0'),
('anniemarlenenikita.23cs@licet.ac.in ', '581387ae7ae67b05b79d63cb158e78c781d70c11a22db231b22ffa4726b48754d2a2679d02dae980c4b72f5da50b983224ceb8a040bc2fe812d509a0cf9ecd9f', '3a75ddf89f75f1993f005870203cb2deebff404ba3610da96ab6929de5b49425cc7af46a828406bc53f3aa4c2df47056bc0057b011a0171d8b259249381ea8a9', '19CS045', 'cse', NULL, NULL),
('ashikvarghese.23cs@licet.ac.in', '581387ae7ae67b05b79d63cb158e78c781d70c11a22db231b22ffa4726b48754d2a2679d02dae980c4b72f5da50b983224ceb8a040bc2fe812d509a0cf9ecd9f', 'a7d955af1a8247094d2183ae4956fd68ec344c69069bda81accb7e6b6d871b62d62b82804dd3fd014df275895d2e759b91a012cd6947c579ac10c9f221a3c946', '19CS050', 'cse', '2019-2023', '0'),
('director@licet.ac.in', '581387ae7ae67b05b79d63cb158e78c781d70c11a22db231b22ffa4726b48754d2a2679d02dae980c4b72f5da50b983224ceb8a040bc2fe812d509a0cf9ecd9f', 'a45815a6661399bc1e81ccc029a533dc2ff98cbb35d56dd8867ed2eff840bbd1ee10cbd5e9179bb8cb962765feeb403ad7c939379dc34f03e3845fa20991892a', NULL, '', NULL, '3'),
('haripriya.23cs@licet.ac.in', '581387ae7ae67b05b79d63cb158e78c781d70c11a22db231b2', 'aa78309956576a80864f319bac5f6bf166e626675bb1f7cb4b3483693c426668661f39b8bc11c086d38cbf992529c2fa719b42c7a887f497aaf7ba13b2cb64ce', '19CS009', 'CSE', '2019-2023', '0'),
('hodcse@licet.ac.in', '581387ae7ae67b05b79d63cb158e78c781d70c11a22db231b22ffa4726b48754d2a2679d02dae980c4b72f5da50b983224ceb8a040bc2fe812d509a0cf9ecd9f', 'f4c7cf6a7e37a002e2066ceef26c023a6f8a333742ef50d6698f8c8f80ea58c6646e7b1ddc604e67f002c65b679cc996e66ffdfd31389298eb87fb3e375396c2', NULL, 'cse', NULL, '2'),
('hodece@licet.ac.in', '581387ae7ae67b05b79d63cb158e78c781d70c11a22db231b22ffa4726b48754d2a2679d02dae980c4b72f5da50b983224ceb8a040bc2fe812d509a0cf9ecd9f', 'f4c7cf6a7e37a002e2066ceef26c023a6f8a333742ef50d6698f8c8f80ea58c6646e7b1ddc604e67f002c65b679cc996e66ffdfd31389298eb87fb3e375396c2', NULL, 'ece', NULL, '2'),
('hodeee@licet.ac.in', '581387ae7ae67b05b79d63cb158e78c781d70c11a22db231b22ffa4726b48754d2a2679d02dae980c4b72f5da50b983224ceb8a040bc2fe812d509a0cf9ecd9f', 'f4c7cf6a7e37a002e2066ceef26c023a6f8a333742ef50d6698f8c8f80ea58c6646e7b1ddc604e67f002c65b679cc996e66ffdfd31389298eb87fb3e375396c2', NULL, 'eee', NULL, '2'),
('hodit@licet.ac.in', '581387ae7ae67b05b79d63cb158e78c781d70c11a22db231b22ffa4726b48754d2a2679d02dae980c4b72f5da50b983224ceb8a040bc2fe812d509a0cf9ecd9f', 'f4c7cf6a7e37a002e2066ceef26c023a6f8a333742ef50d6698f8c8f80ea58c6646e7b1ddc604e67f002c65b679cc996e66ffdfd31389298eb87fb3e375396c2', NULL, 'it', NULL, '2'),
('hodmech@licet.ac.in', '581387ae7ae67b05b79d63cb158e78c781d70c11a22db231b22ffa4726b48754d2a2679d02dae980c4b72f5da50b983224ceb8a040bc2fe812d509a0cf9ecd9f', 'f4c7cf6a7e37a002e2066ceef26c023a6f8a333742ef50d6698f8c8f80ea58c6646e7b1ddc604e67f002c65b679cc996e66ffdfd31389298eb87fb3e375396c2', NULL, 'mech', NULL, '2'),
('iqac@licet.ac.in', '581387ae7ae67b05b79d63cb158e78c781d70c11a22db231b22ffa4726b48754d2a2679d02dae980c4b72f5da50b983224ceb8a040bc2fe812d509a0cf9ecd9f', 'eeaa8b0d0d1180d7dd675a7400610ec845f3ddeb21645105ac14fb14a18628e2546e088fe23c2c0aac8958448252edd05f567e37172738f1f46ae1aaa2af2ebb', NULL, NULL, NULL, '3'),
('limsajoshi@licet.ac.in', '581387ae7ae67b05b79d63cb158e78c781d70c11a22db231b22ffa4726b48754d2a2679d02dae980c4b72f5da50b983224ceb8a040bc2fe812d509a0cf9ecd9f', 'd06e7faa498fbde476bdfcbfd1fa42f16c5dbee79152f9339c80ac2607136d76aa94816e58cfc187678e321785897c86d08464677a0fef2827ea72940b7e2cb7', NULL, 'cse', '2019-2023', '1'),
('maryjudith.a@licet.ac.in', '581387ae7ae67b05b79d63cb158e78c781d70c11a22db231b22ffa4726b48754d2a2679d02dae980c4b72f5da50b983224ceb8a040bc2fe812d509a0cf9ecd9f', '60dea74a38bd80ef1127c348105a4f9fa0dafc6aa8ca993faf60d4d160b27e8b81cd64d19f5b81a61846505ff199d2804dcce697e251bfbcf36514000af7584c', NULL, 'cse', '2020-2024', '1'),
('principal@licet.ac.in', '581387ae7ae67b05b79d63cb158e78c781d70c11a22db231b22ffa4726b48754d2a2679d02dae980c4b72f5da50b983224ceb8a040bc2fe812d509a0cf9ecd9f', '9f633ebcbc6db666685347caa13b3c2477e9b30a96c141b351674a93519e7b37e079ccc9fa2b0e0e620f2f504b20926dad96a2e9ef2d88d7e37603ec6a8211a1', NULL, NULL, NULL, '3');

-- --------------------------------------------------------

--
-- Table structure for table `pd_competitions`
--

CREATE TABLE `pd_competitions` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `comp_name` varchar(45) DEFAULT NULL,
  `comp_type` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `position_secured` varchar(255) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pd_competitions`
--

INSERT INTO `pd_competitions` (`s_no`, `roll_no`, `comp_name`, `comp_type`, `date`, `position_secured`, `verified`, `credits`) VALUES
(1, '19CS043', 'Semi Colon ', 'Hackathon', '2020-07-27', '1', 'Verified', '5'),
(2, '19CS048', 'Manithan', 'Hackathon', '2021-06-12', '2', 'Verified', '5'),
(3, '19CS050', 'HackFest', 'Hackathon', '2021-07-06', '2', 'Verified', '5'),
(4, '19CS019', 'Peter', 'Hackathon', '2021-11-30', '1', 'Pending', NULL),
(5, '20EE009', 'Semi Colon ', 'Hackathon', '2020-07-27', '1', 'Verified', '5'),
(6, '19EE011', 'Manithan', 'Hackathon', '2021-06-12', '2', 'Verified', '5'),
(7, '18EE016', 'HackFest', 'Hackathon', '2021-07-06', '2', 'Verified', '5'),
(8, '20IT045', 'Semi Colon ', 'Hackathon', '2020-07-27', '1', 'Verified', '5'),
(9, '19IT031', 'Manithan', 'Hackathon', '2021-06-12', '2', 'Verified', '5'),
(10, '18IT043', 'HackFest', 'Hackathon', '2021-07-06', '2', 'Verified', '5'),
(11, '20ME009', 'Semi Colon ', 'Hackathon', '2020-07-27', '1', 'Verified', '5'),
(12, '19ME006', 'Manithan', 'Hackathon', '2021-06-12', '2', 'Verified', '5'),
(13, '18ME002', 'HackFest', 'Hackathon', '2021-07-06', '2', 'Verified', '5'),
(14, '19EC015', 'Semi Colon ', 'Hackathon', '2020-07-27', '1', 'Verified', '5'),
(15, '20EC020', 'Manithan', 'Hackathon', '2021-06-12', '2', 'Verified', '5'),
(16, '18EC012', 'HackFest', 'Hackathon', '2021-07-06', '2', 'Verified', '5');

-- --------------------------------------------------------

--
-- Table structure for table `pd_courses`
--

CREATE TABLE `pd_courses` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `course_name` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `outcome` varchar(1000) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pd_courses`
--

INSERT INTO `pd_courses` (`s_no`, `roll_no`, `course_name`, `date`, `outcome`, `verified`, `credits`) VALUES
(1, '19CS048', 'Web designing', '2020-08-12', 'Good', 'Verified', '5'),
(2, '19CS050', 'Data science', '2021-04-07', 'Good', 'Verified', '5'),
(3, '19CS043', 'Stock trading', '2021-02-11', 'Good', 'Verified', '5'),
(4, '19CS019', 'Data analytics', '2021-11-30', '', 'Pending', NULL),
(5, '20EE009', 'Web designing', '2020-08-12', 'Good', 'Verified', '5'),
(6, '19EE011', 'Data science', '2021-04-07', 'Good', 'Verified', '5'),
(7, '18EE016', 'Stock trading', '2021-02-11', 'Good', 'Verified', '5'),
(8, '20IT045', 'Web designing', '2020-08-12', 'Good', 'Verified', '5'),
(9, '19IT031', 'Data science', '2021-04-07', 'Good', 'Verified', '5'),
(10, '18IT043', 'Stock trading', '2021-02-11', 'Good', 'Verified', '5'),
(11, '20ME009', 'Web designing', '2020-08-12', 'Good', 'Verified', '5'),
(12, '19ME006', 'Data science', '2021-04-07', 'Good', 'Verified', '5'),
(13, '18ME002', 'Stock trading', '2021-02-11', 'Good', 'Verified', '5'),
(14, '19EC015', 'Web designing', '2020-08-12', 'Good', 'Verified', '5'),
(15, '20EC020', 'Data science', '2021-04-07', 'Good', 'Verified', '5'),
(16, '18EC012', 'Stock trading', '2021-02-11', 'Good', 'Verified', '5');
-- --------------------------------------------------------

--
-- Table structure for table `pd_final_project`
--

CREATE TABLE `pd_final_project` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `objective` varchar(1000) DEFAULT NULL,
  `outcome` varchar(1000) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pd_final_project`
--

INSERT INTO `pd_final_project` (`s_no`, `roll_no`, `title`, `objective`, `outcome`, `verified`, `credits`) VALUES
(1, '19CS048', 'Emotion recognition software', 'An emotion recognition system with integrated audio input', 'Good', 'Verified', '5'),
(2, '19CS050', 'Fraud app detection software', 'Develop software that can process the information, comments, and user review of apps in Apple Store/PlayStore to determine whether or not it is a genuine app.', 'Good', 'Verified', '5'),
(3, '19CS043', ' Credit scoring system', 'System determines a user’s credit scoring using Big Data', 'Good', 'Verified', '5'),
(4, '19CS019', ' Credit scoring system', 'System determines a user’s credit scoring using Big Data', 'Good', 'Verified', '5'),
(5, '20EE009','Emotion recognition software', 'An emotion recognition system with integrated audio input', 'Good', 'Verified', '5'),
(6, '19EE011', 'Fraud app detection software', 'Develop software that can process the information, comments, and user review of apps in Apple Store/PlayStore to determine whether or not it is a genuine app.', 'Good', 'Verified', '5'),
(7, '18EE016', ' Credit scoring system', 'System determines a user’s credit scoring using Big Data', 'Good', 'Verified', '5'),
(8, '20IT045', 'Emotion recognition software', 'An emotion recognition system with integrated audio input', 'Good', 'Verified', '5'),
(9, '19IT031', 'Fraud app detection software', 'Develop software that can process the information, comments, and user review of apps in Apple Store/PlayStore to determine whether or not it is a genuine app.', 'Good', 'Verified', '5'),
(10, '18IT043', ' Credit scoring system', 'System determines a user’s credit scoring using Big Data', 'Good', 'Verified', '5'),
(11, '20ME009', 'Emotion recognition software', 'An emotion recognition system with integrated audio input', 'Good', 'Verified', '5'),
(12, '19ME006', 'Fraud app detection software', 'Develop software that can process the information, comments, and user review of apps in Apple Store/PlayStore to determine whether or not it is a genuine app.', 'Good', 'Verified', '5'),
(13, '18ME002', ' Credit scoring system', 'System determines a user’s credit scoring using Big Data', 'Good', 'Verified', '5'),
(14, '19EC015', 'Emotion recognition software', 'An emotion recognition system with integrated audio input', 'Good', 'Verified', '5'),
(15, '20EC020', 'Fraud app detection software', 'Develop software that can process the information, comments, and user review of apps in Apple Store/PlayStore to determine whether or not it is a genuine app.', 'Good', 'Verified', '5'),
(16, '18EC012', ' Credit scoring system', 'System determines a user’s credit scoring using Big Data', 'Good', 'Verified', '5');

-- --------------------------------------------------------

--
-- Table structure for table `pd_guest_lecture`
--

CREATE TABLE `pd_guest_lecture` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `topic` varchar(45) DEFAULT NULL,
  `resource_person` varchar(45) DEFAULT NULL,
  `outcome` varchar(1000) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pd_guest_lecture`
--

INSERT INTO `pd_guest_lecture` (`s_no`, `roll_no`, `topic`, `resource_person`, `outcome`, `verified`, `credits`) VALUES
(1, '19CS048', 'Induction program', 'Damon', 'Good', 'Verified', '5'),
(2, '19CS050', 'Economic analysis', 'Preetha', 'Good', 'Verified', '5'),
(3, '19CS043', 'Online trading', 'Arun', 'Good', 'Verified', '5'),
(4, '19CS019', 'good', '2021-11-30', 'good', 'good', NULL),
(5, '20EE009', 'Induction program', 'Damon', 'Good', 'Verified', '5'),
(6, '19EE011', 'Economic analysis', 'Preetha', 'Good', 'Verified', '5'),
(7, '18EE016', 'Online trading', 'Arun', 'Good', 'Verified', '5'),
(8, '20IT045', 'Economic analysis', 'Preetha', 'Good', 'Verified', '5'),
(9, '19IT031', 'Online trading', 'Arun', 'Good', 'Verified', '5'),
(10, '18IT043', 'Economic analysis', 'Preetha', 'Good', 'Verified', '5'),
(11, '20ME009', 'Online trading', 'Arun', 'Good', 'Verified', '5'),
(12, '19ME006', 'Economic analysis', 'Preetha', 'Good', 'Verified', '5'),
(13, '18ME002', 'Online trading', 'Arun', 'Good', 'Verified', '5'),
(14, '19EC015', 'Induction program', 'Damon', 'Good', 'Verified', '5'),
(15, '20EC020', 'Economic analysis', 'Preetha', 'Good', 'Verified', '5'),
(16, '18EC012', 'Online trading', 'Arun', 'Good', 'Verified', '5');

-- --------------------------------------------------------

--
-- Table structure for table `pd_industrial_visit`
--

CREATE TABLE `pd_industrial_visit` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `industry_name` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `outcome` varchar(1000) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pd_industrial_visit`
--

INSERT INTO `pd_industrial_visit` (`s_no`, `roll_no`, `industry_name`, `date`, `outcome`, `verified`, `credits`) VALUES
(1, '19CS048', 'Hyundai', '2020-11-09', 'Good', 'Verified', '5'),
(2, '19CS050', 'PSA', '2021-07-04', 'Good', 'Verified', '5'),
(3, '19CS043', 'Renault', '2021-10-23', 'Good', 'Verified', '5'),
(4, '19CS019', NULL, NULL, NULL, 'Pending', NULL),
(5, '20EE009', 'Hyundai', '2020-11-09', 'Good', 'Verified', '5'),
(6, '19EE011', 'PSA', '2021-07-04', 'Good', 'Verified', '5'),
(7, '18EE016', 'Renault', '2021-10-23', 'Good', 'Verified', '5'),
(8, '20IT045', 'Hyundai', '2020-11-09', 'Good', 'Verified', '5'),
(9, '19IT031', 'PSA', '2021-07-04', 'Good', 'Verified', '5'),
(10, '18IT043', 'Renault', '2021-10-23', 'Good', 'Verified', '5'),
(11, '20ME009', 'Hyundai', '2020-11-09', 'Good', 'Verified', '5'),
(12, '19ME006', 'PSA', '2021-07-04', 'Good', 'Verified', '5'),
(13, '18ME002', 'Renault', '2021-10-23', 'Good', 'Verified', '5'),
(14, '19EC015', 'Hyundai', '2020-11-09', 'Good', 'Verified', '5'),
(15, '20EC020', 'PSA', '2021-07-04', 'Good', 'Verified', '5'),
(16, '18EC012', 'Renault', '2021-10-23', 'Good', 'Verified', '5');

-- --------------------------------------------------------

--
-- Table structure for table `pd_inplant_training`
--

CREATE TABLE `pd_inplant_training` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `industry` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `outcome` varchar(1000) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pd_inplant_training`
--

INSERT INTO `pd_inplant_training` (`s_no`, `roll_no`, `industry`, `date`, `outcome`, `verified`, `credits`) VALUES
(1, '19CS048', 'Infosys', '2020-06-09', 'Good', 'Verified', '5'),
(2, '19CS050', 'Nielsen', '2021-05-04', 'Good', 'Verified', '5'),
(3, '19CS043', 'Doppler', '2021-02-11', 'Good', 'Verified', '5'),
(4, '19CS019', 'Google', '2021-11-30', 'Good', 'Pending', NULL),
(5, '20EE009', 'Infosys', '2020-06-09', 'Good', 'Verified', '5'),
(6, '19EE011', 'Nielsen', '2021-05-04', 'Good', 'Verified', '5'),
(7, '18EE016', 'Doppler', '2021-02-11', 'Good', 'Verified', '5'),
(8, '20IT045', 'Infosys', '2020-06-09', 'Good', 'Verified', '5'),
(9, '19IT031', 'Nielsen', '2021-05-04', 'Good', 'Verified', '5'),
(10, '18IT043', 'Doppler', '2021-02-11', 'Good', 'Verified', '5'),
(11, '20ME009', 'Infosys', '2020-06-09', 'Good', 'Verified', '5'),
(12, '19ME006', 'Nielsen', '2021-05-04', 'Good', 'Verified', '5'),
(13, '18ME002', 'Doppler', '2021-02-11', 'Good', 'Verified', '5'),
(14, '19EC015', 'Infosys', '2020-06-09', 'Good', 'Verified', '5'),
(15, '20EC020', 'Nielsen', '2021-05-04', 'Good', 'Verified', '5'),
(16, '18EC012', 'Doppler', '2021-02-11', 'Good', 'Verified', '5');


-- --------------------------------------------------------

--
-- Table structure for table `pd_internship`
--

CREATE TABLE `pd_internship` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `company_name` varchar(45) DEFAULT NULL,
  `duration` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pd_internship`
--

INSERT INTO `pd_internship` (`s_no`, `roll_no`, `company_name`, `duration`, `date`, `reference`, `verified`, `credits`) VALUES
(1, '19CS048', 'HCL', '3 months', '2021-08-07', 'Logan ', 'Verified', '5'),
(2, '19CS050', 'CTS', '4 months', '2021-07-27', 'Greg', 'Verified', '5'),
(3, '19CS043', 'Amazon', '6 months', '2021-10-09', 'Paul', 'Verified', '5'),
(4, '19CS019', 'Google', '2021-11-30', '4', 'Good', 'Pending', NULL),
(5, '20EE009', 'HCL', '3 months', '2021-08-07', 'Logan ', 'Verified', '5'),
(6, '19EE011', 'CTS', '4 months', '2021-07-27', 'Greg', 'Verified', '5'),
(7, '18EE016', 'Amazon', '6 months', '2021-10-09', 'Paul', 'Verified', '5'),
(8, '20IT045', 'HCL', '3 months', '2021-08-07', 'Logan ', 'Verified', '5'),
(9, '19IT031', 'CTS', '4 months', '2021-07-27', 'Greg', 'Verified', '5'),
(10, '18IT043', 'Amazon', '6 months', '2021-10-09', 'Paul', 'Verified', '5'),
(11, '20ME009', 'HCL', '3 months', '2021-08-07', 'Logan ', 'Verified', '5'),
(12, '19ME006', 'CTS', '4 months', '2021-07-27', 'Greg', 'Verified', '5'),
(13, '18ME002', 'Amazon', '6 months', '2021-10-09', 'Paul', 'Verified', '5'),
(14, '19EC015', 'HCL', '3 months', '2021-08-07', 'Logan ', 'Verified', '5'),
(15, '20EC020', 'CTS', '4 months', '2021-07-27', 'Greg', 'Verified', '5'),
(16, '18EC012', 'Amazon', '6 months', '2021-10-09', 'Paul', 'Verified', '5');

-- --------------------------------------------------------

--
-- Table structure for table `pd_mini_project`
--

CREATE TABLE `pd_mini_project` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `project_title` varchar(45) DEFAULT NULL,
  `objective` varchar(1000) DEFAULT NULL,
  `outcome` varchar(1000) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pd_mini_project`
--

INSERT INTO `pd_mini_project` (`s_no`, `roll_no`, `project_title`, `objective`, `outcome`, `verified`, `credits`) VALUES
(1, '19CS048', 'PC based GPS', 'Designs a system that connects a GPS module to a PC com port', 'Good', 'Verified', '5'),
(2, '19CS050', 'Low Power Inverter', 'Simple low power inverter that converts 12V DC into 230-250V AC', 'Good', 'Verified', '5'),
(3, '19CS043', 'Doorbell Cum Visitor Indicator', ' Indicator circuit can give identification of the visitor to your home in your absence.', 'Good', 'Verified', '5'),
(4, '19CS050', 'Low Power Inverter', 'Simple low power inverter that converts 12V DC into 230-250V AC', 'Good', 'Verified', '5'),
(5, '20EE009', 'PC based GPS', 'Designs a system that connects a GPS module to a PC com port', 'Good', 'Verified', '5'),
(6, '19EE011', 'Low Power Inverter', 'Simple low power inverter that converts 12V DC into 230-250V AC', 'Good', 'Verified', '5'),
(7, '18EE016', 'Doorbell Cum Visitor Indicator', ' Indicator circuit can give identification of the visitor to your home in your absence.', 'Good', 'Verified', '5'),
(8, '20IT045', 'PC based GPS', 'Designs a system that connects a GPS module to a PC com port', 'Good', 'Verified', '5'),
(9, '19IT031', 'Low Power Inverter', 'Simple low power inverter that converts 12V DC into 230-250V AC', 'Good', 'Verified', '5'),
(10, '18IT043', 'Doorbell Cum Visitor Indicator', ' Indicator circuit can give identification of the visitor to your home in your absence.', 'Good', 'Verified', '5'),
(11, '20ME009', 'PC based GPS', 'Designs a system that connects a GPS module to a PC com port', 'Good', 'Verified', '5'),
(12, '19ME006', 'Low Power Inverter', 'Simple low power inverter that converts 12V DC into 230-250V AC', 'Good', 'Verified', '5'),
(13, '18ME002', 'Doorbell Cum Visitor Indicator', ' Indicator circuit can give identification of the visitor to your home in your absence.', 'Good', 'Verified', '5'),
(14, '19EC015', 'PC based GPS', 'Designs a system that connects a GPS module to a PC com port', 'Good', 'Verified', '5'),
(15, '20EC020', 'Low Power Inverter', 'Simple low power inverter that converts 12V DC into 230-250V AC', 'Good', 'Verified', '5'),
(16, '18EC012', 'Doorbell Cum Visitor Indicator', ' Indicator circuit can give identification of the visitor to your home in your absence.', 'Good', 'Verified', '5');
-- --------------------------------------------------------

--
-- Table structure for table `pd_motivational_talk`
--

CREATE TABLE `pd_motivational_talk` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `topic` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `resource_person` varchar(45) DEFAULT NULL,
  `outcome` varchar(1000) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pd_motivational_talk`
--

INSERT INTO `pd_motivational_talk` (`s_no`, `roll_no`, `topic`, `date`, `resource_person`, `outcome`, `verified`, `credits`) VALUES
(1, '19CS048', 'Being a winner', NULL, 'Susil', 'Good', 'Verified', '5'),
(2, '19CS050', 'Saving the world', NULL, 'Karthik', 'Good', 'Verified', '5'),
(3, '19CS043', 'Patience', NULL, 'Crystal', 'Good', 'Verified', '5'),
(4, '19CS019', 'motivation', '2021-11-30', 'asdsaa', 'good', 'Pending', NULL),
(5, '20EE009', 'Being a winner', NULL, 'Susil', 'Good', 'Verified', '5'),
(6, '19EE011', 'Saving the world', NULL, 'Karthik', 'Good', 'Verified', '5'),
(7, '18EE016', 'Patience', NULL, 'Crystal', 'Good', 'Verified', '5'),
(8, '20IT045', 'Being a winner', NULL, 'Susil', 'Good', 'Verified', '5'),
(9, '19IT031', 'Saving the world', NULL, 'Karthik', 'Good', 'Verified', '5'),
(10, '18IT043','Patience', NULL, 'Crystal', 'Good', 'Verified', '5'),
(11, '20ME009', 'Being a winner', NULL, 'Susil', 'Good', 'Verified', '5'),
(12, '19ME006', 'Saving the world', NULL, 'Karthik', 'Good', 'Verified', '5'),
(13, '18ME002', 'Patience', NULL, 'Crystal', 'Good', 'Verified', '5'),
(14, '19EC015', 'Being a winner', NULL, 'Susil', 'Good', 'Verified', '5'),
(15, '20EC020', 'Saving the world', NULL, 'Karthik', 'Good', 'Verified', '5'),
(16, '18EC012', 'Patience', NULL, 'Crystal', 'Good', 'Verified', '5');

-- --------------------------------------------------------

--
-- Table structure for table `pd_placement`
--

CREATE TABLE `pd_placement` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `aptitude` varchar(45) DEFAULT NULL,
  `soft_skills` varchar(45) DEFAULT NULL,
  `reasoning` varchar(45) DEFAULT NULL,
  `technical_training` varchar(255) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pd_placement`
--

INSERT INTO `pd_placement` (`s_no`, `roll_no`, `aptitude`, `soft_skills`, `reasoning`, `technical_training`, `credits`) VALUES
(1, '19CS048', '95', '88', '68', '75', '5'),
(2, '19CS050', '97', '89', '100', '79', '5'),
(3, '19CS043', '100', '78', '79', '95', '5'),
(4, '19CS019', 'sxghsadsv', 'svanav', 'ascagsv', 'gsacs', NULL),
(5, '20EE009', '95', '88', '68', '75', '5'),
(6, '19EE011', '97', '89', '100', '79', '5'),
(7, '18EE016', '100', '78', '79', '95', '5'),
(8, '20IT045', '95', '88', '68', '75', '5'),
(9, '19IT031', '97', '89', '100', '79', '5'),
(10, '18IT043', '100', '78', '79', '95', '5'),
(11, '20ME009', '95', '88', '68', '75', '5'),
(12, '19ME006', '97', '89', '100', '79', '5'),
(13, '18ME002', '100', '78', '79', '95', '5'),
(14, '19EC015', '95', '88', '68', '75', '5'),
(15, '20EC020', '97', '89', '100', '79', '5'),
(16, '18EC012', '100', '78', '79', '95', '5');

-- --------------------------------------------------------

--
-- Table structure for table `pd_publications`
--

CREATE TABLE `pd_publications` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `conf_or_journal` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `impact_factor` varchar(1000) DEFAULT NULL,
  `indexed_in` varchar(1000) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pd_publications`
--

INSERT INTO `pd_publications` (`s_no`, `roll_no`, `conf_or_journal`, `name`, `title`, `impact_factor`, `indexed_in`, `verified`, `credits`) VALUES
(1, '19CS048', 'Journal', 'Trade journal', 'Robotics', 'Used in automation', '2019-08-07', 'Verified', '5'),
(2, '19CS050', 'Journal', 'Academic journal', 'Microprocessor', 'Used in processors', '2020-07-27', 'Verified', '5'),
(3, '19CS043', 'Journal', 'Academic journal', 'Controller', 'Used in controlling electronic appliances', '2020-08-06', 'Verified', '5'),
(4, '19CS019', 'Journal', 'Academic journal', 'Microprocessor', 'Used in processors', '2020-07-27', 'Verified', '5'),
(5, '20EE009', 'Journal', 'Trade journal', 'Robotics', 'Used in automation', '2019-08-07', 'Verified', '5'),
(6, '19EE011', 'Journal', 'Academic journal', 'Microprocessor', 'Used in processors', '2020-07-27', 'Verified', '5'),
(7, '18EE016', 'Journal', 'Academic journal', 'Controller', 'Used in controlling electronic appliances', '2020-08-06', 'Verified', '5'),
(8, '20IT045', 'Journal', 'Trade journal', 'Robotics', 'Used in automation', '2019-08-07', 'Verified', '5'),
(9, '19IT031', 'Journal', 'Academic journal', 'Microprocessor', 'Used in processors', '2020-07-27', 'Verified', '5'),
(10, '18IT043', 'Journal', 'Academic journal', 'Controller', 'Used in controlling electronic appliances', '2020-08-06', 'Verified', '5'),
(11, '20ME009', 'Journal', 'Trade journal', 'Robotics', 'Used in automation', '2019-08-07', 'Verified', '5'),
(12, '19ME006', 'Journal', 'Academic journal', 'Microprocessor', 'Used in processors', '2020-07-27', 'Verified', '5'),
(13, '18ME002', 'Journal', 'Academic journal', 'Controller', 'Used in controlling electronic appliances', '2020-08-06', 'Verified', '5'),
(14, '19EC015', 'Journal', 'Trade journal', 'Robotics', 'Used in automation', '2019-08-07', 'Verified', '5'),
(15, '20EC020', 'Journal', 'Academic journal', 'Microprocessor', 'Used in processors', '2020-07-27', 'Verified', '5'),
(16, '18EC012', 'Journal', 'Academic journal', 'Controller', 'Used in controlling electronic appliances', '2020-08-06', 'Verified', '5');


CREATE TABLE `pd_webinar` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `topic` varchar(45) DEFAULT NULL,
  `resource_person` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `outcome` varchar(1000) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pd_webinar`
--

INSERT INTO `pd_webinar` (`s_no`, `roll_no`, `topic`, `resource_person`, `date`, `outcome`, `verified`, `credits`) VALUES
(1, '19CS048', 'Online marketing', 'Ravi', '2019-06-09', 'Good', 'Verified', '5'),
(2, '19CS050', 'Personal development', 'Susil', '2020-05-04', 'Good', 'Verified', '5'),
(3, '19CS043', 'Career growth', 'Ashwin', '2021-02-11', 'Good', 'Verified', '5'),
(4, '19CS019', 'Webinar', 'GOOD', '2021-11-30', 'GOOD', 'Pending', NULL),
(5, '20EE009', 'Online marketing', 'Ravi', '2019-06-09', 'Good', 'Verified', '5'),
(6, '19EE011', 'Personal development', 'Susil', '2020-05-04', 'Good', 'Verified', '5'),
(7, '18EE016', 'Career growth', 'Ashwin', '2021-02-11', 'Good', 'Verified', '5'),
(8, '20IT045',  'Online marketing', 'Ravi', '2019-06-09', 'Good', 'Verified', '5'),
(9, '19IT031',  'Personal development', 'Susil', '2020-05-04', 'Good', 'Verified', '5'),
(10,'18IT043','Career growth', 'Ashwin', '2021-02-11', 'Good', 'Verified', '5'),
(11, '20ME009', 'Online marketing', 'Ravi', '2019-06-09', 'Good', 'Verified', '5'),
(12, '19ME006',  'Personal development', 'Susil', '2020-05-04', 'Good', 'Verified', '5'),
(13, '18ME002', 'Career growth', 'Ashwin', '2021-02-11', 'Good', 'Verified', '5'),
(14, '19EC015', 'Online marketing', 'Ravi', '2019-06-09', 'Good', 'Verified', '5'),
(15, '20EC020', 'Personal development', 'Susil', '2020-05-04', 'Good', 'Verified', '5'),
(16, '18EC012','Career growth', 'Ashwin', '2021-02-11', 'Good', 'Verified', '5');
-- --------------------------------------------------------

--
-- Table structure for table `pd_workshops`
--

CREATE TABLE `pd_workshops` (
  `s_no` int(11) NOT NULL,
  `roll_no` varchar(45) NOT NULL,
  `topic` varchar(45) DEFAULT NULL,
  `resource_person` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `outcome` varchar(1000) DEFAULT NULL,
  `verified` varchar(100) DEFAULT NULL,
  `credits` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pd_workshops`
--

INSERT INTO `pd_workshops` (`s_no`, `roll_no`, `topic`, `resource_person`, `date`, `outcome`, `verified`, `credits`) VALUES
(1, '19CS048', 'Goal planning', 'Nikita', '2019-08-07', 'Good', 'Verified', '5'),
(2, '19CS050', 'Anger management', 'Varghese', '2020-07-27', 'Good', 'Verified', '5'),
(3, '19CS043', 'Developing self confidence', 'Vidhya', '2020-10-09', 'Good', 'Verified', '5'),
(4, '19CS019', 'GOOD', '2021-11-30', 'adasa', 'Good', 'Pending', NULL),
(5, '20EE009', 'Goal planning', 'Nikita', '2019-08-07', 'Good', 'Verified', '5'),
(6, '19EE011', 'Anger management', 'Varghese', '2020-07-27', 'Good', 'Verified', '5'),
(7, '18EE016', 'Developing self confidence', 'Vidhya', '2020-10-09', 'Good', 'Verified', '5'),
(8, '20IT045', 'Anger management', 'Varghese', '2020-07-27', 'Good', 'Verified', '5'),
(9, '19IT031', 'Developing self confidence', 'Vidhya', '2020-10-09', 'Good', 'Verified', '5'),
(10, '18IT043', 'Anger management', 'Varghese', '2020-07-27', 'Good', 'Verified', '5'),
(11, '20ME009', 'Developing self confidence', 'Vidhya', '2020-10-09', 'Good', 'Verified', '5'),
(12, '19ME006', 'Anger management', 'Varghese', '2020-07-27', 'Good', 'Verified', '5'),
(13, '18ME002', 'Developing self confidence', 'Vidhya', '2020-10-09', 'Good', 'Verified', '5'),
(14, '19EC015', 'Goal planning', 'Nikita', '2019-08-07', 'Good', 'Verified', '5'),
(15, '20EC020', 'Anger management', 'Varghese', '2020-07-27', 'Good', 'Verified', '5'),
(16, '18EC012', 'Developing self confidence', 'Vidhya', '2020-10-09', 'Good', 'Verified', '5');
-- --------------------------------------------------------

--
-- Table structure for table `student_details`
--

CREATE TABLE `student_details` (
  `roll_no` varchar(45) NOT NULL,
  `reg_no` varchar(45) DEFAULT NULL,
  `sname` varchar(100) DEFAULT NULL,
  `aadhar_no` varchar(20) DEFAULT NULL,
  `email` varchar(225) DEFAULT NULL,
  `licet_email` varchar(255) NOT NULL,
  `batch` varchar(45) DEFAULT NULL,
  `dept` varchar(45) DEFAULT NULL,
  `quota` varchar(10) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `dob` varchar(20) DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `contact_no` varchar(20) DEFAULT NULL,
  `father_name` varchar(50) DEFAULT NULL,
  `mother_name` varchar(50) DEFAULT NULL,
  `father_mob_no` varchar(20) DEFAULT NULL,
  `mother_mob_no` varchar(20) DEFAULT NULL,
  `community` varchar(10) DEFAULT NULL,
  `religion` varchar(50) DEFAULT NULL,
  `if_catholic_parish` varchar(225) DEFAULT NULL,
  `dalit_catholic_yn` varchar(10) DEFAULT NULL,
  `present_address` varchar(500) DEFAULT NULL,
  `permanent_address` varchar(300) DEFAULT NULL,
  `blood_group` varchar(10) DEFAULT NULL,
  `mother_tongue` varchar(100) DEFAULT NULL,
  `lang_know` varchar(300) DEFAULT NULL,
  `pan` varchar(20) DEFAULT NULL,
  `father_qualification` varchar(225) DEFAULT NULL,
  `mother_qualification` varchar(225) DEFAULT NULL,
  `father_occupation` varchar(100) DEFAULT NULL,
  `mother_occupation` varchar(100) DEFAULT NULL,
  `father_office_address` varchar(300) DEFAULT NULL,
  `mother_office_address` varchar(300) DEFAULT NULL,
  `father_annual_income` varchar(30) DEFAULT NULL,
  `mother_annual_income` varchar(30) DEFAULT NULL,
  `father_email` varchar(225) DEFAULT NULL,
  `mother_email` varchar(225) DEFAULT NULL,
  `guardian_name` varchar(50) DEFAULT NULL,
  `guardian_qualification` varchar(225) DEFAULT NULL,
  `guardian_occupation` varchar(30) DEFAULT NULL,
  `guardian_office_address` varchar(300) DEFAULT NULL,
  `guardian_annual_income` varchar(30) DEFAULT NULL,
  `guardian_mob_no` varchar(20) DEFAULT NULL,
  `guardian_email` varchar(50) DEFAULT NULL,
  `no_of_siblings` varchar(10) DEFAULT NULL,
  `name_siblings` varchar(225) DEFAULT NULL,
  `qualification_siblings` varchar(225) DEFAULT NULL,
  `occupation_siblings` varchar(225) DEFAULT NULL,
  `alumni_licet_loyola_yn` varchar(10) DEFAULT NULL,
  `application_no` varchar(20) DEFAULT NULL,
  `date_of_ad` varchar(20) DEFAULT NULL,
  `regular_lateral_rl` varchar(10) DEFAULT NULL,
  `dayschl_hosteller_dh` varchar(10) DEFAULT NULL,
  `scholarship_name` varchar(100) DEFAULT NULL,
  `scholarship_amount` varchar(20) DEFAULT NULL,
  `first_graduate_yn` varchar(10) DEFAULT NULL,
  `eco_backward_yn` varchar(10) DEFAULT NULL,
  `programming_languages` varchar(225) DEFAULT NULL,
  `software_proficiency` varchar(225) DEFAULT NULL,
  `dept_rel_proficiency` varchar(225) DEFAULT NULL,
  `certifications` varchar(225) DEFAULT NULL,
  `other_skills` varchar(225) DEFAULT NULL,
  `aptitude_analytical_skills` varchar(225) DEFAULT NULL,
  `communication_skills` varchar(225) DEFAULT NULL,
  `social_media_exposure` varchar(225) DEFAULT NULL,
  `leadership_skills` varchar(225) DEFAULT NULL,
  `other_interpersonal_skills` varchar(255) DEFAULT NULL,
  `short_term_goal` varchar(225) DEFAULT NULL,
  `long_term_goal` varchar(225) DEFAULT NULL,
  `membership_name` varchar(100) DEFAULT NULL,
  `membership_no` varchar(30) DEFAULT NULL,
  `membership_duration` varchar(30) DEFAULT NULL,
  `hse_school_name` varchar(225) DEFAULT NULL,
  `hse_board` varchar(100) DEFAULT NULL,
  `hse_medium` varchar(30) DEFAULT NULL,
  `hse_sec_lang` varchar(30) DEFAULT NULL,
  `hse_group` varchar(50) DEFAULT NULL,
  `hse_marks` varchar(10) DEFAULT NULL,
  `hse_percentage` varchar(10) DEFAULT NULL,
  `hse_cutoff` varchar(10) DEFAULT NULL,
  `hse_attempts` varchar(10) DEFAULT NULL,
  `sslc_school_name` varchar(225) DEFAULT NULL,
  `sslc_board` varchar(100) DEFAULT NULL,
  `sslc_medium` varchar(30) DEFAULT NULL,
  `sslc_sec_lang` varchar(30) DEFAULT NULL,
  `sslc_marks` varchar(10) DEFAULT NULL,
  `sslc_percentage` varchar(10) DEFAULT NULL,
  `sslc_attempts` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_details`
--

INSERT INTO `student_details` (`roll_no`, `reg_no`, `sname`, `aadhar_no`, `email`, `licet_email`, `batch`, `dept`, `quota`, `gender`, `dob`, `nationality`, `contact_no`, `father_name`, `mother_name`, `father_mob_no`, `mother_mob_no`, `community`, `religion`, `if_catholic_parish`, `dalit_catholic_yn`, `present_address`, `permanent_address`, `blood_group`, `mother_tongue`, `lang_know`, `pan`, `father_qualification`, `mother_qualification`, `father_occupation`, `mother_occupation`, `father_office_address`, `mother_office_address`, `father_annual_income`, `mother_annual_income`, `father_email`, `mother_email`, `guardian_name`, `guardian_qualification`, `guardian_occupation`, `guardian_office_address`, `guardian_annual_income`, `guardian_mob_no`, `guardian_email`, `no_of_siblings`, `name_siblings`, `qualification_siblings`, `occupation_siblings`, `alumni_licet_loyola_yn`, `application_no`, `date_of_ad`, `regular_lateral_rl`, `dayschl_hosteller_dh`, `scholarship_name`, `scholarship_amount`, `first_graduate_yn`, `eco_backward_yn`, `programming_languages`, `software_proficiency`, `dept_rel_proficiency`, `certifications`, `other_skills`, `aptitude_analytical_skills`, `communication_skills`, `social_media_exposure`, `leadership_skills`, `other_interpersonal_skills`, `short_term_goal`, `long_term_goal`, `membership_name`, `membership_no`, `membership_duration`, `hse_school_name`, `hse_board`, `hse_medium`, `hse_sec_lang`, `hse_group`, `hse_marks`, `hse_percentage`, `hse_cutoff`, `hse_attempts`, `sslc_school_name`, `sslc_board`, `sslc_medium`, `sslc_sec_lang`, `sslc_marks`, `sslc_percentage`, `sslc_attempts`) VALUES
('19CS002', '311119104005', 'AKSHAYA SIVANANDHINI P', '285834960921', NULL, 'akshayasivanandhini.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'FEMALE', '12-Nov-01', NULL, '', 'PUSHPAKARAN S', 'SAARUKESI S M', '9444204016', '9003187520', NULL, 'HINDU', NULL, NULL, 'NO. 5C/1, VIKRAM VILLA, LEITH CASTLE NORTH STREET, SANTHOME, CHENNAI-28.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS003', '311119104014', 'ASMIR KHAN S', '389542778861', NULL, 'asmirkhan.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'MALE', '25-Sep-01', NULL, '', 'SHAMIM S', 'JAMILA BANU S', '9884116663', '9092422472', NULL, 'MUSLIM', NULL, NULL, 'O.NO. 27/2, N.NO. 9, MOSQUE LANE, VELACHERY ROAD, SAIDAPET, CHENNAI-600015.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS004', '311119104019', 'DHANUSH M', '306557780971', NULL, 'dhanush.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'MALE', '23-Dec-01', NULL, '', 'MURUGAN C', 'ALAMELU M', '9444518942', '9710247917', NULL, 'HINDU', NULL, NULL, 'NO. 122, VINAYAGAR KOVIL STREET, EDAYANCHAVADI, CHENNAI-600103.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS007', '311119104023', 'GIREESH R', '467356387733', NULL, 'gireesh.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'MALE', '22-Nov-01', NULL, '', 'VENKATESWARALU R', 'CHINNAMMA R', '9884630197', '7397363790', NULL, 'HINDU', NULL, NULL, 'N.NO. 2, O.NO. 37, NARASIMMA NAGAR, 3RD STREET, PERAMBUR BARRACKS, PULIANTHOPE, CHENNAI.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS008', '311119104024', 'HAREESH KUMAAR G J', '956249937638', NULL, 'hareeshkumaar.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'MALE', '04-Dec-01', NULL, '', 'JAYAKUMAR G', 'MAHALAKSHMI J', '9841176370', '9841838396', NULL, 'HINDU', NULL, NULL, '2/34, S-1, JAYAM FLATS, SRINIVASA ROAD, MYLAPORE, CHENNAI-4.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS009', '311119104025', 'HARI PRIYA D', '442896929222', NULL, 'haripriya.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'FEMALE', '14-Sep-01', NULL, '', 'DHANASEKARAN K', 'MEENA V', '9840115875', '9962300194', NULL, 'HINDU', NULL, NULL, 'N.NO. 14, O.NO. 9/1, 11TH AVENUE, HARRINGTON ROAD, SHENOY NAGAR, CHENNAI-30.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS010', '311119104026', 'HARSHAVARTHAN MMA', '523447876233', NULL, 'harshavarthanmma.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'MALE', '07-Jun-02', NULL, '', 'MALAIRAJ K', 'KARNESHWARI M', '9841002250', '9382623435', NULL, 'HINDU', NULL, NULL, '84, THANDAVARAYAN STREET, OLD WASHERMENPET, CHENNAI-600021.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS011', '311119104029', 'JAISON JACOB J', '598865508679', NULL, 'jaisonjacob.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'MALE', '08-Jun-02', NULL, '', 'JOHN JACOB J', 'SOBHANA KUMARI N', '9600965821', '9626017003', NULL, 'CHRISTIAN', NULL, NULL, 'JJ ILLAM, 10-62C/1, KUNNATHUKONAM, PALAPALLI, MEKKAMANDAPAM (PO), KK-629166.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS012', '311119104030', 'JASVANTH S', '912444710349', NULL, 'jasvanth.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'MALE', '17-Dec-01', NULL, '', 'SHIVAJI SEKAR K', 'ANANDHI S', '9952033015', '9840925287', NULL, 'HINDU', NULL, NULL, 'NO. 12/81, WEST JONES ROAD, SAIDAPET, CHENNAI-600015.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS014', '311119104038', 'LAKSHMI PRIYA V', '633203810658', NULL, 'lakshmipriya.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'FEMALE', '20-Feb-01', NULL, '', 'VEILUMUTHU P', 'PUSHPAVALLI V', '7871029327', '7871029327', NULL, 'HINDU', NULL, NULL, '10/29, KAKKAN NAGAR, II MAIN RAOD, ADAMBAKKAM, CHENNAI-88.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS015', '311119104039', 'LOGESH P', '810963296503', NULL, 'logesh.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'MALE', '19-Feb-02', NULL, '', 'PANNEER G', 'MAYILARASI P', '8825828602', '9741484709', NULL, 'HINDU', NULL, NULL, 'NAGANAMPATTI VILLAGE, GENODIGANALLI (PO), KARIMANGALAM (TK), DHARMAPURI-635205.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS016', '311119104043', 'MARY DERLIN TANYA X', '390831720616', NULL, 'maryderlintanya.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'FEMALE', '12-Jan-01', NULL, '', 'XAVIER RAJESH S', 'ALICE PREMA', '7339167149', '8012383154', NULL, 'CHRISTIAN', NULL, NULL, '649, MAHILCHI NAGAR, PERUMAL PURAM (PO), PALAYAMKOTTAI, TIRUNELVELI-627007.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS017', '311119104048', 'PADMAPRIYA G', '278287200368', NULL, 'padmapriya.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'FEMALE', '30-Aug-01', NULL, '', 'GNANAVEL K S', 'POONGOTHAI G', '7299972601', '9841633777', NULL, 'HINDU', NULL, NULL, '80/90, KUMARAPPA STREET, NUNGAMBAKKAM, CHENNAI-34.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS019', '311119104054', 'SANJAY K', '613091088091', NULL, 'sanjay.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'MALE', '03-Jul-02', NULL, '', 'KUMARASAN S (LATE)', 'MANIMOZHI K', '9940461066', '9360147581', NULL, 'HINDU', NULL, NULL, 'PLOT NO. B1, VELAYUDHAM STREET, BHARAT NAGAR EXTN, MADIPAKKAM, CHENNAI-91.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS020', '311119104056', 'SHEKINAH T', '235079184269', NULL, 'shekinah.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'FEMALE', '18-Sep-01', NULL, '', 'TITUS ENOCK J', 'JASPER ANANDHI A', '9443152169', '9487600169', NULL, 'CHRISTIAN', NULL, NULL, '7, VASANTH APARTMENTS, 4 VENKATRAMAN STREET, PERAMBUR, CHENNAI-11.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS021', '311119104057', 'SNEHA B', '354972255253', NULL, 'sneha.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'FEMALE', '16-May-02', NULL, '', 'BABURAJ N', 'SHABANA C R', '9841164110', '8925263542', NULL, 'HINDU', NULL, NULL, 'NO. 22/1, VOC BLOCK, 4TH STREET, JAFFERKHANPET, CHENNAI-83.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS031', '311119104059', 'VIKRAMJEET SINGH KOTWAL', '496001338059', NULL, 'vikramjeetsinghkotwal.23cs@licet.ac.in', '2019-2023', 'CSE', 'GQ', 'MALE', '04-Sep-01', NULL, '', 'RAMESH KUMAR', 'ANU RADHA', '6005741504', '9596703520', NULL, 'HINDU', NULL, NULL, 'R/O, BHALLA BLOCK TEL, BHALLA DISTT DODA JAMU AND KASHMER-182221.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS041', '311119104002', 'ADHITHYA MURALIDHARAN', '675295624500', NULL, 'adhithyamuralidharan.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '02-Nov-01', NULL, '', 'MURALIDHARAN V', 'RADHA MURALIDHARAN', '9444929489', '9445155700', NULL, 'HINDU', NULL, NULL, 'OM SAKTHI ILLAM NO. 101, VELLALAR STREET, KODAMBAKKAM, CHENNAI-24.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS042', '311119104003', 'ADRIAN MARSHALL', '208048661997', NULL, 'adrianmarshall.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '25-May-02', NULL, '', 'MARSHALL A', 'AROCKIAMARY A', '8056240924', '9843265557', NULL, 'CHRISTIAN', NULL, NULL, '3G, SAI SUKRTA APARTMENT, ANNA NAGAR, II MAIN ROAD, VELACHERY, CHENNAI-42.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS043', '311119104004', 'AISHWARYA PL', '606448441575', 'aishwarya@gmail.com', 'aishwaryapl.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '27-Jul-01', 'Indian', '9864621354', 'PALANIAPPAN', 'ALAMELU', '8148121215', '9790721213', 'BC', 'HINDU', NULL, 'N', 'NO. 9, BHARATHI NAGAR, 3RD STREET, NORTH USMAN ROAD, T. NAGAR, CHENNAI-17.', 'NO. 9, BHARATHI NAGAR, 3RD STREET, NORTH USMAN ROAD, T. NAGAR, CHENNAI-17.', 'A1B+ve', 'Tamil', 'Tamil, English, Telugu', 'SDFG8756U', 'B.Com.', 'BBA', 'Accounts', 'Homemaker', 'NO. 9, BHARATHI NAGAR, 3RD STREET, NORTH USMAN ROAD, T. NAGAR, CHENNAI-17.', NULL, '1,98,000', NULL, 'kannan@gmail.com', 'alamelu@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2', 'VIDHYA,SREEKRISHNA.', 'B.E, Primary School', 'Embedded Engineer', 'Y', '1872435', '26/06/2019', 'R', 'D', NULL, NULL, 'N', 'N', 'Python, C, C++', 'Photoshop', 'C++', 'Python, C, C++', 'Leadership', 'Logical and Verbal', 'Speaking and listening', NULL, 'Team Management , Event Management', 'Team Work and Responsibility', 'Master a language', 'Entrepreneur', 'SAE', '2364', '6 months', 'DAV Matriculation Higher Secondary ', 'STATEBOARD', 'English', 'Sanskrit', 'CS-MATHS', '540', '90%', '180.00', '1', 'Vidhyodya Matriculation Higher Secondary Academy', 'STATEBOARD', 'English', 'Tamil', '480', '90%', '1'),
('19CS044', '311119104006', 'ALDRIN JOE B', '799208305583', NULL, 'aldrinjoe.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '12-Nov-01', NULL, '', 'BELLARMINE JOSE A', 'AMUTHA DARLIN T', '9345699988', '9360099988', NULL, 'CHRISTIAN', NULL, NULL, '2-66, VELLANKETTI VILAI, MULLANGANAVILAI & POST, KANNIYAKUMARI-629 157.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS045', '311119104007', 'ALISON ROY X', '884985532979', NULL, 'alisonroy.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '25-Aug-01', NULL, '', 'XAVIER SELVARAJ M', 'RANI R', '9629399463', '9551414162', NULL, 'CHRISTIAN', NULL, NULL, 'NO. 303, DEEPA BLOCK, CHITRA AVENUE, CHOOLAIMEDU HIGH ROAD, CHENNAI-94.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS046', '311119104008', 'AMALA LILLYCAROLIN S', '309319403319', NULL, 'amalalillycarolin.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '29-Nov-01', NULL, '', 'SEBASTIN ANANDHAN P', 'ANJERNE Y', '9443975127', '9442679739', NULL, 'CHRISTIAN', NULL, NULL, 'NO. 4/3, AMBALPURAM, SEKKALAI, II ND STREET, KARAIKUDI-630002.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS047', '311119104009', 'ANISHA IMMACULATE A', '258727248772', NULL, 'anishaimmaculate.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '26-Apr-02', NULL, '', 'AUSTAN RAJ A', 'RITA A', '9840829585', '9840664778', NULL, 'CHRISTIAN', NULL, NULL, '18, FOXEN ST, OPP. BHARANI NURSING HOME, PERAMBUR, CHENNAI-11.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS048', '311119104010', 'ANNIE MARLENE NIKITA D', '895057080088', 'marlene@gmail.com', 'anniemarlenenikita.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '07-Aug-01', 'Indian', '9623488663', 'DEVASAHAYAM R', 'AROKIA RANI D', '9600016903', '9940369809', 'BC', 'CHRISTIAN', 'St.Antony\'s Church, Maduravoyal.', 'N', 'NO. 5, MULAYAM SINGH YADAV STREET, KARTHIKEYAN NAGAR, MADURAVOYAL, CHENNAI-95.', 'NO. 5, MULAYAM SINGH YADAV STREET, KARTHIKEYAN NAGAR, MADURAVOYAL, CHENNAI-95', 'AB+ve', 'Tamil', 'Tamil, English', 'AESFG5634R', 'B.Com.', 'B.Sc.,B.Ed.', 'Senior Processing Manager', 'Homemaker', 'NO. 5, MULAYAM SINGH YADAV STREET, KARTHIKEYAN NAGAR, MADURAVOYAL, CHENNAI-95', NULL, '8,00,000', NULL, 'rdeva@gmail.com', 'rans@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', 'DAPHNE MARLENE SWETHA D', 'B.E.', 'Programmer Analyst', 'Y', '1087345', '26/06/2019', 'R', 'D', NULL, NULL, 'N', 'N', 'Python, Java , C.', 'Photoshop.', 'C.', 'C,C++,Python', 'Management, Leadership.', 'Verbal ability, Logic analysis.', 'Adapting style, Active listening.', NULL, 'Team management, Organization.', 'Responsibility, Flexibility.', 'Developing a morning routine', 'Entrepreneur', 'Bhumi', '0722', '1 Year', 'SBOA Matriculation and Higher Secondary School.', 'STATEBOARD', 'English', 'Tamil', 'BIO-MATHS', '525', '87.5%', '170.00', '1', 'SBOA Matriculation and Higher Secondary School.', 'STATEBOARD', 'English', 'Tamil', '493', '98.6%', '1'),
('19CS049', '311119104011', 'ARJUN SRINIVASAN R', '210687342130', NULL, 'arjunsrinivasan@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '16-May-01', NULL, '', 'RAVI VENKATESH V', 'SUBHASHINI RAVI', '9941005577', '9941905577', NULL, 'HINDU', NULL, NULL, 'N. NO. 30, O.NO. 18, 2ND CROSS STREET WEST C I T NAGAR, CHENNAI-35.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS050', '311119104012', 'ASHIK VARGHESE K T', '534126895000', 'ashikvarghese.kt@gmail.com', 'ashikvarghese.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '25/12/2001', 'Indian', '8667490144', 'THOMAS K V', 'BINU THOMAS', NULL, '9043690221', 'OC', 'CHRISTIAN', 'Don Bosco Shrine, Ayanavaram.', 'N', '26/29, UJJAINI STREET, AYANAvARAM, CHENNAI-23.', '26/29, UJJAINI STREET, AYANAvARAM, CHENNAI-23.', 'O+ve', 'Malayalam', 'Tamil, Malayalam, English', 'BXCPT6764J', 'DEEE', 'GNM', NULL, 'Pharmaceuticals Admin', NULL, '77, RAJU STREET, CHOOLAI, CHENNAI-45.', NULL, '1,70,000', NULL, 'binuthomas31175@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', 'ANEESH K T', 'SSLC', 'Studying', 'N', '102563', '26/06/2019', 'R', 'D', NULL, NULL, 'Y', 'N', 'Python, Java , C.', 'Photoshop, After Effects', 'UML, RDBMS', 'GCP, AWS, DCA', 'Management, Leadership.', 'Verbal ability, Logic analysis.', 'Adapting style, Active listening.', 'Active in Insta, FB, LinkenIn.', 'Team management, Organization.', 'Responsibility, Flexibility.', 'Learn a New Language', 'Travel around the world', 'Rotaract', '58654', '4 Years', 'KRM Matric. Hr. Sec. School, Ayanavaram.', 'STATEBOARD', 'English', 'Tamil', 'CS-MATHS', '513', '85.5%', '169.50', '1', 'Velammal Vidhyashram, Surapet.', 'CBSE', 'English', 'Tamil', '10.0', '100%', '1'),
('19CS051', '311119104013', 'ASHWIN B', '702467223773', NULL, 'ashwin.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '23-Dec-00', NULL, '', 'BALASUBRAMANIAN M', 'JHENMOZHI B', '9841714830', '9043472203', NULL, 'HINDU', NULL, NULL, '26, FIRST CROSS STREET, TRUSTPURAM, KODAMBAKKAM, CHENNAI-24.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS052', '311119104015', 'CHRIS SASAN DOSS S', '997272669132', NULL, 'chrissasandoss.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '23-Oct-01', NULL, '', 'STALIN BRITTO A R', 'VIRGITS KAWRI S', '9976504244', '8610817172', NULL, 'CHRISTIAN', NULL, NULL, '3/422 B, SASAN ILLAM, 4TH STREET, VAIRAVAPURAM, KARAIKUDI, SIVAGANGAI-630006.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS053', '311119104016', 'CRYSTAL DARLING B', '246253445703', NULL, 'crystaldarling.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '27-Nov-00', NULL, '', 'BASKAR M', 'SUDHA BASKAR', '9789837374', '9840715982', NULL, 'CHRISTIAN', NULL, NULL, '34/19, INDIRA GANDHI 1ST STREET, CHOOLAIMEDU, CHENNAI-94.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS054', '311119104017', 'DELVYN JONES M', '620681788845', NULL, 'delvynjones.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '05-Sep-02', NULL, '', 'MARTIN ARUL JOSEPH T A', 'CHRISTY LOVEINA R', '8508222999', '8926222999', NULL, 'CHRISTIAN', NULL, NULL, 'NO. 10, RAGAVA STREET, CHOOLAI, CHENNAI-600112.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS055', '311119104018', 'DEVIPRIYA P', '492303490757', NULL, 'devipriya.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '04-Jun-02', NULL, '', 'PALANIAPPAN R M', 'MEENAKSHI P L', '9840255821', '9840263891', NULL, 'HINDU', NULL, NULL, '16/20, BHARATHIYAR STREET, CHOOLAIMEDU, CHENNAI-94.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS056', '311119104022', 'FREDERICK ALOYCIUS S', '282654500650', NULL, 'frederickaloycius.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '27-May-02', NULL, '', 'SAHAYANATHAN M', 'IRUDAYA MARY S', '9444443055', '9884842250', NULL, 'CHRISTIAN', NULL, NULL, 'NO. 5, P T STREET, MACKEYS GARDEN, GREAMS ROAD, THOUSAND LIGHTS, CHENNAI-6.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS057', '311119104027', 'HARSHITHA S S', '637850422085', NULL, 'harshitha.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '24-Feb-02', NULL, '', 'SURESH KUMAR S', 'UMAMAHESWARI S', '9841079038', '7299145555', NULL, 'HINDU', NULL, NULL, '41/20, FIRST MAIN ROAD EAST, SHENOY NAGAR, CHENNAI-600030.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS058', '311119104028', 'INFANT BENITA L', '572315374190', NULL, 'infantbenita.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '29-Dec-00', NULL, '', 'LOURDUSAMY ANTONY A', 'JESINTHA MARY R', '9940062230', '8939292325', NULL, 'CHRISTIAN', NULL, NULL, 'NO. 2/11, NEHRU 2ND ST, DR KHANU NAGAR, NESAPAKKAM, CHENNAI-78.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS059', '311119104031', 'JAWIN ARIVUMATHI J', '701877954148', NULL, 'jawinarivumadhi.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '22-Sep-01', NULL, '', 'JOHN ROZARIO Z', 'AVILA THERES J', '9942283659', '9894177763', NULL, 'CHRISTIAN', NULL, NULL, '\"MARY LAND\", 117 A, KOVIL STREET, WEST MARIANATHAPURAM, DINDIGUL-624003.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS060', '311119104032', 'JESINTHAN J', '881641644903', NULL, 'jesinthan.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '07-Mar-02', NULL, '', 'JOSEPH DURAI RAJ J', 'ARUL JEYA MARY S', '9003226219', '8056252837', NULL, 'CHRISTIAN', NULL, NULL, '20, KASIAMMAL NAGAR, PONNIAMMANMEDU, CHENNAI-600110.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS061', '311119104033', 'JOEL IGNATIUS J', '433952590906', NULL, 'joelignatius.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '15-Sep-01', NULL, '', 'JULIUS CAESAR J X', 'MARIYA SELVI A', '9841142321', '9941353532', NULL, 'CHRISTIAN', NULL, NULL, 'O NO. 41, N.NO. 60, PONDYCHERY ROAD, KOTTUR, CHENNAI-85.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS062', '311119104034', 'JOSALIN A J', '909322997864', NULL, 'josalin.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '27-Sep-01', NULL, '', 'JOSEPH A', 'CAROLINA A', '9994477550', '9597542235', NULL, 'CHRISTIAN', NULL, NULL, '7/1129-B, RAJIV GANDHI ST, NGO COLONY, NAGAMALAI, MADURAI-625019.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS063', '311119104035', 'JOY INFANTA J', '607131321257', NULL, 'joyinfanta.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '24-Mar-02', NULL, '', 'JOSEPH JAYASEELAN S', 'JOSEPHINE AROCKIA MARY R', '9944871252', '9790193709', NULL, 'CHRISTIAN', NULL, NULL, '20 & 21, MELAKKARAI NEW COLONY, THATCHANALLUR BYE PASS, TIRUNELVELI-627358.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS064', '311119104036', 'JUDES JOVINA W', '800198580694', NULL, 'judesjovina.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '27-Oct-01', NULL, '', 'WELLINGTON V', 'PUSHPALATHA E', '9994992760', '9952332724', NULL, 'CHRISTIAN', NULL, NULL, '4/74, RC COMPOUND, AVARAIKULAM, RADHAPURAM (TK), TIRUNELVELI-627133.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS065', '311119104040', 'LOKESWAR R R', '659095683960', NULL, 'lokeswar.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '15-Jul-01', NULL, '', 'DR R. RAVINDHRAN', 'MEERA R', '9840486271', '7395926150', NULL, 'HINDU', NULL, NULL, '1916, 5TH STREET, VASANTHAM COLONY, ANNA NAGAR WEST, CHENNAI-600040.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS066', '311119104041', 'MANDI MOHAMMED ZAYAAN', '694135470202', NULL, 'mandimohammedzayaan.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '10-Jul-01', NULL, '', 'JUNAID AHMED M', 'AFSHAN S', '9841014543', '9941278607', NULL, 'MUSLIM', NULL, NULL, 'NO. 64, H BLOCK, 4TH STREET, ANNANAGAR EAST, CHENNAI-102.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS067', '311119104042', 'MANIKANDAN R', '405935145633', NULL, 'manikandan.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '07-Jan-02', NULL, '', 'RAMU A', 'SELVI R', '9840213545', '9176461843', NULL, 'HINDU', NULL, NULL, 'KUMARAPPA LANE, 18/2, NUNGAMBAKKAM, CHENNAI-34.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS068', '311119104044', 'MEGHAA RHENITH R', '492582676354', NULL, 'meghaarhenith.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '16-Sep-01', NULL, '', 'REGIS L', 'PREMA A V', '8608211496', '7448970203', NULL, 'CHRISTIAN', NULL, NULL, 'NO. 101, 1ST FLOOR, 5TH CROSS STREET, S&P GARDEN, NOLAMBUR, CHENNAI-95.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS069', '311119104045', 'MELVYN FRANCIS', '959955836223', NULL, 'melvynfrancis.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '28-Aug-01', NULL, '', 'FRANCIS L', 'REETA MARY I', '9842206129', '9994443954', NULL, 'CHRISTIAN', NULL, NULL, '2-B, HOUSING UNIT, SCHEME ROAD, RACE COURSE, COIMBATORE-641 018.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS070', '311119104046', 'MELWIN JONES J', '', NULL, 'melwinjones.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '29-Nov-01', NULL, '', 'JOSEPH JOHN KENNEDY', 'LEON ANANTHI A', '9176996061', '9092175008', NULL, 'CHRISTIAN', NULL, NULL, '1H/312, PAULPANDI NAGAR, 6TH STREET, MILLERPURAM, TUTICORIN-628 008.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS071', '311119104047', 'NIRAJ TK KA', '881514330207', NULL, 'nirajtkka.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '26-Dec-01', NULL, '', 'KAMALAKANNAN T R', 'ANURADHA T K', '9444651076', '9884299190', NULL, 'HINDU', NULL, NULL, 'D.NO. 432, FLAT NO. 1, 21ST STREET, 5TH SECTOR, K K NAGAR, CHENNAI-78.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS072', '311119104049', 'PONMANI P R', '473823834390', NULL, 'ponmani.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '26-Sep-01', NULL, '', 'RAJENDIRAN S P', 'LAKSHMI M', '9444279310', '9444750245', NULL, 'HINDU', NULL, NULL, '59/13, RAMANUJAR GARDEN, SUBBARAYAN 4TH STREET, NAMMALVARPET, CHENNAI-12.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS073', '311119104050', 'RUBERT SHELDON A', '512522932737', NULL, 'rubertsheldon.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '27-Aug-01', NULL, '', 'AMALADASS S', 'PUSHPALATHA J', '9626154443', '9626154443', NULL, 'CHRISTIAN', NULL, NULL, 'PLOT NO. 17, A R NAGAR, MENGLES ROAD NEAR POLICE GYNO, DINDIGUL-624 001.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS074', '311119104051', 'RYAN RYNJAH', '549950345092', NULL, 'ryanrynjah.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '27-Nov-01', NULL, '', 'RISHANLANG RYNJAH', 'JOLLY RYNJAH', '9840068525', '7338836932', NULL, 'CHRISTIAN', NULL, NULL, 'KGEYES APOORVA APARTMENTS, E BLOCK, DOOR NO. 59, GANGAI AMMAN NAGAR KOIL , NOLAMBUR, CHENNAI-600107', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS075', '311119104053', 'SAM MITHIIL A', '295702925570', NULL, 'sammithiil.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'MALE', '28-Jul-01', NULL, '', 'ANTONY AMALRAJ D', 'ANNE MARY SUMATHI A', '9884044900', '9884704714', NULL, 'CHRISTIAN', NULL, NULL, '16/20, BUNDER GARDEN FIRST ST, PERAMBUR, CHENNAI-11.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS076', '311119104055', 'SERENA J E', '408670055071', NULL, 'serena.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '03-Jun-02', NULL, '', 'JAMES VELANKANNY D', 'ELIZABETH F P', '9750136346', '9486484550', NULL, 'CHRISTIAN', NULL, NULL, '380/11, OLD CHURCH ST, MADAM (PO), NEDUNGAMPATTU, VILLUPURAM-605759.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19CS077', '311119104058', 'TERESA ANGELINE MARY A', '255959133604', NULL, 'teresaangelinemary.23cs@licet.ac.in', '2019-2023', 'CSE', 'MQ', 'FEMALE', '29-Nov-01', NULL, '', 'ALBERT CHEZHIAN S', 'SEBASTI RUBY REXCILIN S', '6381916887', '9444637263', NULL, 'CHRISTIAN', NULL, NULL, 'NO. 2B, WEST PALM, FAIRMONT GARDENS, 3/160, MOUNT POONAMALLEE HIGH ROAD, MANAPAKKAM, CHENNAI-600125.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),

('18ME001', '311118114001', 'SIMRAN K T', '442896929222', NULL,'simran.22me@licet.ac.in', '2018-2022', 'MECH', 'GQ', 'FEMALE', '14-Sep-01', NULL, '', 'DHANASEKARAN K', 'MEENA V', '9840115875', '9962300194', NULL, 'HINDU', NULL, NULL, 'N.NO. 14, O.NO. 9/1, 11TH AVENUE, HARRINGTON ROAD, SHENOY NAGAR, CHENNAI-30.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('18ME002', '311118114002', 'RAJESH R', '523447876233', NULL, 'rajesh.22me@licet.ac.in', '2018-2022', 'MECH', 'GQ', 'MALE', '07-Jun-02', NULL, '', 'MALAIRAJ K', 'KARNESHWARI M', '9841002250', '9382623435', NULL, 'HINDU', NULL, NULL, '84, THANDAVARAYAN STREET, OLD WASHERMENPET, CHENNAI-600021.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19ME003', '311119114003', 'JAISON J', '598865508679', NULL, 'jaison.23me@licet.ac.in', '2019-2023', 'MECH', 'GQ', 'MALE', '08-Jun-02', NULL, '', 'JOHN JACOB J', 'SOBHANA KUMARI N', '9600965821', '9626017003', NULL, 'CHRISTIAN', NULL, NULL, 'JJ ILLAM, 10-62C/1, KUNNATHUKONAM, PALAPALLI, MEKKAMANDAPAM (PO), KK-629166.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19ME004', '311119114004', 'PRAVEEN S', '912444710349', NULL, 'praveen.23me@licet.ac.in', '2019-2023', 'MECH', 'GQ', 'MALE', '17-Dec-01', NULL, '', 'SHIVAJI SEKAR K', 'ANANDHI S', '9952033015', '9840925287', NULL, 'HINDU', NULL, NULL, 'NO. 12/81, WEST JONES ROAD, SAIDAPET, CHENNAI-600015.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19ME005', '311119114005', 'LAKSHMI V', '633203810658', NULL, 'lakshmi.23me@licet.ac.in', '2019-2023', 'MECH', 'GQ', 'FEMALE', '20-Feb-01', NULL, '', 'VEILUMUTHU P', 'PUSHPAVALLI V', '7871029327', '7871029327', NULL, 'HINDU', NULL, NULL, '10/29, KAKKAN NAGAR, II MAIN RAOD, ADAMBAKKAM, CHENNAI-88.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19ME006', '311119114006', 'MAHESH P', '810963296503', NULL, 'mahesh.23me@licet.ac.in', '2019-2023', 'MECH', 'GQ', 'MALE', '19-Feb-02', NULL, '', 'PANNEER G', 'MAYILARASI P', '8825828602', '9741484709', NULL, 'HINDU', NULL, NULL, 'NAGANAMPATTI VILLAGE, GENODIGANALLI (PO), KARIMANGALAM (TK), DHARMAPURI-635205.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19ME007', '311119114007', 'MARY P', '390831720616', NULL, 'mary.23me@licet.ac.in', '2019-2023', 'MECH', 'GQ', 'FEMALE', '12-Jan-01', NULL, '', 'XAVIER RAJESH S', 'ALICE PREMA', '7339167149', '8012383154', NULL, 'CHRISTIAN', NULL, NULL, '649, MAHILCHI NAGAR, PERUMAL PURAM (PO), PALAYAMKOTTAI, TIRUNELVELI-627007.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19ME008', '311119114008', 'PRIYA G', '278287200368', NULL, 'priya.23me@licet.ac.in', '2019-2023', 'MECH', 'GQ', 'FEMALE', '30-Aug-01', NULL, '', 'GNANAVEL K S', 'POONGOTHAI G', '7299972601', '9841633777', NULL, 'HINDU', NULL, NULL, '80/90, KUMARAPPA STREET, NUNGAMBAKKAM, CHENNAI-34.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('20ME009', '311120114009', 'RAGU K', '613091088091', NULL, 'ragu.24me@licet.ac.in', '2020-2024', 'MECH', 'GQ', 'MALE', '03-Jul-02', NULL, '', 'KUMARASAN S (LATE)', 'MANIMOZHI K', '9940461066', '9360147581', NULL, 'HINDU', NULL, NULL, 'PLOT NO. B1, VELAYUDHAM STREET, BHARAT NAGAR EXTN, MADIPAKKAM, CHENNAI-91.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('20ME010', '311120114010', 'ANGEL T', '235079184269', NULL, 'angel.24me@licet.ac.in', '2020-2024', 'MECH', 'GQ', 'FEMALE', '18-Sep-01', NULL, '', 'TITUS ENOCK J', 'JASPER ANANDHI A', '9443152169', '9487600169', NULL, 'CHRISTIAN', NULL, NULL, '7, VASANTH APARTMENTS, 4 VENKATRAMAN STREET, PERAMBUR, CHENNAI-11.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),

('18EC011', '311118106001', 'NEHA B', '354972255253', NULL, 'neha.22ec@licet.ac.in', '2018-2022', 'ECE', 'GQ', 'FEMALE', '16-May-02', NULL, '', 'BABURAJ N', 'SHABANA C R', '9841164110', '8925263542', NULL, 'HINDU', NULL, NULL, 'NO. 22/1, VOC BLOCK, 4TH STREET, JAFFERKHANPET, CHENNAI-83.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('18EC012', '311118106002', 'VIKRAM J', '496001338059', NULL, 'vikram.22ec@licet.ac.in', '2018-2022', 'ECE', 'GQ', 'MALE', '04-Sep-01', NULL, '', 'RAMESH KUMAR', 'ANU RADHA', '6005741504', '9596703520', NULL, 'HINDU', NULL, NULL, 'R/O, BHALLA BLOCK TEL, BHALLA DISTT DODA JAMU AND KASHMER-182221.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19EC013', '311119106003', 'ADHITHYA M', '675295624500', NULL, 'adhithya.23ec@licet.ac.in', '2019-2023', 'ECE', 'MQ', 'MALE', '02-Nov-01', NULL, '', 'MURALIDHARAN V', 'RADHA MURALIDHARAN', '9444929489', '9445155700', NULL, 'HINDU', NULL, NULL, 'OM SAKTHI ILLAM NO. 101, VELLALAR STREET, KODAMBAKKAM, CHENNAI-24.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19EC014', '311119106004', 'AJAY K', '208048661997', NULL, 'ajay.23ec@licet.ac.in', '2019-2023', 'ECE', 'MQ', 'MALE', '25-May-02', NULL, '', 'MARSHALL A', 'AROCKIAMARY A', '8056240924', '9843265557', NULL, 'CHRISTIAN', NULL, NULL, '3G, SAI SUKRTA APARTMENT, ANNA NAGAR, II MAIN ROAD, VELACHERY, CHENNAI-42.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19EC015', '311119106005', 'ISHWARYA L', '606448441575', 'ishwarya@gmail.com', 'aishwaryapl.23ec@licet.ac.in', '2019-2023', 'ECE', 'MQ', 'FEMALE', '27-Jul-01', 'Indian', '9864621354', 'PALANIAPPAN', 'ALAMELU', '8148121215', '9790721213', 'BC', 'HINDU', NULL, 'N', 'NO. 9, BHARATHI NAGAR, 3RD STREET, NORTH USMAN ROAD, T. NAGAR, CHENNAI-17.', 'NO. 9, BHARATHI NAGAR, 3RD STREET, NORTH USMAN ROAD, T. NAGAR, CHENNAI-17.', 'A1B+ve', 'Tamil', 'Tamil, English, Telugu', 'SDFG8756U', 'B.Com.', 'BBA', 'Accounts', 'Homemaker', 'NO. 9, BHARATHI NAGAR, 3RD STREET, NORTH USMAN ROAD, T. NAGAR, CHENNAI-17.', NULL, '1,98,000', NULL, 'kannan@gmail.com', 'alamelu@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2', 'VIDHYA,SREEKRISHNA.', 'B.E, Primary School', 'Embedded Engineer', 'Y', '1872435', '26/06/2019', 'R', 'D', NULL, NULL, 'N', 'N', 'Python, C, C++', 'Photoshop', 'C++', 'Python, C, C++', 'Leadership', 'Logical and Verbal', 'Speaking and listening', NULL, 'Team Management , Event Management', 'Team Work and Responsibility', 'Master a language', 'Entrepreneur', 'SAE', '2364', '6 months', 'DAV Matriculation Higher Secondary ', 'STATEBOARD', 'English', 'Sanskrit', 'CS-MATHS', '540', '90%', '180.00', '1', 'Vidhyodya Matriculation Higher Secondary Academy', 'STATEBOARD', 'English', 'Tamil', '480', '90%', '1'),
('19EC016', '311119106006', 'JOE B', '799208305583', NULL, 'joe.23ec@licet.ac.in', '2019-2023', 'ECE', 'MQ', 'MALE', '12-Nov-01', NULL, '', 'BELLARMINE JOSE A', 'AMUTHA DARLIN T', '9345699988', '9360099988', NULL, 'CHRISTIAN', NULL, NULL, '2-66, VELLANKETTI VILAI, MULLANGANAVILAI & POST, KANNIYAKUMARI-629 157.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19EC017', '311119106007', 'HARRY P', '884985532979', NULL, 'harry.23ec@licet.ac.in', '2019-2023', 'ECE', 'MQ', 'MALE', '25-Aug-01', NULL, '', 'XAVIER SELVARAJ M', 'RANI R', '9629399463', '9551414162', NULL, 'CHRISTIAN', NULL, NULL, 'NO. 303, DEEPA BLOCK, CHITRA AVENUE, CHOOLAIMEDU HIGH ROAD, CHENNAI-94.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19EC018', '311119106008', 'HERMIONE G', '309319403319', NULL, 'hermione.23ec@licet.ac.in', '2019-2023', 'ECE', 'MQ', 'FEMALE', '29-Nov-01', NULL, '', 'SEBASTIN ANANDHAN P', 'ANJERNE Y', '9443975127', '9442679739', NULL, 'CHRISTIAN', NULL, NULL, 'NO. 4/3, AMBALPURAM, SEKKALAI, II ND STREET, KARAIKUDI-630002.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('20EC019', '311120106009', 'GINNY J', '258727248772', NULL, 'ginny.24ec@licet.ac.in', '2020-2024', 'ECE', 'MQ', 'FEMALE', '26-Apr-02', NULL, '', 'AUSTAN RAJ A', 'RITA A', '9840829585', '9840664778', NULL, 'CHRISTIAN', NULL, NULL, '18, FOXEN ST, OPP. BHARANI NURSING HOME, PERAMBUR, CHENNAI-11.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('20EE009', '311120105025', 'MADHUMITHA M', '442896929222', NULL, 'madhumitha.24ee@licet.ac.in', '2020-2024', 'CSE', 'GQ', 'FEMALE', '14-Sep-01', NULL, '', 'DHANASEKARAN K', 'MEENA V', '9840115875', '9962300194', NULL, 'HINDU', NULL, NULL, 'N.NO. 14, O.NO. 9/1, 11TH AVENUE, HARRINGTON ROAD, SHENOY NAGAR, CHENNAI-30.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('20EE010', '311120105026', 'PRAVEEN A', '523447876233', NULL, 'praveen.24ee@licet.ac.in', '2020-2024', 'EEE', 'GQ', 'MALE', '07-Jun-02', NULL, '', 'MALAIRAJ K', 'KARNESHWARI M', '9841002250', '9382623435', NULL, 'HINDU', NULL, NULL, '84, THANDAVARAYAN STREET, OLD WASHERMENPET, CHENNAI-600021.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19EE011', '311119105029', 'JAI PRADEEP K', '598865508679', NULL, 'jaipradeep.23ee@licet.ac.in', '2019-2023', 'EEE', 'GQ', 'MALE', '08-Jun-02', NULL, '', 'JOHN JACOB J', 'SOBHANA KUMARI N', '9600965821', '9626017003', NULL, 'CHRISTIAN', NULL, NULL, 'JJ ILLAM, 10-62C/1, KUNNATHUKONAM, PALAPALLI, MEKKAMANDAPAM (PO), KK-629166.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19EE012', '311119105030', 'ASHWIN SAMUEL H', '912444710349', NULL, 'ashwinsamuel.23ee@licet.ac.in', '2019-2023', 'EEE', 'GQ', 'MALE', '17-Dec-01', NULL, '', 'SHIVAJI SEKAR K', 'ANANDHI S', '9952033015', '9840925287', NULL, 'HINDU', NULL, NULL, 'NO. 12/81, WEST JONES ROAD, SAIDAPET, CHENNAI-600015.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19EE014', '311119105038', 'JANANI V', '633203810658', NULL, 'janani.23ee@licet.ac.in', '2019-2023', 'EEE', 'GQ', 'FEMALE', '20-Feb-01', NULL, '', 'VEILUMUTHU P', 'PUSHPAVALLI V', '7871029327', '7871029327', NULL, 'HINDU', NULL, NULL, '10/29, KAKKAN NAGAR, II MAIN RAOD, ADAMBAKKAM, CHENNAI-88.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('18EE015', '311118105039', 'NAVEEN L', '810963296503', NULL, 'naveen.22ee@licet.ac.in', '2018-2022', 'EEE', 'GQ', 'MALE', '19-Feb-02', NULL, '', 'PANNEER G', 'MAYILARASI P', '8825828602', '9741484709', NULL, 'HINDU', NULL, NULL, 'NAGANAMPATTI VILLAGE, GENODIGANALLI (PO), KARIMANGALAM (TK), DHARMAPURI-635205.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('18EE016', '311118105043', 'SOWMIYA E', '390831720616', NULL, 'sowmiya.22ee@licet.ac.in', '2018-2022', 'EEE', 'GQ', 'FEMALE', '12-Jan-01', NULL, '', 'XAVIER RAJESH S', 'ALICE PREMA', '7339167149', '8012383154', NULL, 'CHRISTIAN', NULL, NULL, '649, MAHILCHI NAGAR, PERUMAL PURAM (PO), PALAYAMKOTTAI, TIRUNELVELI-627007.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19EE017', '311119105048', 'ROSHINI B', '278287200368', NULL, 'roshini.23ee@licet.ac.in', '2019-2023', 'EEE', 'GQ', 'FEMALE', '30-Aug-01', NULL, '', 'GNANAVEL K S', 'POONGOTHAI G', '7299972601', '9841633777', NULL, 'HINDU', NULL, NULL, '80/90, KUMARAPPA STREET, NUNGAMBAKKAM, CHENNAI-34.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19EE019', '311119105054', 'KARTHICK S', '613091088091', NULL, 'karthick.23ee@licet.ac.in', '2019-2023', 'EEE', 'GQ', 'MALE', '03-Jul-02', NULL, '', 'KUMARASAN S (LATE)', 'MANIMOZHI K', '9940461066', '9360147581', NULL, 'HINDU', NULL, NULL, 'PLOT NO. B1, VELAYUDHAM STREET, BHARAT NAGAR EXTN, MADIPAKKAM, CHENNAI-91.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19EE020', '311119105056', 'SAGAYA A', '235079184269', NULL, 'sagaya.23ee@licet.ac.in', '2019-2023', 'EEE', 'GQ', 'FEMALE', '18-Sep-01', NULL, '', 'TITUS ENOCK J', 'JASPER ANANDHI A', '9443152169', '9487600169', NULL, 'CHRISTIAN', NULL, NULL, '7, VASANTH APARTMENTS, 4 VENKATRAMAN STREET, PERAMBUR, CHENNAI-11.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),

('19IT021', '311119205057', 'VIJAYALAKSHMI S', '354972255253', NULL, 'vijayalakshmi.23it@licet.ac.in', '2019-2023', 'IT', 'GQ', 'FEMALE', '16-May-02', NULL, '', 'BABURAJ N', 'SHABANA C R', '9841164110', '8925263542', NULL, 'HINDU', NULL, NULL, 'NO. 22/1, VOC BLOCK, 4TH STREET, JAFFERKHANPET, CHENNAI-83.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19IT031', '311119205059', 'ARMAAN MALIK K', '496001338059', NULL, 'armaanmalik.23it@licet.ac.in', '2019-2023', 'IT', 'GQ', 'MALE', '04-Sep-01', NULL, '', 'RAMESH KUMAR', 'ANU RADHA', '6005741504', '9596703520', NULL, 'HINDU', NULL, NULL, 'R/O, BHALLA BLOCK TEL, BHALLA DISTT DODA JAMU AND KASHMER-182221.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('18IT041', '311118205002', 'ARJUN P', '675295624500', NULL, 'arjun.22it@licet.ac.in', '2018-2022', 'IT', 'MQ', 'MALE', '02-Nov-01', NULL, '', 'MURALIDHARAN V', 'RADHA MURALIDHARAN', '9444929489', '9445155700', NULL, 'HINDU', NULL, NULL, 'OM SAKTHI ILLAM NO. 101, VELLALAR STREET, KODAMBAKKAM, CHENNAI-24.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19IT042', '311119205003', 'NANDHA D', '208048661997', NULL, 'nandha.23it@licet.ac.in', '2019-2023', 'IT', 'MQ', 'MALE', '25-May-02', NULL, '', 'MARSHALL A', 'AROCKIAMARY A', '8056240924', '9843265557', NULL, 'CHRISTIAN', NULL, NULL, '3G, SAI SUKRTA APARTMENT, ANNA NAGAR, II MAIN ROAD, VELACHERY, CHENNAI-42.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('18IT043', '311118205004', 'SANJUNITHA R', '606448441575', 'sanjunitha.com', 'sanjunitha.22it@licet.ac.in', '2018-2022', 'IT', 'MQ', 'FEMALE', '27-Jul-01', 'Indian', '9864621354', 'PALANIAPPAN', 'ALAMELU', '8148121215', '9790721213', 'BC', 'HINDU', NULL, 'N', 'NO. 9, BHARATHI NAGAR, 3RD STREET, NORTH USMAN ROAD, T. NAGAR, CHENNAI-17.', 'NO. 9, BHARATHI NAGAR, 3RD STREET, NORTH USMAN ROAD, T. NAGAR, CHENNAI-17.', 'A1B+ve', 'Tamil', 'Tamil, English, Telugu', 'SDFG8756U', 'B.Com.', 'BBA', 'Accounts', 'Homemaker', 'NO. 9, BHARATHI NAGAR, 3RD STREET, NORTH USMAN ROAD, T. NAGAR, CHENNAI-17.', NULL, '1,98,000', NULL, 'kannan@gmail.com', 'alamelu@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2', 'VIDHYA,SREEKRISHNA.', 'B.E, Primary School', 'Embedded Engineer', 'Y', '1872435', '26/06/2019', 'R', 'D', NULL, NULL, 'N', 'N', 'Python, C, C++', 'Photoshop', 'C++', 'Python, C, C++', 'Leadership', 'Logical and Verbal', 'Speaking and listening', NULL, 'Team Management , Event Management', 'Team Work and Responsibility', 'Master a language', 'Entrepreneur', 'SAE', '2364', '6 months', 'DAV Matriculation Higher Secondary ', 'STATEBOARD', 'English', 'Sanskrit', 'CS-MATHS', '540', '90%', '180.00', '1', 'Vidhyodya Matriculation Higher Secondary Academy', 'STATEBOARD', 'English', 'Tamil', '480', '90%', '1'),
('19IT044', '311119205006', 'JOE FERNANDO T', '799208305583', NULL, 'joefernando.23it@licet.ac.in', '2019-2023', 'IT', 'MQ', 'MALE', '12-Nov-01', NULL, '', 'BELLARMINE JOSE A', 'AMUTHA DARLIN T', '9345699988', '9360099988', NULL, 'CHRISTIAN', NULL, NULL, '2-66, VELLANKETTI VILAI, MULLANGANAVILAI & POST, KANNIYAKUMARI-629 157.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('20IT045', '311120205007', 'JOHN MATHEW H', '884985532979', NULL, 'johnmathew.24it@licet.ac.in', '2020-2024', 'IT', 'MQ', 'MALE', '25-Aug-01', NULL, '', 'XAVIER SELVARAJ M', 'RANI R', '9629399463', '9551414162', NULL, 'CHRISTIAN', NULL, NULL, 'NO. 303, DEEPA BLOCK, CHITRA AVENUE, CHOOLAIMEDU HIGH ROAD, CHENNAI-94.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('20IT046', '311120205008', 'ALISHA G', '309319403319', NULL, 'alisha.24it@licet.ac.in', '2020-2024', 'IT', 'MQ', 'FEMALE', '29-Nov-01', NULL, '', 'SEBASTIN ANANDHAN P', 'ANJERNE Y', '9443975127', '9442679739', NULL, 'CHRISTIAN', NULL, NULL, 'NO. 4/3, AMBALPURAM, SEKKALAI, II ND STREET, KARAIKUDI-630002.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19IT047', '311119205009', 'SOFIA MARY E', '258727248772', NULL, 'sofiyamary.23it@licet.ac.in', '2019-2023', 'IT', 'MQ', 'FEMALE', '26-Apr-02', NULL, '', 'AUSTAN RAJ A', 'RITA A', '9840829585', '9840664778', NULL, 'CHRISTIAN', NULL, NULL, '18, FOXEN ST, OPP. BHARANI NURSING HOME, PERAMBUR, CHENNAI-11.', NULL, '', '', '', '', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('19IT048', '311119205010', 'HAZEL GRACE G ', '895057080088', 'marlene@gmail.com', 'anniemarlenenikita.23it@licet.ac.in', '2019-2023', 'IT', 'MQ', 'FEMALE', '07-Aug-01', 'Indian', '9623488663', 'DEVASAHAYAM R', 'AROKIA RANI D', '9600016903', '9940369809', 'BC', 'CHRISTIAN', 'St.Antony\'s Church, Maduravoyal.', 'N', 'NO. 5, MULAYAM SINGH YADAV STREET, KARTHIKEYAN NAGAR, MADURAVOYAL, CHENNAI-95.', 'NO. 5, MULAYAM SINGH YADAV STREET, KARTHIKEYAN NAGAR, MADURAVOYAL, CHENNAI-95', 'AB+ve', 'Tamil', 'Tamil, English', 'AESFG5634R', 'B.Com.', 'B.Sc.,B.Ed.', 'Senior Processing Manager', 'Homemaker', 'NO. 5, MULAYAM SINGH YADAV STREET, KARTHIKEYAN NAGAR, MADURAVOYAL, CHENNAI-95', NULL, '8,00,000', NULL, 'rdeva@gmail.com', 'rans@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1', 'DAPHNE MARLENE SWETHA D', 'B.E.', 'Programmer Analyst', 'Y', '1087345', '26/06/2019', 'R', 'D', NULL, NULL, 'N', 'N', 'Python, Java , C.', 'Photoshop.', 'C.', 'C,C++,Python', 'Management, Leadership.', 'Verbal ability, Logic analysis.', 'Adapting style, Active listening.', NULL, 'Team management, Organization.', 'Responsibility, Flexibility.', 'Developing a morning routine', 'Entrepreneur', 'Bhumi', '0722', '1 Year', 'SBOA Matriculation and Higher Secondary School.', 'STATEBOARD', 'English', 'Tamil', 'BIO-MATHS', '525', '87.5%', '170.00', '1', 'SBOA Matriculation and Higher Secondary School.', 'STATEBOARD', 'English', 'Tamil', '493', '98.6%', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academics`
--
ALTER TABLE `academics`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `academic_summary`
--
ALTER TABLE `academic_summary`
  ADD PRIMARY KEY (`roll_no`);

--
-- Indexes for table `ec_club_activity`
--
ALTER TABLE `ec_club_activity`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `ec_culturals`
--
ALTER TABLE `ec_culturals`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `ec_outreach`
--
ALTER TABLE `ec_outreach`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `ec_sports`
--
ALTER TABLE `ec_sports`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `international_exposure`
--
ALTER TABLE `international_exposure`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `intl_se_program`
--
ALTER TABLE `intl_se_program`
  ADD PRIMARY KEY (`roll_no`);

--
-- Indexes for table `login_details`
--
ALTER TABLE `login_details`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `pd_competitions`
--
ALTER TABLE `pd_competitions`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `pd_courses`
--
ALTER TABLE `pd_courses`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `pd_final_project`
--
ALTER TABLE `pd_final_project`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `pd_guest_lecture`
--
ALTER TABLE `pd_guest_lecture`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `pd_industrial_visit`
--
ALTER TABLE `pd_industrial_visit`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `pd_inplant_training`
--
ALTER TABLE `pd_inplant_training`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `pd_internship`
--
ALTER TABLE `pd_internship`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `pd_mini_project`
--
ALTER TABLE `pd_mini_project`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `pd_motivational_talk`
--
ALTER TABLE `pd_motivational_talk`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `pd_placement`
--
ALTER TABLE `pd_placement`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `pd_publications`
--
ALTER TABLE `pd_publications`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `pd_webinar`
--
ALTER TABLE `pd_webinar`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `pd_workshops`
--
ALTER TABLE `pd_workshops`
  ADD PRIMARY KEY (`s_no`);

--
-- Indexes for table `student_details`
--
ALTER TABLE `student_details`
  ADD PRIMARY KEY (`roll_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `academics`
--
ALTER TABLE `academics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `ec_club_activity`
--
ALTER TABLE `ec_club_activity`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `ec_culturals`
--
ALTER TABLE `ec_culturals`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `ec_outreach`
--
ALTER TABLE `ec_outreach`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `ec_sports`
--
ALTER TABLE `ec_sports`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `international_exposure`
--
ALTER TABLE `international_exposure`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
--
-- AUTO_INCREMENT for table `pd_competitions`
--
ALTER TABLE `pd_competitions`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `pd_courses`
--
ALTER TABLE `pd_courses`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `pd_final_project`
--
ALTER TABLE `pd_final_project`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `pd_guest_lecture`
--
ALTER TABLE `pd_guest_lecture`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `pd_industrial_visit`
--
ALTER TABLE `pd_industrial_visit`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `pd_inplant_training`
--
ALTER TABLE `pd_inplant_training`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `pd_internship`
--
ALTER TABLE `pd_internship`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `pd_mini_project`
--
ALTER TABLE `pd_mini_project`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `pd_motivational_talk`
--
ALTER TABLE `pd_motivational_talk`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `pd_placement`
--
ALTER TABLE `pd_placement`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `pd_publications`
--
ALTER TABLE `pd_publications`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `pd_webinar`
--
ALTER TABLE `pd_webinar`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `pd_workshops`
--
ALTER TABLE `pd_workshops`
  MODIFY `s_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
