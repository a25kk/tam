# -*- coding: utf-8 -*-
"""Setup/installation tests for this package."""

from tam.sitecontent.testing import IntegrationTestCase
from plone import api


class TestInstall(IntegrationTestCase):
    """Test installation of tam.sitecontent into Plone."""

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if tam.sitecontent is installed with portal_quickinstaller."""
        self.assertTrue(self.installer.isProductInstalled('tam.sitecontent'))

    def test_uninstall(self):
        """Test if tam.sitecontent is cleanly uninstalled."""
        self.installer.uninstallProducts(['tam.sitecontent'])
        self.assertFalse(self.installer.isProductInstalled('tam.sitecontent'))

    # browserlayer.xml
    def test_browserlayer(self):
        """Test that ITamSitecontentLayer is registered."""
        from tam.sitecontent.interfaces import ITamSitecontentLayer
        from plone.browserlayer import utils
        self.failUnless(ItamSitecontentLayer in utils.registered_layers())
