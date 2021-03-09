# Current Tech Symposium Website
https://calpolyswift.gitlab.io/tech_symposium_website

# Original Tech Symposium Website
https://techsymposium.calpolyswift.org

Current website converted over to using Jekyll.

# What is Jekyll

Jekyll is a Ruby Gem that can be installed on most systems.

# What is a Gem

[https://jekyllrb.com/docs/ruby-101/#gems](https://jekyllrb.com/docs/ruby-101/#gems)

# Install Prerequisites

[https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

- using "Installation via RubyInstaller" - [https://rubyinstaller.org/](https://rubyinstaller.org/)
1. Download and install a **Ruby+Devkit** version from [RubyInstaller Downloads](https://rubyinstaller.org/downloads/). Use default options for installation.
2. Run the `ridk install` step on the last stage of the installation wizard. This is needed for installing gems with native extensions. You can find additional information regarding this in the [RubyInstaller Documentation](https://github.com/oneclick/rubyinstaller2#using-the-installer-on-a-target-system)
3. Open a new command prompt window from the start menu, so that changes to the `PATH` environment variable becomes effective. Install Jekyll and Bundler using `gem install jekyll bundler`
4. Check if Jekyll has been installed properly: `jekyll -v`

# Install Jekyll

[https://jekyllrb.com/docs/](https://jekyllrb.com/docs/)

1. Install all [prerequisites](https://jekyllrb.com/docs/installation/).
2. Install the jekyll and bundler [gems](https://jekyllrb.com/docs/ruby-101/#gems).

    `gem install jekyll bundler`

3. Create a new Jekyll site at `./myblog`. (skip)

    `jekyll new myblog`

4. Change into your new directory.

    `cd myblog`

5. Build the site and make it available on a local server.

    `bundle exec jekyll serve` or `jekyll serve`

6. Browse to [http://localhost:4000](http://localhost:4000/)

# Testing

- `jekyll serve` will run at [http://127.0.0.1:4000/](http://127.0.0.1:4000/)
    - you will have to manually refresh page for every change you make

# Deploying

## .gitlab-ci.yml

The .gitlab-ci.yml file is a YAML file that you create on your project’s root. This file automatically runs whenever you push a commit to the server.
