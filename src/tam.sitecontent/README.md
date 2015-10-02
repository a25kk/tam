# tam.sitecontent

## Site specific contenttypes

* `Source code @ GitHub <https://github.com/potzenheimer/tam.sitecontent>`_
* `Releases @ PyPI <http://pypi.python.org/pypi/tam.sitecontent>`_
* `Documentation @ ReadTheDocs <http://tamsitecontent.readthedocs.org>`_
* `Continuous Integration @ Travis-CI <http://travis-ci.org/potzenheimer/tam.sitecontent>`_

## How it works

This package provides a Plone addon as an installable Python egg package.

The generated Python package holds an example content type `ContentPage` which
provides a folderish version of the default **Page** document type.

The implementation is kept simple on purpose and asumes that the developer will
add further content manually.


## Installation

To install `tam.sitecontent` you simply add ``tam.sitecontent``
to the list of eggs in your buildout, run buildout and restart Plone.
Then, install `tam.sitecontent` using the Add-ons control panel.
