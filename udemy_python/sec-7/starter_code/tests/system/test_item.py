from models.item import ItemModel
from models.store import StoreModel
from models.user import UserModel
from tests.base_test import BaseTest
import json


class ItemTest(BaseTest):
    def setUp(self):
        super(ItemTest, self).setUp()
        with self.app() as client:
            with self.app_context():
                UserModel('test', '1234').save_to_db()
                auth_req = client.post('/auth', data=json.dumps({'username': 'test', 'password': '1234'}),
                                       headers={'Content-Type': 'application/json'})
                auth_token = json.loads(auth_req.data)['access_token']
                self.access_token = f'JWT {auth_token}'

    def test_getItem_no_auth(self):
        with self.app() as client:
            with self.app_context():
                resp = client.get('/item/test')
                self.assertEqual(resp.status_code, 401)

    def test_getItem_not_found(self):
        with self.app() as client:
            with self.app_context():
                resp = client.get('/item/test', headers={'Authorization': self.access_token})
                self.assertEqual(resp.status_code, 404)

    def test_getItem(self):
        with self.app() as client:
            with self.app_context():
                StoreModel('test').save_to_db()
                ItemModel('test', 20.00, 1).save_to_db()
                resp = client.get('/item/test', headers={'Authorization': self.access_token})
                self.assertEqual(resp.status_code, 200)

    def test_delete_item(self):
        with self.app() as client:
            with self.app_context():
                StoreModel('test').save_to_db()
                ItemModel('test', 20.00, 1).save_to_db()
                resp = client.delete('/item/test')
                self.assertEqual(resp.status_code, 200)
                self.assertDictEqual({'message': 'Item deleted'}, json.loads(resp.data))

    def test_create_item(self):
        with self.app() as client:
            with self.app_context():
                StoreModel('test').save_to_db()
                resp = client.post('/item/test', data={'price': 12.94, 'store_id': 1})
                self.assertEqual(resp.status_code, 201)
                self.assertDictEqual({'name': 'test', 'price': 12.94}, json.loads(resp.data))

    def test_create_duplicate_item(self):
        with self.app() as client:
            with self.app_context():
                StoreModel('test').save_to_db()
                ItemModel('test', 12.94, 1).save_to_db()
                resp = client.post('/item/test', data={'price': 12.94, 'store_id': 1})
                self.assertEqual(resp.status_code, 400)
                self.assertDictEqual({'message': 'An item with name \'test\' already exists.'}, json.loads(resp.data))

    def test_put_item(self):
        with self.app() as client:
            with self.app_context():
                StoreModel('test').save_to_db()
                resp = client.put('/item/test', data={'price': 12.55, 'store_id': 1})
                self.assertEqual(resp.status_code, 200)
                self.assertEqual(ItemModel.find_by_name('test').price, 12.55)
                self.assertDictEqual({'name': 'test', 'price': 12.55}, json.loads(resp.data))

    def test_put_update_item(self):
        with self.app() as client:
            pass
            with self.app_context():
                StoreModel('test').save_to_db()
                ItemModel('test', 15.00, 1).save_to_db()
                self.assertEqual(ItemModel.find_by_name('test').price, 15.00)
                resp = client.put('/item/test', data={'price': 12.55, 'store_id': 1})
                self.assertEqual(resp.status_code, 200)
                self.assertEqual(ItemModel.find_by_name('test').price, 12.55)
                self.assertDictEqual({'name': 'test', 'price': 12.55}, json.loads(resp.data))

    def test_item_list(self):
        with self.app() as client:
            with self.app_context():
                StoreModel('test').save_to_db()
                ItemModel('test', 15.00, 1).save_to_db()
                resp = client.get('/items')
                self.assertDictEqual({'items': [{'name': 'test', 'price': 15.00}]},
                                     json.loads(resp.data))
