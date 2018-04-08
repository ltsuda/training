# AUTOMATE PACKAGES INSTALLATION ON LINUX
## SHELL SCRIPT AND ANSIBLE TOOLS

### Tested on Virtualbox Machines:
- Ubuntu 16.04
- CentOS 7
- Fedora 27

#### Steps to run:

` git clone https://github.com/ltsuda/training.git `

` cd /training/ansible/machine-setup `
- Centos:

` sudo ./site.yml -i inventory -K `

- Ubuntu / Fedora:

` ./site.yml -i inventory -K `

**NOTE:**

` -K --ask-become-pass # ask for privilege escalation password `
