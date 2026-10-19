/**
 * HEALTHY & HAPPY — SCRIPT OFFICIEL (Vanilla JavaScript)
 * Gestion du catalogue, filtres, recherche, vue détail produit,
 * sélecteur de quantité, calcul du total et commandes WhatsApp.
 */

// ==========================================================================
// 1. DONNÉES PRODUITS (Texte exact fourni par le client)
// ==========================================================================
const products = [
  {
    "id": 1,
    "name": "Biscuit Chocolat Sans Gluten 150g",
    "category": "Sans Gluten",
    "price": 12.5,
    "image": "assets/produit-1.webp",
    "available": true,
    "details": "Des biscuits sans gluten nappés d’une couche de chocolat noir.\n\nCe biscuit sans gluten au chocolat noir a été pensé pour les amoureux du chocolat. Ni trop sucré, ni trop amer, c’est la friandise parfaite pour terminer la journée sur une note gourmande.\n\nIngrédients :\nFarine de maïs, chocolat noir (30%) (cacao (60%) au moins – pâte de cacao (48%), sucre, beurre de cacao, émulsifiant : lécithine de soja) amidon de maïs, sucre, graisse de palme, beurre (lait), lait en poudre , sirop de glucose, amidon de maïs modifié, poudres à lever : carbonate acide d’ammonium, carbonate acide de sodium ; amidon de tapioca modifié, sel de mer, arômes naturels.\n\nPeut contenir des traces de lupins.\n\nAllergènes : lécithine de soja, beurre, lait, lait en poudre\n\nApports Nutritionnels pour 100 g :\n\nÉnergie 2 049 kJ / 489 kcal\n\nGraisses 22g\n\ndont saturés 12g\n\nGlucides 67g\n\ndont sucres 23 g\n\nFibre 3,1g\n\nProtéine 4,2 g\n\nSel 0,73g"
  },
  {
    "id": 2,
    "name": "Cannelloni",
    "category": "Sans Gluten",
    "price": 12.8,
    "image": "assets/produit-2.webp",
    "available": true,
    "details": "Cannelloni sans gluten\n\nPâtes GlutenFree Granoro (à la farine de quinoa)\nL’odeur et le goût de la gamme Glutenfree Granoro sont typiques du maïs, adoucis par l’apport de la farine de riz et la note végétale du quinoa. Le choix d’intégrer le quinoa au mélange permet de rééquilibrer l’apport en fibres, minéraux et protéines, dont le riz et le maïs sont naturellement dépourvus.\n\nLe mélange de ces trois farines donne au produit une couleur jaune très similaire à celle de la pâte de blé dur, une texture ferme après cuisson, ainsi qu’une surface rugueuse qui permet de bien accrocher les sauces.\n\nChoisir GlutenFree Granoro, c’est :\nÊtre libre de manger avec plaisir\n\nAssurer à son organisme un apport adéquat en éléments nutritifs essentiels\n\nAvoir la certitude de consommer un produit sûr\n\nIngrédients\nPâtes sans gluten à la farine de quinoa\n\nComposition : Farine de maïs, farine de riz, farine de quinoa (3%).\n\nÉmulsionnants : Mono- et diglycérides d’acides gras.\n\n⚠️ Allergènes : Peut contenir des traces d’œuf et de soja.\n\nValeurs Nutritionnelles\nValeurs moyennes\tPour 100 g\t% AR*\nÉnergie\t1500 kJ / 354 kcal\t—\nMatières grasses\t1,50 g\t—\ndont acides gras saturés\t0,50 g\t—\nGlucides\t76,50 g\t—\ndont sucres\t2,50 g\t—\nFibres alimentaires\t2 g\t—\nProtéines\t7,50 g\t—\nSel\t0,03 g\t—\n*AR = Apports de Référence pour un adulte type (8 400 kJ / 2 000 kcal)"
  },
  {
    "id": 3,
    "name": "Capelli d’Angello Sans Gluten 250g",
    "category": "Sans Gluten",
    "price": 9.2,
    "image": "assets/produit-3.webp",
    "available": true,
    "details": "Les pâtes alimentaires sans gluten en forme de « Cheveux d’Ange » pour des solutions de bouillons et de soupes réussies.\nMode d’emploi :\nFaire bouillir 60 g de pâtes dans 0,5 litre d’eau salée pendant 4 à 6 minutes.\n\nIngrédients :\nFarine de maïs, farine de riz, farine de millet 20%, émulsifiant : mono- et diglycérides d’acides gras.\n\nPeut contenir des traces de soja.\n\nApports Nutritionnels pour 100 g : \nÉnergie 1 522 kJ / 359 kcal\nLipides 2,3 g\n– dont saturés 0,4 g\nGlucides 75 g\n– dont sucres 0,3 g\nFibre 2 g\nProtéines 8,2 g\nSel 0 g"
  },
  {
    "id": 4,
    "name": "Crackers Tostadas Sans Gluten 100g",
    "category": "Sans Gluten",
    "price": 7.0,
    "image": "assets/produit-4.webp",
    "available": true,
    "details": "Idéals au petit-déjeuner ou en collation, ces crackers polyvalents peuvent se préparer sucrés avec de la confiture ou salés.\nIdéals au petit-déjeuner ou en collation, ces crackers polyvalents peuvent se préparer sucrés avec de la confiture ou salés.\n\nDélicieuses et croustillantes tartines Noglut issues de l’agriculture biologique.\n\nIndication\nIl ne contient ni lactose ni gluten et est donc parfait pour les personnes coeliaques et végétaliennes. Il a une faible teneur en graisses saturées. Ils sont fabriqués à partir de farine de riz et de farine de maïs.\n\nLa farine de maïs contient des minéraux tels que le phosphore, le zinc, le calcium, le potassium et le magnésium, des vitamines A, B1, B5, C, E et K, des acides gras essentiels tels que les acides linoléiques et aminés. Supprime les problèmes digestifs et prévient le cancer du côlon et les hémorroïdes. Diminue le taux de mauvais cholestérol et le risque de constipation.\n\nLa farine de riz bénéficie de vitamines B et D, de protéines et de minéraux qui donnent de l’énergie. Augmente la satiété en éliminant la consommation excessive de calories.\n\n \n\nTableau nutritionnel :\n\nPour 100 g\n\nValeur énergétique          1589 kJ / 374 Kcal\n\nGraisses                           1.1 g\n\nDont acides saturés           0.2 g\n\nGlucides                            84 g\n\nDont les sucres                  0.8 g\n\nProtéines                          7.1 g\n\nSel                                     0.1 g"
  },
  {
    "id": 5,
    "name": "Digestif Cacao Sans Gluten 200g",
    "category": "Sans Gluten",
    "price": 10.5,
    "image": "assets/produit-5.webp",
    "available": true,
    "details": "Un délicieux biscuit sablé sans gluten à la saveur intense de cacao, préparé avec des ingrédients de qualité soigneusement sélectionnés. Sans gluten mais pas sans plaisir ! Permettez vous le meilleur pour votre santé.\n\nPur Cacao\nIntensément Bon\nSans Gluten\nSans Huile de Palme Ni Conservateurs\n\nUn délicieux biscuit sablé à la saveur intense de cacao, préparé avec des ingrédients naturels soigneusement sélectionnés (maïs, sucre brun et pur cacao). Permettez vous le meilleur au petit déjeuner.\n\nÉlaborés à partir des meilleurs ingrédients sans gluten\nGaranti sans huile de palme\nUn biscuit parfait si vous êtes de ceux qui aiment avoir des biscuits avec du lait ou des boissons végétales. Avec des ingrédients naturels et sans conservateurs. Fabriqué sur une ligne de production exclusive pour les aliments sans gluten. Avec de l’acide oléique, idéal pour une alimentation saine. Convient aux végétariens.\n\nPrécautions\n\nPeut contenir des traces de fruits avec des coques et du lactose.\n\nIngrédients\n\nHuiles végétales (11,8%), Chocolat (3,2%), Poudre de cacao dégraissée (3,2%), Beurre de cacao, Isolat de protéine de soja, Lécithine de tournesol, Extrait riche en tocophérols, Bicarbonate de sodium, Bicarbonate d’ammonium, Arôme, Arômes , Acide folique, phosphate de diamidon acétylé, fibre d’agrumes, maltodextrine de pomme de terre, lécithine de soja, farine de maïs, farine de riz, amidon de maïs.\n\nTableau nutritionnel\n\nPour 100g\n\nMatières grasses / Lipides                    14.6 g\n\nAcides gras saturés                               2.5 g\n\nGlucides / Hydrates de carbone           65.2 g\n\nSucres                                                     0.5 g\n\nFibres alimentaires                                7.5 g\n\nProtéines                                                 7.2 g\n\nSel                                                            1.1 g\n\nValeur énergétique                                 412 Kcal"
  },
  {
    "id": 6,
    "name": "Digestif Orange Sans Gluten 195g",
    "category": "Sans Gluten",
    "price": 10.5,
    "image": "assets/produit-6.webp",
    "available": true,
    "details": "A base d’orange véritable, ces biscuits sans gluten sont autant un régal que bons pour la santé. Ils sont fabriqués à partir d’huile d’olive, source d’acide oléique (Oméga 9).\n\nSans gluten\nSans lactose et sans œufs\nEnrichi en Vitamine B9 et E\n\nA base d’orange véritable, ces biscuits sans gluten sont autant un régal que bons pour la santé. Ils sont fabriqués à partir d’huile d’olive, source d’acide oléique (Oméga 9).\n\nSans gluten\nSans lactose et sans œufs\nEnrichi en Vitamine B9 et E\nSans huile de palme\nIngrédients : \n\nAmidon de maïs, canne sucre brun entier, huiles végétales (tournesol, olive) (11,9%), farine de maïs, farine de riz, orange (5,1%), pomme de terre maltodextrine, gélifiant (phosphate de diamidon acétylé), isolat de protéine de soja, fibre d’agrumes, poudres à lever (bicarbonate d’ammonium, bicarbonate de sodium), sel, émulsifiant (lécithine de tournesol), arômes, antioxydant (extrait riche en tocophérols), acide folique (acide ptérylique monoglutamique).\n\nTableau nutritionnel\n\nPour 100g\n\nMatières grasses / Lipides                     14 g\n\nAcides gras saturés                                1.3 g\n\nGlucides / Hydrates de carbone             72 g\n\nSucres                                                       21 g\n\nFibres alimentaires                                  6 g\n\nProtéines                                                   5.7 g\n\nSel                                                              0.9 g\n\nAcide oléique                                            11 g\n\nValeur énergétique                                   448 Kcal (1885 kJ)"
  },
  {
    "id": 7,
    "name": "Farine Mix B Sans Gluten 1kg",
    "category": "Sans Gluten",
    "price": 25.2,
    "image": "assets/produit-7.webp",
    "available": true,
    "details": "La farine Mix B est idéale pour tout type de préparation boulangère. Ses caractéristiques particulières lui confère des propriétés qui permettent de préparer des pâtes qui lève très bien pour donner des pains très aériens à l’intérieur et croquants à l’extérieur.\n\nFarine à Pains\nSans Gluten & Sans lactose\nQualité Supérieure\nUn mélange de farines incomparable pour les pâtes levées sous toutes leurs formes ! Des experts en boulangerie du monde entier approuvent ce mélange imaginé par Schär. À vous de créer de délicieux pains à partager!\n\nLa farine Mix B est idéale pour tout type de préparation boulangère. Ses caractéristiques particulières lui confère des propriétés qui permettent de préparer des pâtes qui lève très bien pour donner des pains très aériens à l’intérieur et croquants à l’extérieur.\n\nIngrédients:\n\namidon de maïs, farine de riz, fibre végétale (psyllium, bambou), farine de riz intégral 3,8%, farine de lentilles 3,6%, dextrose, épaississant: hydroxypropyl méthylcellulose ; sel .\n\nPeut contenir des traces de soja . SANS LACTOSE\n\nTableau Nutritionnel:\n\nPour 100 gr\n\nénergie                                                    1429/337 kj/kcal\nmatières grasses                                     0,6 g\ndont acides gras saturés                         0,3 g\nglucides                                                   78 g\ndont sucres                                              2.6 g\nfibres alimentaires                                   4,1 g\nprotéines                                                  2,6 g\nsel                                                            0,73 g"
  },
  {
    "id": 8,
    "name": "Farine Mix C Sans Gluten 1kg",
    "category": "Sans Gluten",
    "price": 21.85,
    "image": "assets/produit-8.webp",
    "available": true,
    "details": "Mix C est une farine sans gluten de qualité supérieure. Sa texture tendre en fait une farine idéale pour toutes sortes de pâtisseries maison. Simple à utiliser, Mix C vous permet de réaliser de délicieuses gourmandises sans gluten.\n\nFarine à Pâtisseries\nSans Gluten & Sans Lactose\nIngrédients de Qualité Supérieure\nDécouvrez la farine mix pâtisserie Schar sans gluten. Cette farine sans gluten, à base de farine de mais, d’amidon de mais et de farine de graines de caroube, vous permettra de faire vos propres pâtisseries et gâteaux de la manière la plus simple possible. Cette farine à pâtisserie figure parmi nos meilleurs produits sans gluten de la marche Schar, leader sur le marché.\n\nMix C est une farine sans gluten de qualité supérieure. Sa texture tendre en fait une farine idéale pour toutes sortes de pâtisseries maison. Simple à utiliser, Mix C vous permet de réaliser de délicieuses gourmandises sans gluten.\n\nIngrédients :\n\namidon de mais, farine de mais, épaississant: farine de graines de caroube. peut contenir des traces de soja et de lupin.\n\nTableau nutritionnel\n\nPour 100g\n\nMatières grasses / Lipides                    0.5 g\n\nAcides gras saturés                               0.1 g\n\nGlucides / Hydrates de carbone            84 g\n\nSucres                                                      0.3 g\n\nFibres alimentaires                                 2.2 g\n\nProtéines                                                 2.5 g\n\nSel                                                            0.05 g\n\nValeur énergétique                                 354 Kcal (1504 kJ)"
  },
  {
    "id": 9,
    "name": "Farine Mix It Sans Gluten 500g",
    "category": "Sans Gluten",
    "price": 10.5,
    "image": "assets/produit-9.webp",
    "available": true,
    "details": "Le polyvalent pour la cuisine et la pâtisserie. Mix IT c’est la farine sans gluten pour toutes les recettes et les préparations.\n\nMélange de farine sans gluten pour la cuisson et la pâtisserie.\n\nIngrédients :\nAmidon de maïs, farine de riz, farine de sorgho, dextrose d’amidon de riz, fibre végétale (psyllium), protéine de pois, épaississant hydroxypropylméthylcellulose, sel.\n\nPeut contenir des traces de soja.\n\nTableau nutritionnel :\n\nPour 100 g\n\nValeur énergétique               1491 kJ / 351 Kcal\n\nGraisses                                   0.9 g\n\nDont acides saturés                   0.3 g\n\nGlucides                                    82 g\n\nDont les sucres                           3 g\n\nFibres alimentaires                  1.6 g\n\nProtéines                                   3.5 g\n\nSel                                              0.82 g"
  },
  {
    "id": 10,
    "name": "Fusilli Sans Gluten 250g",
    "category": "Sans Gluten",
    "price": 7.5,
    "image": "assets/produit-10.webp",
    "available": true,
    "details": "Pâtes en forme de spirale à base de farine de riz et de maïs.\n\nPréparation :\nPour une portion : faire cuire 100 g de fusilli dans 1 litre d’eau bouillante salée pendant 9 à 11 minutes puis égoutter.\n\nIngrédients :\nFarine de maïs, farine de riz, émulsifiant : mono et diglycérides d’acides gras.\nPeut contenir des traces de soja.\n\nApports Nutritionnels pour 100 g :\nÉnergie 1 513 kJ / 357 kcal\nMatières grasses 1,9 g\n– dont saturés 0,4 g\nGlucides 77 g\n– dont sucres 0,5 g\nFibre 1,2 g\nProtéines 7,3 g\nSel 0 g"
  },
  {
    "id": 11,
    "name": "Gnocchi",
    "category": "Sans Gluten",
    "price": 12.8,
    "image": "assets/produit-11.webp",
    "available": true,
    "details": "Gnocchis de pommes de terre sans gluten\n\n\nGnocchi GlutenFree Granoro\n\nL’odeur et le goût de la gamme Glutenfree Granoro sont typiques du maïs, adoucis par l’apport de la farine de riz et la note végétale du quinoa. Le choix d’intégrer le quinoa au mélange permet de rééquilibrer l’apport en fibres, minéraux et protéines, dont le riz et le maïs sont naturellement dépourvus.\n\nLe mélange de ces trois farines donne au produit une couleur jaune très similaire à celle de la pâte de blé dur, une texture ferme après cuisson, ainsi qu’une surface rugueuse qui permet de bien accrocher les sauces.\n\nChoisir GlutenFree Granoro, c’est :\nÊtre libre de manger avec plaisir\n\nAssurer à son organisme un apport adéquat en éléments nutritifs essentiels\n\nAvoir la certitude de consommer un produit sûr\n\nIngrédients\nGnocchis de pommes de terre sans gluten\n\nComposition : Purée de pommes de terre en poudre réhydratée 70% (eau, flocons de pommes de terre 18% : pommes de terre 99%, émulsiﬁants : mono- et diglycérides d’acides gras, arômes), farine de maïs, fécule de pomme de terre, amidon de maïs, farine de riz, sel, correcteur d’acidité : acide lactique, conservateur : acide sorbique, arôme.\nValeurs Nutritionnelles\nValeurs moyennes\tPour 100 g\t% AR*\nÉnergie\t698 kJ / 165 kcal\t—\nMatières grasses\t0,50 g\t—\ndont acides gras saturés\t0,10 g\t—\nGlucides\t36 g\t—\ndont sucres\t0,10 g\t—\nFibres alimentaires\t1 g\t—\nProtéines\t3,50 g\t—\nSel\t1,40 g\t—\n*AR = Apports de Référence pour un adulte type (8 400 kJ / 2 000 kcal)"
  },
  {
    "id": 12,
    "name": "Jungla Chocolat Sans Gluten 100g",
    "category": "Sans Gluten",
    "price": 7.0,
    "image": "assets/produit-12.webp",
    "available": true,
    "details": "Fabriqués à partir d’ingrédients soigneusement sélectionnés, ces délicieux cookies en forme d’animaux de la jungle seront autant un plaisir qu’une joie pour les enfants.\n\nBiscuits en forme des animaux de la Jungle\nAu bon goût de chocolat\nSans gluten/Sans huile de palme\nIngrédients soigneusement sélectionnés\nFabriqués à partir d’ingrédients soigneusement sélectionnés, ces délicieux cookies en forme d’animaux de la jungle seront autant un plaisir qu’une joie pour les enfants.\n\nBiscuits en forme des animaux de la Jungle\nAu bon goût de chocolat\nSans gluten/Sans huile de palme\nIngrédients: \nAmidon de maïs , Vergeoise , sucre complet de canne, farine de maïs, Maltodextrine de pomme de terre , Huile végétale ( Tournesol , Olivier ) , gélifiant ( phosphate de diamidon acétylé ) , Isolat de protéine de soja, chocolat ( Pâte de cacao , Sucre , Beurre de cacao , Excipients ( Lécithine de Soja ), fibres d’agrumes, Sel marin , poudre à lever ( Bicarbonate d’ammonium , Bicarbonate de sodium), Lécithine de tournesol.\nSans gluten\nSans œuf\nTableau nutritionnel:\nEnergie\t1771.23 kJ / 423.33kcal\nMatières grasses\t9 g\ndont saturées\t2 g\nCarbohydrates\t72.67 g\ndont sucres\t21 g\nFibres\t3 g\nProtein\t6 g\nSalt\t39.33 mg"
  },
  {
    "id": 13,
    "name": "Jungla Nature Sans Gluten 100g",
    "category": "Sans Gluten",
    "price": 6.0,
    "image": "assets/produit-13.webp",
    "available": true,
    "details": "Fabriqués à partir d’ingrédients soigneusement sélectionnés et 100% sans gluten, ces délicieux cookies en forme d’animaux de la jungle seront autant un plaisir qu’une joie pour les enfants.\n\nDélicieux biscuits en forme des animaux de la Jungle\nNaturellement bons\nSans gluten/Sans Lactose\nIngrédients soigneusement sélectionnés\nFabriqués à partir d’ingrédients soigneusement sélectionnés et 100% sans gluten, ces délicieux cookies en forme d’animaux de la jungle seront autant un plaisir qu’une joie pour les enfants.\n\nDélicieux biscuits en forme des animaux de la Jungle\nNaturellement bons\nSans gluten/Sans Lactose\nIngrédients:\n Maïzena , Sucre de canne , Maltodextrine de pomme de terre , Huile végétale ( Tournesol , Olivier ) , Maïs , Excipients ( Pistarch phosphate ) , Isolat de protéine de soja , Excipients , Excipients ( Lécithine de tournesol ) , Sel marin , Excipients ( Bicarbonate d’ammonium , Bicarbonate de sodium, Tocophérol ) , Acide Folique ( Acide ptéroylmonoglutamique )\nSans gluten\nSans lait\nSans œuf\nTableau nutritionnel:\nEnergie\t1778.2 kJ / 425kcal\nMatières grasses\t12.5 g\nCarbohydrates\t72.5 g\ndont sucres\t22.5 g\nFibres\t2.5 g\nProtéines\t5 g\nSel\t1.5 g"
  },
  {
    "id": 14,
    "name": "Lasagnes",
    "category": "Sans Gluten",
    "price": 12.8,
    "image": "assets/produit-14.webp",
    "available": true,
    "details": "Lasagnes sans gluten\n\n\nLasagnes GlutenFree Granoro (à la farine de quinoa)\n\nL’odeur et le goût de la gamme Glutenfree Granoro sont typiques du maïs, adoucis par l’apport de la farine de riz et la note végétale du quinoa. Le choix d’intégrer le quinoa au mélange permet de rééquilibrer l’apport en fibres, minéraux et protéines, dont le riz et le maïs sont naturellement dépourvus.\n\nLe mélange de ces trois farines donne au produit une couleur jaune très similaire à celle de la pâte de blé dur, une texture ferme après cuisson, ainsi qu’une surface rugueuse qui permet de bien accrocher les sauces.\n\nChoisir GlutenFree Granoro, c’est :\nÊtre libre de manger avec plaisir\n\nAssurer à son organisme un apport adéquat en éléments nutritifs essentiels\n\nAvoir la certitude de consommer un produit sûr\n\nIngrédients\nLasagnes sans gluten à la farine de quinoa\n\nComposition : Farine de maïs, farine de riz, farine de quinoa (3%).\nÉmulsionnants : Mono- et diglycérides d’acides gras.\n⚠️ Allergènes : Peut contenir des traces d’œuf et de soja.\nValeurs Nutritionnelles\nValeurs moyennes\tPour 100 g\t% AR*\nÉnergie\t1509 kJ / 356 kcal\t—\nMatières grasses\t1,10 g\t—\ndont acides gras saturés\t0,30 g\t—\nGlucides\t80 g\t—\ndont sucres\t0,30 g\t—\nFibres alimentaires\t1,20 g\t—\nProtéines\t6,70 g\t—\nSel\t—\t—"
  },
  {
    "id": 15,
    "name": "Madeleines Nature Sans Gluten 170g",
    "category": "Sans Gluten",
    "price": 14.5,
    "image": "assets/produit-15.webp",
    "available": true,
    "details": "Ces madeleines sont parfaites pour bien commencer sa journée. Elles sont idéales au petit déjeuner ou en collation, seules ou accompagnées d’un fruit entier et de votre boisson préférée.\n\nDélicieuses Madeleines Sans Gluten\nIdéales au Petit-Déjeuner\nCollation Gourmande\nSans Huile de Palme\nCes madeleines sont parfaites pour bien commencer sa journée. Elles sont idéales au petit déjeuner ou en collation, seules ou accompagnées d’un fruit entier et de votre boisson préférée.\n\n8 délicieuses madeleines Sans Gluten\nIdéales au Petit-Déjeuner\nSans Lactose\nSans Huile de Palme\nIngrédients :\n\nHuiles végétales (tournesol, olive), sucre roux de canne intégral, eau, amidon de pomme de terre, poudre de blanc d’œuf, humectant (glycérine), maltodextrine, protéine de pois, isolat de protéine de soja, agents levants (bicarbonate de sodium, pyrophosphate acide de sodium), émulsifiants (mono- et diglycérides d’acides gras, esters polyglycériques d’acides gras), acidulant (acide lactique), arômes, conservateur (acide sorbique).\n\nAllergènes :\n\nŒufs et Soja."
  },
  {
    "id": 16,
    "name": "Maria Nature Sans Gluten 180g",
    "category": "Sans Gluten",
    "price": 8.0,
    "image": "assets/produit-16.webp",
    "available": true,
    "details": "Les biscuits les plus simples sont les meilleurs. Maria de Noglut est mélange d’ingrédients 100% naturels soigneusement sélectionnés (farine de maïs et de riz,  sucre de canne brun, huile d’olive et de tournesol) qui conviendra à toute la famille.\n\nSans gluten\nGaranti sans huile de palme et sans lactose\nConvient aux végétariens\nLes biscuits les plus simples sont les meilleurs. Maria de Noglut est mélange d’ingrédients 100% naturels soigneusement sélectionnés (farine de maïs et de riz,  sucre de canne brun, huile d’olive et de tournesol) qui conviendra à toute la famille.\n\nSans gluten\nGaranti sans huile de palme et sans lactose\nConvient aux végétariens\nIngrédients: \n\nMaïzena , Sucre de canne , Huile végétale ( Huile de tournesol , Olivier ) 11.5% , Maltodextrine de pomme de terre , Maïs , Farine de riz , Excipients ( Phosphate ) , Isolat de protéine de soja , dextrine, Excipients ( Bicarbonate de sodium ) , fibres végétales, émulsifiant (lécithine, Tocophérol ).\n\nTableau nutritionnel :\n\nPour 100 g\n\nValeur énergétique                     1847 kJ / 439 Kcal\n\nGraisses                                        13 g\n\nDont acides saturés                        1.2 g\n\nGlucides                                         72 g\n\nDont les sucres                                20 g\n\nProtéines                                        5.6 g\n\nFibres alimentaires                        6 g\n\nSel                                                    0.38 g"
  },
  {
    "id": 17,
    "name": "Penne Rigate",
    "category": "Sans Gluten",
    "price": 9.7,
    "image": "assets/produit-17.webp",
    "available": true,
    "details": "Penne rigate sans gluten\n\n\nPasta GlutenFree Granoro (à la farine de quinoa)\n\nL’odeur et le goût de la gamme Glutenfree Granoro sont typiques du maïs, adoucis par l’apport de la farine de riz et la note végétale du quinoa. Le choix d’intégrer le quinoa au mélange permet de rééquilibrer l’apport en fibres, minéraux et protéines, dont le riz et le maïs sont naturellement dépourvus.\n\nLe mélange de ces trois farines donne au produit une couleur jaune très similaire à celle de la pâte de blé dur, une texture ferme après cuisson, ainsi qu’une surface rugueuse qui permet de bien accrocher les sauces.\n\nChoisir GlutenFree Granoro, c’est :\nÊtre libre de manger avec plaisir\n\nAssurer à son organisme un apport adéquat en éléments nutritifs essentiels\n\nAvoir la certitude de consommer un produit sûr\n\nIngrédients\nPâtes sans gluten à la farine de quinoa\n\nComposition : Farine de maïs, farine de riz, farine de quinoa (3%).\nÉmulsionnants : Mono- et diglycérides d’acides gras.\n⚠️ Allergènes : Peut contenir des traces de soja.\nValeurs Nutritionnelles\nValeurs moyennes\tPour 100 g\t% AR*\nÉnergie\t1500 kJ / 354 kcal\t—\nMatières grasses\t1,50 g\t—\ndont acides gras saturés\t0,50 g\t—\nGlucides\t76,50 g\t—\ndont sucres\t2,50 g\t—\nFibres alimentaires\t2 g\t—\nProtéines\t7,50 g\t—\nSel\t0,03 g\t—\n*AR = Apports de Référence pour un adulte type (8 400 kJ / 2 000 kcal)"
  },
  {
    "id": 18,
    "name": "Penne Sans Gluten 250g",
    "category": "Sans Gluten",
    "price": 7.5,
    "image": "assets/produit-18.webp",
    "available": true,
    "details": "Le classique des pâtes italiennes, les Penne sans gluten à base de farine de riz et de de maïs.\nPréparation :\nPour une portion : faire cuire 100 g de fusilli dans 1 litre d’eau bouillante salée pendant 9 à 11 minutes puis égoutter.\n\nIngrédients :\nFarine de maïs, farine de riz, émulsifiant : mono et diglycérides d’acides gras.\nPeut contenir des traces de soja.\n\nApports Nutritionnels pour 100 g :\nÉnergie 1 513 kJ / 357 kcal\nMatières grasses 1,9 g\n– dont saturés 0,4 g\nGlucides 77 g\n– dont sucres 0,5 g\nFibre 1,2 g\nProtéines 7,3 g\nSel 0 g"
  },
  {
    "id": 19,
    "name": "Sedani",
    "category": "Sans Gluten",
    "price": 9.7,
    "image": "assets/produit-19.webp",
    "available": true,
    "details": "Sedani sans gluten\n\n\nPasta GlutenFree Granoro (à la farine de quinoa)\n\nL’odeur et le goût de la gamme Glutenfree Granoro sont typiques du maïs, adoucis par l’apport de la farine de riz et la note végétale du quinoa. Le choix d’intégrer le quinoa au mélange permet de rééquilibrer l’apport en fibres, minéraux et protéines, dont le riz et le maïs sont naturellement dépourvus.\n\nLe mélange de ces trois farines donne au produit une couleur jaune très similaire à celle de la pâte de blé dur, une texture ferme après cuisson, ainsi qu’une surface rugueuse qui permet de bien accrocher les sauces.\n\nChoisir GlutenFree Granoro, c’est :\nÊtre libre de manger avec plaisir\n\nAssurer à son organisme un apport adéquat en éléments nutritifs essentiels\n\nAvoir la certitude de consommer un produit sûr\n\nIngrédients\nPâtes sans gluten à la farine de quinoa\n\nComposition : Farine de maïs, farine de riz, farine de quinoa (3%).\nÉmulsionnants : Mono- et diglycérides d’acides gras.\n⚠️ Allergènes : Peut contenir des traces de soja.\nValeurs Nutritionnelles\nValeurs moyennes\tPour 100 g\t% AR*\nÉnergie\t1500 kJ / 354 kcal\t—\nMatières grasses\t1,50 g\t—\ndont acides gras saturés\t0,50 g\t—\nGlucides\t76,50 g\t—\ndont sucres\t2,50 g\t—\nFibres alimentaires\t2 g\t—\nProtéines\t7,50 g\t—\nSel\t0,03 g\t—\n*AR = Apports de Référence pour un adulte type (8 400 kJ / 2 000 kcal)"
  },
  {
    "id": 20,
    "name": "Snack Chocolat & Noisettes Sans Gluten 3×35g",
    "category": "Sans Gluten",
    "price": 12.5,
    "image": "assets/produit-20.webp",
    "available": true,
    "details": "Trois gaufrettes à la crème de noisette enrobées de chocolat au lait. Un snack sans gluten et énergétique pour tous ceux qui aiment le sucré.\nIngrédients :\nChocolat au lait (40%) (sucre, beurre de cacao, lait écrémé en poudre, pâte de cacao, matière grasse du lait (anhydre), lactosérum en poudre (lait), émulsifiant : lécithine de soja, arôme naturel), sucre, farine de maïs, fécule de pomme de terre, noisettes 5 %, lactosérum doux en poudre, cacao en poudre, émulsifiant : lécithine de soja E322, sel, épaississant : gomme de guar ; poudre à lever : carbonate acide de sodium.\n\nAllergènes : lécithine de soja, chocolat au lait, lait en poudre, matière grasse du lait, lactosérum en poudre, lait, noisettes.\n\nApports Nutritionnels pour 100 g :\nÉnergie 2 309 kJ / 553 kcal\nMatières grasses 32 g\n– dont saturés 17 g\nGlucides 60 g\n– dont sucres 40 g\nFibre 2,7 g\nProtéines 4,9 g\nSel 0,23 g"
  },
  {
    "id": 21,
    "name": "Spaghetti",
    "category": "Sans Gluten",
    "price": 9.7,
    "image": "assets/produit-21.webp",
    "available": true,
    "details": "Spaghetti sans gluten\n\nPasta GlutenFree Granoro (à la farine de quinoa)\n\nL’odeur et le goût de la gamme Glutenfree Granoro sont typiques du maïs, adoucis par l’apport de la farine de riz et la note végétale du quinoa. Le choix d’intégrer le quinoa au mélange permet de rééquilibrer l’apport en fibres, minéraux et protéines, dont le riz et le maïs sont naturellement dépourvus.\n\nLe mélange de ces trois farines donne au produit une couleur jaune très similaire à celle de la pâte de blé dur, une texture ferme après cuisson, ainsi qu’une surface rugueuse qui permet de bien accrocher les sauces.\n\nChoisir GlutenFree Granoro, c’est :\nÊtre libre de manger avec plaisir\n\nAssurer à son organisme un apport adéquat en éléments nutritifs essentiels\n\nAvoir la certitude de consommer un produit sûr\n\nIngrédients\nPâtes sans gluten à la farine de quinoa\n\nComposition : Farine de maïs, farine de riz, farine de quinoa (3%).\nÉmulsionnants : Mono- et diglycérides d’acides gras.\n⚠️ Allergènes : Peut contenir des traces de soja.\nValeurs Nutritionnelles\nValeurs moyennes\tPour 100 g\t% AR*\nÉnergie\t1500 kJ / 354 kcal\t—\nMatières grasses\t1,50 g\t—\ndont acides gras saturés\t0,50 g\t—\nGlucides\t76,50 g\t—\ndont sucres\t2,50 g\t—\nFibres alimentaires\t2 g\t—\nProtéines\t7,50 g\t—\nSel\t0,03 g\t—\n*AR = Apports de Référence pour un adulte type (8 400 kJ / 2 000 kcal)"
  },
  {
    "id": 22,
    "name": "Spaghetti Sans Gluten 250g",
    "category": "Sans Gluten",
    "price": 7.5,
    "image": "assets/produit-22.webp",
    "available": true,
    "details": "Spaghettis sans gluten à base de farine de maïs et de farine de riz.\n\nPréparation :\nFaire bouillir 100 g de spaghettis par personne dans 1 litre d’eau légèrement salée pendant environ 11-13 minutes.\n\nIngrédients :\nFarine de maïs, farine de riz, émulsifiant : mono- et diglycérides d’acides gras.\nPeut contenir des traces de soja.\n\nApports Nutritionnels pour 100 g :\nÉnergie 1 513 kJ / 357 kcal\nMatières grasses 1,9 g\n– dont saturés 0,4 g\nGlucides 77 g\n– dont sucres 0,5 g\nFibre 1,2 g\nProtéines 7,3 g\nSel 0 g"
  },
  {
    "id": 23,
    "name": "Couscous Traditionnel Sans Gluten (360g – 2kg)",
    "category": "Sans Gluten",
    "price": 7.4,
    "priceDisplay": "7.400 DT – 32.500 DT",
    "formats": [
      { "name": "360 g", "price": 7.4, "barcode": "6191476700083" },
      { "name": "2 kg", "price": 32.5, "barcode": "6191476700137" }
    ],
    "image": "assets/produit-23.webp",
    "available": true,
    "details": "Dégustez les bonnes saveurs du Couscous Traditionnel SANS GLUTEN 100% Tunisien.\n\nFacile à digérer et de composition nutritive équilibrée, ce Couscous est fabriqué selon la pure tradition à partir d’ingrédients naturellement Sans Gluten soigneusement sélectionnés.\n\nIngrédients :\nFarine de riz, farine de légumineuses, sel.\n\nIntérêt nutritionnel :\n• Sans gluten\n• Sans lactose\n• Sans colorants ni conservateurs\n\nValeurs nutritionnelles moyennes pour 100g de produit :\nValeur énergétique\t360 kcal (1528 kJ)\nProtéines\t7,5 g\nGlucides\t77 g\nLipides\t1,8 g\nDont les acides gras saturés\t0,4 g\nFibres alimentaires\t3,2 g\nSel\t0,4 g\n\nPackaging & Formats disponibles :\n• Format 360 g : 7.400 DT — Code à barre : 6191476700083 (Sachet alimentaire PP/PE dans une boite en papier recyclable pré imprimé)\n• Format 2 kg : 32.500 DT — Code à barre : 6191476700137 (Sachet alimentaire PP/PE avec étiquette pré imprimée)\n\nComment utiliser le Couscous Traditionnel SANS GLUTEN d’IBN HAYYAN ?\nIl suffit d’humidifier les grains de Couscous avec de l’eau, laisser reposer 10 minutes, cuire dans la partie supérieure d’une couscoussière pendant 15 minutes, arroser avec le bouillon de votre choix, …et c’est prêt !"
  },
  {
    "id": 24,
    "name": "Mhamsa Traditionnelle Sans Gluten (360g)",
    "category": "Sans Gluten",
    "price": 7.6,
    "priceDisplay": "7.600 DT",
    "image": "assets/produit-24.webp",
    "available": true,
    "details": "Pour une saveur originale d’une soupe de mhamas sans gluten.\n\nLa soupe de mhamasa ou mhamsa, un grand classique de la cuisine tunisienne, réchauffe vos soirées d’hiver en entrée ou en plat principal.\n\nGrains moyens, de haute qualité.., ce mhamasa est fabriqué selon la pure tradition à partir d’ingrédients naturellement sans gluten soigneusement sélectionnés.\n\nIngrédients :\nRiz, légumineuses, sel.\n\nIntérêt nutritionnel :\n• Sans gluten\n• Sans lactose\n• Sans colorants ni conservateurs\n\nValeurs nutritionnelles moyennes pour 100g de produit :\nValeur énergétique\t360 kcal (1528 kJ)\nProtéines\t7,5 g\nGlucides\t77 g\nLipides\t1,8 g\nDont les acides gras saturés\t0,4 g\nFibres alimentaires\t3,2 g\nSel\t0,4 g\n\nPackaging :\n• Format 360 g : 7.600 DT — Code à barre : 6191476700144 (Sachet alimentaire PP/PE dans une boite en papier recyclable pré imprimé)\n\nComment utiliser le Mhamas IBN HAYYAN ?\nIl suffit d’ajouter les grains de MHAMAS au bouillon de votre choix et laisser cuire à feu doux un bon quart d’heure en remuant souvent… Déguster chaud, c’est un régal..!"
  },
  {
    "id": 25,
    "name": "Mix Tout Usage Sans Gluten (1kg – 2,5kg)",
    "category": "Sans Gluten",
    "price": 12.8,
    "priceDisplay": "12.800 DT – 28.000 DT",
    "formats": [
      { "name": "1 kg", "price": 12.8, "barcode": "6191476700021" },
      { "name": "2,5 kg", "price": 28.0, "barcode": "–" }
    ],
    "image": "assets/produit-25.webp",
    "available": true,
    "details": "Enfin un mélange de farine qui permet de cuisiner toutes les recettes classique en version sans gluten.\n\nCe mélange de farine tout usage est idéal pour remplacer une farine classique de blé et réussir les recettes de crêpes, gaufres, feuilles de brick, crème pâtissière, sauce béchamel…\n\nIngrédients :\nFarine de riz, amidon de maïs, épaississants : farine de guar et gomme de xanthane, sel.\n\nIntérêt nutritionnel :\n• Sans gluten\n• Sans lactose\n• Sans colorants ni conservateurs\n\nValeurs nutritionnelles moyennes pour 100g de produit :\nValeur énergétique\t357 kcal (1515 kJ)\nProtéines\t4,5 g\nGlucides\t81,5 g\nLipides\t0,9 g\nDont les acides gras saturés\t0,2 g\nFibres alimentaires\t2,5 g\nSel\t0,2 g\n\nPackaging & Formats disponibles :\n• Format 1 kg : 12.800 DT — Code à barre : 6191476700021 (Sachet alimentaire PP/PE dans une boite en papier recyclable pré imprimé)\n• Format 2,5 kg : 28.000 DT (Sachet alimentaire PP/PE avec étiquette pré imprimée)\n\nComment utiliser le MIX TOUT USAGE ?\nIl suffit simplement de remplacer la même quantité demandée de farine classique par le MIX TOUT USAGE."
  },
  {
    "id": 26,
    "name": "Mix Pain Sans Gluten (750g – 2,5kg)",
    "category": "Sans Gluten",
    "price": 12.2,
    "priceDisplay": "12.200 DT – 33.000 DT",
    "formats": [
      { "name": "750 g", "price": 12.2, "barcode": "6191476700014" },
      { "name": "2,5 kg", "price": 33.0, "barcode": "6191476700090" }
    ],
    "image": "assets/produit-26.webp",
    "available": true,
    "details": "Au goût délicieux des légumineuses et aux bienfaits naturels des graines de lin.\n\nBonne source de fibres alimentaires et facile à préparer, c’est le mélange de farine panifiable idéal pour remplacer une farine classique et réussir un pain sans gluten doré, gonflé et croustillant.\n\nIngrédients :\nFarine de riz, amidon de maïs, farine de légumineuses, graines de lin, épaississants : gomme de guar et gomme de xanthane, sel.\n\nIntérêt nutritionnel :\n• Source de fibres\n• Sans gluten\n• Sans lactose\n• Sans colorants ni conservateurs\n\nValeurs nutritionnelles moyennes pour 100g de produit :\nValeur énergétique\t356 kcal (1509 kJ)\nProtéines\t5,8 g\nGlucides\t75,6 g\nLipides\t1,8 g\nDont les acides gras saturés\t0,3 g\nFibres alimentaires\t7,3 g\nSodium\t0,2 g\n\nPackaging & Formats disponibles :\n• Format 750 g : 12.200 DT — Code à barre : 6191476700014 (Sachet alimentaire PP/PE dans une boite en papier recyclable pré imprimé)\n• Format 2,5 kg : 33.000 DT — Code à barre : 6191476700090 (Sachet alimentaire PP/PE avec étiquette pré imprimée)\n\nComment faire un pain sans gluten délicieux ?\nIl suffit de mélanger ce MIX PAIN sans gluten de IBN HAYYAN® avec de l’eau tiède, de la levure fraîche, de l’huile et du sel, laisser gonfler la pâte, enfourner…, et c’est prêt !"
  },
  {
    "id": 27,
    "name": "Farine Mix Multi Usage sans gluten 3kg - Reginat",
    "category": "Sans Gluten",
    "price": 28.0,
    "image": "assets/produit-27.webp",
    "available": true,
    "details": "Farine Mix Multi Usage sans gluten 3kg - Reginat\n\nDescription :\nFarine Mix Multi Usage sans gluten 3kg - Reginat\n\nIngrédients :\nFarine sans gluten"
  },
  {
    "id": 28,
    "name": "Levure chimique sans gluten 100g - Reginat",
    "category": "Sans Gluten",
    "price": 5.0,
    "image": "assets/produit-28.webp",
    "available": true,
    "details": "Levure chimique sans gluten 100g - Reginat\n\nIdéale pour vos pâtisseries, gâteaux et préparations boulangères sans gluten."
  },
  {
    "id": 29,
    "name": "Frik Sans Gluten 300g - Réginat",
    "category": "Sans Gluten",
    "price": 7.0,
    "image": "assets/produit-29.webp",
    "available": true,
    "details": "Le Frik est un cousin du boulgour. C’est aussi un blé dur mais vert car il est récolté avant sa maturité. Les épis sont ensuite légèrement brûlés pour stopper la germination des grains, puis séchés au soleil. Les grains restent entiers ou sont concassés.\n\nIdéal pour préparer les soupes traditionnelles tunisiennes sans gluten."
  },
  {
    "id": 30,
    "name": "Couscous Sans Gluten 340g - Spiga",
    "category": "Sans Gluten",
    "price": 6.0,
    "image": "assets/produit-30.webp",
    "available": true,
    "details": ""
  },
  {
    "id": 31,
    "name": "Langue d'oiseau Sans Gluten 340g - Spiga",
    "category": "Sans Gluten",
    "price": 6.7,
    "image": "assets/produit-31.webp",
    "available": true,
    "details": ""
  },
  {
    "id": 32,
    "name": "Fusilli Sans Gluten 340g - Spiga",
    "category": "Sans Gluten",
    "price": 6.7,
    "image": "assets/produit-32.webp",
    "available": true,
    "details": ""
  },
  {
    "id": 33,
    "name": "Coude 2 Sans Gluten 340g - Spiga",
    "category": "Sans Gluten",
    "price": 6.7,
    "image": "assets/produit-33.webp",
    "available": true,
    "details": ""
  },
  {
    "id": 34,
    "name": "Fell 2 Sans Gluten 340g - Spiga",
    "category": "Sans Gluten",
    "price": 6.7,
    "image": "assets/produit-34.webp",
    "available": true,
    "details": ""
  },
  {
    "id": 35,
    "name": "Spaghetti 2 Sans Gluten 340g - Spiga",
    "category": "Sans Gluten",
    "price": 6.7,
    "image": "assets/produit-35.webp",
    "available": true,
    "details": ""
  },
  {
    "id": 36,
    "name": "Penne Rigate Sans Gluten 500g - Amo Essere",
    "category": "Sans Gluten",
    "price": 12.5,
    "image": "assets/produit-36.webp",
    "available": true,
    "details": ""
  },
  {
    "id": 37,
    "name": "Biscuits Avoine & Pépites Chocolat Sans Gluten 220g - Gullón",
    "category": "Sans Gluten",
    "price": 11.5,
    "image": "assets/produit-37.webp",
    "available": true,
    "details": ""
  },
  {
    "id": 38,
    "name": "Biscuits Avoine & Orange Sans Gluten 180g - Gullón",
    "category": "Sans Gluten",
    "price": 7.5,
    "image": "assets/produit-38.webp",
    "available": true,
    "details": ""
  },
  {
    "id": 39,
    "name": "Biscuits aux Pépites de chocolat light, RICHIO",
    "category": "Sans Gluten",
    "price": 3.5,
    "image": "assets/produit-39.webp",
    "available": true,
    "details": "Le biscuit So’Keto sans sucre ajouté est un petit biscuit espiègle riche en nutriments. Avec très peu de glucides, nous incluons ces biscuits dans la catégorie céto.\n\nContenance : 40g"
  },
  {
    "id": 40,
    "name": "Biscuit au sésame et à l’Orange sans sucre, RICHIO",
    "category": "Sans Gluten",
    "price": 3.7,
    "image": "assets/produit-40.webp",
    "available": true,
    "details": "Savourez nos biscuits sans gluten à l’orange, riches en fibres naturelles. Un mélange délicieux de sésame et d’orange pour une pause gourmande et nutritive.\n\nContenance : 40g\n\nDescription :\nDécouvrez RICHIO Orange Sans Sucre, un biscuit à la fois sain et plein de saveur. Préparé avec de vraies oranges séchées, il offre un goût naturellement fruité et rafraîchissant, sans aucun sucre ajouté ni gluten. Sa recette simple et équilibrée met en avant des ingrédients naturels, riches en fibres, protéines, calcium, magnésium et zinc. Sans huile de palme, sans margarine et sans conservateurs, RICHIO Orange Sans Sucre est pensé pour ceux qui veulent se faire plaisir sans compromis. Un biscuit croustillant, léger et plein d’énergie, parfait pour vos pauses gourmandes du quotidien."
  },
  {
    "id": 41,
    "name": "BISCUIT SANS SUCRE SESAME ORANGE 40 GR RICHIO",
    "category": "Sans Gluten",
    "price": 3.6,
    "image": "assets/produit-41.webp",
    "available": true,
    "details": "Biscuits croquants au sésame et à l'orange RICHIO.\n\nContenance : 40g"
  },
  {
    "id": 42,
    "name": "Pâte à Tartiner aux Noisettes - Optilla Amiral (200g – 1kg)",
    "category": "Sans Gluten",
    "price": 4.5,
    "priceDisplay": "4.500 DT – 12.000 DT",
    "formats": [
      { "name": "200 g", "price": 4.5 },
      { "name": "350 g", "price": 7.5 },
      { "name": "500 g", "price": 10.0 },
      { "name": "1 kg", "price": 12.0 }
    ],
    "image": "assets/produit-42.webp",
    "available": true,
    "details": ""
  },
  {
    "id": 43,
    "name": "Gaufrettes Goût Créme Vanille Sans Gluten 150gr - Madas",
    "category": "Sans Gluten",
    "price": 8.5,
    "image": "assets/produit-43.webp",
    "available": true,
    "details": "Ingrédients :\nFarine de riz, amidon de mais"
  },
  {
    "id": 44,
    "name": "Gaufrettes Goût Noisette Sans Gluten 150gr - Madas",
    "category": "Sans Gluten",
    "price": 8.5,
    "image": "assets/produit-44.webp",
    "available": true,
    "details": "Ingrédients :\nFarine de riz, amidon de mais"
  },
  {
    "id": 45,
    "name": "Gaufrettes Goût Cappuccino Sans Gluten 150gr - Madas",
    "category": "Sans Gluten",
    "price": 8.5,
    "image": "assets/produit-45.webp",
    "available": true,
    "details": "Ingrédients :\nFarine de riz, amidon de mais"
  },
  {
    "id": 46,
    "name": "Gaufrettes Goût Fraise Sans Gluten 150gr - Madas",
    "category": "Sans Gluten",
    "price": 8.5,
    "image": "assets/produit-46.webp",
    "available": true,
    "details": "Ingrédients :\nFarine de riz, amidon de mais"
  },
  {
    "id": 47,
    "name": "Huile de noix de coco alimentaire BIO 100% pure, Clearspring",
    "category": "Sans Gluten",
    "price": 30.0,
    "image": "assets/produit-47.webp",
    "available": true,
    "details": "Huile Alimentaire de Coco Vierge 100% pure, non-raffinée, pressée à froid et certifiée BIO par: AB (L’agriculture biologique).\n\nContenance : 222 ml\n\nDescription :\nHuile Alimentaire de Coco Vierge 100% pure, non-raffinée, pressée à froid et certifiée BIO par: AB (L’agriculture biologique).\n\nElle possède une odeur agréable et une saveur exotique de noix de coco fraîche. Solide à température ambiante, elle fond à partir de 25°C.\n\nMulti-usage en cuisine. Elle accompagne aussi bien vos plats salés que sucrés.\n\nRiche en acides gras essentiels, en vitamines A, D, E et K, elle contient des acides gras à chaîne moyenne, réputés plus sains que les acides à chaîne longue."
  },
  {
    "id": 48,
    "name": "Farine de Riz Améliorée Sans Gluten 1Kg, Lorizo",
    "category": "Sans Gluten",
    "price": 12.0,
    "image": "assets/produit-48.webp",
    "available": true,
    "details": "Mixture de farines de riz et de maïs micronisées dans une formule naturellement améliorée pour bien préparer et donner à vos pains, cakes, fricassés, pizzas, et toutes sortes de préparations à mie, une texture légère et un moelleux appréciable et durable. Pas besoin d’aucun autre additif farineux.\n\nContenance : 1Kg\n\nDescription :\nMixture de farines de riz et de maïs micronisées dans une formule naturellement améliorée pour bien préparer et donner à vos pains, cakes, fricassés, pizzas, et toutes sortes de préparations à mie, une texture légère et un moelleux appréciable et durable. Pas besoin d’aucun autre additif farineux.\n\nComposition : Farine de riz, Amidon de maïs"
  },
  {
    "id": 49,
    "name": "Farine De Riz Améliorée Sans Gluten 2.5Kg, LORIZO",
    "category": "Sans Gluten",
    "price": 27.0,
    "image": "assets/produit-49.webp",
    "available": true,
    "details": "Mixture de farines de riz et de maïs micronisées dans une formule naturellement améliorée pour bien préparer et donner à vos pains, cakes, fricassés, pizzas, et toutes sortes de préparations à mie, une texture légère et un moelleux appréciable et durable. Pas besoin d’aucun autre additif farineux.\n\nContenance : 2.5 KG\n\nDescription :\nMixture de farines de riz et de maïs micronisées dans une formule naturellement améliorée pour bien préparer et donner à vos pains, cakes, fricassés, pizzas, et toutes sortes de préparations à mie, une texture légère et un moelleux appréciable et durable. Pas besoin d’aucun autre additif farineux.\n\nComposition : Farine de riz, Amidon de maïs"
  },
  {
    "id": 50,
    "name": "Fusilli Sans Gluten 350g - Safina",
    "category": "Sans Gluten",
    "price": 7.5,
    "image": "assets/produit-50.webp",
    "available": true,
    "details": ""
  },
  {
    "id": 51,
    "name": "Spaghetti Sans Gluten 250g - Safina",
    "category": "Sans Gluten",
    "price": 7.5,
    "image": "assets/produit-51.webp",
    "available": true,
    "details": ""
  },
  {
    "id": 52,
    "name": "Coude Sans Gluten 500g - Safina",
    "category": "Sans Gluten",
    "price": 7.5,
    "image": "assets/produit-52.webp",
    "available": true,
    "details": ""
  },
  {
    "id": 53,
    "name": "Anabolic Mass Gainer",
    "category": "Compléments Alimentaires",
    "price": 195.0,
    "image": "assets/produit-53.webp",
    "available": true,
    "details": "L'Innovation : Avoine Instantanée et Haute Digestibilité\nContrairement aux gainers classiques utilisant des sucres simples, notre formule utilise de l'avoine pré-cuite à la vapeur. Ce procédé de gélatinisation facilite l'assimilation et réduit la présence de phytates, optimisant ainsi l'absorption des nutriments essentiels.\n\nLa Chélation : L'Expertise des Minéraux IMPACT\nL'utilisation du Bisglycinate de Fer et de Zinc garantit une biodisponibilité optimisée. Contrairement aux sels minéraux classiques (oxydes), la forme chélatée est :\n• Hautement Assimilable : Utilise les voies d'absorption des peptides.\n• Neutre et Stable : Prévient les interactions entre nutriments.\n• Confort Intestinal : Forme douce pour l'organisme, même en phase intensive.\n\nSoutien du Métabolisme et Récupération (Ratio 4:1)\nLe ratio 4:1 (Glucides/Protéines) est étudié pour la recharge énergétique et le soutien musculaire :\n• Restauration de l'Énergie : La combinaison de maltodextrine DE19 et dextrose assure une recharge efficace des réserves de glycogène.\n• Maintien de la Masse : La Whey concentrée apporte les acides aminés essentiels à la synthèse protéique.\n• Transport de l'Oxygène : Le fer contribue à la formation normale de l'hémoglobine pour soutenir l'effort.\n\nL'Avis de notre Expert :\n\"Optimiser la masse musculaire nécessite une nutrition de précision. Avec l'Anabolic Mass Gainer, nous avons sélectionné des ingrédients à haute biodisponibilité pour maximiser l'utilisation réelle des nutriments. C'est une solution conçue pour ceux qui exigent des résultats tout en préservant leur confort digestif.\"\n\nIngrédients :\nMaltodextrine DE19, Dextrose Monohydrate, Farine d'Avoine Instantanée (Avena sativa), Concentré de Protéines de Lactosérum (WHEY) (avec lécithine de tournesol), Cacao alcalinisé*, Arômes, Chlorure de Sodium, Épaississant : carboxyméthylcellulose, Vitamines & Minéraux [Vitamine C, Bisglycinate de Fer, Bisglycinate de Zinc, Vitamine E, Vitamine B3, Vitamine B5, Vitamine B2, Vitamine B6, Vitamine B1, Vitamine D3, Vitamine B9].\n\nAllergènes : Lait (Whey), Gluten (Avoine)."
  },
  {
    "id": 54,
    "name": "Collagen-C Fuse - OmniCol®120",
    "category": "Compléments Alimentaires",
    "price": 75.0,
    "image": "assets/produit-54.webp",
    "available": true,
    "details": "OmniCol™ 120 : La Science des Peptides Courts\nContrairement au collagène natif dont le poids moléculaire est trop élevé pour une assimilation efficace, notre CollaGène-C Fuse utilise la technologie OmniCol™ 120. Par un procédé d'hydrolyse enzymatique contrôlée, le collagène est découpé en peptides de bas poids moléculaire. Cette structure \"pré-digérée\" favorise une traversée rapide de la barrière intestinale pour une distribution optimale vers les tissus cibles : derme, tendons et articulations.\n\nLe Duo Indispensable : Collagène & Vitamine C\nLa synthèse naturelle du collagène est un processus biochimique qui nécessite la présence d'Acide L-ascorbique (Vitamine C). Elle agit comme un co-facteur essentiel pour les enzymes responsables de la stabilisation de la triple hélice de collagène. Sans cet apport, l'efficacité des peptides ingérés ne peut être pleinement exploitée par l'organisme.\n\nAcides Aminés Architectes : Glycine, Proline & Hydroxyproline\nNotre formulation présente une concentration record en acides aminés fondamentaux pour la matrice extracellulaire :\n• Glycine (2,1g) : Acide aminé pilier de la structure protéique et du métabolisme cellulaire.\n• Hydroxyproline (1,0g) : Spécifique au collagène, elle assure la stabilité et la résistance des tissus.\n• Proline (1,2g) : Contribue à la souplesse articulaire et au maintien de l'élasticité cutanée.\n\nBénéfices Physiologiques Clés :\n• Soutien Articulaire : Aide à maintenir l'intégrité des cartilages sollicités par l'entraînement.\n• Intégrité des Tendons : Idéal pour accompagner la récupération des tissus conjonctifs (tendons, ligaments).\n• Élasticité du Derme : Participe à la fermeté et à l'hydratation de la peau de l'intérieur.\n\nL'Avis de notre Expert :\n\"Le collagène est le pilier structurel de l'organisme. Avec CollaGène-C Fuse, nous proposons une matrice de soutien de haute pureté. L'utilisation du label OmniCol™ 120 garantit une biodisponibilité de référence pour accompagner les athlètes dans la préservation de leur capital articulaire.\"\n\nIngrédients :\nCollagène hydrolysé [OmniCol 120TM*], Régulateur d’acidité : Acide Citrique anhydre, Arômes Naturels, Vitamine C (Acide L-Ascorbique), Emulsifiant : Lécithine de Tournesol, Colorants Naturels [Extraits de Betterave/Curcumine], Edulcorant : Sucralose.\n\n*OmniCol 120 est un collagène hydrolysé de source bovine (Halal) particulièrement riche en peptides actifs.\n\nAminogramme\nPar dose recommandée de 10g (9g de Collagène) :\nGlycine* 2,1g\nHydroxyProline* 1,0g\nProline* 1,2g\nAlanine 0,8g\nArginine 0,7g\nAcide Aspartique 0,5g\nGlutamine 0,9g\nTyrosine 0,05g\nSérine 0,3g\n*Riche en Glycine, Hydroxyproline et Proline 4,3g\n\nAcides aminés essentiels EAA :\nHistidine 0,1g\nIsoleucine 0,1g\nLeucine 0,3g\nLysine 0,3g\nMéthionine 0,1g\nPhénylalanine 0,2g\nThréonine 0,2g\nValine 0,2g"
  },
  {
    "id": 55,
    "name": "Creatine Monohydrate",
    "category": "Compléments Alimentaires",
    "price": 28.0,
    "image": "assets/produit-55.webp",
    "available": true,
    "details": "Le Carburant Cellulaire de l'Effort Explosif\nLa créatine est l'un des compléments les plus étudiés par la science du sport. Au sein de la fibre musculaire, elle est stockée sous forme de Phosphocréatine (PCr). Lors d'un effort de haute intensité, elle intervient directement pour soutenir la resynthèse de l'ATP (Adénosine Triphosphate), la source d'énergie primaire de vos cellules.\n\nMicronisation 200 Mesh : La Science de la Solubilité\nLa plupart des créatines standard ont une granulométrie grossière qui limite leur absorption. Notre Créatine IMPACT bénéficie d'un filtrage à 200 Mesh :\n• Assimilation Optimisée : Les particules ultra-fines facilitent le passage intestinal et réduisent les risques d'inconfort gastrique.\n• Dispersion Totale : Elle reste en suspension parfaite dans l'eau ou votre shaker de protéines, sans dépôt au fond du verre.\n\nCertification HPLC : La Garantie de Pureté\nChaque lot est soumis à une Chromatographie Liquide Haute Performance (HPLC). Ce standard de qualité laboratoire permet de certifier :\n• L'absence de Créatinine : Aucun déchet métabolique résiduel.\n• Sécurité Totale : Garantie sans métaux lourds et sans substances interdites, répondant aux exigences des athlètes de haut niveau.\n\nBénéfices Physiologiques Clés :\n• Performance de Haute Intensité : Augmente les capacités physiques lors de séries d'exercices brefs et intenses.\n• Soutien de l'Hydratation Cellulaire : Favorise un environnement intracellulaire propice à la synthèse protéique.\n• Récupération Énergétique : Accélère la restauration des stocks de phosphocréatine après l'entraînement.\n\nL'Avis de notre Expert :\n\"La créatine est l'outil fondamental de la performance. Avec une pureté de 99.9% et une micronisation poussée à 200 Mesh, nous éliminons tous les freins à l'absorption (confort digestif et solubilité). C'est le standard de référence pour tout athlète cherchant à optimiser son volume de travail.\"\n\nIngrédients :\nMonohydrate de Créatine micronisé (Pureté certifiée HPLC).\n\nGaranti sans excipients, sans nanoparticules et sans additifs.\n\nConvient aux régimes végétariens et végétaliens."
  },
  {
    "id": 56,
    "name": "Essential Gainer",
    "category": "Compléments Alimentaires",
    "price": 160.0,
    "image": "assets/produit-56.webp",
    "available": true,
    "details": "L'Équilibre Nutritionnel : Pourquoi le Ratio 32/48 est-il Idéal ?\nContrairement aux gainers classiques saturés en sucres simples, l'Essential Gainer se concentre sur un équilibre nutritionnel de haut niveau : 32% de protéines pour 48% de glucides complexes. Cette répartition garantit que l'apport calorique est utilisé de manière optimale pour le soutien des tissus contractiles et la recharge énergétique.\n\nLe Pouvoir de l'Avoine Complète (Avena Sativa)\nL'avoine est la céréale de référence pour l'apport énergétique de l'athlète. Elle offre des avantages supérieurs aux glucides simples :\n• Libération d'Énergie Stable : Les fibres solubles (bêta-glucanes) lissent la réponse glycémique, évitant ainsi les fluctuations d'énergie post-shaker.\n• Satiété Naturelle : Aide à maintenir un contrôle strict de votre diète en limitant les fringales entre les repas.\n• Nutriments Bruts : Apporte des minéraux et des fibres essentiels au métabolisme général.\n\nWhey Concentrée de Qualité Supérieure\nNotre source de protéines est un concentré de lactosérum micro-filtré, préservant les fractions biologiquement actives. Avec 32g de protéines par portion de 100g, l'Essential Gainer apporte un spectre complet en BCAA et en Acide Glutamique, fondamentaux pour la récupération après des séances intensives.\n\nBénéfices Physiologiques Clés :\n• Croissance Musculaire de Qualité : Soutient le développement de la masse musculaire sèche et la densité physique.\n• Récupération des Réserves d'Énergie : Recharge efficacement les stocks de glycogène après l'effort.\n• Confort Digestif : La présence de fibres d'avoine et l'absence d'additifs synthétiques garantissent une digestion fluide et légère.\n\nL'Avis de notre Expert :\n\"L'Essential Gainer est conçu pour l'athlète qui refuse de choisir entre volume et définition. En combinant la haute valeur biologique de la Whey avec la noblesse de l'Avoine complète, nous offrons une solution qui respecte votre équilibre métabolique. C'est le carburant idéal pour construire un physique dense, esthétique et performant.\"\n\nIngrédients :\nConcentré de Protéines de Petit-Lait (avec Lécithine de Tournesol), Avoine Complet Moulu (Qualité instantanée), Maltodextrine DE19, Dextrose (Maïs), Cacao alacinisé en Poudre*, Arômes, Sel*, Épaississant (Carboxyméthylcellulose Végétale), Édulcorant (Sucralose).\n\nGaranti sans soja et sans nanoparticules. Contient du lait et du gluten (avoine)."
  },
  {
    "id": 57,
    "name": "Instant Protein Bar Peanut & Choco",
    "category": "Compléments Alimentaires",
    "price": 6.5,
    "image": "assets/produit-57.webp",
    "available": true,
    "details": "Omnicol™ 120 : Au-delà du Muscle, la Structure\nContrairement aux barres standards, la Protein Bar IMPACT intègre du collagène bovin hydrolysé Omnicol™ 120.\n• Réparation des Tendons : Apporte les acides aminés spécifiques (Proline, Hydroxyproline) nécessaires à l'intégrité des articulations.\n• Biodisponibilité Totale : Les peptides de collagène sont pré-digérés par hydrolyse enzymatique pour une absorption métabolique immédiate.\n\nLa Stratégie \"Net Carbs\" : 1.9g de Pure Performance\nPour l'athlète attentif à sa santé métabolique, la gestion des sucres est la priorité.\n• Index Glycémique Maîtrisé : L'utilisation de Maltitol et de Sucralose permet de limiter l'impact sur la glycémie.\n• Lipolyse Préservée : L'absence de pic d'insuline brutal permet de maintenir l'utilisation des graisses à des fins énergétiques, même après la collation.\n• Énergie Stable : Évite les sensations de fatigue ou les baisses de régime post-prandiales.\n\nTri-Source Protéique : Diffusion Séquentielle Prolongée\nL'association de trois sources garantit une fenêtre de disponibilité en acides aminés étendue :\n• Whey : Libération rapide d'acides aminés pour un soutien immédiat.\n• Collagène : Support structurel ciblé pour les tissus conjonctifs.\n• Caséine Micellaire : Diffusion lente (jusqu'à 4h) pour un apport constant entre les repas ou après l'entraînement.\n\nIngrédients :\nMatrice Protéique [Concentré de Protéines de Petit-Lait (WHEY), Concentré de Caséine Micellaire, Collagène Hydrolysé Omnicol™ 120], Édulcorants : Sirop de Maltitol Maltitaste®, Sucralose. Couverture Chocolatée sans sucres [Maltitol, Huile de Palmiste, Cacao, Lactosérum]. Inclusions : Cacahuètes Grillées, Beurre de Cacahuètes. Fibres Solubles Nutriose® (Dextrine de blé). Arôme Naturel, Lécithine de Tournesol, Cacao Alcalinisé, Sel.\n\nAllergènes : Lait, Cacahuètes, Gluten (traces).\n\nGarantie : Sans sucres ajoutés, sans nanoparticules."
  },
  {
    "id": 58,
    "name": "Intensive Carbomass",
    "category": "Compléments Alimentaires",
    "price": 135.0,
    "image": "assets/produit-58.webp",
    "available": true,
    "details": "L'Innovation Naturelle : La Farine de Dattes (Phoenix Dactylifera-L)\nL'Intensive Carbomass se distingue par l'intégration de la farine de dattes, une source de glucides brute et performante. Contrairement aux sources 100% synthétiques, la datte apporte un mélange complexe de fructose et glucose associé à des minéraux naturels. Cela permet une recharge en glycogène stable, évitant les fluctuations d'énergie durant vos séances les plus exigeantes.\n\nMatrice Protéique à Libération Étagée\nPour soutenir la construction musculaire, l'organisme nécessite une présence constante d'acides aminés. Notre matrice combine trois sources complémentaires :\n• Whey (Isolat & Concentré) : Pour une biodisponibilité immédiate post-entraînement.\n• Protéine de Riz : Pour un profil d'acides aminés élargi et une digestibilité optimisée.\n• Caséine Micellaire : Pour assurer un apport protéique prolongé, favorisant la préservation musculaire entre les repas.\n\nPuissance et Soutien Métabolique\nAvec 5g de Créatine Monohydrate par portion, cette formule soutient la resynthèse de l'ATP pour une intensité d'entraînement supérieure. L'ajout d'un complexe de vitamines (B6, B9, B12) est essentiel pour :\n• La synthèse normale des acides aminés.\n• La réduction de la fatigue liée aux entraînements de haute résistance.\n• Le soutien du métabolisme énergétique.\n\nL'Avis de notre Expert :\n\"L'Intensive Carbomass est conçu pour les athlètes qui brûlent beaucoup de calories. Sa force réside dans sa densité glucidique naturelle et sa matrice protéique intelligente qui soutient le muscle sur la durée. C'est le carburant idéal pour optimiser le volume musculaire tout en maintenant une énergie constante.\"\n\nIngrédients :\nMatrice de Carbohydrates multi-sources [Maltodextrine, Dextrose, Farine de Dates (Phoenix Dactylifera-L), Sucrose (avec Amidon)], Matrice multiphase protéique [Concentré de Protéines de Petit-Lait (WHEY), Isolat de Protéines de Riz, Concentré de Caséine Micellaire, Isolat de Protéines de Petit-Lait (WHEY)], Monohydrate de Créatine, Cacao Alcalinisé*, Arômes, Lécithine de Tournesol, Épaississant : Carboxyméthylcellulose, Édulcorant : sucralose, 7 Vitamines hydrosolubles (C, B3, E, B6, B12, B2, B1, B9).\n\nInformations allergènes : Contient du lait. Sans Gluten."
  },
  {
    "id": 59,
    "name": "Konjac Gum",
    "category": "Compléments Alimentaires",
    "price": 34.0,
    "image": "assets/produit-59.webp",
    "available": true,
    "details": "Le Pouvoir du Glucomannane : Une Fibre d'Exception\nLe Konjac est une racine utilisée depuis des siècles pour ses vertus nutritionnelles uniques. Son secret réside dans le Glucomannane, une fibre soluble dotée d'une capacité d'absorption d'eau exceptionnelle (jusqu'à 50 fois son poids). IMPACT NUTRITION utilise un extrait purifié à 90%, garantissant une viscosité et une efficacité mécanique de premier ordre.\n\nMécanisme d'Action : La Satiété par Viscosité\nUne fois ingéré avec un volume d'eau suffisant, le glucomannane se transforme en un gel visqueux non calorique qui occupe une partie du volume gastrique :\n• Régulation de l'Appétit : La distension naturelle de l'estomac envoie un signal de satiété précoce au cerveau.\n• Cinétique Digestive : Le gel ralentit la vidange gastrique, prolongeant durablement la sensation de plénitude après le repas.\n• Modulation Glycémique : En emprisonnant une partie des sucres et graisses alimentaires, il aide à lisser les pics d'insuline post-prandiaux.\n\nUn Allié de Choix pour la Composition Corporelle\nContrairement aux solutions à base de stimulants, le Konjac agit de manière totalement mécanique. C'est l'outil idéal pour :\n• Réduire l'apport calorique spontané lors des repas principaux.\n• Limiter les envies de grignotage entre les prises alimentaires.\n• Soutenir le transit intestinal, souvent ralenti lors des phases de régime restrictif.\n\nL'Avis de notre Expert :\n\"Le Konjac est la réponse nutritionnelle idéale au principal obstacle du déficit calorique : la faim. En utilisant une standardisation élevée à 90%, nous offrons une fibre de haute pureté capable de réguler l'appétit sans solliciter le système nerveux. C'est le pilier d'une stratégie de gestion du poids saine et durable.\"\n\nIngrédients :\nExtrait de Rhizomes de Konjac (Amorphophallus konjac) standardisé à 90% de Glucomannanes. Enveloppe de la gélule : Gélatine bovine (ou HPMC si végétalien).\n\nGaranti sans OGM, sans allergènes et sans excipients de charge."
  },
{
  "id": 60,
  "name": "Platinum Isolate",
  "category": "Compléments Alimentaires",
  "price": 250.0,
  "image": "assets/produit-60.webp",
  "available": true,
  "details": "Technologie de Micro-Filtration à Flux Croisé (CFM) La Platinum Isolate d'IMPACT NUTRITION est obtenue par un procédé de micro-filtration à froid (CFM) qui préserve l'intégrité biologique des peptides de lactosérum.\n\nL'Engagement Sans Amino-Spiking : Contrairement aux pratiques courantes consistant à ajouter des acides aminés bon marché pour fausser les taux de protéines, nous garantissons un Aminogramme 100% Natif. Les 27g de protéines proviennent exclusivement du lait, assurant une concentration réelle en BCAA et EAA, fondamentaux pour activer la synthèse des fibres musculaires.\n\nPureté Digestive et Objectif Définition Avec moins de 0,6g de lactose par portion, la Platinum Isolate est virtuellement sans sucre et sans graisses. C'est le choix de référence pour les phases de définition musculaire exigeantes ou pour les athlètes ayant une sensibilité digestive particulière. Notre formule est garantie sans aspartame, sans conservateurs et sans colorants de synthèse.\n\nBénéfices Physiologiques Clés :\n\nSynthèse Protéique Accrue : Sa haute teneur en Leucine (2,8g) stimule les processus naturels de construction musculaire.\n\nMaintien de l'Intégrité Musculaire : Contribue à protéger les fibres lors d'entraînements de haute intensité.\n\nL'Avis de notre Expert : \"La Platinum Isolate est un outil de précision. C'est la solution idéale pour l'athlète exigeant qui refuse tout compromis entre performance, goût et confort intestinal.\"\nIngrédients\nIsolat de protéines de Petit-Lait (100%) , cacao alcalinisé en poudre*, arômes, épaississants (carboxyméthylcellulose, gomme xanthane), chlorure de sodium, Extrait de Betterave**, édulcorant (sucralose).\n\nAllergènes : Lait et dérivés. Garanti sans gluten, sans conservateurs et sans sucres ajoutés."
},
{
  "id": 61,
  "name": "Premium Whey ENHANCED",
  "category": "Compléments Alimentaires",
  "price": 75.0,
  "image": "assets/produit-61.webp",
  "available": true,
  "details": "atique au service de la Performance Une consommation élevée de protéines peut solliciter les capacités enzymatiques naturelles. La Premium Whey Enhanced intègre le complexe breveté DigeZyme®, une synergie de 5 enzymes clés pour optimiser chaque étape de la digestion :\n\nProtéase : Facilite la décomposition des protéines en peptides et acides aminés pour une assimilation optimisée.\n\nLactase : Aide à la digestion du lactose pour un confort intestinal sans gaz ni lourdeurs.\n\nLipase & Amylase : Soutiennent la dégradation des nutriments associés lors de vos collations.\n\nCellulase : Participe à la digestion des fibres végétales.\n\nProfil Natif et Haute Valeur Biologique Contrairement aux protéines traitées à haute température, notre procédé de micro-filtration à froid préserve le profil natif des acides aminés. La structure moléculaire reste intacte et parfaitement reconnue par l'organisme. Avec un aminogramme riche en EAA (Acides Aminés Essentiels), vous apportez à votre corps les briques fondamentales nécessaires pour soutenir les tissus sollicités par l'entraînement.\n\nBénéfices Physiologiques Clés :\n\nSynthèse Protéique Optimisée : Grâce à une hydrolyse enzymatique facilitée pour une arrivée rapide des acides aminés dans le sang.\n\nConfort Gastrique Absolu : Élimine la sensation de lourdeur abdominale souvent liée aux shakers de protéines classiques.\n\nPolyvalence Métabolique : Une solution idéale en période de définition musculaire comme en phase de développement.\n\nL'Avis de notre Expert : \"La Premium Whey Enhanced est conçue pour l'athlète qui exige une efficacité réelle. En associant un concentré de haute pureté au complexe DigeZyme®, nous garantissons que chaque gramme de protéine est réellement exploité par vos muscles. C’est l’équilibre parfait entre performance brute et bien-être digestif.\"\nIngrédients\nConcentré de Protéines de Petit-Lait (WHEY) (avec Lécithine de Tournesol), Cacao Alcalinisé*, Arômes naturels, Épaississants (Gomme Xanthane, Gomme Guar), Complexe DigeZyme® [Alpha-amylase, Protéase Neutre, Cellulase, Lactase, Lipase], Chlorure de sodium, Colorants Naturels [Extrait de curcumine/betterave]**, Édulcorant (Sucralose).\n\nAllergènes : Lait (Whey). Garanti sans gluten."
},
{
  "id": 62,
  "name": "Vitamins Essential",
  "category": "Compléments Alimentaires",
  "price": 42.5,
  "image": "assets/produit-62.webp",
  "available": true,
  "details": "Vitamin Essentials : Le Pilier de l'Équilibre Micronutritionnel Dans un mode de vie actif, les besoins en micronutriments sont accrus. Le complexe Vitamin Essentials a été formulé pour apporter une réponse précise et équilibrée aux besoins quotidiens des athlètes et des adultes actifs. Cette matrice de haute précision permet de sécuriser vos apports et de soutenir vos fonctions vitales.\n\nSynergie des Vitamines et Minéraux de Haute Précision\n\nMétabolisme Énergétique : Les vitamines B1, B2, B3, B5, B6 et B12 sont des co-facteurs indispensables à la production d'ATP (énergie cellulaire).\n\nProtection Antioxydante : Les vitamines C et E aident à protéger les cellules contre le stress oxydatif induit par l'effort ou l'environnement.\n\nSoutien Structurel & Musculaire : La vitamine D3 contribue au maintien d'une ossature normale et d'une fonction musculaire optimale.\n\nRenouvellement Cellulaire : Les vitamines B9 et B12 jouent un rôle essentiel dans le processus de division cellulaire et le soutien des tissus.\n\nL'Avantage des Chélates (Fer & Zinc) Contrairement aux multivitamines standards utilisant des oxydes peu assimilables, Vitamin Essentials intègre du Fer et du Zinc sous forme Bisglycinate. Cette technologie de chélation garantit que les minéraux traversent la barrière stomacale sans irritation et avec une biodisponibilité maximale.\n\nBénéfices Physiologiques Clés :\n\nRéduction de la Fatigue : Grâce à l'action combinée des vitamines du groupe B et du Fer.\n\nRenforcement des Défenses : Le Zinc et la Vitamine C soutiennent la réponse immunitaire naturelle.\n\nOptimisation de la Récupération : Aide l'organisme à maintenir ses fonctions métaboliques durant les phases d'entraînement intensif.\n\nL'Avis de notre Expert : \"La micronutrition est le socle de la performance durable. Vitamin Essentials n'est pas un simple multivitaminé, c'est une formule de haute pureté qui privilégie la qualité des transporteurs (chélates) pour garantir une utilisation réelle par vos cellules. C'est l'assurance quotidienne d'un métabolisme qui fonctionne à son plein potentiel.\"\nIngrédients\nAcide L-ascorbique (Vitamine C), Bisglycinate de Fer, Bisglycinate de Zinc, Nicotinamide (Vitamine B3), D-alpha tocophérol acétate (Vitamine E), Panthoténate de calcium (Vitamine B5), Chlorhydrate de Pyridoxine (Vitamine B6), Thiamine HCL (Vitamine B1), Riboflavine (Vitamine B2), Acide folique (Vitamine B9), Cholécalciférol (Vitamine D3), Cyanocobalamine (Vitamine B12). Agent de charge : Maltodextrine.\n\nGaranti sans gluten, sans lactose, sans colorants de synthèse et sans conservateurs."
},
{
  "id": 63,
  "name": "PACK PERFORMANCE STARTER",
  "category": "Compléments Alimentaires",
  "price": 89.0,
  "image": "assets/produit-63.webp",
  "available": true,
  "details": "1. Introduction Orientée\nÀ qui s’adresse le pack : Ce pack est idéal pour les pratiquants de musculation et athlètes cherchant un protocole complet et précis pour stimuler la synthèse protéique, augmenter la force explosive et optimiser leur récupération post-effort.\nRésultat attendu : Gain de masse musculaire sèche, augmentation de la puissance musculaire sur les efforts courts et répétés, et accélération de la régénération tissulaire après l'entraînement.\nDurée recommandée : Cycle intensif de 30 jours (correspondant à 30 doses de créatine et 16 portions quotidiennes de whey).\nType d’entraînement : Entraînements de force, d'hypertrophie (Splits, Push-Pull-Legs) ou disciplines explosives nécessitant un apport énergétique de haute valeur et une assimilation ultra-rapide.\n2. Pourquoi ces produits ensemble ? (Synergie unique)\nLe PACK PERFORMANCE STARTER repose sur l'association fondamentale la plus validée scientifiquement en nutrition sportive : la protéine native ultra-filtrée et le monohydrate de créatine pure.\n\nEnhanced Premium Whey 500g (La matrice d'assimilation) : Élaborée à partir d'un concentré de protéine natif enrichi en complexe multi-enzymatique DigeZyme® (5 enzymes clés), elle fournit 23g de protéines, 11g d'EAA et 5g de BCAA par portion. Elle garantit une biodisponibilité maximale tout en évitant les inconforts digestifs.\nCreatine Monohydrate 90g (Le moteur de puissance) : Titrée à 100% de pureté (3g de créatine pure par portion de 3g), elle resynthétise l'ATP cellulaire, augmente l'hydratation intracellulaire et optimise le travail de force maximale et la surcharge progressive.\nShaker Smart Impact (L'outil de préparation) : Conçu pour un mélange instantané et homogène, garantissant la solubilité parfaite de vos compléments sans grumeaux, à la salle comme en déplacement.\nBénéfices combinés : La prise conjointe de protéines à haute valeur biologique et de créatine améliore le transport de la créatine vers la cellule musculaire grâce au pic d'insuline physiologique et stimule la voie mTOR pour une synthèse protéique maximale.\n3. Comment utiliser le pack\nProtocole d'utilisation quotidienne pour maximiser la rétention azotée et la saturation en créatine :\n\nJours d'entraînement (Post-Effort immédiat) : Mélanger 1 scoop de Enhanced Premium Whey (31.5g) avec 1 scoop de Creatine Monohydrate (3g) dans 200 à 250ml d'eau fraîche dans votre Shaker Smart. Consommer dans les 30 minutes suivant la fin de la séance.\nJours de repos : Prendre 1 scoop de Creatine Monohydrate (3g) le matin avec un verre d'eau ou une collation protéique pour maintenir la saturation musculaire en phosphocréatine.\nCollation protéique (Si besoin) : 1 portion de Enhanced Premium Whey en milieu de matinée ou d'après-midi pour combler vos besoins quotidiens en acides aminés.\n4. Résultats attendus\nObjectif\tImpact du Pack Performance Starter\nSynthèse Protéique\tHyperaminoacidémie rapide après l'effort assurée par l'apport natif riche en EAA et BCAA.\nForce Explosive\tGain de puissance et meilleure capacité de répétition sur les séries lourdes grâce au rechargement de l'ATP.\nConfort Digestif\tEnrichissement en DigeZyme® permettant une assimilation enzymatique fluide sans lourdeur ni ballonnements.\nRestauration Glycogénique\tAccélération du processus de reconstruction des fibres musculaires lésées durant l'entraînement.\n5. FAQ spécifique au pack\nPeut-on mélanger la créatine et la whey dans le même shaker ?\n\nRéponse : Tout à fait. C'est même la méthode recommandée en post-entraînement : la réponse insulinique induite par la protéine facilite l'absorption cellulaire et le stockage de la créatine dans le muscle.\n\nCombien de temps dure ce pack ?\n\nRéponse : Le pot de Creatine Monohydrate (90g) offre exactement 30 doses journalières de 3g (soit 1 mois complet). Le sachet de Enhanced Premium Whey (504g) contient 16 portions de 31.5g, parfaites pour couvrir l'ensemble de vos séances d'entraînement sur la période."
},
{
  "id": 64,
  "name": "PACK ANABOLIC GAIN & PERFORMANCE",
  "category": "Compléments Alimentaires",
  "price": 220.2,
  "image": "assets/produit-64.webp",
  "available": true,
  "details": "1. Introduction Orientée\nÀ qui s’adresse le pack : Ce pack s'adresse aux athlètes, pratiquants de musculation intensive et \"hardgainers\" cherchant un surplus calorique massif combiné à un soutien ergonomique de la puissance musculaire et de l'efficience métabolique.\nRésultat attendu : Prise de masse globale rapide, augmentation de la force explosive lors des séries à haute intensité et optimisation du métabolisme énergétique cellulaire avec soutien anti-fatigue.\nDurée recommandée : Programme de 30 jours (correspondant à 30 doses journalières de Creatine Monohydrate et My Vitamin, et une recharge hyper-énergétique en Anabolic Mass Gainer).\nType d’entraînement : Cycles d'hypertrophie musculaire, cycles de force lourde, ou périodes de charge d'entraînement à forte dépense énergétique.\n2. Pourquoi ces produits ensemble ? (Synergie unique)\nLe PACK ANABOLIC GAIN & PERFORMANCE associe la densité macro-nutritionnelle d'un gainer hyper-énergétique aux ergogènes cellulaires et cofacteurs micronutritionnels essentiels.\n\nANABOLIC MASS GAINER (5 kg - Le complexe hyper-énergétique) : Formulée avec un ratio glucides:protéines de 4:1 (52g de protéines de whey et d'avoine, 208g de glucides et 1125 kcal par portion), cette matrice apporte les briques structurales et l'énergie nécessaires à la rétention azotée et à l'anabolisme.\nCREATINE MONOHYDRATE (90 g - L'amplificateur de resynthèse d'ATP) : Fournit 3g de créatine pure à 100% par dose (30 doses). Elle sature les stocks de phosphocréatine intramyocellulaire pour maximiser la force pure et l'hydratation cellulaire.\nMY VITAMIN ADVANCED FORMULA (30 gélules - Le catalyseur hydrosoluble) : Complexe synergique de 7 vitamines hydrosolubles (notamment les vitamines du complexe B et la vitamine C) agissant comme cofacteurs enzymatiques cruciaux dans le métabolisme des glucides, des protéines et la réduction de la fatigue.\nBénéfices combinés : La réponse insulinique induite par le complexe glucidique d'Anabolic Mass Gainer stimule le cotransport sodium-créatine, optimisant la capture de la Creatine Monohydrate par la cellule musculaire. En parallèle, les vitamines hydrosolubles de My Vitamin agissent comme catalyseurs du métabolisme des macronutriments consommés.\n3. Comment utiliser le pack\nProtocole quotidien d'administration synchronisée pour optimiser l'assimilation et la réponse anabolique :\n\nJours d'entraînement :\nLe matin (au petit-déjeuner) : Consommer 1 gélule de My Vitamin avec un grand verre d'eau pour activer les métabolismes énergétiques.\nPost-entraînement immédiat : Mélanger 1 portion d'Anabolic Mass Gainer avec 1 dose de 3g de Creatine Monohydrate dans 400 à 500 ml d'eau. La fenetre anabolique et le pic d'insuline maximiseront la recharge en glycogène et le stockage de la créatine.\nJours de repos :\nLe matin : Consommer 1 gélule de My Vitamin et 1 dose de 3g de Creatine Monohydrate avec un repas ou une boisson.\nEn collation (10h ou 16h) : Consommer 1 portion d'Anabolic Mass Gainer entre les repas pour maintenir le surplus calorique requis.\n4. Résultats attendus\nObjectif\tImpact du Pack Anabolic Gain & Performance\nPrise de Masse & Hypertrophie\tSurplus calorique maîtrisé (1125 kcal) associé à 52g de protéines sériques et d'avoine pour stimuler la synthèse protéique.\nForce & Puissance Explosive\tSaturation des réserves de phosphocréatine intracellulaire grâce aux 3g de créatine monohydrate pure par jour.\nEfficience Métabolique\tLes 7 vitamines hydrosolubles optimisent la dégradation et la mise à disposition des substrats énergétiques (glucides/protéines).\nRécupération Intracellulaire\tResynthèse accélérée du glycogène musculaire et protection contre le stress oxydatif induit par l'exercice intense.\n5. FAQ spécifique au pack\nPourquoi consommer la Creatine Monohydrate en même temps que l'Anabolic Mass Gainer ?\n\nRéponse : L'apport massif de glucides complexes issus du gainer déclenche la sécrétion d'insuline. L'insuline stimule les transporteurs myocellulaires de créatine (CRT1), ce qui accroît significativement sa rétention musculaire par rapport à une prise isolée dans de l'eau.\n\nQuelle est la durée couverte par ce pack ?\n\nRéponse : Ce pack est calibré pour une cure de 30 jours complets. Le pot de Creatine Monohydrate (90g) fournit exactement 30 doses de 3g, et le pilulier My Vitamin contient 30 gélules (1 gélule/jour)."
},
{
  "id": 65,
  "name": "VITAMIN D3+K2 (MK-7) WEIGHTWORLD - 365TABLETS",
  "category": "Compléments Alimentaires",
  "price": 159.0,
  "image": "assets/produit-65.webp",
  "available": true,
  "details": "Renforcez votre capital osseux, votre immunité et vos performances musculaires avec le duo synergique Vitamine D3 & K2 MK-7 de WeightWorld. Conçue pour assurer une absorption et une fixation optimales du calcium, cette formule hautement dosée est indispensable pour pallier le manque d'exposition solaire et soutenir les athlètes intensifs en Tunisie."
},
{
  "id": 66,
  "name": "Magnesium Bisglycinate + Vitamine B6, 1422 mg – weightworld",
  "category": "Compléments Alimentaires",
  "price": 159.0,
  "image": "assets/produit-66.webp",
  "available": true,
  "details": "Magnesium Bisglycinate + Vitamine B6, 1422mg\nLe magnésium haute absorption pour votre bien-être et vos performances\nMagnesium Bisglycinate + Vitamine B6, 1422mg est un complément alimentaire premium conçu pour soutenir le fonctionnement musculaire, réduire la fatigue et améliorer le bien-être général Grâce à la forme bisglycinate, reconnue pour sa haute biodisponibilité, ce magnésium est mieux absorbé par l’organisme et plus doux pour le système digestif.\n\nEnrichi en vitamine B6, ce complément contribue également au métabolisme énergétique normal, au bon fonctionnement du système nerveux et à la réduction du stress et de la fatigue\n\nPourquoi choisir le Magnesium Bisglycinate ?\nContrairement aux formes classiques de magnésium, le bisglycinate offre une absorption optimale et une excellente tolérance digestive. Magnesium Bisglycinate + Vitamine B6, 1422mg est idéal pour les sportifs, les personnes actives et toute personne souhaitant améliorer son équilibre quotidien.\n\nCe complément est particulièrement recommandé pour :\n\nLes avantages du Magnesium Bisglycinate + Vitamine B6\nMagnésium haute absorption\nFormule enrichie en vitamine B6\nSoutient les muscles et le système nerveux\nRéduit la fatigue physique et mentale\nExcellente tolérance digestive\nIdéal pour sportifs et personnes actives\nIdéal pour les sportifs et le quotidien\nMagnesium Bisglycinate + Vitamine B6, 1422mg est particulièrement apprécié par les sportifs pour soutenir la récupération musculaire et réduire les tensions après les entraînements Il convient également aux personnes souffrant de fatigue, stress ou manque d’énergie au quotidien.\nQuestions Fréquentes\nQ.\nCombien de gélules contient le flacon vendu par Protein.tn ?\nLe flacon contient 180 gélules. Le fabricant WeightWorld indique « Doses par boîte : 90 », la portion de référence de son tableau nutritionnel étant de 2 gélules, et décrit le format comme « 180 gélules pour 3 mois d'utilisation ». La photo du produit sur Protein.tn montre la même mention « 180 GÉLULES » et « 3 MOIS D'APPROVISIONNEMENT » sur l'étiquette.\nQ.\nQue contient exactement une portion de 2 gélules ?\nD'après le tableau « Informations nutritionnelles » du fabricant, une dose de 2 gélules apporte 1420 mg de Magnesium Glycinate, fournissant 200 mg de magnésium élémentaire (53 % des VNR), et 2 mg de vitamine B6 sous forme de chlorhydrate de pyridoxine (142 % des VNR). VNR = valeurs nutritionnelles de référence.\nQ.\nPourquoi le nom indique 1422 mg alors que le tableau annonce 1420 mg ?\nL'étiquette du flacon affiche « 1422mg PAR PORTION ». Le tableau nutritionnel du fabricant, lui, détaille les composants de cette même portion de 2 gélules : 1420 mg de Magnesium Glycinate (dont 200 mg de magnésium élémentaire) et 2 mg de vitamine B6. Les deux mentions décrivent la même portion, présentée globalement d'un côté et détaillée ligne par ligne de l'autre.\nQ.\nLe produit convient-il à un régime végétalien ? Est-il sans gluten et sans lactose ?\nWeightWorld décrit une « Formule végane, sans OGM et sans additifs controversés tels que le stéarate de magnésium », et l'étiquette porte les pictogrammes « Vegan », « Sans OGM » et « Sans Stéarate de Magnésium ». Le seul autre ingrédient déclaré est l'enveloppe de la gélule en Hypromellose (HPMC). En revanche, la fiche produit du fabricant ne publie aucune déclaration d'allergènes : nous ne pouvons donc pas confirmer ici l'absence de gluten ou de lactose.\nQ.\nOù ce complément est-il fabriqué et selon quelles normes ?\nL'étiquette du flacon porte la mention « FABRIQUÉ AU ROYAUME-UNI ». Le fabricant indique par ailleurs que le produit est « élaboré selon les normes européennes BPF et HACCP pour les compléments alimentaires » et présente une « Formule végane élaborée selon les normes BPF ».\nQ.\nY a-t-il des précautions à connaître avant d'acheter ?\nOui, telles que publiées par le fabricant : ce produit n'est pas destiné aux moins de 18 ans ; il ne doit pas se substituer à une alimentation variée et équilibrée ni à un mode de vie sain ; il convient de prendre l'avis d'un médecin avant utilisation en cas de grossesse, d'allaitement, de prise d'un médicament ou de surveillance médicale, et de cesser toute utilisation et consulter un médecin en cas d'effets secondaires. Conservation : dans un endroit frais et sec, hors de portée des enfants.\nQ.\nPourquoi choisir la forme bisglycinate plutôt qu’un autre magnésium ?\nLe bisglycinate associe le magnésium à la glycine, un acide aminé. Cette forme est appréciée pour sa biodisponibilité élevée et parce qu’elle se tolère généralement bien, là où d’autres formes de magnésium sont parfois moins confortables pour l’intestin.\nQ.\nÀ quoi sert la vitamine B6 ajoutée ?\nElle participe au métabolisme énergétique normal et au fonctionnement normal du système nerveux, et aide à réduire la fatigue. Réunie au magnésium dans la même portion, elle évite de prendre un complément séparé.\nQ.\nPeut-on le prendre avec un multivitamines ?\nOui, mais additionnez les apports : une portion de 2 gélules couvre déjà 53 % des VNR en magnésium et 142 % en vitamine B6. Si votre multivitamines en contient aussi, demandez conseil à un professionnel de santé.\nQ.\nEst-il intéressant pour les sportifs ?\nOui : le magnésium contribue au fonctionnement musculaire normal et la vitamine B6 à la réduction de la fatigue, deux points recherchés par les personnes qui s’entraînent régulièrement."
},
{
  "id": 67,
  "name": "Curcumine 95% 180 caps – weightworld",
  "category": "Compléments Alimentaires",
  "price": 159.0,
  "image": "assets/produit-67.webp",
  "available": true,
  "details": "Curcumin WeightWorld 180 Capsules – Complément alimentaire à base de curcumine\nLes caractéristiques de Curcumin WeightWorld\nMarque : WeightWorld\nProduit : Curcumin\nCatégorie : Compléments alimentaires\nIngrédient principal : Curcumine, issue du curcuma\nFormat : 180 capsules\nUtilisation : Complément alimentaire destiné à une consommation orale\nConditionnement : Flacon de 180 capsules\nLa composition exacte, le dosage par capsule et les éventuels ingrédients complémentaires doivent être vérifiés sur l'étiquette du produit.\nAchetez Curcumin WeightWorld 180 Capsules en Tunisie\nDécouvrez Curcumin WeightWorld 180 Capsules, un complément alimentaire à base de curcumine, le principal composé actif naturellement présent dans le curcuma (Curcuma longa). Reconnue pour ses propriétés antioxydantes étudiées, la curcumine est particulièrement appréciée par les personnes qui souhaitent intégrer un complément à base de plantes dans leur routine quotidienne.\nDisponible sur [Protein.tn](http://protein.tn/), votre boutique spécialisée dans les compléments alimentaires en Tunisie, Curcumin WeightWorld est proposé dans un format pratique de 180 capsules, conçu pour faciliter son utilisation au quotidien, conformément aux recommandations figurant sur l'emballage.\nQue vous recherchiez un complément à base de curcuma pour compléter votre alimentation ou que vous souhaitiez découvrir les propriétés de la curcumine, ce produit WeightWorld constitue une option à considérer.\nQu'est-ce que la curcumine ?\nLa curcumine est un composé naturellement présent dans le rhizome du curcuma, une plante utilisée depuis des siècles dans différentes traditions culinaires et médicinales.\nElle appartient à la famille des curcuminoïdes et fait l'objet de nombreuses recherches scientifiques, notamment pour ses propriétés antioxydantes et son rôle potentiel dans différents processus biologiques.\nLe curcuma est également apprécié pour sa composition végétale et sa place dans une alimentation variée et équilibrée.\n1. Une formule à base de curcumine\nLa curcumine est étudiée pour ses propriétés antioxydantes. Les antioxydants contribuent à protéger les cellules contre les effets du stress oxydatif.\n2. Un format pratique de 180 capsules\nLe flacon de 180 capsules permet de disposer d'une quantité importante de complément alimentaire. La durée d'utilisation dépend du nombre de capsules recommandé quotidiennement par le fabricant.\n3. Un complément à intégrer dans une alimentation équilibrée\nCurcumin WeightWorld peut être intégré à une routine nutritionnelle adaptée. Il ne remplace ni une alimentation variée et équilibrée ni un mode de vie sain.\n4. Une marque spécialisée dans les compléments alimentaires\nWeightWorld propose une gamme de compléments alimentaires destinés à différents besoins nutritionnels. Pour ce produit, consultez l'emballage afin de connaître précisément les ingrédients, le dosage et les recommandations du fabricant.\nComment utiliser Curcumin WeightWorld 180 Capsules ?\nRespectez les instructions et la dose journalière indiquées sur l'emballage du fabricant.\nIl est conseillé de prendre le complément conformément aux recommandations figurant sur le flacon. Ne dépassez pas la dose journalière recommandée.\nSi vous prenez des médicaments, si vous êtes enceinte ou si vous allaitez, demandez conseil à un professionnel de santé avant toute utilisation.\nÀ qui s'adresse Curcumin WeightWorld ?\nCurcumin WeightWorld s'adresse principalement aux adultes qui souhaitent intégrer un complément alimentaire à base de curcumine dans leur routine quotidienne.\nIl peut intéresser :\nLes personnes qui recherchent un complément alimentaire à base de curcuma.\nLes adultes souhaitant compléter leur alimentation avec des ingrédients d'origine végétale.\nLes personnes intéressées par les propriétés antioxydantes de la curcumine.\nLes consommateurs qui préfèrent les compléments alimentaires sous forme de capsules.\nCe produit ne doit pas être considéré comme un médicament et ne permet pas, à lui seul, de prévenir ou de traiter une maladie.\nQuestions Fréquentes\nQ.\nQue signifie la mention « 95 % » dans le nom du produit ?\nLa fiche ne détaille pas cette mention. Pour connaître la teneur exacte de l'extrait et le dosage de curcumine par capsule, reportez-vous à l'étiquette du flacon.\nQ.\nFaut-il prendre les capsules pendant un repas ?\nLa curcumine est une substance liposoluble, c'est pourquoi beaucoup de personnes la prennent au cours d'un repas. Suivez avant tout le moment et la dose indiqués par le fabricant sur l'emballage.\nQ.\nQui doit demander un avis avant de prendre de la curcumine ?\nLes femmes enceintes ou allaitantes et les personnes qui suivent un traitement médicamenteux doivent demander conseil à un professionnel de santé avant utilisation. Le produit s'adresse aux adultes.\nQ.\nComment conserver le flacon ?\nRefermez-le bien après chaque prise et gardez-le dans un endroit frais et sec, hors de portée des enfants."
},
{
  "id": 68,
  "name": "Bisglycinate de Zinc - WeightWorld | 400 comprimés",
  "category": "Compléments Alimentaires",
  "price": 119.0,
  "image": "assets/produit-68.webp",
  "available": true,
  "details": "Le Zinc Bisglycinate WeightWorld est votre allié pour un système immunitaire renforcé, des fonctions cognitives préservées et une peau, des cheveux et des ongles en pleine santé. Formulé avec du zinc bisglycinate, il assure une absorption optimale pour soutenir votre bien-être général.\n\nConseil coach : Prendre 1 comprimé tous les 2 jours, ou 2 comprimés tous les 2 jours selon vos besoins ou en suivant les recommandations de votre médecin.\nQuestions Fréquentes sur le Zinc et son Importance pour la Santé !\nComment savoir si j'ai une carence en zinc ?\n\nLes symptômes d'une carence en zinc sont graves : manque d'appétit, troubles du goût, croissance médiocre en hauteur, maturation retardée des organes génitaux, maturation retardée du squelette, éruption cutanée aux blessures et perte de cheveux.\n\nPourquoi le Zinc est-il si important?\n\nLe zinc est un minéral essentiel présent dans plus de 200 enzymes de votre corps. Il est nécessaire au métabolisme des protéines, des glucides et des acides gras.\n\nQuel type de Zinc utilisez-vous?\n\nLes comprimés de zinc de WeightWorld sont fabriqués à partir de zinc bisglycinate, et avec 1 comprimé, vous obtenez 25 mg de zinc.\n\nPuis-je partager mon zinc complément alimentaire avec ma famille?\n\nBien-sûr! c'est pour cela que nous proposons des formats économiques offrant plus de 2 ans de consommation et que vous pouvez facilement partager.\n\nIngrédients:\nZinc (sous forme de Bisglycinate de Zinc), Agent de charge : Cellulose Microcristalline, Agents liants : Sels de Magnésium d'Acides Gras (E 470 b) et Dioxyde de Silicium.\n\nInformations de sécurité :\nNe pas dépasser la dose journalière recommandée. Les compléments alimentaires ne doivent pas remplacer une alimentation variée et équilibrée et un mode de vie sain. Si vous êtes enceinte, allaitez, prenez des médicaments ou êtes sous surveillance médicale, veuillez consulter un médecin ou un professionnel de santé avant utilisation. Cesser l'utilisation et consulter un médecin si des effets indésirables surviennent. Non destiné à être utilisé par des personnes de moins de 18 ans."
},
{
  "id": 69,
  "name": "Omega 3 Fish Oil - WeightWorld | 240 Softgels",
  "category": "Compléments Alimentaires",
  "price": 159.0,
  "image": "assets/produit-69.webp",
  "available": true,
  "details": "Omega 3 Fish Oil WeightWorld – EPA & DHA haute concentration en Tunisie\nOmega 3 Fish Oil WeightWorld Tunisie est un complément alimentaire premium à base d’huile de poisson hautement purifiée, conçu pour couvrir efficacement les besoins quotidiens en acides gras essentiels oméga-3 (EPA & DHA).\n\nAvec seulement 2 capsules par jour, ce produit offre une forte concentration, sans goût de poisson ni reflux, idéal pour une utilisation quotidienne simple et confortable. Formulé par la marque britannique WeightWorld, reconnue pour ses standards de qualité élevés.\n💥 BIENFAITS & AVANTAGES CLÉS :\n❤️ Cœur : l’EPA et le DHA contribuent au fonctionnement normal du cœur*\n🧠 Cerveau : le DHA soutient les fonctions cérébrales normales*\n👁 Vision : le DHA contribue au maintien d’une vision normale*\n🔥 Équilibre lipidique : soutien du métabolisme des graisses\n😌 Confort digestif : sans goût de poisson, sans reflux\n*Allégations autorisées par l’EFSA..\n\n🧪 COMPOSITION & QUALITÉ PREMIUM :\nHuile de poisson concentrée 2000 mg (PAR PORTION – 2 SOFTGELS) \n\nOméga-3 totaux : 1100 mg\n\nEPA : 660 mg\nDHA : 440 mg\nSource marine durable : anchois sauvages\n\nCapsules molles faciles à avaler\n\n✔️ Distillation moléculaire\n✔️ Certifié IFOS (sans contaminants)\n✔️ Certifié GMP & testé par des laboratoires indépendants\n✔️ Sans arrière-goût, sans reflux\n🕒 POSOLOGIE & MODE D’EMPLOI :\nPrendre 2 softgels par jour, de préférence au cours d’un repas\nPeut être suivi en continu\nConvient aux personnes ne consommant pas régulièrement du poisson\n⏳ 240 softgels = 4 mois d’utilisation"
},
{
  "id": 70,
  "name": "Micronised Creatine Powder - Optimum Nutrition | 317g",
  "category": "Compléments Alimentaires",
  "price": 145.0,
  "image": "assets/produit-70.webp",
  "available": true,
  "details": "Optimum Nutrition Micronised Creatine Powder : Le Complément de Créatine le Plus Vendu au Monde !\nOptimum Nutrition Micronised Creatine Powder est une formule de créatine monohydrate développée par la marque leader dans le domaine de la nutrition sportive. Ce produit se distingue par son procédé de micronisation, une étape de fabrication supplémentaire qui produit une poudre de créatine beaucoup plus fine. Grâce à ce procédé, la créatine est mieux absorbée et assimilée par l'organisme et les muscles, offrant ainsi une efficacité supérieure par rapport à la créatine classique.\n\nConseil Coach: Ajouter 1 doseur à 240 ml d'eau froide et mélanger jusqu'à ce que la poudre soit dissoute. Consommation recommandée d'une portion par jour.\n\n\nÀ consommer de préférence avant\n09 / 2027\n\nPourquoi Choisir La Creatine Optimum Nutrition ?\nMicronised Creatine d'Optimum Nutrition se distingue par sa pureté et son efficacité. Elle se mélange facilement sans laisser de sensation granuleuse en bouche, contrairement à d'autres poudres de créatine. Optimum Nutrition est une marque mondialement reconnue pour ses produits de nutrition sportive de haute qualité.\n\nIngrédients : \ncréatine monohydrate. En cas d’allergies, peut contenir des traces de lait, soja, gluten, œuf, fruits à coque et arachides\n\nAVERTISSEMENT:\nCe complément alimentaire ne convient pas aux enfants jusqu’à 17 ans inclus."
},
{
  "id": 71,
  "name": "Graines de Chia 100% Naturelles - 100g",
  "category": "Sans Gluten",
  "price": 3.5,
  "image": "assets/produit-71.webp",
  "available": true,
  "details": ""
},
{
  "id": 72,
  "name": "Organic Quinoa 100g - Vedic Kitchen",
  "category": "Sans Gluten",
  "price": 6.0,
  "image": "assets/produit-72.webp",
  "available": true,
  "details": ""
},
{
  "id": 73,
  "name": "Sel Rose d'Himalaya Gros 200g - Reine des Graines",
  "category": "Sans Gluten",
  "price": 7.0,
  "image": "assets/produit-73.webp",
  "available": true,
  "details": ""
},
{
  "id": 74,
  "name": "Psyllium Sans Gluten 200g - Carthage Nutrition",
  "category": "Sans Gluten",
  "price": 29.0,
  "image": "assets/produit-74.webp",
  "available": true,
  "details": ""
},
{
  "id": 75,
  "name": "Mix Pizza 500g - Linat",
  "category": "Sans Gluten",
  "price": 8.0,
  "image": "assets/produit-75.webp",
  "available": true,
  "details": ""
},
{
  "id": 76,
  "name": "Mix Pain Traditionnel 500g - Linat",
  "category": "Sans Gluten",
  "price": 8.0,
  "image": "assets/produit-76.webp",
  "available": true,
  "details": ""
},
{
  "id": 77,
  "name": "Mix Pain Baguette 500g - Linat",
  "category": "Sans Gluten",
  "price": 8.0,
  "image": "assets/produit-77.webp",
  "available": true,
  "details": ""
},
{
  "id": 78,
  "name": "Mix Multi-Usages Sans Gluten 500g - Linat",
  "category": "Sans Gluten",
  "price": 8.0,
  "image": "assets/produit-78.webp",
  "available": true,
  "details": ""
},
{
  "id": 79,
  "name": "Primalac Premium AC 900g (0-12 mois)",
  "category": "Sans Gluten",
  "price": 45.0,
  "image": "assets/produit-79.webp",
  "available": true,
  "details": ""
},
{
  "id": 80,
  "name": "Primalac Premium 1 900g (0-6 mois)",
  "category": "Sans Gluten",
  "price": 45.0,
  "image": "assets/produit-80.webp",
  "available": true,
  "details": ""
},
{
  "id": 81,
  "name": "Primalac Premium 2 900g (6-12 mois)",
  "category": "Sans Gluten",
  "price": 45.0,
  "image": "assets/produit-81.webp",
  "available": true,
  "details": ""
},
{
  "id": 82,
  "name": "Primalac Premium 3 900g (1-3 ans)",
  "category": "Sans Gluten",
  "price": 45.0,
  "image": "assets/produit-82.webp",
  "available": true,
  "details": ""
},
{
  "id": 83,
  "name": "Primalac Premium AC 400g (0-12 mois)",
  "category": "Sans Gluten",
  "price": 26.0,
  "image": "assets/produit-83.webp",
  "available": true,
  "details": ""
},
{
  "id": 84,
  "name": "Primalac Premium 1 400g (0-6 mois)",
  "category": "Sans Gluten",
  "price": 26.0,
  "image": "assets/produit-84.webp",
  "available": true,
  "details": ""
},
{
  "id": 85,
  "name": "Primalac Premium 2 400g (6-12 mois)",
  "category": "Sans Gluten",
  "price": 26.0,
  "image": "assets/produit-85.webp",
  "available": true,
  "details": ""
},
{
  "id": 86,
  "name": "Primalac Premium 3 400g (1-3 ans)",
  "category": "Sans Gluten",
  "price": 26.0,
  "image": "assets/produit-86.webp",
  "available": true,
  "details": ""
},
{
  "id": 87,
  "name": "Levure de Bière 350 comprimés",
  "category": "Compléments Alimentaires",
  "price": 30.0,
  "image": "assets/produit-87.webp",
  "available": true,
  "details": "La levure de bière est un complément alimentaire ultra-nutritif d’origine 100% naturelle. Son profil nutritionnel riche et complexe permet d’augmenter facilement ses apports journaliers en macro-nutriments et micro-nutriments. La levure de bière est particulièrement riche en vitamines du groupe B, en minéraux assimilables (zinc, fer, magnésium) et en acides aminés essentiels (arginine, BCAA).\n\n• Complément 100% Naturel\n• Concentré de Nutriments Essentiels\n• Tonus & Immunité\n• Vitalité de la Peau, Cheveux et Ongles\n\nLa levure de bière est un complément alimentaire naturel ultra-nutritif riche en nutriments (micro et macro-nutriments). Elle est riche en vitamines du groupe B, en minéraux assimilables (zinc, fer, magnésium), en acides aminés essentiels (arginine, leucine, isoleucine, valine), en protéines et en glucides complexes.\n\nElle permet d’augmenter très facilement son apport quotidien en nutriments et renforcer son organisme dans son ensemble.\n\nLa levure de bière possède de nombreuses vertus. Sa riche composition permet de lutter contre les états de fatigue et de booster les performances physiques et intellectuelles.\n\nElle accroît la force musculaire dans les sports de force et stimule également les défenses immunitaires.\n\nLa levure de bière est également très bénéfique pour les phanères (peau, cheveux et ongles). Elle stimule la croissance des cheveux et permet d’améliorer la qualité de la peau.\n\nC’est un complément alimentaire naturel ultra-polyvalent qu’il est possible de consommer à longueur d’année pour soutenir sa santé."
},
{
  "id": 88,
  "name": "Levure de Bière & Sélénium 375 comprimés",
  "category": "Compléments Alimentaires",
  "price": 30.0,
  "image": "assets/produit-88.webp",
  "available": true,
  "details": "Beauté de la peau, des cheveux et des ongles.\n\nComposition :\nLa levure de bière germe de blé et sélénium est 100% naturelle, composée de levure et de germe de blé.\n\nNaturellement riche en minéraux et zinc.\n\nActifs essentiels :\n• Zinc\n• Germe de blé\n• Vitamine E\n• Sélénium"
}
];

