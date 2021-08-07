#!/bin/env ruby
# frozen_string_literal: true

require 'every_politician_scraper/scraper_data'
require 'pry'

class MemberList
  class Member
    def name
      noko.css('.ministre-nom').text.tidy
    end

    def position
      noko.css('.ministre-fonction').text.gsub(/, attached to.*/, '').tidy
    end
  end

  class Members
    def members
      super.uniq
    end

    def member_container
      noko.css('.wrapper-nom-fonction')
    end
  end
end

file = Pathname.new 'html/official.html'
puts EveryPoliticianScraper::FileData.new(file).csv
