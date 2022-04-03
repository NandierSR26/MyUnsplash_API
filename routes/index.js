const { Router } = require('express');
const { getImages, uploadImages, deleteImages, searchImages } = require('../controllers/imagesController');
const router = Router();

router.get('/get-image', getImages);

router.post('/upload-image', 
    uploadImages
);

router.delete('/delete-image/:id', deleteImages);

router.get('/search/:term', searchImages);

module.exports = router;
