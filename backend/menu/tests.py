from django.test import TestCase, Client
from django.urls import reverse, resolve
from django.contrib.auth.models import User
from core.urls import check_auth

class UrlsTestCase(TestCase):
    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.superuser = User.objects.create_superuser(username='admin', password='adminpassword', email='admin@test.com')

    def test_check_auth_url_resolves(self):
        """Test that /api/auth/check/ url resolves to check_auth view"""
        url = reverse('check_auth')
        self.assertEqual(resolve(url).func, check_auth)

    def test_check_auth_unauthenticated(self):
        """Test check_auth view for unauthenticated user"""
        url = reverse('check_auth')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['is_authenticated'], False)
        self.assertEqual(response.data['is_superuser'], False)

    def test_check_auth_authenticated(self):
        """Test check_auth view for authenticated normal user"""
        self.client.login(username='testuser', password='testpassword')
        url = reverse('check_auth')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['is_authenticated'], True)
        self.assertEqual(response.data['is_superuser'], False)

    def test_check_auth_superuser(self):
        """Test check_auth view for authenticated superuser"""
        self.client.login(username='admin', password='adminpassword')
        url = reverse('check_auth')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['is_authenticated'], True)
        self.assertEqual(response.data['is_superuser'], True)

    def test_router_urls_exist(self):
        """Test that router urls are properly registered and return at least a response (e.g., 200 OK or list)"""
        endpoints = [
            '/api/hero/',
            '/api/gallery/',
            '/api/categories/',
            '/api/dishes/',
            '/api/corporate/',
            '/api/contact/'
        ]
        for endpoint in endpoints:
            response = self.client.get(endpoint)
            # We expect either 200 (if list view is public) or some other status, 
            # but definitely not 404 since the route should exist.
            self.assertNotEqual(response.status_code, 404, f"URL {endpoint} is not found (404)")
