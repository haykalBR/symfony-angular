<?php
/**
 * Created by PhpStorm.
 * User: haykel
 * Date: 12/02/19
 * Time: 09:22 ص
 */
namespace App\Helper;
use JMS\Serializer\SerializationContext;
use Symfony\Component\HttpFoundation\Response;

trait ControllerHelper
{
    /**
     * Set base HTTP headers.
     *
     * @param Response $response
     *
     * @return Response
     */
    private function setBaseHeaders(Response $response)
    {
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set('Access-Control-Allow-Origin', '*');
        return $response;
    }
    /**
     * Data serializing via JMS serializer.
     *
     * @param mixed $data
     *
     * @return string JSON string
     */
    public function serialize($data)
    {
        $context = new SerializationContext();
        $context->setSerializeNull(true);
        return $this->get('jms_serializer')
            ->serialize($data, 'json', $context);
    }
}