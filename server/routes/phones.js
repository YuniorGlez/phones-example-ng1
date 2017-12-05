var express = require('express');
var fs = require('fs');
var datafile = 'server/data/phones.json';
var router = express.Router();

/* GET all books and POST new books */
router.route('/')
    .get(function (req, res) {
        var data = getPhonesData();
        res.send(data);
    })

    .post(function (req, res) {

        var data = getPhonesData();
        var id = getNextAvailableID(data);

        var newPhone = {
            id: id,
            name: req.body.name,
            email: req.body.email,
            photo: req.body.photo,
            phone: req.body.phone,
            description: req.body.description
        };

        data.push(newPhone);

        savePhonesData(data);

        //        res.set('Content-Type', 'application/json');
        res.status(201).send(newPhone);
    });


/* GET, PUT and DELETE individual books */
router.route('/:id')

    .get(function (req, res) {

        //console.log('Retrieving book id: ' + req.params.id);

        var data = getPhonesData();

        var matchingPhones = data.filter(function (phone) {
            return phone.id == req.params.id;
        });

        if (matchingPhones.length === 0) {
            res.sendStatus(404);
        } else {
            if (req.query.slow) {
                setTimeout(() => {
                    res.send(matchingPhones[0]);
                }, 3000);
            } else {
                res.send(matchingPhones[0]);
            }
        }
    })

    .delete(function (req, res) {

        var data = getPhonesData();

        var pos = data.map(function (e) {
            return e.id;
        }).indexOf(parseInt(req.params.id, 10));

        if (pos > -1) {
            data.splice(pos, 1);
        } else {
            res.sendStatus(404);
        }

        savePhonesData(data);
        res.sendStatus(204);

    })

    .put(function (req, res) {

        var data = getPhonesData();

        var matchingPhones = data.filter(function (phone) {
            return phone.id == req.params.id;
        });

        if (matchingPhones.length === 0) {
            res.sendStatus(404);
        } else {
            var phoneToUpdate = matchingPhones[0];
            phoneToUpdate.name = req.body.name;
            phoneToUpdate.email = req.body.email;
            phoneToUpdate.photo = req.body.photo;
            phoneToUpdate.phone = req.body.phone;
            phoneToUpdate.description = req.body.description;
            savePhonesData(data);
            res.sendStatus(204);
        }
    });

function getNextAvailableID(allBooks) {
    var maxID = 0;
    allBooks.forEach(function (element, index, array) {
        if (element.id > maxID) maxID = element.id;
    });
    return (maxID + 1);
}

function getPhonesData() {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
}

function savePhonesData(data) {
    fs.writeFile(datafile, JSON.stringify(data, null, 4), function (err) {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = router;