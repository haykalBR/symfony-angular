<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Validation;
use Symfony\Component\Validator\Constraints as Assert;

class UserController extends AbstractController
{
   

    /**
     * @Route("api/authenticate", name="user.authenticate", methods={"POST"})
     */
    public function authenticate(Request $request, UserRepository $repository)
    {
        $validator = Validation::createValidator();
        $inputs = [

        'login' => $request->get('login'),
        'password' => $request->get('password')
    ];
        $constraints = new Assert\Collection([
        'login' => [
                    new Assert\NotBlank(),
                ],
        'password' => [
                    new Assert\NotBlank(),
                ]
                 ]);

        $errors = $validator->validate($inputs, $constraints);
        if (count($errors)) {
            foreach ($errors as $error) {
                $data []= $error->getMessage();
            }
            
            return $this->json($data,401);
        }
        $user = $repository->findOneByLogin($request->get('login'));
        if (null !== $user) {
        	if(password_verify($request->get('password'),$user->getPassword())) {
        		return $this->json($user->getToken(), 200);
        	}
        	return $this->json("Not authorized",401);
            
        }
        //return $this->json(password_hash("moslem1990",PASSWORD_DEFAULT));
        return $this->json("User Not Found", 404);
    }

    private function getRandomString($length)
{
    $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return substr(str_shuffle(str_repeat($pool, 5)), 0, $length);
}
    
}
