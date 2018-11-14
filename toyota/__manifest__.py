# -*- coding: utf-8 -*-
{
    'name': "Toyota",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "Beatriz Calle Henríquez",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/odoo/addons/base/module/module_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/carDealership.xml',
        'views/users.xml',
        'views/roles.xml',
        'views/suppliers.xml',
        'views/models.xml',
        'views/accessories.xml',
        'views/spares.xml',
        'views/futureModels.xml',
        'views/mythicalModels.xml',
        'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}