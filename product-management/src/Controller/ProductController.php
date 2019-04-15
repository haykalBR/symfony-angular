<?php
/**
 * Created by PhpStorm.
 * User: haykel
 * Date: 05/04/19
 * Time: 11:07
 */
namespace App\Controller;
use App\Entity\Product;
use App\Repository\ProductRepository;
use Doctrine\Common\Persistence\ObjectManager;
use FOS\RestBundle\Controller\AbstractFOSRestController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use FOS\RestBundle\Controller\Annotations as Rest;

class ProductController extends AbstractFOSRestController
{
    /**
     * Get All products
     * @Route("/api/allProdcuts",name="allproducts")
     */
    public function getProducts(ProductRepository $repo){
        
        $products = $repo->findAll();
        return $this->json($products);
    }
    /**
     * Get Single Product By ID
     * @Route("/api/product/{product}",name="singleproduct")
     */
    public function getProductByid(Product $product){
        return $this->json($product);
    }
    /**
     * @Route("/api/new",name="add_product", methods={"POST"})
     * @Rest\View
     * @ParamConverter("product", converter="fos_rest.request_body")
     */
    public function addProduct(Product $product ,ObjectManager $manager){
        $manager->persist($product);
        $manager->flush();
        return new JsonResponse('ok');
    }
    /**
     * @Route("/api/edit",name="edit_product", methods={"PUT"})
     * @Rest\View
     * @ParamConverter("product", converter="fos_rest.request_body")
     */
    public function editProduct(Product $product,ObjectManager $manager , ProductRepository $repo){
       
    
        $manager->merge($product);
        $manager->flush();
        return new JsonResponse('ok');
    }
    /**
     * Reomve Product By ID
     * @Route("/api/remove/{id}",name="removeproduct", methods={"DELETE"})
     */
    public function RemoveProductByid(Product $product,ObjectManager $manager){
         

         $manager->remove($product);
         $manager->flush();
        return new JsonResponse('ok');
    }

}