// Numéro officiel WhatsApp Healthy & Happy
const WHATSAPP_PHONE = "21696133404";

// ==========================================================================
// 2. ÉTAT GLOBAL DE L'APPLICATION
// ==========================================================================
let currentFilter = "all";
let currentSearch = "";
let selectedProduct = null;
let currentQuantity = 1;
let currentFormatIndex = 0;

// ==========================================================================
// 3. ÉLÉMENTS DU DOM
// ==========================================================================
const DOM = {
  // Navigation & vues
  navbar: document.getElementById('navbar'),
  navMenu: document.getElementById('nav-menu'),
  hamburgerBtn: document.getElementById('hamburger-btn'),
  navLinks: document.querySelectorAll('.nav-link'),
  catalogView: document.getElementById('catalog-view'),
  productDetailView: document.getElementById('product-detail-view'),
  btnBackToCatalog: document.getElementById('btn-back-to-catalog'),
  btnHeroDiscover: document.getElementById('btn-hero-discover'),

  // Filtres & Catalogue
  productSearch: document.getElementById('product-search'),
  clearSearch: document.getElementById('clear-search'),
  filterTabs: document.querySelectorAll('.filter-tab'),
  productsGrid: document.getElementById('products-grid'),
  noResults: document.getElementById('no-results'),
  resetFiltersBtn: document.getElementById('reset-filters-btn'),
  categoryCards: document.querySelectorAll('.category-card'),

  // Fiche Détail Produit
  detailBcCategory: document.getElementById('detail-bc-category'),
  detailBcName: document.getElementById('detail-bc-name'),
  detailMainImg: document.getElementById('detail-main-img'),
  detailCategory: document.getElementById('detail-category'),
  detailAvailability: document.getElementById('detail-availability'),
  detailTitle: document.getElementById('detail-title'),
  detailPrice: document.getElementById('detail-price'),
  detailFormatBox: document.getElementById('detail-format-box'),
  detailFormatOptions: document.getElementById('detail-format-options'),
  detailDescription: document.getElementById('detail-description'),
  detailsSheet: document.querySelector('.product-details-sheet'),
  qtyDisplay: document.getElementById('qty-display'),
  btnQtyMinus: document.getElementById('btn-qty-minus'),
  btnQtyPlus: document.getElementById('btn-qty-plus'),
  detailTotalAmount: document.getElementById('detail-total-amount'),
  btnWhatsappOrder: document.getElementById('btn-whatsapp-order'),

  // Footer & Heures
  footer: document.querySelector('.footer'),
  currentYear: document.getElementById('current-year'),
  openStatusBadge: document.getElementById('open-status-badge')
};

