# -*- coding: utf-8 -*-
"""Setup/installation tests for this package."""

from tam.buildout.testing import IntegrationTestCase
from plone import api


class TestInstall(IntegrationTestCase):
    """Test installation of tam.buildout into Plone."""

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if tam.buildout is installed with portal_quickinstaller."""
        self.assertTrue(self.installer.isProductInstalled('tam.buildout'))

    def test_uninstall(self):
        """Test if tam.buildout is cleanly uninstalled."""
        self.installer.uninstallProducts(['tam.buildout'])
        self.assertFalse(self.installer.isProductInstalled('tam.buildout'))

    # browserlayer.xml
    def test_browserlayer(self):
        """Test that ITamBuildoutLayer is registered."""
        from tam.buildout.interfaces import ITamBuildoutLayer
        from plone.browserlayer import utils
        self.failUnless(ITamBuildoutLayer in utils.registered_layers())
