import { PostUserCase } from "../application/post.UserCase";
import { PostController } from "../infraestructure/controller/post.controller";
import { MongoRepository } from "../infraestructure/repository/mongo.repository/mongo.respository";

export const setupPost = () => {
    const postRepository = new MongoRepository(); // Reemplaza MongoRepository con tu repositorio real
    const postUserCase = new PostUserCase(postRepository); // Reemplaza PostUserCase con tu caso de uso real
    return new PostController(postUserCase); // Reemplaza PostController con tu controlador real
};
