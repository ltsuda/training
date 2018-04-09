# AUTOMATE PACKAGES INSTALLATION ON LINUX
## SHELL SCRIPT AND ANSIBLE TOOLS

### Tested on Virtualbox Machines:
- Ubuntu 16.04
- CentOS 7
- Fedora 27

#### Steps to run:

` git clone https://github.com/ltsuda/training.git `

Make sure site.yml and /wrapper/playbookwrapper.sh has Execution permission '-x'

` ./site.yml -i inventory -K `

**NOTE:**

` -K --ask-become-pass # ask for privilege escalation password `
