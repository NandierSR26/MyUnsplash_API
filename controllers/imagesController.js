
const { response } = require('express');
const Images = require('../models/Images');

const getImages = async(req, res) => {
    const images = await Images.aggregate([
        { $sort: { date: -1 } },
    ]);

    return res.json(images);
}

const uploadImages = (req, res = response) => {
    const image = new Images(req.body);
    console.log(req.body);

    try {
        image.date = Date.now();
        image.save();
        return res.json({
            mensaje: 'Imagen subida correctamente',
            image
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            mensaje: 'Error al subir la imagen'
        });
    }
}

const deleteImages = async(req, res = response) => {
    const { id } = req.params;

    try {
        await Images.findByIdAndDelete(id);
        return res.json({
            mensaje: 'Imagen eliminada correctamente'
        });
    } catch (error) {
        return res.json(error)
    }
}

const searchImages = async( req, res = response ) => {

    const { term } = req.params

    const regex = new RegExp( term, 'i' );

    const imgs = await Images.find({ label: regex })
    return res.json({
        results: imgs
    });
}

module.exports = {
    getImages,
    uploadImages,
    deleteImages,
    searchImages
}

