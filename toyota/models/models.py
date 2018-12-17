# -*- coding: utf-8 -*-

from odoo import models, fields, api

class CarDealership(models.Model):
    _name = 'toyota.cardealership'

    direction = fields.Char()
    telephone = fields.Char()

class Users(models.Model):
    _name = 'toyota.users'

    name = fields.Char()
    surname = fields.Char()
    age = fields.Integer()
    telephone = fields.Char()
    email = fields.Char()
    username = fields.Char()
    password = fields.Char()
    car_dealership_id = fields.Many2one('toyota.cardealership', string="Car Dealership")

class Suppliers(models.Model):
    _name = 'toyota.suppliers'

    nif = fields.Char()
    name = fields.Char()
    direction = fields.Char()
    telephone = fields.Char()
    models_ids = fields.Many2many('toyota.models')
    accessories_ids = fields.Many2many('toyota.accessories')
    spares_ids = fields.Many2many('toyota.spares')

class Models(models.Model):
    _name = 'toyota.models'

    name = fields.Char()
    power = fields.Integer()
    fuel = fields.Char()
    price = fields.Float()
    car_dealership_id = fields.Many2one('toyota.cardealership', string="Car Dealership")
    suppliers_ids = fields.Many2many('toyota.suppliers')

class Accessories(models.Model):
    _name = 'toyota.accessories'

    category = fields.Char()
    name = fields.Char()
    car_dealership_id = fields.Many2one('toyota.cardealership', string="Car Dealership")
    suppliers_ids = fields.Many2many('toyota.suppliers')

class Spares(models.Model):
    _name = 'toyota.spares'

    category = fields.Char()
    name = fields.Char()
    reference = fields.Char()
    car_dealership_id = fields.Many2one('toyota.cardealership', string="Car Dealership")
    suppliers_ids = fields.Many2many('toyota.suppliers')

class FutureModels(models.Model):
    _name = 'toyota.futuremodels'

    name = fields.Char()
    description = fields.Text()
    car_dealership_id = fields.Many2one('toyota.cardealership', string="Car Dealership")
    image = fields.Binary(string = "Image")

class MythicalModels(models.Model):
    _name = 'toyota.mythicalmodels'

    name = fields.Char()
    description = fields.Text()
    car_dealership_id = fields.Many2one('toyota.cardealership', string="Car Dealership")
    image = fields.Binary(string = "Image")


class Roles(models.Model):
    _name = 'toyota.roles'

    role = fields.Char()
    user_id = fields.Many2one('toyota.users', string="User")