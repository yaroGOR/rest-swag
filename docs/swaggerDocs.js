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

/**
 * @swagger
 *  /register:
 *   post:
 *     tags:
 *       - User
 *     description: Register new user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *        - description: Register new user
 *       500:
 *        - description: Server Error
 */

/**
 * @swagger
 *  /login:
 *   post:
 *     tags:
 *       - User
 *     description: Login  user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *        - description: Login  user and return jwt token if success
 *       500:
 *        - description: Server Error or wrong password
 */

/**
 * @swagger
 *  /posts:
 *   post:
 *     tags:
 *       - Post
 *     description: Create new post
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *        - description:  New post created
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Post'
 *       500:
 *        - description: Server Error
 */
/**
 * @swagger
 *  /posts/{postID}:
 *   put:
 *     summary: Update post.
 *     parameters:
 *       - in: path
 *         name: postID
 *         required: true
 *         description: Numeric ID of the post
 *         schema:
 *           type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *        - description: Post updated
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Post'
 *       500:
 *         - description: Server error
 */

/**
 * @swagger
 *  /posts/{postID}:
 *   get:
 *     tags:
 *       - Post
 *     description: Get post by ID
 *     parameters:
 *       - in: path
 *         name: postID
 *         required: true
 *         description: Numeric ID of the post
 *         schema:
 *           type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *        - description: Post
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Post'
 *       500:
 *         - description: Server error
 */

/**
 * @swagger
 *  /posts/{postID}:
 *   delete:
 *     tags:
 *       - Post
 *     description: Update post
 *     parameters:
 *       - in: path
 *         name: postID
 *         required: true
 *         description: Numeric ID of the post
 *         schema:
 *           type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *        - description: Post deleted
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Post'
 *       500:
 *         - description: Server error
 */

/**
 * @swagger
 *  /posts/{postTitle}:
 *   put:
 *     tags:
 *       - Post
 *     parameters:
 *       - in: path
 *         name: postTitle
 *         required: true
 *         description: Title of the post
 *         schema:
 *           type: string
 *     produces:
 *        application/json
 *     responses:
 *       200:
 *        - description: Post
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Post'
 *       500:
 *         - description: Server error
 */

/**
 * @swagger
 *  /api-docs:
 *   get:
 *     tags:
 *       - Api
 *     description: Get api docs
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *        - description: View API docs
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Post'
 */
