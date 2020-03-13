Note = require('../models/notesModel');

exports.index = (req, res) => {
    Note.get((err, note) => {
        if (err) {
            res.json({
                status: "err",
                code: 500,
                message: err,
            });
        }
        res.json(note);
    })
}

// not ekleme fonksiyonu
exports.new = function (req, res) {
    let note = new Note();
    note.title = req.body.title;
    note.detail = req.body.detail;
    note.save(function (err) {
        if (err) {
            res.json({
                status: "err",
                code: 500,
                message: err,
            })
        }
        res.json({
            status: "success",
            code: 200,
            message: "Kayıt Başarılı",
            data: note,
        });

    })
}

// not görüntüleme fonksiyonu
exports.view = function (req, res) {
    Note.findById(req.params.id, function (err, note) {

        if (err) {
            res.json({
                status: "err",
                code: 500,
                message: err,
            })
        }
        res.json({
            status: "success",
            code: 200,
            message: "Kayıt Görüntülendi",
            data: note,
        });
    })
}

// not güncelleme fonksiyonu
exports.update = function (req, res) {
    Note.findById(req.params.id, function (err, note) {

        if (err) {
            res.json({
                status: "err",
                code: 500,
                message: err,
            })
        };
        note.title = req.body.title;
        note.detail = req.body.detail;
        note.save(function (err) {
            if (err) {
                res.json({
                    status: "err",
                    code: 500,
                    message: err,
                })
            }
            
        })
        res.json({
            status: "success",
            code: 200,
            message: "Kayıt Güncellendi",
            data: note,
        });
    })
}


// not silme fonksiyonu
exports.delete = function (req, res) {
    Note.remove({
        _id: req.params.id
    },
        function (err) {
            if (err) {
                res.json({
                    status: "err",
                    code: 500,
                    message: err,
                })
            }
            
        })
        res.json({
            status: "success",
            code: 200,
            message: "Kayıt Silindi"
        });
}