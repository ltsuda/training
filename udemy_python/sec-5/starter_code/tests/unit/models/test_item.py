from unittest import TestCase
from models.item import ItemModel


class ItemTest(TestCase):
    def test_create_item(self):
        item = ItemModel('test', 20.00)
        self.assertEqual(item.name, 'test')
        self.assertEqual(item.price, 20.00)

    def test_item_json(self):
        item = ItemModel('test', 25.00)
        expected = {
            'name': 'test',
            'price': 25.00
        }
        self.assertEqual(item.json(), expected, "The JSON export of the item is incorrect")
