<?php
/**
 * Created by PhpStorm.
 * User: haykel
 * Date: 05/04/19
 * Time: 11:07
 */
namespace App\Controller;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
class ProductController extends AbstractFOSRestController
{
  //All Functions Of Prodcut Entity

    /**
     * @Route("/api/allProdcuts",name="allproducts")
     */
    public function getProducts(){
        dump("allProdcuts");die;
    }
    public function addProduct(){}
    public function editProduct(){}
    public function getProductByid(){}
    public function RemoveProductByid(){}


}