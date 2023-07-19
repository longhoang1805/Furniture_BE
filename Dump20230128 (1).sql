-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: furniture_store_1
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=184 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Interiorr','2022-12-06 12:45:13','2022-12-23 15:35:22',NULL),(2,'Sofa','2022-12-06 12:45:13','2023-01-02 16:03:53',1),(3,'Decoration','2022-12-06 12:45:13','2022-12-06 12:45:13',NULL),(4,'Cloth utensils','2022-12-06 12:45:13','2022-12-06 12:45:13',NULL),(5,'Kitchen tool','2022-12-06 12:45:13','2022-12-06 12:45:13',NULL),(7,'Table','2022-12-06 12:45:13','2022-12-06 12:45:13',1),(8,'Chair','2022-12-06 12:45:13','2022-12-06 12:45:13',1),(9,'Mirror','2022-12-06 12:45:13','2023-01-02 16:04:20',NULL),(10,'Bed','2022-12-06 12:45:13','2022-12-06 12:45:13',1),(12,'Mattress','2022-12-06 12:45:13','2023-01-02 16:04:46',1),(13,'Lamp','2022-12-06 12:45:13','2022-12-06 12:45:13',3),(16,'Cooking tools','2022-12-06 12:45:13','2023-01-02 16:21:55',5),(147,'Glasses','2022-12-23 15:40:36','2023-01-02 16:05:43',NULL),(149,'Coffee tables','2022-12-23 16:05:26','2023-01-02 16:10:31',165),(155,'Dinner Plates','2023-01-02 16:01:29','2023-01-02 16:01:29',5),(156,'Bowls','2023-01-02 16:01:45','2023-01-02 16:01:45',5),(158,'Placemats','2023-01-02 16:02:44','2023-01-02 16:02:44',5),(159,'Cookware','2023-01-02 16:03:16','2023-01-02 16:03:16',5),(160,'Window Treatments','2023-01-02 16:06:24','2023-01-02 16:06:31',NULL),(161,'Rugs','2023-01-02 16:08:33','2023-01-02 16:08:33',NULL),(162,'Wool Rugs','2023-01-02 16:09:04','2023-01-02 16:09:04',161),(163,'Natural Rugs','2023-01-02 16:09:18','2023-01-02 16:09:18',161),(164,'Washable Rugs','2023-01-02 16:09:28','2023-01-02 16:09:28',161),(165,'Outdoor and Garden','2023-01-02 16:10:12','2023-01-02 16:10:12',NULL),(166,'Wall Mirrors','2023-01-02 16:10:51','2023-01-02 16:10:51',9),(167,'Floor Mirrors','2023-01-02 16:11:18','2023-01-02 16:11:18',9),(168,'Solid Curtains','2023-01-02 16:13:12','2023-01-02 16:13:12',160),(169,'Blackout Curtains','2023-01-02 16:13:22','2023-01-02 16:13:22',160),(170,'Linen Curtains','2023-01-02 16:13:38','2023-01-02 16:13:38',160),(171,'Outdoor Storage','2023-01-02 16:15:18','2023-01-02 16:15:18',165),(172,'Chairs & Loungers','2023-01-02 16:15:40','2023-01-02 16:15:40',165),(173,'Pillows','2023-01-02 16:16:16','2023-01-02 16:16:16',4),(174,'Pillow Sets','2023-01-02 16:16:32','2023-01-02 16:16:32',4),(175,'Pillow Inserts','2023-01-02 16:16:42','2023-01-02 16:16:42',4),(176,'Decorative Mirrors','2023-01-02 16:17:10','2023-01-02 16:17:10',9),(177,'Towels','2023-01-02 16:18:13','2023-01-02 16:18:13',4),(178,'Picture Frames','2023-01-02 16:19:22','2023-01-02 16:19:22',3),(179,'Vases','2023-01-02 16:19:37','2023-01-02 16:19:37',3),(180,'Books & Bookends','2023-01-02 16:20:01','2023-01-02 16:20:01',3);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentproducts`
--

DROP TABLE IF EXISTS `commentproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commentproducts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `productId` (`productId`),
  CONSTRAINT `commentproducts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `commentproducts_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentproducts`
--