// ==========================================================================
// 4. UTILITAIRES & FORMATTAGE
// ==========================================================================

/** Échappe les caractères HTML spéciaux pour prévenir les injections XSS */
function escapeHTML(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/** Formate un prix en Dinars Tunisiens (DT) avec 3 décimales */
function formatPrice(val) {
  if (val === null || val === undefined || isNaN(val)) {
    return null;
  }
  return Number(val).toFixed(3);
}

/** Formate le texte du prix pour l'affichage */
function getPriceDisplay(val) {
  const formatted = formatPrice(val);
  return formatted ? `${formatted} DT` : "Prix à confirmer";
}

/** Formate le texte exact du client en HTML lisible avec tableaux nutritionnels proprement tracés */
function formatProductDetails(rawText) {
  if (!rawText || !rawText.trim()) return "";

  const lines = rawText.split('\n').map(l => l.trim());
  const htmlOut = [];

  const isGeneralHeading = (str) => {
    const s = str.toLowerCase();
    return s.startsWith('ingrédient') || 
           s.startsWith('allergène') || 
           s.startsWith('⚠️ allergène') || 
           s.startsWith('mode d’emploi') || 
           s.startsWith('mode d\'emploi') || 
           s.startsWith('préparation') || 
           s.startsWith('indication') || 
           s.startsWith('précautions') || 
           s.startsWith('composition :') ||
           s.startsWith('intérêt nutritionnel') ||
           s.startsWith('packaging') ||
           s.startsWith('comment utiliser') ||
           s.startsWith('comment faire');
  };

  const isNutriHeading = (str) => {
    const s = str.toLowerCase();
    return s.startsWith('apports nutritionnel') || 
           s.startsWith('tableau nutritionnel') || 
           s.startsWith('valeurs nutritionnelle');
  };

  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (!l) {
      htmlOut.push('<div class="text-spacer"></div>');
      i++;
      continue;
    }

    if (isNutriHeading(l)) {
      htmlOut.push(`<h3 class="product-detail-heading">${l}</h3>`);
      i++;

      let col1Header = "Composant";
      let col2Header = "Pour 100 g";
      let col3Header = null;
      const rows = [];
      let footnote = null;

      while (i < lines.length) {
        const cur = lines[i];
        if (!cur) {
          i++;
          continue;
        }

        if (isGeneralHeading(cur) || isNutriHeading(cur)) {
          break;
        }

        const curLower = cur.toLowerCase();

        // Note de bas de tableau (*AR = ...)
        if (cur.startsWith('*')) {
          footnote = cur;
          i++;
          continue;
        }

        // Ligne d'en-tête Granoro : "Valeurs moyennes \t Pour 100 g \t % AR*"
        if (curLower.includes('valeurs moyennes') && (cur.includes('\t') || curLower.includes('pour 100'))) {
          const parts = cur.split('\t').map(p => p.trim()).filter(Boolean);
          if (parts[0]) col1Header = parts[0];
          if (parts[1]) col2Header = parts[1];
          if (parts[2]) col3Header = parts[2];
          i++;
          continue;
        }

        // En-tête de portion : "Pour 100 g" ou "Pour 100g" ou "Pour 100 gr"
        if (/^pour\s+100\s*g(?:r)?$/i.test(curLower)) {
          col2Header = cur;
          i++;
          continue;
        }

        // Ligne séparée par tabulation
        if (cur.includes('\t')) {
          const parts = cur.split('\t').map(p => p.trim()).filter(Boolean);
          if (parts.length === 2) {
            rows.push({ label: parts[0], val: parts[1], c3: null });
          } else if (parts.length >= 3) {
            rows.push({ label: parts[0], val: parts[1], c3: parts[2] });
          } else if (parts.length === 1) {
            rows.push({ label: parts[0], val: '', c3: null });
          }
          i++;
          continue;
        }

        // Ligne standard nutriment + valeur (regex espace/multi-espace/unités)
        const matchNutri = cur.match(/^(.*?)(?:\s{2,}|\s+)(\d+[\d\s,\./]*\s*(?:kj\s*\/\s*\d+[\d\s,\./]*\s*kcal|kj\/kcal|kcal\s*\([^\)]+\)|kcal|kj|g|mg|%|—|-)?)$/i);
        if (matchNutri && matchNutri[1] && matchNutri[2]) {
          rows.push({ label: matchNutri[1].trim(), val: matchNutri[2].trim(), c3: null });
          i++;
          continue;
        }

        // Deuxième essai pour valeurs simples (ex: "Sel 0 g" ou "Lipides 2,3 g")
        const matchSimple = cur.match(/^(.*?)(?:\s+|:\s*)([\d,\.]+\s*(?:g|mg|kcal|kj)?|—|-)$/i);
        if (matchSimple && matchSimple[1] && matchSimple[2]) {
          rows.push({ label: matchSimple[1].trim(), val: matchSimple[2].trim(), c3: null });
          i++;
          continue;
        }

        // Ligne contenant un mot clé nutritionnel (ex: "énergie 1429/337 kj/kcal")
        const isNutriWord = /^(énergie|matière|graisse|lipide|dont|– dont|- dont|glucide|sucre|carbohydrate|fibre|protéine|protein|sel|salt|acide|sodium)/i.test(curLower);
        if (isNutriWord) {
          const lastSpace = cur.lastIndexOf(' ');
          if (lastSpace > 0) {
            rows.push({ label: cur.substring(0, lastSpace).trim(), val: cur.substring(lastSpace + 1).trim(), c3: null });
          } else {
            rows.push({ label: cur, val: '', c3: null });
          }
          i++;
          continue;
        }

        // Si ce n'est pas une ligne nutritionnelle, sortir de la boucle tableau
        break;
      }

      if (rows.length > 0) {
        const hasCol3 = rows.some(r => r.c3 !== null) || (col3Header !== null);
        let tableHtml = '<div class="product-detail-table-wrapper"><table class="product-detail-table">';
        tableHtml += '<thead><tr>';
        tableHtml += `<th class="th-label">${col1Header}</th>`;
        tableHtml += `<th class="th-val">${col2Header}</th>`;
        if (hasCol3) {
          tableHtml += `<th class="th-c3">${col3Header || '% AR*'}</th>`;
        }
        tableHtml += '</tr></thead><tbody>';

        rows.forEach(r => {
          const isSub = /^(?:[–-]\s*)?dont\b/i.test(r.label);
          const cleanLabel = isSub ? r.label.replace(/^[–-]\s*/, '') : r.label;
          const trClass = isSub ? ' class="nutri-subrow"' : '';
          tableHtml += `<tr${trClass}>`;
          tableHtml += `<td class="nutri-label">${cleanLabel}</td>`;
          tableHtml += `<td class="nutri-val">${r.val}</td>`;
          if (hasCol3) {
            const dashVal = (r.c3 !== null && r.c3 !== '') ? r.c3 : '—';
            tableHtml += `<td class="nutri-c3">${dashVal}</td>`;
          }
          tableHtml += '</tr>';
        });

        tableHtml += '</tbody></table></div>';
        if (footnote) {
          tableHtml += `<p class="nutrition-disclaimer">${footnote}</p>`;
        }
        htmlOut.push(tableHtml);
      }
      continue;
    }

    if (isGeneralHeading(l)) {
      htmlOut.push(`<h3 class="product-detail-heading">${l}</h3>`);
      i++;
    } else if (l.includes('\t')) {
      const parts = l.split('\t').map(p => p.trim()).filter(Boolean);
      const label = parts[0] || '';
      const val = parts.slice(1).join(' ');
      htmlOut.push(`<div class="detail-kv-row"><span>${label}</span><strong>${val}</strong></div>`);
      i++;
    } else {
      htmlOut.push(`<p class="product-detail-line">${l}</p>`);
      i++;
    }
  }

  return htmlOut.join('');
}

