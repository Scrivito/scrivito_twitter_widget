$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "scrivito_twitter_widget/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |gem|
  gem.platform    = Gem::Platform::RUBY
  gem.name        = "scrivito_twitter_widget"
  gem.version     = ScrivitoTwitterWidget::VERSION
  gem.authors     = ["Scrivito"]
  gem.email       = ["support@scrivito.com"]
  gem.homepage    = "https://www.scrivito.com"
  gem.summary     = "A widget for scrivito to create a twitter stream."
  gem.description = "A widget for scrivito to create a twitter stream."
  gem.license     = "LGPL-3.0"

  gem.files = Dir[
    "{app,lib}/**/*",
    "LICENSE",
    "Rakefile",
    "README.md"
  ]

  gem.add_dependency 'scrivito'
end
