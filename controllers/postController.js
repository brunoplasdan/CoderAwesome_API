const {Post} = require('../models');

function save(req, res) {
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id,
        userId: 1
    }
    Post.create(post).then(result => {
      
            res.status(200).json({
                message: "Posted created successfully",
                post: result
            });
        

    }).catch(error => {
        res.status(500).json({
            message: "Error on creating post",
            error: error
        });
    });

}

function show(req, res) {
    const id = req.params.id;

    Post.findByPk(id).then(result => {
        
     
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "Post not found in Data Base"
            })
        }
    }).catch(error => {

        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });
}

function index(req,res) {
    Post.findAll().then(result => {
    
        res.status(200).json(result);

    }).catch(error => {
        
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });

}

function update(req, res) {
    
    const id = req.params.id;

    const updatedPost = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.image_url,
        categoryId: req.body.category_id      
    }

    const userId = 1;

    Post.update(updatedPost, { where: { id: id, userId: userId } }).then(result => {

        result = result[0];
       
        if (result) {
            res.status(200).json({
                message: "Post updated",
                post: updatedPost
            })
        } else {
            res.status(404).json({
                message: 'The post does not exist'
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    })
}

function destroy(req, res) {
    
    const id = req.params.id;

    const userId = 1;

    Post.destroy({ where: { id: id, userId: userId } }).then(result => {

        console.log("RESULTADO: ", result);

        if (result) {
            res.status(200).json({
                message: "Post deleted successfully"
            })
        } else {
            res.status(404).json({
                message: "Couldn't find the post in Database"
            })
        }

    }).catch(error => {

        res.status(500).json({
            message: "Something went wrong!"
        })

    });

}

module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy
}