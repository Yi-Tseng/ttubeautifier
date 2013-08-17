# -*- encoding: utf-8 -*-

import requests
from lxml import etree
from os.path import exists
import uniout
cache_path = 'cache.html'

text = requests.get('http://stucis.ttu.edu.tw/menu/stdgov.php').text

tree = etree.HTML(text)

ths = tree.xpath('//th')
for th in ths:
	print "{name:'%s', link:'%s'}, " % (th.text, 'th')

as_ = tree.xpath('//a')

for a in as_:
	print "{name:'%s', link:'%s'}, " % (a.text, a.get('href'))


# lnk