LOCK TABLES `commentproducts` WRITE;
/*!40000 ALTER TABLE `commentproducts` DISABLE KEYS */;
INSERT INTO `commentproducts` VALUES (1,'Nice!','2022-12-06 12:45:13','2022-12-06 12:45:13',2,1),(3,'Beautiful!!!','2022-12-25 17:41:49','2022-12-25 17:41:49',2,1),(4,'That\'s great color','2022-12-25 17:49:20','2022-12-25 17:49:20',2,1),(5,'I love it!','2022-12-25 17:50:42','2022-12-25 17:50:42',2,4),(6,'Can I get discount?','2022-12-25 17:51:33','2022-12-25 17:51:33',3,4),(7,'Can I get more images?','2022-12-25 17:52:50','2022-12-25 17:52:50',3,4),(8,'I want to buy a different color one','2022-05-25 17:59:23','2022-12-25 17:59:23',3,1),(9,'Can I get a bigger one?','2023-01-02 15:24:33','2023-01-02 15:24:33',3,40);
/*!40000 ALTER TABLE `commentproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imageproducts`
--

DROP TABLE IF EXISTS `imageproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imageproducts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  CONSTRAINT `imageproducts_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imageproducts`
--

LOCK TABLES `imageproducts` WRITE;
/*!40000 ALTER TABLE `imageproducts` DISABLE KEYS */;
INSERT INTO `imageproducts` VALUES (1,'Images\\Upload\\1671811073941.jpg','2022-12-11 06:58:13','2022-12-23 15:57:53',1),(3,'Images\\Upload\\1670921280265.jpg','2022-12-11 07:31:30','2022-12-13 08:48:00',13),(15,'Images\\Upload\\1670921141789.jpg','2022-12-11 15:32:07','2022-12-13 08:45:41',4),(16,'Images\\Upload\\1670921349014.jpg','2022-12-12 07:13:03','2022-12-13 08:49:09',34),(17,'Images\\Upload\\1670921409897.jpg','2022-12-12 14:08:51','2022-12-13 08:50:09',35),(18,'Images\\Upload\\1670921468197.jpg','2022-12-12 14:20:17','2022-12-13 08:51:08',36),(19,'Images\\Upload\\1670921519246.jpg','2022-12-12 14:21:18','2022-12-13 08:51:59',37),(20,'Images\\Upload\\1670921581657.jpg','2022-12-12 14:21:49','2022-12-13 08:53:01',38),(21,'Images\\Upload\\1670921219723.jpg','2022-12-13 08:46:59','2022-12-13 08:46:59',5),(22,'Images\\Upload\\1671811474706.jpg','2022-12-23 16:04:34','2022-12-23 16:04:34',39),(23,'Images\\Upload\\1672671720217.jpg','2023-01-02 15:00:23','2023-01-02 15:02:00',40),(24,'Images\\Upload\\1672723418875.jpg','2023-01-03 05:23:38','2023-01-03 05:23:38',41),(25,'Images\\Upload\\1672723735633.jpg','2023-01-03 05:28:55','2023-01-03 05:28:55',42),(26,'Images\\Upload\\1672723935437.jpg','2023-01-03 05:32:15','2023-01-03 05:32:15',NULL),(27,'Images\\Upload\\1672724329999.jpg','2023-01-03 05:38:50','2023-01-03 05:38:50',44),(28,'Images\\Upload\\1672732435751.jpg','2023-01-03 07:53:55','2023-01-03 07:53:55',NULL),(29,'Images\\Upload\\1672733798050.jpg','2023-01-03 08:16:38','2023-01-03 08:16:38',46),(30,'Images\\Upload\\1672733903383.jpg','2023-01-03 08:18:23','2023-01-03 08:18:23',47),(31,'Images\\Upload\\1672734018982.jpg','2023-01-03 08:20:19','2023-01-03 08:20:19',48),(32,'Images\\Upload\\1672734144133.jpg','2023-01-03 08:22:24','2023-01-03 08:22:24',49),(33,'Images\\Upload\\1672734366585.jpg','2023-01-03 08:26:06','2023-01-03 08:26:06',50),(34,'Images\\Upload\\1672734468174.jpg','2023-01-03 08:27:48','2023-01-03 08:27:48',51),(35,'Images\\Upload\\1672734599051.jpg','2023-01-03 08:29:59','2023-01-03 08:29:59',52),(36,'Images\\Upload\\1672734732690.jpg','2023-01-03 08:32:12','2023-01-03 08:32:12',53),(37,'Images\\Upload\\1672734846958.jpg','2023-01-03 08:34:06','2023-01-03 08:34:06',54),(38,'Images\\Upload\\1672735072102.jpg','2023-01-03 08:37:52','2023-01-03 08:37:52',55),(39,'Images\\Upload\\1672735260591.jpg','2023-01-03 08:41:00','2023-01-03 08:41:00',56),(40,'Images\\Upload\\1672735347193.jpg','2023-01-03 08:42:27','2023-01-03 08:42:27',57),(41,'Images\\Upload\\1672735468500.jpg','2023-01-03 08:44:28','2023-01-03 08:44:28',58),(42,'Images\\Upload\\1672735560487.jpg','2023-01-03 08:46:00','2023-01-03 08:46:00',59),(43,'Images\\Upload\\1672735669166.jpg','2023-01-03 08:47:49','2023-01-03 08:47:49',NULL),(44,'Images\\Upload\\1672735768341.jpg','2023-01-03 08:49:28','2023-01-03 08:49:28',61),(45,'Images\\Upload\\1672735887453.jpg','2023-01-03 08:51:27','2023-01-03 08:51:27',62),(46,'Images\\Upload\\1672736007489.jpg','2023-01-03 08:53:27','2023-01-03 08:53:27',63),(47,'Images\\Upload\\1672736150859.jpg','2023-01-03 08:55:50','2023-01-03 08:55:50',64),(48,'Images\\Upload\\1672736265904.jpg','2023-01-03 08:57:45','2023-01-03 08:57:45',65),(49,'Images\\Upload\\1672736357606.jpg','2023-01-03 08:59:17','2023-01-03 08:59:17',66),(50,'Images\\Upload\\1672736471986.jpg','2023-01-03 09:01:12','2023-01-03 09:01:12',67),(51,'Images\\Upload\\1672736571573.jpg','2023-01-03 09:02:51','2023-01-03 09:02:51',68),(52,'Images\\Upload\\1672736647651.jpg','2023-01-03 09:04:07','2023-01-03 09:04:07',69),(53,'Images\\Upload\\1672736834564.jpg','2023-01-03 09:07:14','2023-01-03 09:07:14',70),(54,'Images\\Upload\\1672736928805.jpg','2023-01-03 09:08:48','2023-01-03 09:08:48',71),(55,'Images\\Upload\\1672737016931.jpg','2023-01-03 09:10:16','2023-01-03 09:10:16',72),(56,'Images\\Upload\\1672737122803.jpg','2023-01-03 09:12:02','2023-01-03 09:12:02',73),(57,'Images\\Upload\\1672737218902.jpg','2023-01-03 09:13:38','2023-01-03 09:13:38',74),(58,'Images\\Upload\\1672737292453.jpg','2023-01-03 09:14:52','2023-01-03 09:14:52',75),(59,'Images\\Upload\\1672745689197.jpg','2023-01-03 11:34:49','2023-01-03 11:34:49',NULL);
/*!40000 ALTER TABLE `imageproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturers`
--

DROP TABLE IF EXISTS `manufacturers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manufacturers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `manufacturerName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturers`
--

LOCK TABLES `manufacturers` WRITE;
/*!40000 ALTER TABLE `manufacturers` DISABLE KEYS */;
INSERT INTO `manufacturers` VALUES (1,'Bernhardt','2022-12-06 12:45:13','2022-12-06 12:45:13'),(2,'Bakerr','2022-12-06 12:45:13','2022-12-23 14:11:09'),(3,'	Stickley','2022-12-06 12:45:13','2022-12-06 12:45:13'),(4,'Drexel','2022-12-06 12:45:13','2022-12-06 12:45:13'),(5,'IKEA','2022-12-06 12:45:13','2022-12-06 12:45:13'),(6,'Ashley HomeStore','2022-12-06 12:45:13','2022-12-06 12:45:13'),(7,'Restoration Hardware','2022-12-06 12:45:13','2022-12-06 12:45:13'),(9,'Kartell','2022-12-06 12:45:13','2022-12-06 12:45:13'),(11,'Floyd Home','2022-12-23 14:20:01','2022-12-23 14:20:01'),(13,'Harmony','2023-01-03 05:21:01','2023-01-03 05:21:01');
/*!40000 ALTER TABLE `manufacturers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderdetails`
--

DROP TABLE IF EXISTS `orderdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderdetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `productId` int DEFAULT NULL,
  `orderId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `orderId` (`orderId`),
  CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderdetails`
--

LOCK TABLES `orderdetails` WRITE;
/*!40000 ALTER TABLE `orderdetails` DISABLE KEYS */;
INSERT INTO `orderdetails` VALUES (4,2,'2022-12-20 16:48:59','2022-12-20 16:48:59',1,4),(5,2,'2022-12-20 16:48:59','2022-12-20 16:48:59',4,4),(6,4,'2022-12-20 16:48:59','2022-12-20 16:48:59',5,4),(7,3,'2022-12-20 17:08:14','2022-12-20 17:08:14',1,5),(8,7,'2022-12-20 17:08:14','2022-12-20 17:08:14',4,5),(9,4,'2022-12-20 17:08:14','2022-12-20 17:08:14',5,5),(10,1,'2022-12-21 12:55:41','2022-12-21 12:55:41',1,6),(11,1,'2022-12-21 12:55:41','2022-12-21 12:55:41',4,6),(12,14,'2022-12-25 18:21:49','2022-12-25 18:21:49',1,7),(13,6,'2022-12-25 18:21:49','2022-12-25 18:21:49',4,7),(14,3,'2022-12-25 18:21:49','2022-12-25 18:21:49',5,7),(15,2,'2023-01-01 17:33:25','2023-01-01 17:33:25',1,8),(16,1,'2023-01-01 17:33:25','2023-01-01 17:33:25',35,8),(17,1,'2023-01-01 17:33:25','2023-01-01 17:33:25',4,8),(18,1,'2023-01-01 17:33:25','2023-01-01 17:33:25',13,8),(19,1,'2023-01-01 17:33:25','2023-01-01 17:33:25',34,8),(20,1,'2023-01-01 17:33:25','2023-01-01 17:33:25',5,8),(21,1,'2023-01-01 17:33:25','2023-01-01 17:33:25',36,8),(22,1,'2023-01-01 17:33:25','2023-01-01 17:33:25',37,8),(23,1,'2023-01-01 17:33:25','2023-01-01 17:33:25',38,8),(24,1,'2023-01-01 17:33:25','2023-01-01 17:33:25',39,8),(25,2,'2023-01-01 19:01:55','2023-01-01 19:01:55',4,9),(26,1,'2023-01-01 19:10:36','2023-01-01 19:10:36',4,10),(27,2,'2023-01-01 19:10:36','2023-01-01 19:10:36',5,10),(28,1,'2023-01-01 19:12:00','2023-01-01 19:12:00',38,11),(29,2,'2023-01-01 19:12:00','2023-01-01 19:12:00',39,11),(30,2,'2023-01-02 15:23:53','2023-01-02 15:23:53',1,12),(31,1,'2023-01-02 15:23:53','2023-01-02 15:23:53',40,12),(32,1,'2023-01-02 15:23:53','2023-01-02 15:23:53',39,12),(33,1,'2023-01-02 15:23:53','2023-01-02 15:23:53',38,12),(34,5,'2023-01-03 11:40:51','2023-01-03 11:40:51',4,13),(35,2,'2023-01-04 03:09:01','2023-01-04 03:09:01',1,14),(36,2,'2023-01-04 03:09:01','2023-01-04 03:09:01',5,14),(39,2,'2023-01-08 01:55:04','2023-01-08 01:55:04',1,17),(40,1,'2023-01-08 01:55:04','2023-01-08 01:55:04',4,17),(41,1,'2023-01-08 01:55:04','2023-01-08 01:55:04',34,17),(42,1,'2023-01-08 01:55:04','2023-01-08 01:55:04',5,17),(43,1,'2023-01-08 01:55:04','2023-01-08 01:55:04',13,17);
/*!40000 ALTER TABLE `orderdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cancelOrder` tinyint(1) DEFAULT NULL,
  `shippingAddress` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (4,1,'26 To Ngoc Van, Thuan Loc, Hue city','Shipping','2022-12-20 16:48:59','2023-01-01 17:29:32',2),(5,0,'290 Mai Dang Chon, Ngu Hanh Son district, Da Nang','Pending','2022-01-20 17:08:14','2022-12-21 16:47:13',2),(6,0,'25 Phan Chau Trinh, Hai Chau district, Da Nang','Delivered','2022-12-21 12:55:41','2022-12-21 16:08:12',42),(7,0,'VKU Dormitory, Hoa Quy, Ngu Hanh Son, Da Nang','Pending','2022-12-25 18:21:49','2022-12-25 18:21:49',3),(8,0,'345 Phan Chau Trinh, Hai Chau district, Da Nang','Shipping','2023-01-01 17:33:25','2023-01-01 19:19:07',2),(9,0,'25 Le Van Hien, Ngu Hanh Son, Da Nang','Pending','2023-01-01 19:01:55','2023-01-01 19:01:55',2),(10,0,'75 Ngo Quyen, Hai Chau, Da Nang','Pending','2023-01-01 19:10:36','2023-01-01 19:10:36',2),(11,0,'234 Bach Dang, Hai Chau, Da Nang','Delivered','2023-01-01 19:12:00','2023-01-01 19:14:35',2),(12,0,'123 Dinh Tien Hoang, Thuan Loc, Hue','Delivered','2023-01-02 15:23:52','2023-01-02 15:27:37',3),(13,0,'92 Ngo Quyen, Hai Chau, Da Nang','Delivered','2023-01-03 11:40:51','2023-01-03 11:43:18',2),(14,0,'55 Chau Thi Vinh Te, Ngu Hanh Son, Da Nang','Shipping','2023-01-04 03:09:01','2023-01-04 03:10:48',2),(17,1,'92 Quang Trung, Hai Chau, Da Nang','Shipping','2023-01-08 01:55:04','2023-01-08 01:59:22',2);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentmethods`
--

DROP TABLE IF EXISTS `paymentmethods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentmethods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `method` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentmethods`
--

LOCK TABLES `paymentmethods` WRITE;
/*!40000 ALTER TABLE `paymentmethods` DISABLE KEYS */;
INSERT INTO `paymentmethods` VALUES (1,'Prepaid','2022-12-06 12:45:13','2022-12-06 12:45:13'),(2,'Postpaid','2022-12-06 12:45:13','2022-12-06 12:45:13');
/*!40000 ALTER TABLE `paymentmethods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `totalPrice` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `orderId` int DEFAULT NULL,
  `paymentMethodId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orderId` (`orderId`),
  KEY `paymentMethodId` (`paymentMethodId`),
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (2,7290000,'2022-12-20 16:48:59','2022-12-20 16:48:59',4,1),(3,13635000,'2022-12-20 17:08:14','2022-12-20 17:08:14',5,1),(4,1850000,'2022-12-21 12:55:41','2022-12-21 12:55:41',6,1),(5,16920000,'2022-12-25 18:21:49','2022-12-25 18:21:49',7,1),(6,12325500,'2023-01-01 17:33:25','2023-01-01 17:33:25',8,1),(7,2600000,'2023-01-01 19:01:55','2023-01-01 19:01:55',9,2),(8,3500000,'2023-01-01 19:10:36','2023-01-01 19:10:36',10,1),(9,3145000,'2023-01-01 19:12:00','2023-01-01 19:12:00',11,2),(10,23260500,'2023-01-02 15:23:53','2023-01-02 15:23:53',12,1),(11,5850000,'2023-01-03 11:40:51','2023-01-03 11:40:51',13,1),(12,11880000,'2023-01-04 03:09:01','2023-01-04 03:09:01',14,2),(13,492,'2023-01-04 12:05:50','2023-01-04 12:05:50',NULL,2),(14,615000,'2023-01-04 12:12:40','2023-01-04 12:12:40',NULL,1),(15,13995000,'2023-01-08 01:55:04','2023-01-08 01:55:04',17,1);
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `salePrice` int DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `manufacturerId` int DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `manufacturerId` (`manufacturerId`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`manufacturerId`) REFERENCES `manufacturers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Delray leather chair',6000000,5500000,'Brown','Delray leather chair','2022-12-06 12:45:13','2023-01-03 05:24:08',4,8),(4,'Capiz tiered chandelier',1500000,1300000,'White','Capiz tiered chandelier','2022-12-10 12:28:18','2022-12-13 08:45:41',2,13),(5,'Curvilinear mid century chandelier',1340000,1100000,'Black','Curvilinear mid century chandelier','2022-12-11 06:50:25','2022-12-13 08:46:59',4,3),(13,'Metalwork nightstand 16c',750000,500000,'Black','Metalwork nightstand 16c','2022-12-11 07:31:30','2022-12-13 08:48:00',6,1),(34,'Mid century kids nightstand ',1700000,1650000,'Brown','Mid century kids nightstand ','2022-12-12 07:13:03','2022-12-13 08:49:09',2,7),(35,'Quinn closed 3 drawer nightstand',2100000,1900000,'White','Quinn closed 3 drawer nightstand','2022-12-12 14:08:51','2022-12-13 08:50:09',9,1),(36,'Sculptural glass 7 light multi chandelier',3000000,2900000,'White','Sculptural glass 7 light multi chandelier','2022-12-12 14:20:17','2022-12-13 08:51:08',7,147),(37,'Spencer wood framed leather recliner',1850000,1500000,'Black','Spencer wood framed leather recliner','2022-12-12 14:21:17','2022-12-13 08:51:59',3,8),(38,'Wood plant stands',750000,345000,'White','Wood plant stands','2022-12-12 14:21:49','2022-12-13 08:53:01',6,1),(39,'Metal frame pivot wall mirror',1450000,1400000,'White','It tilts up and down so you can catch yourself at every angle.','2022-12-23 16:04:34','2022-12-23 16:04:34',9,9),(40,'Otto media console',25000000,23000000,'Brown','Kiln-dried solid mango wood frame and legs covered in an Acorn finish.','2023-01-02 15:00:23','2023-01-02 15:02:00',4,7),(41,'Harmony sofa',37000000,36000000,'White','Hand-built frames with hand-finished upholstery. Engineered hardwood frame with slot & tenon joinery.','2023-01-03 05:23:38','2023-01-03 05:23:38',13,2),(42,'Leather 2 piece chaise sectional',84566000,82000000,'Brown','Seat cushions: Fiber-wrapped foam. Seat firmness: Soft. On a scale from 1 to 5 (5 being firmest), we rate it a 1. Back cushions: Feather, down and fiber filled.','2023-01-03 05:28:55','2023-01-03 05:28:55',5,2),(44,'Paulo bent ply leather chair',30500000,25000000,'Black','Taking inspiration from Brazilian mid-century designs, our Paulo Bent Ply Leather Chair combines comfort with bold contemporary forms. Its angular back and arms are complemented by smooth curves, then softened with top-grain leather arm pads.','2023-01-03 05:38:50','2023-01-03 05:38:50',1,8),(46,'Emmett side storage bed',35236000,32645000,'White','Overall: 44\"w x 82\"d x 46\"h.','2023-01-03 08:16:38','2023-01-03 08:16:38',13,10),(47,'Lana Upholstered Bed',25839000,23746000,'White','Overall: 43\"w x 79.2\"d x 45.3\"h.','2023-01-03 08:18:23','2023-01-03 08:18:23',6,10),(48,'Leesa Original Hybrid Mattress',20145000,20000000,'Gray','Overall: 38\"w x 74.5\"l x 11\"h','2023-01-03 08:20:18','2023-01-03 08:20:18',11,12),(49,'The DUX Mattress',35645000,32635000,'White','Overall product dimensions: 38\"w x 75\"d x 11\"h.','2023-01-03 08:22:24','2023-01-03 08:22:24',6,12),(50,'Faux Ranunculus Vase',5300000,5100000,'White','This beautiful arrangement features a mix of faux green ranunculus in an elegant glass vase. On your mantel, coffee table or dresser, this piece is sure to brighten up your space..','2023-01-03 08:26:06','2023-01-03 08:26:06',13,179),(51,'Assorted Modern Lacquer Frames',352000,255000,'White','Let your favorite memories or artwork hang out in style with these versatile, go-anywhere frames. Covered in a sleek lacquered finish, they come in a variety of sizes to make collecting and curating art more fun.','2023-01-03 08:27:48','2023-01-03 08:27:48',1,178),(52,'Modular - Mid-Century Peninsula Office Collection',15000000,14300000,'Brown','Our Mid-Century Office Collection brings retro-inspired style to your work space, with tapered legs, beveled edges and a warm finish. Made of durable, sustainably sourced wood, you can mix and match pieces to build your dream set-up.','2023-01-03 08:29:59','2023-01-03 08:29:59',3,180),(53,'Cut Velvet Archways Pillow Cover',930000,750000,'Blue','51% polyester, 49% viscose.','2023-01-03 08:32:12','2023-01-03 08:32:12',6,173),(54,'Color Crush Pillow Cover Set - White',800000,675000,'White','A monochromatic look is the pinnacle of easy design. Instantly upgrade your bed or seating area with the crisp, bright tones of this white pillow cover set. Soft, cozy fabrics and modern pattern add plenty of sophistication without the effort.','2023-01-03 08:34:06','2023-01-03 08:34:06',6,174),(55,'TENCEL Blended Down Pillow Insert',850000,750000,'White','A balance of softness and support, our hypoallergenic Blended Down Pillow Insert offers the best of both worlds: 650-fill-power down for natural plushness','2023-01-03 08:37:52','2023-01-03 08:37:52',9,175),(56,'Everyday Textured Organic Towels',117000,100000,'Gray','100% organic cotton.','2023-01-03 08:41:00','2023-01-03 08:41:00',4,177),(57,'Kaloh Stoneware Utensil Holder',728000,650000,'White','Our Kaloh Collection pairs a slightly textured, matte finish on its outside with a contrasting translucent finish on the inside for a rustic look.','2023-01-03 08:42:27','2023-01-03 08:42:27',4,16),(58,'Kanto Stoneware Dinnerware Collection',7000000,6700000,'White','Set of 24 includes 4 of each: Round Dinner Plate, Round Salad Plates, Meal Bowl, Pasta Bowl, Small Bowl and Mug.','2023-01-03 08:44:28','2023-01-03 08:44:28',2,155),(59,'Kaloh Stoneware Ramen Bowl Sets',2800000,2750000,'White','Made of durable stoneware for everyday usage.','2023-01-03 08:46:00','2023-01-03 08:46:00',2,156),(61,'Chilewich Easy-Care Mini Basketweave Placemats',1100000,950000,'Red','Sold individually or as a set of 4.','2023-01-03 08:49:28','2023-01-03 08:49:28',11,158),(62,'Greenpan Padova Ceramic Nonstick Set',8227000,8125000,'White','10-piece set includes: 2 Qt. Saucepan, 3 Qt. Saucepan, 5 Qt. Casserole Dish, 3.25 Qt Skillet, 8\" Fry Pan, 11\" Fry Pan and 4 coordinating lids.','2023-01-03 08:51:27','2023-01-03 08:51:27',6,159),(63,'Thick Frame Metal Round Wall Mirror',3100000,2950000,'Black','Quick and easy to hang with included hardware.','2023-01-03 08:53:27','2023-01-03 08:53:27',7,166),(64,'Metal Frame Oversized Floor Mirror ',16445000,16200000,'Black','39\"w x 1.3\"d x 78\"h (180 lbs).','2023-01-03 08:55:50','2023-01-03 08:55:50',11,167),(65,'Mid-Century Asymmetrical Wood Wall Mirror',10700000,9500000,'White','39\"w x 1.6\"d x 45\"h.','2023-01-03 08:57:45','2023-01-03 08:57:45',6,176),(66,'Recycled Mexican Confetti Drinking Glasses',1080000,1050000,'White','Recycled glass. Set of 4.','2023-01-03 08:59:17','2023-01-03 08:59:17',1,147),(67,'European Flax Linen Curtain - White',2600000,2350000,'White','Various lengths, all sizes 48\"w.','2023-01-03 09:01:11','2023-01-03 09:01:11',6,168),(68,'Worn Velvet Curtain',2354000,1950000,'Blue','Made from a brushed fabric with a soft plush pile and a subtle sheen, our Worn Velvet Curtain elegantly accents your home\'s windows','2023-01-03 09:02:51','2023-01-03 09:02:51',3,169),(69,'Textured Luxe Linen Curtain',3750000,3550000,'White','73% linen, 27% cotton in Alabaster.','2023-01-03 09:04:07','2023-01-03 09:04:07',11,170),(70,'Colca Wool Rug',3500000,2500000,'Gray','Designed with a beautiful geometric pattern.','2023-01-03 09:07:14','2023-01-03 09:07:14',4,162),(71,'Glimmer Rug',4600000,4300000,'Gray','Blends durable wool with soft, subtly shiny viscose.','2023-01-03 09:08:48','2023-01-03 09:08:48',5,163),(72,'Anisa Washable Rug',2000000,1976000,'White','Durable blend is perfect for high-traffic areas.','2023-01-03 09:10:16','2023-01-03 09:10:16',6,164),(73,'Willow Round Coffee Table',4600000,4300000,'White','Wood top softens the criss-cross metal base.','2023-01-03 09:12:02','2023-01-03 09:12:02',5,149),(74,'Portside Outdoor Wide Storage Cabinet w/ Shelves',28000000,26700000,'Brown','Keeps your outdoor space tidy but stylish.','2023-01-03 09:13:38','2023-01-03 09:13:38',5,171),(75,'Angled Arm Outdoor Chair',3500000,2985000,'White','Removable cushions covered in 100% Olefin fabric.','2023-01-03 09:14:52','2023-01-03 09:14:52',5,172);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `role` int DEFAULT '1',
  `encryptedPassword` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Long1','Hoang','Da Nang','hlong.1805nh@gmail.com','0328561953',2,'25d55ad283aa400af464c76d713c07ad','2022-12-06 12:45:13','2022-12-22 15:30:47'),(2,'Long','Hoang','Hue','hlong.1805top@gmail.com','0328561951',1,'25d55ad283aa400af464c76d713c07ad','2022-12-06 12:45:13','2023-01-04 03:17:34'),(3,'Tuan','Hoang','Ha Noi','hlong.19it4@vku.udn.vn','0328561950',1,'602a271bf46180c001e3978ef14eeaa1','2022-12-06 12:45:13','2023-01-02 15:31:22'),(8,'Phuoc','Thai','Ha Tinh','thaiphuoc@gmail.com','0364738723',1,'25d55ad283aa400af464c76d713c07ad','2022-12-07 16:21:23','2022-12-07 16:21:23'),(9,'Thieu','Pham','Nghe An','thieupham@gmail.com','0328567826',1,'25d55ad283aa400af464c76d713c07ad','2022-12-07 16:21:23','2022-12-07 16:21:23'),(33,'Ly','Thanh hai','Quang Tri','lythanhhai@gmail.com','0328567826',1,'25d55ad283aa400af464c76d713c07ad','2022-12-09 08:48:00','2022-12-09 08:48:00'),(34,'Pham','Viet Thang','Quang Tri','phamvietthang@gmail.com','0364738729',1,'25d55ad283aa400af464c76d713c07ad','2022-12-09 08:48:09','2022-12-09 08:48:09'),(35,'Le','Hong Minh','Ha Tinh','lehongminh@gmail.com','0328567826',1,'25d55ad283aa400af464c76d713c07ad','2022-12-09 08:48:09','2022-12-09 08:48:09'),(36,'Pham','Xuan Vinh','Da Nang','pxuanvinh@gmail.com','0364738728',1,'25d55ad283aa400af464c76d713c07ad','2022-12-09 08:48:11','2022-12-09 08:48:11'),(37,'Nguyen','Do Vuong','Quang Nam','ndovuong@gmail.com','0328567826',1,'25d55ad283aa400af464c76d713c07ad','2022-12-09 08:48:11','2022-12-09 08:48:11'),(38,'Nguyen','Thuy Y','Quang Nam','nguyenthuyy@gmail.com','0364738727',1,'25d55ad283aa400af464c76d713c07ad','2022-12-09 08:48:13','2022-12-09 08:48:13'),(39,'Le','Thi Binh','Ha Noi','lethibinh@gmail.com','0328567826',1,'25d55ad283aa400af464c76d713c07ad','2022-12-09 08:48:13','2022-12-09 08:48:13'),(41,'Ho','Thu Huyen','Binh Duong','hothuhuyen@gmail.com','0325468362',1,'25d55ad283aa400af464c76d713c07ad','2022-12-13 17:18:02','2022-12-13 17:18:02'),(42,'Long','Hoang SICT','Da Nang','hlong.19it4@sict.udn.vn','0328561955',1,'602a271bf46180c001e3978ef14eeaa1','2022-12-06 12:45:13','2022-12-21 12:47:16'),(44,'Nguyen','Thanh Tuan','Nghe An','nthanhtuan@gmail.com','0325465555',1,'25f9e794323b453885f5181f1b624d0b','2022-12-22 17:58:06','2022-12-22 17:58:06'),(45,'Bui','Thu Trang','Quang Binh','hnam789@gmail.com','0325465555',1,'25f9e794323b453885f5181f1b624d0b','2022-12-22 17:58:06','2022-12-22 17:58:06'),(46,'Khai','Pham','Ha Tinh','khaipham@gmail.com','0347363535',1,'25d55ad283aa400af464c76d713c07ad','2023-01-07 13:14:49','2023-01-07 13:14:49');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-28 18:27:32
