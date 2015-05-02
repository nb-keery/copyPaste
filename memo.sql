-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Sam 02 Mai 2015 à 15:03
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `memo`
--

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE IF NOT EXISTS `categorie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Contenu de la table `categorie`
--

INSERT INTO `categorie` (`id`, `titre`) VALUES
(1, 'html'),
(2, 'css'),
(3, 'php'),
(4, 'js'),
(5, 'sql');

-- --------------------------------------------------------

--
-- Structure de la table `texte`
--

CREATE TABLE IF NOT EXISTS `texte` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `code` text NOT NULL,
  `info` text NOT NULL,
  `id_categorie` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=96 ;

--
-- Contenu de la table `texte`
--

INSERT INTO `texte` (`id`, `titre`, `code`, `info`, `id_categorie`) VALUES
(7, 'Modèle HTML', '<!DOCTYPE html>\r\n<html>\r\n<head>\r\n	<title></title>\r\n</head>\r\n<body>\r\n\r\n</body>\r\n</html>', '', 0),
(35, 'Base HTML', '<!DOCTYPE html>\r\n<html>\r\n<head>\r\n	<title></title>\r\n</head>\r\n<body>\r\n\r\n</body>\r\n</html>', '<p>Voici la <strong>structure</strong> d''une <span style="background-color: #ffff00;">page</span> en <span style="color: #ff0000;">HTML</span></p>', 0),
(37, 'Cacher un élément en jQuery', '$("test").hide();', '<p style="text-align: center;"><span style="color: #ff9900;">L''&eacute;l&eacute;ment ne sera plus visible</span></p>', 0),
(38, 'Dernier test', 'J''écris n''importe quoi', 'Alors le résultat ?', 0),
(39, 'Erreur 404', '404 ERROR', 'Aucune information sur ce code', 0),
(42, 'Lorem Ipsum', 'Alii summum decus in carruchis solito altioribus et ambitioso vestium cultu ponentes sudant sub ponderibus lacernarum, quas in collis insertas cingulis ipsis adnectunt nimia subtegminum tenuitate perflabiles, expandentes eas crebris agitationibus maximeque sinistra, ut longiores fimbriae tunicaeque perspicue luceant varietate liciorum effigiatae in species animalium multiformes.\n\nUltima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam egregias, nullam nulli cedentem sed sibi vicissim velut ad perpendiculum aemulas: Caesaream, quam ad honorem Octaviani principis exaedificavit Herodes, et Eleutheropolim et Neapolim itidemque Ascalonem Gazam aevo superiore exstructas.\n\nNovitates autem si spem adferunt, ut tamquam in herbis non fallacibus fructus appareat, non sunt illae quidem repudiandae, vetustas tamen suo loco conservanda; maxima est enim vis vetustatis et consuetudinis. Quin in ipso equo, cuius modo feci mentionem, si nulla res impediat, nemo est, quin eo, quo consuevit, libentius utatur quam intractato et novo. Nec vero in hoc quod est animal, sed in iis etiam quae sunt inanima, consuetudo valet, cum locis ipsis delectemur, montuosis etiam et silvestribus, in quibus diutius commorati sumus.\n\nCuius acerbitati uxor grave accesserat incentivum, germanitate Augusti turgida supra modum, quam Hannibaliano regi fratris filio antehac Constantinus iunxerat pater, Megaera quaedam mortalis, inflammatrix saevientis adsidua, humani cruoris avida nihil mitius quam maritus; qui paulatim eruditiores facti processu temporis ad nocendum per clandestinos versutosque rumigerulos conpertis leviter addere quaedam male suetos falsa et placentia sibi discentes, adfectati regni vel artium nefandarum calumnias insontibus adfligebant.', 'Ce code ne comporte aucune information', 0),
(93, 'Mémo', 'Je peux y stocker tout le contenu que je souhaite', '<p>Je vais <strong>tester</strong> le <span style="background-color: #ff0000;">WYSIWYG</span></p>', 0),
(94, 'Requête  AJAX', '$.ajax({\n   type: "POST",\n   url: "ajax/action.php",\n   data: save,\n   success: function(data){}\n });', 'Cette requête permet d''envoyer des données en  AJAX', 0),
(95, 'TEST', 'TEST', '<p>TEST</p>', 0);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id`, `pseudo`, `email`, `password`) VALUES
(1, 'Keery', 'mon-compte1131@live.fr', 'guigui91'),
(2, 'Charline', 'charline.oddo@gmail.com', 'guigui91');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
