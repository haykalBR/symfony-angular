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
class ProductController extends AbstractFOSRestController
{
    /**
     * Get All products
     * @Route("/api/allProdcuts",name="allproducts")
     */
    public function getProducts(ProductRepository $repo){
        $products=$repo->createQueryBuilder('p')
            ->select('p.id,p.sku,p.name,p.price,p.amount')
            ->getQuery()->getArrayResult();
        return new JsonResponse($products);

    }
    /**
     * Get Single Product By ID
     * @Route("/api/product/{id}",name="singleproduct")
     */
    public function getProductByid(Product $product,ProductRepository $repo){
        $singleproduct=$repo->createQueryBuilder('p')
            ->where("p.id = :id")
            ->select('p.id,p.sku,p.name,p.price,p.amount,p.created_at,p.updated_at')
            ->setParameter("id",$product->getId())
            ->getQuery()->getSingleResult();
        return new JsonResponse($singleproduct);
    }
    public function addProduct(){}
    public function editProduct(){}
    /**
     * Reomve Product By ID
     * @Route("/api/remove/{id}",name="removeproduct")
     */
    public function RemoveProductByid(Product $product,ObjectManager $manager){
         $manager->remove($product);
         $manager->flush();
        return new JsonResponse('ok');
    }

}