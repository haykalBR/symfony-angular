<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

        $faker = \Faker\Factory::create();

           for ($i=0;$i<30;$i++){
               $product = new Product();
                     $product->setName($faker->word());
                     $product->setSku($faker->word());
                     $product->setPrice(($faker->randomNumber(2)));
                     $product->setAmount($faker->numberBetween($min = 100, $max = 9000));
               $manager->persist($product);
           }
        $manager->flush();
    }
}
