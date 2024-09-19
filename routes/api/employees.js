const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController'); // remeber we aslo destructure this import and can have each individual handlers right here*****

router.route('/')
    .get(employeesController.getAllEmployees);
    .post(employeesController.createNewEmployee);
    .put(employeesController.updateEmployee);
    .delete(employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;














