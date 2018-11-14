# -*- coding: utf-8 -*-
from odoo import http

# class Toyota(http.Controller):
#     @http.route('/toyota/toyota/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/toyota/toyota/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('toyota.listing', {
#             'root': '/toyota/toyota',
#             'objects': http.request.env['toyota.toyota'].search([]),
#         })

#     @http.route('/toyota/toyota/objects/<model("toyota.toyota"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('toyota.object', {
#             'object': obj
#         })