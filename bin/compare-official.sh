#!/bin/bash

bundle exec ruby comparisons/official/scraper.rb | ifne tee comparisons/official/scraped.csv
wd sparql -f csv comparisons/official/wikidata.js |
  sed -e 's/T00:00:00Z//g' -e 's#http://www.wikidata.org/entity/##g' |
  qsv dedup -s psid |
  ifne tee comparisons/official/wikidata.csv
bundle exec ruby comparisons/official/diff.rb | tee comparisons/official/diff.csv