// ==========================================================================
// 5. GESTION DU CATALOGUE & AFFICHAGE PRODUITS
// ==========================================================================

/** Génère le HTML d'une carte produit conforme à l'ancienne version épurée */
function createProductCardHTML(prod) {
  const priceText = prod.priceDisplay ? escapeHTML(prod.priceDisplay) : escapeHTML(getPriceDisplay(prod.price));
  const isUnconfirmed = prod.price === null && !prod.priceDisplay;
  const safeName = escapeHTML(prod.name);
  const safeCat = escapeHTML(prod.category);
  const safeImg = escapeHTML(prod.image);

  return `
    <article class="product-card" data-id="${prod.id}">
      <div class="product-image-container">
        <img 
          src="${safeImg}" 
          alt="${safeName}" 
          class="product-img" 
          loading="lazy" 
          decoding="async" 
          onerror="this.src='assets/placeholder.webp'"
        >
      </div>
      <div class="product-info">
        <h3 class="product-title" title="${safeName}">${safeName}</h3>
        <div class="product-price-row">
          <span class="product-price ${isUnconfirmed ? 'product-price-unconfirmed' : ''}">
            ${priceText}
          </span>
        </div>
        <button type="button" class="btn-view-product" data-id="${prod.id}" aria-label="Découvrir ${safeName}">
          <span>Découvrir le produit</span>
          <span>→</span>
        </button>
      </div>
    </article>
  `;
}

