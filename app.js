

var http = require("http"); // 1 - Import Node.js core module
const dotenv = require("dotenv");

const createUsers = require("./db/migrations/usersMigrations");
const createPosts = require("./db/migrations/postsMigrations");

const { parseBody } = require("./helpers");

const Middleware = require("./middleware/jwtMiddleware");

const userController = require("./controllers/usersController");
const postsController = require("./controllers/postsController");
const logger = require("./winston");
const swaggerSpec = require("./docs");
console.log(swaggerSpec)

dotenv.config();
const UsersController = new userController();
const PostsController = new postsController();

/**
 * @swagger
 * definitions:
 *   Post:
 *     properties:
 *       title:
 *         type: string
 *       author:
 *         type: string
 *       content:
 *         type: string
 *       post_id:
 *         type: integer
 */

const requestListener = async function (req, res) {
  try {
    if (req.url === "/" && req.method === "GET") {
      res.send("Hello from server");
    }
    if (req.method === "POST" || req.method === "PUT") {
      console.log(req.method)
      await parseBody(req);
    }
    console.log(req.body);

    //register new user
    
  /**
 * @swagger
 * /register:
 *   post:
 *     tags:
 *       - User
 *     description: register new user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Register new user
 */
    if (req.url === "/register" && req.method === "POST") {
      UsersController.registerUser(req, res);
    }


/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - User
 *     description: Login  user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Login  user and return jwt token if success
 */
    //login user
    if (req.url === "/login" && req.method === "POST") {
      UsersController.loginUser(req, res);
    }

     /**
 * @swagger
 * /posts:
 *   post:
 *     tags:
 *       - Post
 *     description: register new user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: create new post
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Post'
 */

    if (req.url === "/posts" && req.method === "POST") {
      //create post
      Middleware.verifyTokenMiddleware(req, res);
      PostsController.createPost(req, res);
    }


     /**
 * @swagger
 * /posts:
 *   post:
 *     tags:
 *       - Post
 *     description: register new user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: create new post
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Post'
 */
    if (req.url.match(/\/posts\/[0-9]+/) && req.method === "PUT") {
      //update post {id}
      Middleware.verifyTokenMiddleware(req, res);

      PostsController.updatePost(req, res);
    }


     /**
 * @swagger
 * /posts:
 *   post:
 *     tags:
 *       - Post
 *     description: register new user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: create new post
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Post'
 */
    if (req.url.match(/\/posts\/[0-9]+/) && req.method === "GET") {
      Middleware.verifyTokenMiddleware(req, res);

      //get post by {id}
      PostsController.getPostById(req, res);
    }



     /**
 * @swagger
 * /posts:
 *   post:
 *     tags:
 *       - Post
 *     description: register new user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: create new post
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Post'
 */
    if (req.url.match(/\/posts\/[0-9]/) && req.method === "DELETE") {
      Middleware.verifyTokenMiddleware(req, res);

      //delete post {id}
      PostsController.deletePost(req, res);
    }




     /**
 * @swagger
 * /posts:
 *   post:
 *     tags:
 *       - Post
 *     description: register new user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: create new post
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Post'
 */

    if (req.url.match(/\/posts\/[a-zA-Z]/) && req.method === "GET") {
      Middleware.verifyTokenMiddleware(req, res);

      //get post by filename {filename}
      PostsController.getPostByFilename(req, res);
    }





     /**
 * @swagger
 * /posts:
 *   post:
 *     tags:
 *       - Post
 *     description: register new user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: create new post
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Post'
 */
//swagger route
    if (req.url === "/api-docs" && req.method === "GET") {
      res.setHeader("Content-Type", "application/json");

      res.end(JSON.stringify(swaggerSpec));
    }
  } catch (error) {
    console.log("main app");
    logger.error(error);
    console.log(error);
  }
};
var server = http.createServer(requestListener);
createUsers();
createPosts();

server.listen(process.env.PORT); //3 - listen for any incoming requests
console.log(`Node.js web server at port ${process.env.PORT}  is running..`);
