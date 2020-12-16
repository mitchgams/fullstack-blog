-- MySQL dump 10.13  Distrib 5.7.32, for Win64 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version       5.7.32-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(75) DEFAULT NULL,
  `_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Mitch','mitchgams@gmail.com','2020-12-13 21:06:18'),(2,'Bob','Bob@gmail.com','2020-12-14 04:06:36'),(3,'Jake','Jake@gmail.com','2020-12-14 04:06:46');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `authorid` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `body` text,
  `publishdate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (1,1,'title 1','this is content','2020-12-13 19:56:48','2020-12-13 19:56:48'),(2,1,'title 2','this is conten 2','2020-12-13 19:57:30','2020-12-13 19:57:30'),(4,1,'frf24r','42r42r','2020-12-15 00:12:40','2020-12-15 00:12:40'),(5,1,'Chicken','coop','2020-12-15 00:14:27','2020-12-15 00:14:27'),(7,1,'Chicken Soup','this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. this is a blog post. ','2020-12-16 18:16:20','2020-12-16 18:16:20'),(8,3,'Billy','okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool ','2020-12-16 18:17:36','2020-12-16 18:17:36'),(9,3,'Billy','okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool okay cool ','2020-12-16 18:17:49','2020-12-16 18:17:49'),(10,1,'de3','d','2020-12-16 18:17:59','2020-12-16 18:17:59'),(13,1,'d','d','2020-12-16 18:20:27','2020-12-16 18:20:27');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogtags`
--

DROP TABLE IF EXISTS `blogtags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blogtags` (
  `blogid` int(11) NOT NULL,
  `tagid` int(11) NOT NULL,
  PRIMARY KEY (`blogid`),
  CONSTRAINT `fk_blogid_tag` FOREIGN KEY (`blogid`) REFERENCES `blogs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogtags`
--

LOCK TABLES `blogtags` WRITE;
/*!40000 ALTER TABLE `blogtags` DISABLE KEYS */;
INSERT INTO `blogtags` VALUES (1,1),(2,1),(4,2),(5,2),(7,2),(8,1),(9,1),(10,1),(13,1);
/*!40000 ALTER TABLE `blogtags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'Badass','2020-12-13 21:08:30'),(2,'Cray!','2020-12-13 21:08:30'),(3,'Neat','2020-12-13 21:08:30');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-16 12:30:41