/** Met à jour les compteurs sur les boutons de filtre (si présents) */
function updateFilterCounts() {
  const countAllEl = document.getElementById('count-all');
  if (countAllEl) countAllEl.textContent = products.length;
  const countSgEl = document.getElementById('count-sans-gluten');
  if (countSgEl) countSgEl.textContent = products.filter(p => p.category === 'Sans Gluten' || p.category === 'Le Sans Gluten').length;
  const countCompEl = document.getElementById('count-complements');
  if (countCompEl) countCompEl.textContent = products.filter(p => p.category === 'Compléments Alimentaires' || p.category === 'Nutrition Sportive').length;
}

/** Filtre les produits selon la catégorie et la recherche */
function getFilteredProducts() {
  return products.filter(prod => {
    let matchesCategory = true;
    if (currentFilter !== 'all') {
      if (currentFilter === 'Sans Gluten' || currentFilter === 'Le Sans Gluten') {
        matchesCategory = (prod.category === 'Sans Gluten' || prod.category === 'Le Sans Gluten');
      } else if (currentFilter === 'Compléments Alimentaires' || currentFilter === 'Nutrition Sportive') {
        matchesCategory = (prod.category === 'Compléments Alimentaires' || prod.category === 'Nutrition Sportive');
      } else {
        matchesCategory = (prod.category === currentFilter);
      }
    }

    let matchesSearch = true;
    if (currentSearch.trim().length > 0) {
      const q = currentSearch.toLowerCase().trim();
      const nameMatch = prod.name.toLowerCase().includes(q);
      const detailsMatch = prod.details ? prod.details.toLowerCase().includes(q) : false;
      matchesSearch = nameMatch || detailsMatch;
    }

    return matchesCategory && matchesSearch;
  });
}

/** Affiche la liste des produits dans le catalogue */
function renderCatalog() {
  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    DOM.productsGrid.innerHTML = '';
    if (DOM.noResults) DOM.noResults.style.display = 'block';
  } else {
    if (DOM.noResults) DOM.noResults.style.display = 'none';
    DOM.productsGrid.innerHTML = filtered.map(createProductCardHTML).join('');
    attachCardEventListeners();
  }
}

/** Attache les clics sur les cartes et boutons produits */
function attachCardEventListeners() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'), 10);
      showProductDetail(id, true);
    });
  });

  document.querySelectorAll('.btn-view-product').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.getAttribute('data-id'), 10);
      showProductDetail(id, true);
    });
  });
}

// ==========================================================================
// 6. GESTION DE LA VUE DÉTAIL PRODUIT (Page complète)
// ==========================================================================

/** Affiche la vue détaillée complète d'un produit avec uniquement les détails fournis */
function showProductDetail(productId, updateHistory = true) {
  const prod = products.find(p => p.id === productId);
  if (!prod) {
    showCatalogView();
    return;
  }

  selectedProduct = prod;
  currentQuantity = 1;
  currentFormatIndex = 0;

  // Masquer le navbar et le footer pour une page 100% dédiée au produit
  document.body.classList.add('is-product-detail-active');
  if (DOM.navbar) DOM.navbar.style.display = 'none';
  if (DOM.footer) DOM.footer.style.display = 'none';

  // Masquer le catalogue et afficher la page produit complète
  DOM.catalogView.style.display = 'none';
  DOM.productDetailView.style.display = 'block';

  // Fil d'Ariane
  DOM.detailBcCategory.textContent = prod.category;
  DOM.detailBcName.textContent = prod.name;

  // En-tête produit
  DOM.detailCategory.textContent = prod.category;
  DOM.detailTitle.textContent = prod.name;

  // Photo principale
  DOM.detailMainImg.src = prod.image;
  DOM.detailMainImg.alt = prod.name;

  // Sélecteur de formats
  if (DOM.detailFormatBox && DOM.detailFormatOptions) {
    if (prod.formats && prod.formats.length > 0) {
      DOM.detailFormatBox.style.display = 'block';
      DOM.detailFormatOptions.innerHTML = prod.formats.map((fmt, idx) => `
        <button type="button" class="format-pill ${idx === 0 ? 'active' : ''}" data-format-idx="${idx}">
          <span>${fmt.name}</span>
          <span class="format-pill-price">${formatPrice(fmt.price)} DT</span>
        </button>
      `).join('');

      DOM.detailFormatOptions.querySelectorAll('.format-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          currentFormatIndex = parseInt(btn.getAttribute('data-format-idx'), 10);
          DOM.detailFormatOptions.querySelectorAll('.format-pill').forEach((b, i) => {
            b.classList.toggle('active', i === currentFormatIndex);
          });
          updateQuantityUI();
        });
      });
    } else {
      DOM.detailFormatBox.style.display = 'none';
      DOM.detailFormatOptions.innerHTML = '';
    }
  }

  // Prix unitaire initial
  const unitPrice = getEffectiveUnitPrice();
  const unitPriceFormatted = formatPrice(unitPrice);
  if (unitPriceFormatted) {
    DOM.detailPrice.textContent = `${unitPriceFormatted} DT`;
  } else {
    DOM.detailPrice.textContent = prod.priceDisplay || "Prix à confirmer";
  }

  // Disponibilité
  if (prod.available) {
    DOM.detailAvailability.className = "availability-badge available";
    DOM.detailAvailability.innerHTML = '<span class="badge-icon">✓</span> Disponible en magasin';
    DOM.btnWhatsappOrder.disabled = false;
  } else {
    DOM.detailAvailability.className = "availability-badge unavailable";
    DOM.detailAvailability.innerHTML = '<span class="badge-icon">✕</span> Momentanément indisponible';
    DOM.btnWhatsappOrder.disabled = true;
  }

  // Affichage STRICT des détails fournis par le client (masqué si aucune description)
  const hasDetails = prod.details && prod.details.trim().length > 0;
  if (DOM.detailsSheet) {
    DOM.detailsSheet.style.display = hasDetails ? 'block' : 'none';
  }
  DOM.detailDescription.innerHTML = hasDetails ? formatProductDetails(prod.details) : '';

  // Réinitialisation de la quantité & du total
  updateQuantityUI();

  // Mise à jour de l'URL du navigateur avec ?produit=ID
  if (updateHistory) {
    const newUrl = `${window.location.pathname}?produit=${prod.id}`;
    window.history.pushState({ productId: prod.id }, '', newUrl);
  }

  // Défilement fluide vers le haut de la vue détail
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Récupère le format actuellement sélectionné */
function getSelectedFormat() {
  if (selectedProduct && selectedProduct.formats && selectedProduct.formats.length > 0) {
    return selectedProduct.formats[currentFormatIndex] || selectedProduct.formats[0];
  }
  return null;
}

/** Récupère le prix unitaire effectif selon le format sélectionné */
function getEffectiveUnitPrice() {
  const fmt = getSelectedFormat();
  if (fmt) return fmt.price;
  return selectedProduct ? selectedProduct.price : null;
}

/** Met à jour la quantité et le montant total calculé */
function updateQuantityUI() {
  DOM.qtyDisplay.textContent = currentQuantity;
  DOM.btnQtyMinus.disabled = currentQuantity <= 1;

  const unitPrice = getEffectiveUnitPrice();
  if (unitPrice !== null) {
    DOM.detailPrice.textContent = `${formatPrice(unitPrice)} DT`;
    const total = unitPrice * currentQuantity;
    DOM.detailTotalAmount.textContent = `${formatPrice(total)} DT`;
  } else {
    DOM.detailPrice.textContent = selectedProduct ? (selectedProduct.priceDisplay || "Prix à confirmer") : "Prix à confirmer";
    DOM.detailTotalAmount.textContent = "Total à confirmer";
  }
}

/** Retourne à la vue catalogue principale */
function showCatalogView(updateHistory = true, shouldScroll = true) {
  // Réafficher le navbar et le footer sur le catalogue
  document.body.classList.remove('is-product-detail-active');
  if (DOM.navbar) DOM.navbar.style.display = '';
  if (DOM.footer) DOM.footer.style.display = '';

  DOM.productDetailView.style.display = 'none';
  DOM.catalogView.style.display = 'block';
  selectedProduct = null;

  if (updateHistory) {
    const cleanUrl = `${window.location.pathname}#produits`;
    window.history.pushState(null, '', cleanUrl);
  }

  // Scroll vers le catalogue seulement si demandé
  if (shouldScroll) {
    const catalogEl = document.getElementById('produits');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// ==========================================================================
// 7. COMMANDE DIRECTE VIA WHATSAPP (+216 96 133 404)
// ==========================================================================

function handleWhatsAppOrder() {
  if (!selectedProduct) return;

  if (!selectedProduct.available) {
    alert("Ce produit est momentanément indisponible en magasin.");
    return;
  }

  const selectedFormat = getSelectedFormat();
  const unitPrice = getEffectiveUnitPrice();
  const unitPriceStr = unitPrice !== null 
    ? `${formatPrice(unitPrice)} DT` 
    : "Prix à confirmer";

  const totalStr = unitPrice !== null 
    ? `${formatPrice(unitPrice * currentQuantity)} DT` 
    : "Total à confirmer";

  let prodNameWithFormat = selectedProduct.name;
  if (selectedFormat) {
    prodNameWithFormat = `${selectedProduct.name} (Format : ${selectedFormat.name})`;
  }

  const messageText = 
`Bonjour Healthy & Happy,

Je souhaite commander le produit suivant :

Produit : ${prodNameWithFormat}
Quantité : ${currentQuantity}
Prix unitaire : ${unitPriceStr}
Total : ${totalStr}

Merci de me confirmer la disponibilité et les modalités de retrait à la boutique.`;

  const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(messageText)}`;
  window.open(waUrl, '_blank', 'noopener,noreferrer');
}

// ==========================================================================
// 8. LOGIQUE D'OUVERTURE / FERMETURE DE LA BOUTIQUE
// ==========================================================================

function updateStoreOpenStatus() {
  if (!DOM.openStatusBadge) return;
  
  const now = new Date();
  const day = now.getDay(); // 0 = Dimanche, 1 = Lundi, ...
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  let isOpen = false;
  if (day === 0) {
    // Dimanche : 09:00 à 17:00
    isOpen = (currentMinutes >= 540 && currentMinutes < 1020);
  } else {
    // Lundi à Samedi : 09:00 à 19:00
    isOpen = (currentMinutes >= 540 && currentMinutes < 1140);
  }

  if (isOpen) {
    DOM.openStatusBadge.textContent = "Ouvert actuellement";
    DOM.openStatusBadge.className = "hours-badge";
  } else {
    DOM.openStatusBadge.textContent = "Fermé actuellement";
    DOM.openStatusBadge.className = "hours-badge closed";
  }

  // Mettre en surbrillance verte le jour actuel
  const hoursRows = document.querySelectorAll('.hours-row');
  hoursRows.forEach(row => {
    const rowDay = parseInt(row.getAttribute('data-day'), 10);
    if (rowDay === day) {
      row.classList.add('is-today');
    } else {
      row.classList.remove('is-today', 'highlight-sunday');
    }
  });
}

// ==========================================================================
// 9. GESTION DES ÉVÉNEMENTS & INITIALISATION
// ==========================================================================

function setupEventListeners() {
  // 1. Bouton Retour au catalogue
  DOM.btnBackToCatalog.addEventListener('click', () => {
    showCatalogView(true);
  });

  // Liens dans le fil d'Ariane
  document.querySelectorAll('.bc-home').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showCatalogView(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('.bc-catalog').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showCatalogView(true);
    });
  });

  // 2. Boutons Quantité (+ / −)
  DOM.btnQtyPlus.addEventListener('click', () => {
    currentQuantity++;
    updateQuantityUI();
  });

  DOM.btnQtyMinus.addEventListener('click', () => {
    if (currentQuantity > 1) {
      currentQuantity--;
      updateQuantityUI();
    }
  });

  // 3. Commande WhatsApp
  DOM.btnWhatsappOrder.addEventListener('click', handleWhatsAppOrder);

  // 4. Recherche de produits (si présente)
  if (DOM.productSearch) {
    DOM.productSearch.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      if (DOM.clearSearch) {
        DOM.clearSearch.style.display = currentSearch.length > 0 ? 'flex' : 'none';
      }
      renderCatalog();
    });
  }

  if (DOM.clearSearch) {
    DOM.clearSearch.addEventListener('click', () => {
      if (DOM.productSearch) DOM.productSearch.value = '';
      currentSearch = '';
      DOM.clearSearch.style.display = 'none';
      renderCatalog();
      if (DOM.productSearch) DOM.productSearch.focus();
    });
  }

  // 5. Filtres par onglets de catégorie (si présents)
  const filterTabs = document.querySelectorAll('.filter-tab');
  if (filterTabs && filterTabs.length) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentFilter = tab.getAttribute('data-filter') || 'all';
        renderCatalog();
      });
    });
  }

  // 6. Clic sur les cartes de la section "Explorez nos catégories"
  DOM.categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      currentFilter = cat;

      if (DOM.filterTabs && DOM.filterTabs.length) {
        DOM.filterTabs.forEach(tab => {
          if (tab.getAttribute('data-filter') === cat) {
            tab.classList.add('active');
          } else {
            tab.classList.remove('active');
          }
        });
      }

      renderCatalog();

      if (DOM.productDetailView.style.display !== 'none') {
        showCatalogView(false);
      }

      const catalogEl = document.getElementById('produits');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 7. Bouton Réinitialiser les filtres (si présent)
  if (DOM.resetFiltersBtn) {
    DOM.resetFiltersBtn.addEventListener('click', () => {
      currentSearch = '';
      currentFilter = 'all';
      if (DOM.productSearch) DOM.productSearch.value = '';
      if (DOM.clearSearch) DOM.clearSearch.style.display = 'none';
      if (DOM.filterTabs && DOM.filterTabs.length) {
        DOM.filterTabs.forEach(t => t.classList.remove('active'));
        const allTab = document.querySelector('.filter-tab[data-filter="all"]');
        if (allTab) allTab.classList.add('active');
      }
      renderCatalog();
    });
  }

  // 8. Menu Mobile Hamburger avec animation et fermeture au clic externe
  DOM.hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = DOM.navMenu.classList.toggle('open');
    DOM.hamburgerBtn.classList.toggle('open', isOpen);
    DOM.hamburgerBtn.setAttribute('aria-expanded', isOpen);
  });

  // Fermer le menu mobile en cliquant en dehors
  document.addEventListener('click', (e) => {
    if (DOM.navMenu && DOM.navMenu.classList.contains('open')) {
      if (!DOM.navMenu.contains(e.target) && !DOM.hamburgerBtn.contains(e.target)) {
        DOM.navMenu.classList.remove('open');
        DOM.hamburgerBtn.classList.remove('open');
        DOM.hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Gestion fluide de tous les liens d'ancrage (#...) incluant le menu, hero et footer
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);

      if (targetEl) {
        e.preventDefault();

        // Fermer le menu mobile si ouvert
        if (DOM.navMenu && DOM.navMenu.classList.contains('open')) {
          DOM.navMenu.classList.remove('open');
          if (DOM.hamburgerBtn) {
            DOM.hamburgerBtn.classList.remove('open');
            DOM.hamburgerBtn.setAttribute('aria-expanded', 'false');
          }
        }

        // Si on était dans la vue détail produit, réafficher le catalogue sans forcer le scroll vers produits
        if (DOM.productDetailView && DOM.productDetailView.style.display !== 'none') {
          showCatalogView(false, false);
        }

        // Calcul de la position avec décalage de la barre de navigation
        const navHeight = DOM.navbar ? DOM.navbar.offsetHeight : 70;
        let targetTop = 0;

        if (targetId !== 'accueil') {
          targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
        }

        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth'
        });

        // Mise à jour de l'URL hash
        history.pushState(null, '', href);

        // Mise à jour de l'état actif dans la navbar
        DOM.navLinks.forEach(l => l.classList.remove('active'));
        const activeNav = document.querySelector(`.nav-link[href="${href}"]`);
        if (activeNav) activeNav.classList.add('active');
      }
    });
  });

  // Bouton "Découvrir nos produits" dans le Hero
  if (DOM.btnHeroDiscover) {
    DOM.btnHeroDiscover.addEventListener('click', () => {
      if (DOM.productDetailView.style.display !== 'none') {
        showCatalogView(false, false);
      }
    });
  }

  // 9. Gestion de l'historique du navigateur
  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    const prodParam = params.get('produit');

    if (prodParam) {
      const id = parseInt(prodParam, 10);
      showProductDetail(id, false);
    } else {
      showCatalogView(false, false);
      if (window.location.hash) {
        const targetEl = document.querySelector(window.location.hash);
        if (targetEl) {
          const navHeight = DOM.navbar ? DOM.navbar.offsetHeight : 70;
          const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
          window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
        }
      }
    }
  });

  // 10. ScrollSpy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    if (DOM.productDetailView.style.display !== 'none') return;

    let currentSectionId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      DOM.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

/** Initialise l'application au chargement */
function initApp() {
  if (DOM.currentYear) {
    DOM.currentYear.textContent = new Date().getFullYear();
  }

  updateStoreOpenStatus();
  setInterval(updateStoreOpenStatus, 60000);
  updateFilterCounts();
  renderCatalog();
  setupEventListeners();

  const urlParams = new URLSearchParams(window.location.search);
  const requestedProdId = urlParams.get('produit');

  if (requestedProdId) {
    const id = parseInt(requestedProdId, 10);
    showProductDetail(id, false);
  } else if (window.location.hash) {
    const targetEl = document.querySelector(window.location.hash);
    if (targetEl) {
      setTimeout(() => {
        const navHeight = DOM.navbar ? DOM.navbar.offsetHeight : 70;
        const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
        window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
      }, 100);
    }
  }
}

// Démarrage dès que le DOM est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
